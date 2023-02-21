/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
ExampleScenario.Operation
    Example of workflow instance.
*/
class ExampleScenarioOperation extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {String} number,
     * @param {String|undefined} [type],
     * @param {String|undefined} [name],
     * @param {String|undefined} [initiator],
     * @param {String|undefined} [receiver],
     * @param {markdown|undefined} [description],
     * @param {Boolean|undefined} [initiatorActive],
     * @param {Boolean|undefined} [receiverActive],
     * @param {ExampleScenarioContainedInstance|undefined} [request],
     * @param {ExampleScenarioContainedInstance|undefined} [response],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            number,
            type,
            name,
            initiator,
            receiver,
            description,
            initiatorActive,
            receiverActive,
            request,
            response,
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
         * @description The sequential number of the interaction, e.g. 1.2.5.
         * @property {String}
        */
        Object.defineProperty(this, 'number', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.number,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.number = undefined;
                    return;
                }
                this.__data.number = valueProvided;
            }
        });

        /**
         * @description The type of operation - CRUD.
         * @property {String|undefined}
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
                this.__data.type = valueProvided;
            }
        });

        /**
         * @description The human-friendly name of the interaction.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'name', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.name,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.name = undefined;
                    return;
                }
                this.__data.name = valueProvided;
            }
        });

        /**
         * @description Who starts the transaction.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'initiator', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.initiator,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.initiator = undefined;
                    return;
                }
                this.__data.initiator = valueProvided;
            }
        });

        /**
         * @description Who receives the transaction.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'receiver', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.receiver,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.receiver = undefined;
                    return;
                }
                this.__data.receiver = valueProvided;
            }
        });

        /**
         * @description A comment to be inserted in the diagram.
         * @property {markdown|undefined}
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
         * @description Whether the initiator is deactivated right after the transaction.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'initiatorActive', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.initiatorActive,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.initiatorActive = undefined;
                    return;
                }
                this.__data.initiatorActive = valueProvided;
            }
        });

        /**
         * @description Whether the receiver is deactivated right after the transaction.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'receiverActive', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.receiverActive,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.receiverActive = undefined;
                    return;
                }
                this.__data.receiverActive = valueProvided;
            }
        });

        /**
         * @description Each resource instance used by the initiator.
         * @property {ExampleScenarioContainedInstance|undefined}
        */
        Object.defineProperty(this, 'request', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.request,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.request = undefined;
                    return;
                }
                const ExampleScenarioContainedInstance = require('../backbone_elements/exampleScenarioContainedInstance.js');
                this.__data.request = new ExampleScenarioContainedInstance(valueProvided);
            }
        });

        /**
         * @description Each resource instance used by the responder.
         * @property {ExampleScenarioContainedInstance|undefined}
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
                const ExampleScenarioContainedInstance = require('../backbone_elements/exampleScenarioContainedInstance.js');
                this.__data.response = new ExampleScenarioContainedInstance(valueProvided);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            number,
            type,
            name,
            initiator,
            receiver,
            description,
            initiatorActive,
            receiverActive,
            request,
            response,
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
            number: this.number,
            type: this.type,
            name: this.name,
            initiator: this.initiator,
            receiver: this.receiver,
            description: this.description,
            initiatorActive: this.initiatorActive,
            receiverActive: this.receiverActive,
            request: this.request && this.request.toJSON(),
            response: this.response && this.response.toJSON(),
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
            if (this.request) {await this.request.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.response) {await this.response.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            number: this.number,
            type: this.type,
            name: this.name,
            initiator: this.initiator,
            receiver: this.receiver,
            description: this.description,
            initiatorActive: this.initiatorActive,
            receiverActive: this.receiverActive,
            request: this.request && this.request.toJSONInternal(),
            response: this.response && this.response.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = ExampleScenarioOperation;
