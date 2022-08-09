const {logRequest, logDebug} = require('../common/logging');
const {
    parseScopes,
    verifyHasValidScopes
} = require('../security/scopes');
const moment = require('moment-timezone');
const {validateResource} = require('../../utils/validator.util');
const {mergeResourceListAsync} = require('./mergeResourceList');
const {isTrue} = require('../../utils/isTrue');
const env = require('var');
const {logAuditEntriesForMergeResults} = require('./logAuditEntriesForMergeResults');
const {preMergeChecksMultipleAsync} = require('./preMergeChecks');
const {DatabaseBulkInserter} = require('../../dataLayer/databaseBulkInserter');
const {DatabaseBulkLoader} = require('../../dataLayer/databaseBulkLoader');

/**
 * Add successful merges
 * @param {{id: string, resourceType: string}[]} incomingResourceTypeAndIds
 * @param {{id: string, resourceType: string}[]} idsInMergeResults
 * @return {MergeResultEntry[]}
 */
function addSuccessfulMergesToMergeResult(incomingResourceTypeAndIds, idsInMergeResults) {
    /**
     * @type {MergeResultEntry[]}
     */
    const mergeResults = [];
    for (const {resourceType, id} of incomingResourceTypeAndIds) {
        // if this resourceType,id is not in the merge results then add it as an unchanged entry
        if (idsInMergeResults.filter(i => i.id === id && i.resourceType === resourceType).length === 0) {
            /**
             * @type {MergeResultEntry}
             */
            const mergeResultItem = {
                id: id,
                resourceType: resourceType,
                created: false,
                updated: false,
            };
            mergeResults.push(mergeResultItem);
        }
    }
    return mergeResults;
}

/**
 * does a FHIR Merge
 * @param {import('../../utils/requestInfo').RequestInfo} requestInfo
 * @param {Object} args
 * @param {string} resourceType
 * @returns {Promise<MergeResultEntry[]> | Promise<MergeResultEntry>}
 */
module.exports.merge = async (requestInfo, args, resourceType) => {
    /**
     * @type {string|null}
     */
    const user = requestInfo.user;
    /**
     * @type {string}
     */
    const scope = requestInfo.scope;
    /**
     * @type {string|null}
     */
    const path = requestInfo.path;
    /**
     * @type {Object|Object[]|null}
     */
    const body = requestInfo.body;
    /**
     * @type {string}
     */
    logRequest(user, `'${resourceType} >>> merge` + ' scopes:' + scope);

    /**
     * @type {string[]}
     */
    const scopes = parseScopes(scope);

    verifyHasValidScopes(resourceType, 'write', user, scope);

    // read the incoming resource from request body
    /**
     * @type {Resource|Resource[]}
     */
    let resourcesIncoming = body;
    logDebug(user, JSON.stringify(args));
    /**
     * @type {string}
     */
    let {base_version} = args;

    // logDebug('--- request ----');
    // logDebug(req);
    // logDebug('-----------------');

    // Assign a random number to this batch request
    /**
     * @type {string}
     */
    const requestId = Math.random().toString(36).substring(0, 5);
    /**
     * @type {string}
     */
    const currentDate = moment.utc().format('YYYY-MM-DD');

    logDebug(user, '--- body ----');
    logDebug(user, JSON.stringify(resourcesIncoming));
    logDebug(user, '-----------------');


    // if the incoming request is a bundle then unwrap the bundle
    if ((!(Array.isArray(resourcesIncoming))) && resourcesIncoming['resourceType'] === 'Bundle') {
        logDebug(user, '--- validate schema of Bundle ----');
        const operationOutcome = validateResource(resourcesIncoming, 'Bundle', path);
        if (operationOutcome && operationOutcome.statusCode === 400) {
            return operationOutcome;
        }
        // unwrap the resources
        resourcesIncoming = resourcesIncoming.entry.map(e => e.resource);
    }

    /**
     * @type {DatabaseBulkInserter}
     */
    const databaseBulkInserter = new DatabaseBulkInserter(requestId, currentDate);
    /**
     * @type {boolean}
     */
    const useAtlas = isTrue(env.USE_ATLAS);
    /**
     * @type {boolean}
     */
    const wasIncomingAList = Array.isArray(resourcesIncoming);

    /**
     * @type {Resource[]}
     */
    let resourcesIncomingArray = wasIncomingAList ? resourcesIncoming : [resourcesIncoming];

    const {
        /** @type {MergeResultEntry[]} */ mergePreCheckErrors,
        /** @type {Resource[]} */ validResources
    } = await preMergeChecksMultipleAsync(resourcesIncomingArray,
        scopes, user, path, currentDate);

    // process only the resources that are valid
    resourcesIncomingArray = validResources;

    /**
     * @type {{id: string, resourceType: string}[]}
     */
    const incomingResourceTypeAndIds = resourcesIncomingArray.map(r => {
        return {resourceType: r.resourceType, id: r.id};
    });

    /**
     * @type {DatabaseBulkLoader}
     */
    const databaseBulkLoader = new DatabaseBulkLoader();
    // Load the resources from the database
    await databaseBulkLoader.loadResourcesByResourceTypeAndIdAsync(
        base_version,
        useAtlas,
        incomingResourceTypeAndIds
    );
    // merge the resources
    await mergeResourceListAsync(
        resourcesIncomingArray, user, resourceType, scopes, path, currentDate,
        requestId, base_version, scope, requestInfo, args,
        databaseBulkInserter, databaseBulkLoader
    );
    /**
     * mergeResults
     * @type {MergeResultEntry[]}
     */
    let mergeResults = await databaseBulkInserter.executeAsync(base_version, useAtlas);

    // add in any pre-merge failures
    mergeResults = mergeResults.concat(mergePreCheckErrors);

    // add in unchanged for ids that we did not merge
    const idsInMergeResults = mergeResults.map(r => {
        return {resourceType: r.resourceType, id: r.id};
    });
    mergeResults = mergeResults.concat(addSuccessfulMergesToMergeResult(incomingResourceTypeAndIds, idsInMergeResults));
    await logAuditEntriesForMergeResults(requestInfo, base_version, args, mergeResults);

    logDebug(user, '--- Merge result ----');
    logDebug(user, JSON.stringify(mergeResults));
    logDebug(user, '-----------------');

    return wasIncomingAList ? mergeResults : mergeResults[0];
};
