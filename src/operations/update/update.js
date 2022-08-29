const {logDebug} = require('../common/logging');
const env = require('var');
const moment = require('moment-timezone');
const sendToS3 = require('../../utils/aws-s3');
const {validateResource} = require('../../utils/validator.util');
const {getUuid} = require('../../utils/uid.util');
const {NotValidatedError, ForbiddenError, BadRequestError} = require('../../utils/httpErrors');
const {getResource} = require('../common/getResource');
const {compare} = require('fast-json-patch');
const {getMeta} = require('../common/getMeta');
const {removeNull} = require('../../utils/nullRemover');
const {preSaveAsync} = require('../common/preSave');
const {isTrue} = require('../../utils/isTrue');
const {validationsFailedCounter} = require('../../utils/prometheus.utils');
const {assertTypeEquals, assertIsValid} = require('../../utils/assertType');
const {DatabaseHistoryFactory} = require('../../dataLayer/databaseHistoryFactory');
const {ChangeEventProducer} = require('../../utils/changeEventProducer');
const {AuditLogger} = require('../../utils/auditLogger');
const {PostRequestProcessor} = require('../../utils/postRequestProcessor');
const {DatabaseQueryFactory} = require('../../dataLayer/databaseQueryFactory');
const {ScopesManager} = require('../security/scopesManager');
const {FhirLoggingManager} = require('../common/fhirLoggingManager');
const {ScopesValidator} = require('../security/scopesValidator');
const {omitProperty} = require('../../utils/omitProperties');

/**
 * Update Operation
 */
