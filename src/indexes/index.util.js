/**
 * This file implements code to index the mongo database and to list the current indexes
 */

const async = require('async');
const env = require('var');

const {customIndexes} = require('./customIndexes');
const {createClientAsync, disconnectClientAsync} = require('../utils/connect');
const {CLIENT_DB} = require('../constants');
const {mongoConfig} = require('../config');
const {logSystemEventAsync, logSystemErrorAsync} = require('../operations/common/logging');
const {ErrorReporter} = require('../utils/slack.logger');
const {assertTypeEquals} = require('../utils/assertType');

/**
 * Manages indexes
 */
class IndexManager {
    /**
     * constructor
     * @param {ErrorReporter} errorReporter
     */
    constructor({errorReporter}) {
        assertTypeEquals(errorReporter, ErrorReporter);
        /**
         * @type {ErrorReporter}
         */
        this.errorReporter = errorReporter;
    }

    /**
     * creates a multi key index if it does not exist
     * @param {import('mongodb').Db} db
     * @param {string[]} properties_to_index
     * @param {string} collection_name
     * @param {string?} index_name
     * @return {Promise<boolean>}
     */
    async create_index_if_not_exists(db, properties_to_index, collection_name, index_name) {
        // from https://docs.aws.amazon.com/documentdb/latest/developerguide/limits.html#limits.naming
        // Index name: <col>$<index> :	 Length is [3–63] characters.
        // total length combines both collection name and index name
        const mex_fully_qualified_index_name_length = (env.MAX_FULLY_QUALIFIED_INDEX_NAME_LENGTH ? parseInt(env.MAX_FULLY_QUALIFIED_INDEX_NAME_LENGTH) : 127) - collection_name.length - 1;
        let mex_index_name_length = (env.MAX_INDEX_NAME_LENGTH ? parseInt(env.MAX_INDEX_NAME_LENGTH) : 63);
        mex_index_name_length = Math.min(mex_index_name_length, mex_fully_qualified_index_name_length);
        index_name = index_name.slice(0, mex_index_name_length - 1) || (properties_to_index.join('_1_') + '_1').slice(0, mex_index_name_length - 1);
        const columns = properties_to_index.join(',');
        try {
            if (!await db.collection(collection_name).indexExists(index_name)) {
                const message = 'Creating index ' + index_name + ' with columns: [' + columns + ']' + ' in ' + collection_name;
                await logSystemEventAsync(
                    {
                        event: 'createIndex',
                        message,
                        args: {
                            index: index_name,
                            columns: columns,
                            collection: collection_name
                        }
                    }
                );
                await this.errorReporter.reportMessageAsync({source: 'createIndex', message: message});
                const my_dict = {};
                for (const property_to_index of properties_to_index) {
                    my_dict[String(property_to_index)] = 1;
                }
                await db.collection(collection_name).createIndex(my_dict, {name: index_name});
                return true;
            }
        } catch (e) {
            const message1 = 'Error creating index: ' + index_name + ' for collection ' + collection_name + ': ' + JSON.stringify(e);
            await logSystemErrorAsync(
                {
                    event: 'createIndex', message: message1, args: {
                        index: index_name,
                        columns: columns,
                        collection: collection_name
                    },
                    error: e
                }
            );
            await this.errorReporter.reportMessageAsync({source: 'createIndex', message: message1});
        }
        return false;
    }

    /**
     * creates indexes on a collection
     * @param {string} collection_name
     * @param {import('mongodb').Db} db
     * @return {Promise<{indexes: *, createdIndex: boolean, name, count: *}>}
     */
    async indexCollectionAsync(collection_name, db) {
        // check if index exists
        let createdIndex = false;

        // now add custom indices
        for (const [collection, indexesArray] of Object.entries(customIndexes)) {
            if (collection === '*') {
                for (const indexDefinition of indexesArray) {
                    for (const [indexName, indexColumns] of Object.entries(indexDefinition)) {
                        createdIndex = await this.create_index_if_not_exists(db, indexColumns, collection_name, indexName) || createdIndex;
                    }
                }
            }
        }

        for (const [collection, indexesArray] of Object.entries(customIndexes)) {
            if (collection_name.startsWith(collection)) {
                for (const indexDefinition of indexesArray) {
                    for (const [indexName, indexColumns] of Object.entries(indexDefinition)) {
                        createdIndex = await this.create_index_if_not_exists(db, indexColumns, collection_name, indexName) || createdIndex;
                    }
                }
            }
        }

        const indexes = await db.collection(collection_name).indexes();
        return {
            name: collection_name,
            createdIndex: createdIndex,
            indexes: indexes
        };
    }

