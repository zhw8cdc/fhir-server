

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
Questionnaire.EnableWhen
    A structured set of questions intended to guide the collection of answers from
    end-users. Questionnaires provide detailed control over order, presentation,
    phraseology and grouping to allow coherent, consistent data collection.
*/
class QuestionnaireEnableWhen extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {String} question,
     * @param {code} operator,
     * @param {Boolean|undefined} [answerBoolean],
     * @param {decimal|undefined} [answerDecimal],
     * @param {Int|undefined} [answerInteger],
     * @param {date|undefined} [answerDate],
     * @param {dateTime|undefined} [answerDateTime],
     * @param {time|undefined} [answerTime],
     * @param {String|undefined} [answerString],
     * @param {Coding|undefined} [answerCoding],
     * @param {Quantity|undefined} [answerQuantity],
     * @param {Reference|undefined} [answerReference],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            question,
            operator,
            answerBoolean,
            answerDecimal,
            answerInteger,
            answerDate,
            answerDateTime,
            answerTime,
            answerString,
            answerCoding,
            answerQuantity,
            answerReference
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
         * @description The linkId for the question whose answer (or lack of answer) governs whether
    this item is enabled.
         * @property {String}
        */
        Object.defineProperty(this, 'question', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.question,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.question = undefined;
                    return;
                }
                this.__data.question = valueProvided;
            }
        });

        /**
         * @description Specifies the criteria by which the question is enabled.
         * @property {code}
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
         * @description None
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'answerBoolean', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answerBoolean,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answerBoolean = undefined;
                    return;
                }
                this.__data.answerBoolean = valueProvided;
            }
        });

        /**
         * @description None
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'answerDecimal', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answerDecimal,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answerDecimal = undefined;
                    return;
                }
                this.__data.answerDecimal = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'answerInteger', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answerInteger,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answerInteger = undefined;
                    return;
                }
                this.__data.answerInteger = valueProvided;
            }
        });

        /**
         * @description None
         * @property {date|undefined}
        */
        Object.defineProperty(this, 'answerDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answerDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answerDate = undefined;
                    return;
                }
                this.__data.answerDate = valueProvided;
            }
        });

        /**
         * @description None
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'answerDateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answerDateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answerDateTime = undefined;
                    return;
                }
                this.__data.answerDateTime = valueProvided;
            }
        });

        /**
         * @description None
         * @property {time|undefined}
        */
        Object.defineProperty(this, 'answerTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answerTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answerTime = undefined;
                    return;
                }
                this.__data.answerTime = valueProvided;
            }
        });

        /**
         * @description None
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'answerString', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answerString,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answerString = undefined;
                    return;
                }
                this.__data.answerString = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Coding|undefined}
        */
        Object.defineProperty(this, 'answerCoding', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answerCoding,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answerCoding = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.answerCoding = FhirResourceCreator.create(valueProvided, Coding);
            }
        });

        /**
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'answerQuantity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answerQuantity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answerQuantity = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.answerQuantity = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'answerReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answerReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answerReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.answerReference = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            question,
            operator,
            answerBoolean,
            answerDecimal,
            answerInteger,
            answerDate,
            answerDateTime,
            answerTime,
            answerString,
            answerCoding,
            answerQuantity,
            answerReference
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
            question: this.question,
            operator: this.operator,
            answerBoolean: this.answerBoolean,
            answerDecimal: this.answerDecimal,
            answerInteger: this.answerInteger,
            answerDate: this.answerDate,
            answerDateTime: this.answerDateTime,
            answerTime: this.answerTime,
            answerString: this.answerString,
            answerCoding: this.answerCoding && this.answerCoding.toJSON(),
            answerQuantity: this.answerQuantity && this.answerQuantity.toJSON(),
            answerReference: this.answerReference && this.answerReference.toJSON()
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
            if (this.answerCoding) { await this.answerCoding.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.answerQuantity) { await this.answerQuantity.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.answerReference) { await this.answerReference.updateReferencesAsync({ fnUpdateReferenceAsync }); }
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
            question: this.question,
            operator: this.operator,
            answerBoolean: this.answerBoolean,
            answerDecimal: this.answerDecimal,
            answerInteger: this.answerInteger,
            answerDate: this.answerDate,
            answerDateTime: this.answerDateTime,
            answerTime: this.answerTime,
            answerString: this.answerString,
            answerCoding: this.answerCoding && this.answerCoding.toJSONInternal(),
            answerQuantity: this.answerQuantity && this.answerQuantity.toJSONInternal(),
            answerReference: this.answerReference && this.answerReference.toJSONInternal()
        };

        return removeNull(json);
    }
}

module.exports = QuestionnaireEnableWhen;
