// noinspection ExceptionCaughtLocallyJS

const {BadRequestError, NotFoundError} = require('../../utils/httpErrors');
const {validate, applyPatch} = require('fast-json-patch');
const {getResource} = require('../common/getResource');
const moment = require('moment-timezone');
const {preSaveAsync} = require('../common/preSave');
const {isTrue} = require('../../utils/isTrue');
const env = require('var');
const {assertTypeEquals, assertIsValid} = require('../../utils/assertType');
const {DatabaseQueryFactory} = require('../../dataLayer/databaseQueryFactory');
const {DatabaseHistoryFactory} = require('../../dataLayer/databaseHistoryFactory');
const {ChangeEventProducer} = require('../../utils/changeEventProducer');
const {PostRequestProcessor} = require('../../utils/postRequestProcessor');
const {FhirLoggingManager} = require('../common/fhirLoggingManager');
const {ScopesValidator} = require('../security/scopesValidator');
const {omitPropertyFromResource} = require('../../utils/omitProperties');

class PatchOperation {
    /**
     * constructor
     * @param {DatabaseQueryFactory} databaseQueryFactory
     * @param {DatabaseHistoryFactory} databaseHistoryFactory
     * @param {ChangeEventProducer} changeEventProducer
     * @param {PostRequestProcessor} postRequestProcessor
     * @param {FhirLoggingManager} fhirLoggingManager
     * @param {ScopesValidator} scopesValidator
     */
    constructor(
        {
            databaseQueryFactory,
            databaseHistoryFactory,
            changeEventProducer,
            postRequestProcessor,
            fhirLoggingManager,
            scopesValidator
        }
    ) {
        /**
         * @type {DatabaseQueryFactory}
         */
        this.databaseQueryFactory = databaseQueryFactory;
        assertTypeEquals(databaseQueryFactory, DatabaseQueryFactory);
        /**
         * @type {DatabaseHistoryFactory}
         */
        this.databaseHistoryFactory = databaseHistoryFactory;
        assertTypeEquals(databaseHistoryFactory, DatabaseHistoryFactory);
        /**
         * @type {ChangeEventProducer}
         */
        this.changeEventProducer = changeEventProducer;
        assertTypeEquals(changeEventProducer, ChangeEventProducer);
        /**
         * @type {PostRequestProcessor}
         */
        this.postRequestProcessor = postRequestProcessor;
        assertTypeEquals(postRequestProcessor, PostRequestProcessor);
        /**
         * @type {FhirLoggingManager}
         */
        this.fhirLoggingManager = fhirLoggingManager;
        assertTypeEquals(fhirLoggingManager, FhirLoggingManager);
        /**
         * @type {ScopesValidator}
         */
        this.scopesValidator = scopesValidator;
        assertTypeEquals(scopesValidator, ScopesValidator);

    }

    /**
     * does a FHIR Patch
     * @param {FhirRequestInfo} requestInfo
     * @param {Object} args
     * @param {string} resourceType
     */
    async patch(requestInfo, args, resourceType) {
        assertIsValid(requestInfo !== undefined);
        assertIsValid(args !== undefined);
        assertIsValid(resourceType !== undefined);
        const currentOperationName = 'patch';
        const {requestId} = requestInfo;
        /**
         * @type {number}
         */
        const startTime = Date.now();

        await this.scopesValidator.verifyHasValidScopesAsync({
            requestInfo,
            args,
            resourceType,
            startTime,
            action: currentOperationName,
            accessRequested: 'read'
        });

        try {

            let {base_version, id, patchContent} = args;

            /**
             * @type {boolean}
             */
            const useAtlas = (isTrue(env.USE_ATLAS) || isTrue(args['_useAtlas']));

            // Get current record
            // Query our collection for this observation
            let data;
            try {
                data = await this.databaseQueryFactory.createQuery(
                    {resourceType, base_version, useAtlas}
                ).findOneAsync({query: {id: id.toString()}});
            } catch (e) {
                throw new BadRequestError(e);
            }
            if (!data) {
                throw new NotFoundError();
            }
            // Validate the patch
            let errors = validate(patchContent, data);
            if (errors && Object.keys(errors).length > 0) {
                throw new BadRequestError(errors[0]);
            }
            // Make the changes indicated in the patch
            let resource_incoming = applyPatch(data, patchContent).newDocument;

            let ResourceCreator = getResource(base_version, resourceType);
            let resource = new ResourceCreator(resource_incoming);

            if (data && data.meta) {
                let foundResource = new ResourceCreator(data);
                let meta = foundResource.meta;
                // noinspection JSUnresolvedVariable
                meta.versionId = `${parseInt(foundResource.meta.versionId) + 1}`;
                meta.lastUpdated = new Date(moment.utc().format('YYYY-MM-DDTHH:mm:ssZ'));
                resource.meta = meta;
            } else {
                throw new BadRequestError(new Error('Unable to patch resource. Missing either data or metadata.'));
            }

            await preSaveAsync(resource);

            // Same as update from this point on
            /**
             * @type {Resource}
             */
            let doc = resource;

            // Insert/update our resource record
            let res;
            try {
                doc = omitPropertyFromResource(doc, '_id');
                res = await this.databaseQueryFactory.createQuery(
                    {resourceType, base_version, useAtlas}
                ).findOneAndUpdateAsync({
                    query: {id: id}, update: {$set: doc.toJSONInternal()}, options: {upsert: true}
                });
            } catch (e) {
                throw new BadRequestError(e);
            }
            // Save to history
            /**
             * @type {Resource}
             */
            const historyResource = doc.copy();
            try {
                await this.databaseHistoryFactory.createDatabaseHistoryManager(
                    {
                        resourceType, base_version, useAtlas
                    }
                ).insertHistoryForResourceAsync({doc: historyResource});
            } catch (e) {
                throw new BadRequestError(e);
            }
            await this.fhirLoggingManager.logOperationSuccessAsync(
                {
                    requestInfo,
                    args,
                    resourceType,
                    startTime,
                    action: currentOperationName
                });

            await this.changeEventProducer.fireEventsAsync({
                requestId, eventType: 'U', resourceType, doc
            });

            this.postRequestProcessor.add(async () => await this.changeEventProducer.flushAsync(requestId));

            return {
                id: doc.id,
                created: res.lastErrorObject && !res.lastErrorObject.updatedExisting,
                resource_version: doc.meta.versionId,
            };
        } catch (e) {
            await this.fhirLoggingManager.logOperationFailureAsync(
                {
                    requestInfo,
                    args,
                    resourceType,
                    startTime,
                    action: currentOperationName,
                    error: e
                });
            throw e;
        }
    }
}

module.exports = {
    PatchOperation
};