    /**
     * Indexes all the collections
     * @param {string?} tableName
     * @return {Promise<*>}
     */
    async indexAllCollectionsAsync(tableName) {
        /**
         * @type {import('mongodb').MongoClient}
         */
        const client = await createClientAsync(mongoConfig);
        try {
            /**
             * @type {import('mongodb').Db}
             */
            const db = client.db(CLIENT_DB);
            let collection_names = [];
            // const collections = await db.listCollections().toArray();

            /**
             * @type {import('mongodb').CommandCursor}
             */
            const commandCursor = db.listCollections();
            await commandCursor.forEach(collection => {
                if (collection.name.indexOf('system.') === -1) {
                    collection_names.push(collection.name);
                }
            });

            if (tableName) {
                collection_names = collection_names.filter(c => c === tableName);
            }
            // now add indices on id column for every collection
            return async.map(
                collection_names,
                async collection_name => await this.indexCollectionAsync(collection_name, db)
            );
        } finally {
            await disconnectClientAsync(client);
        }
    }

    /**
     * Gets the current indexes on the specified collection
     * @param {string} collection_name
     * @param {import('mongodb').Db} db
     * @return {Promise<{indexes: *, name}>}
     */
    async getIndexesInCollectionAsync(collection_name, db) {
        // check if index exists
        const indexes = await db.collection(collection_name).indexes();
        return {
            name: collection_name,
            indexes: indexes
        };
    }

    /**
     * Deletes the current indexes on the specified collection
     * @param {string} collection_name
     * @param {import('mongodb').Db} db
     * @return {Promise<{indexes: *, name}>}
     */
    async deleteIndexesInCollectionAsync(collection_name, db) {
        await db.collection(collection_name).dropIndexes();
    }

    /**
     * Gets indexes on all the collections
     * @return {Promise<*>}
     */
    async getIndexesInAllCollectionsAsync() {
        /**
         * @type {import('mongodb').MongoClient}
         */
        const client = await createClientAsync(mongoConfig);
        try {
            /**
             * @type {import('mongodb').Db}
             */
            const db = client.db(CLIENT_DB);
            const collection_names = [];
            // const collections = await db.listCollections().toArray();

            for await (const collection of db.listCollections()) {
                if (collection.name.indexOf('system.') === -1) {
                    collection_names.push(collection.name);
                }
            }
            // now add indices on id column for every collection
            return await async.map(
                collection_names,
                async collection_name => await this.getIndexesInCollectionAsync(collection_name, db)
            );
        } finally {
            await disconnectClientAsync(client);
        }
    }

    /**
     * Delete indexes on all the collections
     * @param {string?} tableName
     * @return {Promise<*>}
     */
    async deleteIndexesInAllCollectionsAsync(tableName) {
        /**
         * @type {import('mongodb').MongoClient}
         */
        const client = await createClientAsync(mongoConfig);
        try {
            /**
             * @type {import('mongodb').Db}
             */
            const db = client.db(CLIENT_DB);
            let collection_names = [];

            for await (const collection of db.listCollections()) {
                if (collection.name.indexOf('system.') === -1) {
                    collection_names.push(collection.name);
                }
            }

            if (tableName) {
                collection_names = collection_names.filter(c => c === tableName);
            }

            for await (const collection_name of collection_names) {
                console.log(JSON.stringify({message: 'Deleting all indexes in ' + collection_name}));
                await this.deleteIndexesInCollectionAsync(collection_name, db);
            }

            console.log(JSON.stringify({message: 'Finished deleteIndexesInAllCollections'}));
        } finally {
            await disconnectClientAsync(client);
        }
    }
}

module.exports = {
    IndexManager
};
