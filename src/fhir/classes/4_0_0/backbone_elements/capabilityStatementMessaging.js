/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
CapabilityStatement.Messaging
    A Capability Statement documents a set of capabilities (behaviors) of a FHIR
    Server for a particular version of FHIR that may be used as a statement of
    actual server functionality or a statement of required or desired server
    implementation.
*/
class CapabilityStatementMessaging extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CapabilityStatementEndpoint[]|undefined} [endpoint],
     * @param {unsignedInt|undefined} [reliableCache],
     * @param {markdown|undefined} [documentation],
     * @param {CapabilityStatementSupportedMessage[]|undefined} [supportedMessage],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            endpoint,
            reliableCache,
            documentation,
            supportedMessage,
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
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description An endpoint (network accessible address) to which messages and/or replies are
    to be sent.
         * @property {CapabilityStatementEndpoint[]|undefined}
        */
        Object.defineProperty(this, 'endpoint', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.endpoint,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.endpoint = undefined;
                    return;
                }
                const CapabilityStatementEndpoint = require('../backbone_elements/capabilityStatementEndpoint.js');
                this.__data.endpoint = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CapabilityStatementEndpoint(v)) : [new CapabilityStatementEndpoint(valueProvided)];
            }
        });

        /**
         * @description Length if the receiver's reliable messaging cache in minutes (if a receiver)
    or how long the cache length on the receiver should be (if a sender).
         * @property {unsignedInt|undefined}
        */
        Object.defineProperty(this, 'reliableCache', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.reliableCache,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.reliableCache = undefined;
                    return;
                }
                this.__data.reliableCache = valueProvided;
            }
        });

        /**
         * @description Documentation about the system's messaging capabilities for this endpoint not
    otherwise documented by the capability statement.  For example, the process
    for becoming an authorized messaging exchange partner.
         * @property {markdown|undefined}
        */
        Object.defineProperty(this, 'documentation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.documentation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.documentation = undefined;
                    return;
                }
                this.__data.documentation = valueProvided;
            }
        });

        /**
         * @description References to message definitions for messages this system can send or
    receive.
         * @property {CapabilityStatementSupportedMessage[]|undefined}
        */
        Object.defineProperty(this, 'supportedMessage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.supportedMessage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.supportedMessage = undefined;
                    return;
                }
                const CapabilityStatementSupportedMessage = require('../backbone_elements/capabilityStatementSupportedMessage.js');
                this.__data.supportedMessage = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CapabilityStatementSupportedMessage(v)) : [new CapabilityStatementSupportedMessage(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            endpoint,
            reliableCache,
            documentation,
            supportedMessage,
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
            endpoint: this.endpoint && this.endpoint.map(v => v.toJSON()),
            reliableCache: this.reliableCache,
            documentation: this.documentation,
            supportedMessage: this.supportedMessage && this.supportedMessage.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.extension) { async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) { async.each(this.modifierExtension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.endpoint) { async.each(this.endpoint, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.supportedMessage) { async.each(this.supportedMessage, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            endpoint: this.endpoint && this.endpoint.map(v => v.toJSONInternal()),
            reliableCache: this.reliableCache,
            documentation: this.documentation,
            supportedMessage: this.supportedMessage && this.supportedMessage.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = CapabilityStatementMessaging;
