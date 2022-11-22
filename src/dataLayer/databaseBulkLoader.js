const {groupByLambda, getFirstResourceOrNull} = require('../utils/list.util');
const async = require('async');
const {DatabaseQueryFactory} = require('./databaseQueryFactory');
const {assertTypeEquals} = require('../utils/assertType');
const {RethrownError} = require('../utils/rethrownError');
const {databaseBulkLoaderTimer} = require('../utils/prometheus.utils');
const {RequestSpecificCache} = require('../utils/requestSpecificCache');

/**
 * This class loads data from Mongo into memory and allows updates to this cache
 */
class DatabaseBulkLoader {
    /**
     * Constructor
     * @param {DatabaseQueryFactory} databaseQueryFactory
     * @param {RequestSpecificCache} requestSpecificCache
     */
    constructor({
                    databaseQueryFactory,
                    requestSpecificCache
                }) {
        /**
         * @type {RequestSpecificCache}
         */
        this.requestSpecificCache = requestSpecificCache;
        assertTypeEquals(requestSpecificCache, RequestSpecificCache);
        /**
         * @type {DatabaseQueryFactory}
         */
        this.databaseQueryFactory = databaseQueryFactory;
        assertTypeEquals(databaseQueryFactory, DatabaseQueryFactory);

        this.cacheName = 'bulkLoaderCache';
    }

    /**
     * Finds all documents with the specified resource type and ids
     * @param {string} requestId
     * @param {string} base_version
     * @param {Resource[]} requestedResources
     * @returns {Promise<{resources: Resource[], resourceType: string}[]>}
     */
    async loadResourcesAsync({requestId, base_version, requestedResources}) {
        try {
            /**
             * merge results grouped by resourceType
             * @type {Object}
             */
            const groupByResourceType = groupByLambda(requestedResources, requestedResource => {
                return requestedResource.resourceType;
            });

            /**
             * Load all specified resource groups in async
             * @type {{resources: Resource[], resourceType: string}[]}
             */
            const result = await async.map(
                Object.entries(groupByResourceType),
                async x => await this.getResourcesAsync(
                    {
                        requestId,
                        base_version,
                        resourceType: x[0],
                        resources: x[1]
                    }
                )
            );
            const bulkCache = this.requestSpecificCache.getMap({requestId, name: this.cacheName});
            // Now add them to our cache
            for (const {resourceType, resources} of result) {
                bulkCache.set(resourceType, resources);
            }
            return result;
        } catch (e) {
            throw new RethrownError({
                error: e
            });
        }
    }

    /**
     * Get resources by id for this resourceType
     * @param {string} requestId
     * @param {string} base_version
     * @param {string} resourceType
     * @param {Resource[]} resources
     * @returns {Promise<{resources: Resource[], resourceType: string}>}
     */
    // eslint-disable-next-line no-unused-vars
    async getResourcesAsync({requestId, base_version, resourceType, resources}) {
        // Start the FHIR request timer, saving a reference to the returned method
        const timer = databaseBulkLoaderTimer.startTimer();
        try {
            const databaseQueryManager = this.databaseQueryFactory.createQuery(
                {resourceType, base_version}
            );
            /**
             * cursor
             * @type {DatabasePartitionedCursor}
             */
            const cursor = await databaseQueryManager.findResourcesInDatabaseAsync({resources});

            /**
             * @type {Resource[]}
             */
            const foundResources = await this.cursorToResourcesAsync({cursor});
            return {resourceType, resources: foundResources};
        } catch (e) {
            throw new RethrownError({
                error: e
            });
        } finally {
            timer({resourceType});
        }
    }

    /**
     * Reads resources from cursor
     * @param {DatabasePartitionedCursor} cursor
     * @returns {Promise<Resource[]>}
     */
    async cursorToResourcesAsync({cursor}) {
        try {
            /**
             * @type {Resource[]}
             */
            const result = [];
            while (await cursor.hasNext()) {
                /**
                 * element
                 * @type {Resource|null}
                 */
                const resource = await cursor.next();
                result.push(resource);
            }
            return result;
        } catch (e) {
            throw new RethrownError({
                error: e
            });
        }
    }

    /**
     * gets resources from list
     * @param {string} requestId
     * @param {string} resourceType
     * @param {string} id
     * @return {null|Resource}
     */
    getResourceFromExistingList({requestId, resourceType, id}) {
        const bulkCache = this.requestSpecificCache.getMap({requestId, name: this.cacheName});
        // see if there is cache for this resourceType
        /**
         * @type {Resource[]}
         */
        const cacheEntryResources = bulkCache.get(resourceType);
        if (cacheEntryResources) {
            return getFirstResourceOrNull(
                cacheEntryResources.filter(e => e.id === id.toString())
            );
        } else {
            return null;
        }
    }

    /**
     * Adds a new resource to the cache
     * @param {string} requestId
     * @param {Resource} resource
     */
    addResourceToExistingList({requestId, resource}) {
        const bulkCache = this.requestSpecificCache.getMap({requestId, name: this.cacheName});
        /**
         * @type {Resource[]}
         */
        let cacheEntryResources = bulkCache.get(resource.resourceType);
        const resourceCopy = resource.clone(); // copy to avoid someone changing this object in the future
        if (cacheEntryResources) {
            // remove the resource with same id
            cacheEntryResources = cacheEntryResources.filter(c => c.id !== resource.id);
            cacheEntryResources.push(resourceCopy);
            bulkCache.set(resource.resourceType, cacheEntryResources);
        } else {
            bulkCache.set(resource.resourceType, [resourceCopy]);
        }
    }

    /**
     * Updates an existing resource in the cache
     * @param {string} requestId
     * @param {Resource} resource
     */
    updateResourceInExistingList({requestId, resource}) {
        const bulkCache = this.requestSpecificCache.getMap({requestId, name: this.cacheName});
        /**
         * @type {Resource[]}
         */
        let cacheEntryResources = bulkCache.get(resource.resourceType);
        const resourceCopy = resource.clone(); // copy to avoid someone changing this object in the future
        if (cacheEntryResources) {
            // remove the resource with same id
            cacheEntryResources = cacheEntryResources.filter(c => c.id !== resource.id);
            cacheEntryResources.push(resourceCopy);
            bulkCache.set(resource.resourceType, cacheEntryResources);
        } else {
            bulkCache.set(resource.resourceType, [resourceCopy]);
        }
    }
}

module.exports = {
    DatabaseBulkLoader
};