class UpdateOperation {
    /**
     * constructor
     * @param {DatabaseHistoryFactory} databaseHistoryFactory
     * @param {DatabaseQueryFactory} databaseQueryFactory
     * @param {ChangeEventProducer} changeEventProducer
     * @param {AuditLogger} auditLogger
     * @param {PostRequestProcessor} postRequestProcessor
     * @param {ScopesManager} scopesManager
     * @param {FhirLoggingManager} fhirLoggingManager
     * @param {ScopesValidator} scopesValidator
     */
    constructor(
        {
            databaseHistoryFactory,
            databaseQueryFactory,
            changeEventProducer,
            auditLogger,
            postRequestProcessor,
            scopesManager,
            fhirLoggingManager,
            scopesValidator
        }
    ) {
        /**
         * @type {DatabaseHistoryFactory}
         */
        this.databaseHistoryFactory = databaseHistoryFactory;
        assertTypeEquals(databaseHistoryFactory, DatabaseHistoryFactory);
        /**
         * @type {DatabaseQueryFactory}
         */
        this.databaseQueryFactory = databaseQueryFactory;
        assertTypeEquals(databaseQueryFactory, DatabaseQueryFactory);
        /**
         * @type {ChangeEventProducer}
         */
        this.changeEventProducer = changeEventProducer;
        assertTypeEquals(changeEventProducer, ChangeEventProducer);
        /**
         * @type {AuditLogger}
         */
        this.auditLogger = auditLogger;
        assertTypeEquals(auditLogger, AuditLogger);
        /**
         * @type {PostRequestProcessor}
         */
        this.postRequestProcessor = postRequestProcessor;
        assertTypeEquals(postRequestProcessor, PostRequestProcessor);
        /**
         * @type {ScopesManager}
         */
        this.scopesManager = scopesManager;
        assertTypeEquals(scopesManager, ScopesManager);
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
     * does a FHIR Update (PUT)
     * @param {FhirRequestInfo} requestInfo
     * @param {Object} args
     * @param {string} resourceType
     */
    async update(requestInfo, args, resourceType) {
        assertIsValid(requestInfo !== undefined);
        assertIsValid(args !== undefined);
        assertIsValid(resourceType !== undefined);
        const currentOperationName = 'update';
        // Query our collection for this observation
        /**
         * @type {number}
         */
        const startTime = Date.now();
        const {user, scope, path, body, /** @type {string|null} */ requestId} = requestInfo;

        await this.scopesValidator.verifyHasValidScopesAsync(
            {
                requestInfo,
                args,
                resourceType,
                startTime,
                action: currentOperationName,
                accessRequested: 'read'
            }
        );

        // read the incoming resource from request body
        let resource_incoming_json = body;
        let {base_version, id} = args;

        if (env.LOG_ALL_SAVES) {
            const currentDate = moment.utc().format('YYYY-MM-DD');
            await sendToS3('logs',
                resourceType,
                resource_incoming_json,
                currentDate,
                id,
                currentOperationName);
        }

        if (env.VALIDATE_SCHEMA || args['_validate']) {
            const operationOutcome = validateResource(resource_incoming_json, resourceType, path);
            if (operationOutcome && operationOutcome.statusCode === 400) {
                validationsFailedCounter.inc({action: currentOperationName, resourceType}, 1);
                const currentDate = moment.utc().format('YYYY-MM-DD');
                const uuid = getUuid(resource_incoming_json);
                operationOutcome.expression = [
                    resourceType + '/' + uuid
                ];
                await sendToS3('validation_failures',
                    resourceType,
                    resource_incoming_json,
                    currentDate,
                    uuid,
                    currentOperationName);
                await sendToS3('validation_failures',
                    resourceType,
                    operationOutcome,
                    currentDate,
                    uuid,
                    'update_failure');
                throw new NotValidatedError(operationOutcome);
            }
        }

        try {
            /**
             * @type {boolean}
             */
            const useAtlas = (isTrue(env.USE_ATLAS) || isTrue(args['_useAtlas']));

            // Get current record
            /**
             * @type {Resource | null}
             */
            let data = await this.databaseQueryFactory.createQuery(
                {resourceType, base_version, useAtlas}
            ).findOneAsync({query: {id: id.toString()}});
            // create a resource with incoming data
            /**
             * @type {function(?Object): Resource}
             */
            let ResourceCreator = getResource(base_version, resourceType);

            /**
             * @type {Resource}
             */
            let resource_incoming = new ResourceCreator(resource_incoming_json);
            /**
             * @type {Resource|null}
             */
            let cleaned;
            /**
             * @type {Resource|null}
             */
            let doc;

            // check if resource was found in database or not
            // noinspection JSUnresolvedVariable
            if (data && data.meta) {
                // found an existing resource
                /**
                 * @type {Resource}
                 */
                let foundResource = new ResourceCreator(data);
                if (!(this.scopesManager.isAccessToResourceAllowedBySecurityTags(foundResource, user, scope))) {
                    // noinspection ExceptionCaughtLocallyJS
                    throw new ForbiddenError(
                        'user ' + user + ' with scopes [' + scope + '] has no access to resource ' +
                        foundResource.resourceType + ' with id ' + id);
                }

                // use metadata of existing resource (overwrite any passed in metadata)
                // noinspection JSPrimitiveTypeWrapperUsage
                resource_incoming.meta = foundResource.meta;

                await preSaveAsync(resource_incoming);

                const foundResourceObject = removeNull(foundResource.toJSON());
                const resourceIncomingObject = removeNull(resource_incoming.toJSON());
                // now create a patch between the document in db and the incoming document
                //  this returns an array of patches
                /**
                 * @type {Operation[]}
                 */
                let patchContent = compare(foundResourceObject, resourceIncomingObject);
                // ignore any changes to _id since that's an internal field
                patchContent = patchContent.filter(item => item.path !== '/_id');
                logDebug({user, args: {message: 'Update', patches: patchContent}});
                // see if there are any changes
                if (patchContent.length === 0) {
                    await this.fhirLoggingManager.logOperationSuccessAsync({
                        requestInfo,
                        args,
                        resourceType,
                        startTime,
                        action: currentOperationName
                    });
                    return {
                        id: id,
                        created: false,
                        resource_version: foundResource.meta.versionId,
                    };
                }
                if (env.LOG_ALL_SAVES) {
                    const currentDate = moment.utc().format('YYYY-MM-DD');
                    await sendToS3('logs',
                        resourceType,
                        patchContent,
                        currentDate,
                        id,
                        'update_patch');
                }
                // update the metadata to increment versionId
                /**
                 * @type {Meta}
                 */
                let meta = foundResource.meta;
                meta.versionId = `${parseInt(foundResource.meta.versionId) + 1}`;
                // noinspection SpellCheckingInspection
                meta.lastUpdated = new Date(moment.utc().format('YYYY-MM-DDTHH:mm:ssZ'));
                resource_incoming.meta = meta;

                await preSaveAsync(resource_incoming);

                // Same as update from this point on
                cleaned = removeNull(resource_incoming.toJSON());
                doc = cleaned;
                // check_fhir_mismatch(cleaned, patched_incoming_data);
            } else {
                // not found so insert
                if (env.CHECK_ACCESS_TAG_ON_SAVE === '1') {
                    if (!this.scopesManager.doesResourceHaveAccessTags(new ResourceCreator(resource_incoming))) {
                        // noinspection ExceptionCaughtLocallyJS
                        throw new BadRequestError(new Error('ResourceC is missing a security access tag with system: https://www.icanbwell.com/access '));
                    }
                }

                // create the metadata
                /**
                 * @type {function({Object}): Meta}
                 */
                let Meta = getMeta(base_version);
                if (!resource_incoming.meta) {
                    // noinspection JSPrimitiveTypeWrapperUsage
                    resource_incoming.meta = new Meta({
                        versionId: '1',
                        lastUpdated: new Date(moment.utc().format('YYYY-MM-DDTHH:mm:ssZ')),
                    });
                } else {
                    resource_incoming.meta['versionId'] = '1';
                    resource_incoming.meta['lastUpdated'] = new Date(moment.utc().format('YYYY-MM-DDTHH:mm:ssZ'));
                }

                await preSaveAsync(resource_incoming);

                cleaned = removeNull(resource_incoming.toJSON());
                doc = cleaned;
            }

            doc = omitProperty(doc, '_id');

            // Insert/update our resource record
            // When using the $set operator, only the specified fields are updated
            /**
             * @type {FindOneAndUpdateResult|null}
             */
            const res = await this.databaseQueryFactory.createQuery(
                {resourceType, base_version, useAtlas}
            ).findOneAndUpdateAsync(
                {query: {id: id}, update: {$set: doc}, options: {upsert: true}});
            // save to history

            // let history_resource = Object.assign(cleaned, {id: id});
            /**
             * @type {Resource}
             */
            let history_resource = Object.assign(cleaned, {_id: id + cleaned.meta.versionId});
            // delete history_resource['_id']; // make sure we don't have an _id field when inserting into history

            // Insert our resource record to history but don't assign _id
            await this.databaseHistoryFactory.createDatabaseHistoryManager(
                {
                    resourceType, base_version, useAtlas
                }
            ).insertOneAsync({doc: history_resource});

            if (resourceType !== 'AuditEvent') {
                // log access to audit logs
                await this.auditLogger.logAuditEntryAsync(
                    {
                        requestInfo, base_version, resourceType,
                        operation: currentOperationName, args, ids: [resource_incoming['id']]
                    }
                );
                const currentDate = moment.utc().format('YYYY-MM-DD');
                await this.auditLogger.flushAsync({requestId, currentDate});
            }

            const result = {
                id: id,
                created: res.created,
                resource_version: doc.meta.versionId,
            };
            await this.fhirLoggingManager.logOperationSuccessAsync(
                {
                    requestInfo,
                    args,
                    resourceType,
                    startTime,
                    action: currentOperationName,
                    result: JSON.stringify(result)
                });
            await this.changeEventProducer.fireEventsAsync(requestId, 'U', resourceType, doc);
            this.postRequestProcessor.add(async () => await this.changeEventProducer.flushAsync(requestId));

            return result;
        } catch (e) {
            const currentDate = moment.utc().format('YYYY-MM-DD');
            await sendToS3('errors',
                resourceType,
                resource_incoming_json,
                currentDate,
                id,
                currentOperationName);
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
    UpdateOperation
};

