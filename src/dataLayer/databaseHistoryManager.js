const {DatabasePartitionedCursor} = require('./databasePartitionedCursor');
const {assertTypeEquals} = require('../utils/assertType');
const {ResourceLocatorFactory} = require('../operations/common/resourceLocatorFactory');

/**
 * This class provides access to _History collections
 */
class DatabaseHistoryManager {
    /**
     * Constructor
     * @param {ResourceLocatorFactory} resourceLocatorFactory
     * @param {string} resourceType
     * @param {string} base_version
     * @param {boolean} useAtlas
     */
    constructor(
        {
            resourceLocatorFactory,
            resourceType,
            base_version,
            useAtlas
        }
    ) {
        /**
         * @type {ResourceLocatorFactory}
         */
        this.resourceLocatorFactory = resourceLocatorFactory;
        assertTypeEquals(resourceLocatorFactory, ResourceLocatorFactory);
        /**
         * @type {string}
         * @private
         */
        this._resourceType = resourceType;
        /**
         * @type {string}
         * @private
         */
        this._base_version = base_version;
        /**
         * @type {boolean}
         * @private
         */
        this._useAtlas = useAtlas;
        /**
         * @type {ResourceLocator}
         */
        this.resourceLocator = this.resourceLocatorFactory.createResourceLocator(
            {
                resourceType: this._resourceType,
                base_version: this._base_version,
                useAtlas: this._useAtlas
            }
        );
    }

    /**
     * Inserts a single resource
     * @param {Resource} doc
     * @return {Promise<void>}
     */
    async insertOneAsync({doc}) {
        const collection = await this.resourceLocator.getOrCreateHistoryCollectionAsync(doc);
        await collection.insertOne(doc);
    }

    /**
     * Finds one resource by looking in multiple partitions of a resource type
     * @param {import('mongodb').FilterQuery<import('mongodb').DefaultSchema>} query
     * @param { import('mongodb').WithoutProjection<FindOneOptions<import('mongodb').DefaultSchema>> | null} options
     * @return {Promise<Resource|any>}
     */
    async findOneAsync({query, options = null}) {
        /**
         * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>[]}
         */
        const collections = await this.resourceLocator.getOrCreateHistoryCollectionsForQueryAsync();
        for (const /** @type import('mongodb').Collection<import('mongodb').DefaultSchema> */ collection of collections) {
            /**
             * @type { Promise<Resource|null>}
             */
            const resource = await collection.findOne(query, options);
            if (resource !== null) {
                return resource;
            }
        }
        return null;
    }

    /**
     * Returns a DatabasePartitionedCursor by executing the query
     * @param {import('mongodb').FilterQuery<import('mongodb').DefaultSchema>} query
     * @param {import('mongodb').WithoutProjection<import('mongodb').FindOptions<import('mongodb').DefaultSchema>> | null} options
     * @return {DatabasePartitionedCursor}
     */
    async findAsync({query, options = null}) {
        /**
         * @type {import('mongodb').Collection<import('mongodb').DefaultSchema>[]}
         */
        const collections = await this.resourceLocator.getOrCreateHistoryCollectionsForQueryAsync();
        /**
         * @type {import('mongodb').Cursor<import('mongodb').DefaultSchema>[]}
         */
        const cursors = [];
        for (const /** @type import('mongodb').Collection<import('mongodb').DefaultSchema> */ collection of collections) {
            /**
             * @type {import('mongodb').Cursor<import('mongodb').DefaultSchema>}
             */
            const cursor = collection.find(query, options);
            cursors.push(cursor);
        }
        return new DatabasePartitionedCursor({cursors});
    }
}

module.exports = {
    DatabaseHistoryManager
};
