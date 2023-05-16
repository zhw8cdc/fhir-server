/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
TestScript.Operation
    A structured set of tests against a FHIR server or client implementation to
    determine compliance against the FHIR specification.
*/
class TestScriptOperation extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Coding|undefined} [type],
     * @param {code|undefined} [resource],
     * @param {String|undefined} [label],
     * @param {String|undefined} [description],
     * @param {code|undefined} [accept],
     * @param {code|undefined} [contentType],
     * @param {Int|undefined} [destination],
     * @param {Boolean} encodeRequestUrl,
     * @param {code|undefined} [method],
     * @param {Int|undefined} [origin],
     * @param {String|undefined} [params],
     * @param {TestScriptRequestHeader[]|undefined} [requestHeader],
     * @param {id|undefined} [requestId],
     * @param {id|undefined} [responseId],
     * @param {id|undefined} [sourceId],
     * @param {id|undefined} [targetId],
     * @param {String|undefined} [url],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            type,
            resource,
            label,
            description,
            accept,
            contentType,
            destination,
            encodeRequestUrl,
            method,
            origin,
            params,
            requestHeader,
            requestId,
            responseId,
            sourceId,
            targetId,
            url,
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.modifierExtension = FhirResourceCreator.createArray(valueProvided, Extension);
            }
        });

        /**
         * @description Server interaction or operation type.
         * @property {Coding|undefined}
        */
        Object.defineProperty(this, 'type', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.type,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.type = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.type = FhirResourceCreator.create(valueProvided, Coding);
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
         * @description The mime-type to use for RESTful operation in the 'Accept' header.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'accept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.accept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.accept = undefined;
                    return;
                }
                this.__data.accept = valueProvided;
            }
        });

        /**
         * @description The mime-type to use for RESTful operation in the 'Content-Type' header.
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
         * @description The server where the request message is destined for.  Must be one of the
    server numbers listed in TestScript.destination section.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'destination', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.destination,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.destination = undefined;
                    return;
                }
                this.__data.destination = valueProvided;
            }
        });

        /**
         * @description Whether or not to implicitly send the request url in encoded format. The
    default is true to match the standard RESTful client behavior. Set to false
    when communicating with a server that does not support encoded url paths.
         * @property {Boolean}
        */
        Object.defineProperty(this, 'encodeRequestUrl', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.encodeRequestUrl,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.encodeRequestUrl = undefined;
                    return;
                }
                this.__data.encodeRequestUrl = valueProvided;
            }
        });

        /**
         * @description The HTTP method the test engine MUST use for this operation regardless of any
    other operation details.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'method', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.method,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.method = undefined;
                    return;
                }
                this.__data.method = valueProvided;
            }
        });

        /**
         * @description The server where the request message originates from.  Must be one of the
    server numbers listed in TestScript.origin section.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'origin', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.origin,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.origin = undefined;
                    return;
                }
                this.__data.origin = valueProvided;
            }
        });

        /**
         * @description Path plus parameters after [type].  Used to set parts of the request URL
    explicitly.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'params', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.params,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.params = undefined;
                    return;
                }
                this.__data.params = valueProvided;
            }
        });

        /**
         * @description Header elements would be used to set HTTP headers.
         * @property {TestScriptRequestHeader[]|undefined}
        */
        Object.defineProperty(this, 'requestHeader', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.requestHeader,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.requestHeader = undefined;
                    return;
                }
                const TestScriptRequestHeader = require('../backbone_elements/testScriptRequestHeader.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.requestHeader = FhirResourceCreator.createArray(valueProvided, TestScriptRequestHeader);
            }
        });

        /**
         * @description The fixture id (maybe new) to map to the request.
         * @property {id|undefined}
        */
        Object.defineProperty(this, 'requestId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.requestId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.requestId = undefined;
                    return;
                }
                this.__data.requestId = valueProvided;
            }
        });

        /**
         * @description The fixture id (maybe new) to map to the response.
         * @property {id|undefined}
        */
        Object.defineProperty(this, 'responseId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.responseId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.responseId = undefined;
                    return;
                }
                this.__data.responseId = valueProvided;
            }
        });

        /**
         * @description The id of the fixture used as the body of a PUT or POST request.
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
         * @description Id of fixture used for extracting the [id],  [type], and [vid] for GET
    requests.
         * @property {id|undefined}
        */
        Object.defineProperty(this, 'targetId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.targetId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.targetId = undefined;
                    return;
                }
                this.__data.targetId = valueProvided;
            }
        });

        /**
         * @description Complete request URL.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'url', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.url,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.url = undefined;
                    return;
                }
                this.__data.url = valueProvided;
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            type,
            resource,
            label,
            description,
            accept,
            contentType,
            destination,
            encodeRequestUrl,
            method,
            origin,
            params,
            requestHeader,
            requestId,
            responseId,
            sourceId,
            targetId,
            url,
        });

    }



    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON() {
        const {removeNull} = require('../../../../utils/nullRemover');

        return removeNull({
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            type: this.type && this.type.toJSON(),
            resource: this.resource,
            label: this.label,
            description: this.description,
            accept: this.accept,
            contentType: this.contentType,
            destination: this.destination,
            encodeRequestUrl: this.encodeRequestUrl,
            method: this.method,
            origin: this.origin,
            params: this.params,
            requestHeader: this.requestHeader && this.requestHeader.map(v => v.toJSON()),
            requestId: this.requestId,
            responseId: this.responseId,
            sourceId: this.sourceId,
            targetId: this.targetId,
            url: this.url,
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.extension) {await async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) {await async.each(this.modifierExtension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.type) {await this.type.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.requestHeader) {await async.each(this.requestHeader, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = {
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            type: this.type && this.type.toJSONInternal(),
            resource: this.resource,
            label: this.label,
            description: this.description,
            accept: this.accept,
            contentType: this.contentType,
            destination: this.destination,
            encodeRequestUrl: this.encodeRequestUrl,
            method: this.method,
            origin: this.origin,
            params: this.params,
            requestHeader: this.requestHeader && this.requestHeader.map(v => v.toJSONInternal()),
            requestId: this.requestId,
            responseId: this.responseId,
            sourceId: this.sourceId,
            targetId: this.targetId,
            url: this.url,
        };



        return removeNull(json);
    }
}

module.exports = TestScriptOperation;
