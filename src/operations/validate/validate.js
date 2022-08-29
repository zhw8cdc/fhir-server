const {validateResource} = require('../../utils/validator.util');
const {validationsFailedCounter} = require('../../utils/prometheus.utils');
const {assertIsValid, assertTypeEquals} = require('../../utils/assertType');
const {getResource} = require('../common/getResource');
const {ScopesManager} = require('../security/scopesManager');
const {FhirLoggingManager} = require('../common/fhirLoggingManager');
const {getFirstElementOrNull} = require('../../utils/list.util');

class ValidateOperation {
    /**
     * constructor
     * @param {ScopesManager} scopesManager
     * @param {FhirLoggingManager} fhirLoggingManager
     */
    constructor({scopesManager, fhirLoggingManager}) {
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
    }

    /**
     * does a FHIR Validate
     * @param {FhirRequestInfo} requestInfo
     * @param {Object} args
     * @param {string} resourceType
     * @returns {Promise<Resource>}
     */
    async validate(requestInfo, args, resourceType) {
        assertIsValid(requestInfo !== undefined);
        assertIsValid(args !== undefined);
        assertIsValid(resourceType !== undefined);
        /**
         * @type {number}
         */
        const startTime = Date.now();
        const path = requestInfo.path;
        /**
         * @type {string}
         */
        let {base_version} = args;

        // Note: no auth check needed to call validate

        // We accept the resource in the two forms allowed in FHIR:
        // https://www.hl7.org/fhir/resource-operation-validate.html
        // 1. Resource is sent in the body
        // 2. Resource is sent inside a Parameters resource in the body

        /**
         * @type {Object|null}
         */
        let resource_incoming = args.resource ? args.resource : requestInfo.body;

        /**
         * @type {function(OperationOutcome): Resource}
         */
        const OperationOutcomeResourceCreator = getResource(base_version, 'OperationOutcome');

        // check if this is a Parameters resourceType
        if (resource_incoming.resourceType === 'Parameters') {
            // Unfortunately our FHIR schema resource creator does not support Parameters
            // const ParametersResourceCreator = getResource(base_version, 'Parameters');
            // const parametersResource = new ParametersResourceCreator(resource_incoming);
            const parametersResource = resource_incoming;
            if (!parametersResource.parameter || parametersResource.parameter.length === 0) {
                /**
                 * @type {OperationOutcome}
                 */
                const operationOutcome = {
                    id: 'validationfail',
                    resourceType: 'OperationOutcome',
                    issue: [
                        {
                            severity: 'error',
                            code: 'structure',
                            details: {
                                text: 'Invalid parameter list'
                            }
                        }
                    ]
                };
                return new OperationOutcomeResourceCreator(operationOutcome);
            }
            // find the actual resource in the parameter called resource
            const resourceParameter = getFirstElementOrNull(parametersResource.parameter.filter(p => p.resource));
            if (!resourceParameter || !resourceParameter.resource) {
                /**
                 * @type {OperationOutcome}
                 */
                const operationOutcome = {
                    id: 'validationfail',
                    resourceType: 'OperationOutcome',
                    issue: [
                        {
                            severity: 'error',
                            code: 'structure',
                            details: {
                                text: 'Invalid parameter list'
                            }
                        }
                    ]
                };
                return new OperationOutcomeResourceCreator(operationOutcome);
            }
            resource_incoming = resourceParameter.resource;
        }

        const operationOutcome = validateResource(resource_incoming, resourceType, path);
        const currentOperationName = 'validate';
        if (operationOutcome && operationOutcome.statusCode === 400) {
            validationsFailedCounter.inc({action: currentOperationName, resourceType}, 1);
            await this.fhirLoggingManager.logOperationSuccessAsync(
                {
                    requestInfo,
                    args,
                    resourceType,
                    startTime,
                    action: currentOperationName
                });
            return new OperationOutcomeResourceCreator(operationOutcome);
        }

        const ResourceCreator = getResource(base_version, resourceType);
        if (!this.scopesManager.doesResourceHaveAccessTags(new ResourceCreator(resource_incoming))) {
            return new OperationOutcomeResourceCreator({
                resourceType: 'OperationOutcome',
                issue: [
                    {
                        severity: 'error',
                        code: 'invalid',
                        details: {
                            text: 'Resource is missing a security access tag with system: https://www.icanbwell.com/access'
                        },
                        expression: [
                            resourceType
                        ]
                    }
                ]
            });
        }
        await this.fhirLoggingManager.logOperationSuccessAsync(
            {
                requestInfo,
                args,
                resourceType,
                startTime,
                action: currentOperationName
            });

        // Per FHIR: https://www.hl7.org/fhir/resource-operation-validate.html
        // Note: as this is the only out parameter, it is a resource, and it has the name 'return',
        // the result of this operation is returned directly as a resource
        return new OperationOutcomeResourceCreator({
            resourceType: 'OperationOutcome',
            issue: [
                {
                    severity: 'information',
                    code: 'informational',
                    details: {
                        text: 'OK'
                    },
                    expression: [
                        resourceType
                    ]
                }
            ]
        });
    }
}

module.exports = {
    ValidateOperation
};

