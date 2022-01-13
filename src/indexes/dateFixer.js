const asyncHandler = require('../lib/async-handler');
const mongoClient = require('../lib/mongo');
const {mongoConfig} = require('../config');
const async = require('async');
const {logMessageToSlack} = require('../utils/slack.logger');


const fixLastUpdatedDates = async (collection_name, db) => {
    let message = `Fixing lastUpdatedDate in ${collection_name}`;
    console.log(message);
    await logMessageToSlack(message);

    const collection = db.collection(collection_name);
    await collection.find().forEach(element => {
        element.meta.lastUpdated = new Date(element.meta.lastUpdated);
        collection.save(element);
    });

    message = `Finished fixing lastUpdatedDate in ${collection_name}`;
    console.log(message);
    await logMessageToSlack(message);

};

const fixLastUpdatedDatesInAllCollections = async () => {
    // eslint-disable-next-line no-unused-vars
    let [mongoError, client] = await asyncHandler(
        mongoClient(mongoConfig.connection, mongoConfig.options)
    );

    if (mongoError) {
        console.error(mongoError.message);
        console.error(mongoConfig.connection);
        await client.close();
        throw new Error(mongoError.message);
    }
    //create client by providing database name
    const db = client.db(mongoConfig.db_name);
    const collection_names = [];
    // const collections = await db.listCollections().toArray();

    await db.listCollections().forEach(collection => {
        if (collection.name.indexOf('system.') === -1) {
            collection_names.push(collection.name);
        }
    });

    // now add indices on id column for every collection
    await async.map(
        collection_names,
        async collection_name => await fixLastUpdatedDates(collection_name, db)
    );

    await client.close();
};

module.exports = {
    fixLastUpdatedDatesInAllCollections: fixLastUpdatedDatesInAllCollections
};
