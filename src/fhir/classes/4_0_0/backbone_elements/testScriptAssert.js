

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
TestScript.Assert
    A structured set of tests against a FHIR server or client implementation to
    determine compliance against the FHIR specification.
*/
class TestScriptAssert extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {String|undefined} [label],
     * @param {String|undefined} [description],
     * @param {code|undefined} [direction],
     * @param {String|undefined} [compareToSourceId],
     * @param {String|undefined} [compareToSourceExpression],
     * @param {String|undefined} [compareToSourcePath],
     * @param {code|undefined} [contentType],
     * @param {String|undefined} [expression],
     * @param {String|undefined} [headerField],
     * @param {String|undefined} [minimumId],
     * @param {Boolean|undefined} [navigationLinks],
     * @param {code|undefined} [operator],
     * @param {String|undefined} [path],
     * @param {code|undefined} [requestMethod],
     * @param {String|undefined} [requestURL],
     * @param {code|undefined} [resource],
     * @param {code|undefined} [response],
     * @param {String|undefined} [responseCode],
     * @param {id|undefined} [sourceId],
     * @param {id|undefined} [validateProfileId],
     * @param {String|undefined} [value],
     * @param {Boolean} warningOnly,
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            label,
            description,
            direction,
            compareToSourceId,
            compareToSourceExpression,
            compareToSourcePath,
            contentType,
            expression,
            headerField,
            minimumId,
            navigationLinks,
            operator,
            path,
            requestMethod,
            requestURL,
            resource,
            response,
            responseCode,
            sourceId,
            validateProfileId,
            value,
            warningOnly
        }
    ) {
        super({});

        // ---- Define getters and setters as enumerable ---

        /**
         * @description None
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'id', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.id,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.id = undefined;
                    return;
                }
                this.__data.id = valueProvided;
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the element. To make the use of extensions safe and manageable,
    there is a strict set of governance  applied to the definition and use of
    extensions. Though any implementer can define an extension, there is a set of
    requirements that SHALL be met as part of the definition of the extension.
         * @property {Extension[]|undefined}
        */
        Object.defineProperty(this, 'extension', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.extension,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.extension = undefined;
                    return;
                }
                const Extension = require('../complex_types/extension.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.extension = FhirResourceCreator.createArray(valueProvided, Extension);
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the element and that modifies the understanding of the element
    in which it is contained and/or the understanding of the containing element's
    descendants. Usually modifier elements provide negation or qualification. To
    make the use of extensions safe and manageable, there is a strict set of
    governance applied to the definition and use of extensions. Though any
    implementer can define an extension, there is a set of requirements that SHALL
    be met as part of the definition of the extension. Applications processing a
    resource are required to check for modifier extensions.

    Modifier extensions SHALL NOT change the meaning of any elements on Resource
    or DomainResource (including cannot change the meaning of modifierExtension
    itself).
         * @property {Extension[]|undefined}
        */
        Object.defineProperty(this, 'modifierExtension', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.modifierExtension,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.modifierExtension = undefined;
                    return;
                }
                const Extension = require('../complex_types/extension.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.modifierExtension = FhirResourceCreator.createArray(valueProvided, Extension);
            }
        });

        /**
         * @description The label would be used for tracking/logging purposes by test engines.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'label', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.label,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.label = undefined;
                    return;
                }
                this.__data.label = valueProvided;
            }
        });

        /**
         * @description The description would be used by test engines for tracking and reporting
    purposes.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'description', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.description,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.description = undefined;
                    return;
                }
                this.__data.description = valueProvided;
            }
        });

        /**
         * @description The direction to use for the assertion.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'direction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.direction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.direction = undefined;
                    return;
                }
                this.__data.direction = valueProvided;
            }
        });

        /**
         * @description Id of the source fixture used as the contents to be evaluated by either the
    "source/expression" or "sourceId/path" definition.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'compareToSourceId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.compareToSourceId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.compareToSourceId = undefined;
                    return;
                }
                this.__data.compareToSourceId = valueProvided;
            }
        });

        /**
         * @description The FHIRPath expression to evaluate against the source fixture. When
    compareToSourceId is defined, either compareToSourceExpression or
    compareToSourcePath must be defined, but not both.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'compareToSourceExpression', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.compareToSourceExpression,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.compareToSourceExpression = undefined;
                    return;
                }
                this.__data.compareToSourceExpression = valueProvided;
            }
        });

        /**
         * @description XPath or JSONPath expression to evaluate against the source fixture. When
    compareToSourceId is defined, either compareToSourceExpression or
    compareToSourcePath must be defined, but not both.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'compareToSourcePath', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.compareToSourcePath,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.compareToSourcePath = undefined;
                    return;
                }
                this.__data.compareToSourcePath = valueProvided;
            }
        });

        /**
         * @description The mime-type contents to compare against the request or response message
    'Content-Type' header.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'contentType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contentType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contentType = undefined;
                    return;
                }
                this.__data.contentType = valueProvided;
            }
        });

        /**
         * @description The FHIRPath expression to be evaluated against the request or response
    message contents - HTTP headers and payload.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'expression', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.expression,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.expression = undefined;
                    return;
                }
                this.__data.expression = valueProvided;
            }
        });

        /**
         * @description The HTTP header field name e.g. 'Location'.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'headerField', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.headerField,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.headerField = undefined;
                    return;
                }
                this.__data.headerField = valueProvided;
            }
        });

        /**
         * @description The ID of a fixture.  Asserts that the response contains at a minimum the
    fixture specified by minimumId.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'minimumId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.minimumId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.minimumId = undefined;
                    return;
                }
                this.__data.minimumId = valueProvided;
            }
        });

        /**
         * @description Whether or not the test execution performs validation on the bundle navigation
    links.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'navigationLinks', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.navigationLinks,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.navigationLinks = undefined;
                    return;
                }
                this.__data.navigationLinks = valueProvided;
            }
        });

        /**
         * @description The operator type defines the conditional behavior of the assert. If not
    defined, the default is equals.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'operator', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.operator,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.operator = undefined;
                    return;
                }
                this.__data.operator = valueProvided;
            }
        });

        /**
         * @description The XPath or JSONPath expression to be evaluated against the fixture
    representing the response received from server.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'path', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.path,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.path = undefined;
                    return;
                }
                this.__data.path = valueProvided;
            }
        });

        /**
         * @description The request method or HTTP operation code to compare against that used by the
    client system under test.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'requestMethod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.requestMethod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.requestMethod = undefined;
                    return;
                }
                this.__data.requestMethod = valueProvided;
            }
        });

        /**
         * @description The value to use in a comparison against the request URL path string.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'requestURL', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.requestURL,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.requestURL = undefined;
                    return;
                }
                this.__data.requestURL = valueProvided;
            }
        });

        /**
         * @description The type of the resource.  See http://build.fhir.org/resourcelist.html.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'resource', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.resource,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.resource = undefined;
                    return;
                }
                this.__data.resource = valueProvided;
            }
        });

        /**
         * @description okay | created | noContent | notModified | bad | forbidden | notFound |
    methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'response', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.response,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.response = undefined;
                    return;
                }
                this.__data.response = valueProvided;
            }
        });

        /**
         * @description The value of the HTTP response code to be tested.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'responseCode', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.responseCode,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.responseCode = undefined;
                    return;
                }
                this.__data.responseCode = valueProvided;
            }
        });

        /**
         * @description Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
         * @property {id|undefined}
        */
        Object.defineProperty(this, 'sourceId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sourceId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sourceId = undefined;
                    return;
                }
                this.__data.sourceId = valueProvided;
            }
        });

        /**
         * @description The ID of the Profile to validate against.
         * @property {id|undefined}
        */
        Object.defineProperty(this, 'validateProfileId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.validateProfileId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.validateProfileId = undefined;
                    return;
                }
                this.__data.validateProfileId = valueProvided;
            }
        });

        /**
         * @description The value to compare to.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'value', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.value,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.value = undefined;
                    return;
                }
                this.__data.value = valueProvided;
            }
        });

        /**
         * @description Whether or not the test execution will produce a warning only on error for
    this assert.
         * @property {Boolean}
        */
        Object.defineProperty(this, 'warningOnly', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.warningOnly,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.warningOnly = undefined;
                    return;
                }
                this.__data.warningOnly = valueProvided;
            }
        });


        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            label,
            description,
            direction,
            compareToSourceId,
            compareToSourceExpression,
            compareToSourcePath,
            contentType,
            expression,
            headerField,
            minimumId,
            navigationLinks,
            operator,
            path,
            requestMethod,
            requestURL,
            resource,
            response,
            responseCode,
            sourceId,
            validateProfileId,
            value,
            warningOnly
        });
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON () {
        const { removeNull } = require('../../../../utils/nullRemover');

        return removeNull({
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            label: this.label,
            description: this.description,
            direction: this.direction,
            compareToSourceId: this.compareToSourceId,
            compareToSourceExpression: this.compareToSourceExpression,
            compareToSourcePath: this.compareToSourcePath,
            contentType: this.contentType,
            expression: this.expression,
            headerField: this.headerField,
            minimumId: this.minimumId,
            navigationLinks: this.navigationLinks,
            operator: this.operator,
            path: this.path,
            requestMethod: this.requestMethod,
            requestURL: this.requestURL,
            resource: this.resource,
            response: this.response,
            responseCode: this.responseCode,
            sourceId: this.sourceId,
            validateProfileId: this.validateProfileId,
            value: this.value,
            warningOnly: this.warningOnly
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync ({ fnUpdateReferenceAsync }) {
            if (this.extension) { await async.each(this.extension, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.modifierExtension) { await async.each(this.modifierExtension, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal () {
        const { removeNull } = require('../../../../utils/nullRemover');
        const json = {
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            label: this.label,
            description: this.description,
            direction: this.direction,
            compareToSourceId: this.compareToSourceId,
            compareToSourceExpression: this.compareToSourceExpression,
            compareToSourcePath: this.compareToSourcePath,
            contentType: this.contentType,
            expression: this.expression,
            headerField: this.headerField,
            minimumId: this.minimumId,
            navigationLinks: this.navigationLinks,
            operator: this.operator,
            path: this.path,
            requestMethod: this.requestMethod,
            requestURL: this.requestURL,
            resource: this.resource,
            response: this.response,
            responseCode: this.responseCode,
            sourceId: this.sourceId,
            validateProfileId: this.validateProfileId,
            value: this.value,
            warningOnly: this.warningOnly
        };

        return removeNull(json);
    }
}

module.exports = TestScriptAssert;
