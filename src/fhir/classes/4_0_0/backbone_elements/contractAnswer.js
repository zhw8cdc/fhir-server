/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
Contract.Answer
    Legally enforceable, formally recorded unilateral or bilateral directive i.e.,
    a policy or agreement.
*/
class ContractAnswer extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Boolean|undefined} [valueBoolean],
     * @param {decimal|undefined} [valueDecimal],
     * @param {Int|undefined} [valueInteger],
     * @param {date|undefined} [valueDate],
     * @param {dateTime|undefined} [valueDateTime],
     * @param {time|undefined} [valueTime],
     * @param {String|undefined} [valueString],
     * @param {uri|undefined} [valueUri],
     * @param {Attachment|undefined} [valueAttachment],
     * @param {Coding|undefined} [valueCoding],
     * @param {Quantity|undefined} [valueQuantity],
     * @param {Reference|undefined} [valueReference],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            valueBoolean,
            valueDecimal,
            valueInteger,
            valueDate,
            valueDateTime,
            valueTime,
            valueString,
            valueUri,
            valueAttachment,
            valueCoding,
            valueQuantity,
            valueReference,
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
         * @description None
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'valueBoolean', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueBoolean,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueBoolean = undefined;
                    return;
                }
                this.__data.valueBoolean = valueProvided;
            }
        });

        /**
         * @description None
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'valueDecimal', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueDecimal,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueDecimal = undefined;
                    return;
                }
                this.__data.valueDecimal = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'valueInteger', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueInteger,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueInteger = undefined;
                    return;
                }
                this.__data.valueInteger = valueProvided;
            }
        });

        /**
         * @description None
         * @property {date|undefined}
        */
        Object.defineProperty(this, 'valueDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueDate = undefined;
                    return;
                }
                this.__data.valueDate = valueProvided;
            }
        });

        /**
         * @description None
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'valueDateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueDateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueDateTime = undefined;
                    return;
                }
                this.__data.valueDateTime = valueProvided;
            }
        });

        /**
         * @description None
         * @property {time|undefined}
        */
        Object.defineProperty(this, 'valueTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueTime = undefined;
                    return;
                }
                this.__data.valueTime = valueProvided;
            }
        });

        /**
         * @description None
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'valueString', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueString,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueString = undefined;
                    return;
                }
                this.__data.valueString = valueProvided;
            }
        });

        /**
         * @description None
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'valueUri', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueUri,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueUri = undefined;
                    return;
                }
                this.__data.valueUri = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Attachment|undefined}
        */
        Object.defineProperty(this, 'valueAttachment', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueAttachment,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueAttachment = undefined;
                    return;
                }
                const Attachment = require('../complex_types/attachment.js');
                this.__data.valueAttachment = new Attachment(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Coding|undefined}
        */
        Object.defineProperty(this, 'valueCoding', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueCoding,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueCoding = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                this.__data.valueCoding = new Coding(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'valueQuantity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueQuantity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueQuantity = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                this.__data.valueQuantity = new Quantity(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'valueReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.valueReference = new Reference(valueProvided);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            valueBoolean,
            valueDecimal,
            valueInteger,
            valueDate,
            valueDateTime,
            valueTime,
            valueString,
            valueUri,
            valueAttachment,
            valueCoding,
            valueQuantity,
            valueReference,
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
            valueBoolean: this.valueBoolean,
            valueDecimal: this.valueDecimal,
            valueInteger: this.valueInteger,
            valueDate: this.valueDate,
            valueDateTime: this.valueDateTime,
            valueTime: this.valueTime,
            valueString: this.valueString,
            valueUri: this.valueUri,
            valueAttachment: this.valueAttachment && this.valueAttachment.toJSON(),
            valueCoding: this.valueCoding && this.valueCoding.toJSON(),
            valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
            valueReference: this.valueReference && this.valueReference.toJSON(),
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
            if (this.valueAttachment) {await this.valueAttachment.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.valueCoding) {await this.valueCoding.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.valueQuantity) {await this.valueQuantity.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.valueReference) {await this.valueReference.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            valueBoolean: this.valueBoolean,
            valueDecimal: this.valueDecimal,
            valueInteger: this.valueInteger,
            valueDate: this.valueDate,
            valueDateTime: this.valueDateTime,
            valueTime: this.valueTime,
            valueString: this.valueString,
            valueUri: this.valueUri,
            valueAttachment: this.valueAttachment && this.valueAttachment.toJSONInternal(),
            valueCoding: this.valueCoding && this.valueCoding.toJSONInternal(),
            valueQuantity: this.valueQuantity && this.valueQuantity.toJSONInternal(),
            valueReference: this.valueReference && this.valueReference.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = ContractAnswer;
