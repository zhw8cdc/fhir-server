

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
UsageContext
    Specifies clinical/business/etc. metadata that can be used to retrieve, index
    and/or categorize an artifact. This metadata can either be specific to the
    applicable population (e.g., age category, DRG) or the specific context of
    care (e.g., venue, care setting, provider of care).
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class UsageContext extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Coding} code,
     * @param {CodeableConcept|undefined} [valueCodeableConcept],
     * @param {Quantity|undefined} [valueQuantity],
     * @param {Range|undefined} [valueRange],
     * @param {Reference|undefined} [valueReference],
    */
    constructor (
        {
            id,
            extension,
            code,
            valueCodeableConcept,
            valueQuantity,
            valueRange,
            valueReference
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
         * @description A code that identifies the type of context being specified by this usage
    context.
         * @property {Coding}
        */
        Object.defineProperty(this, 'code', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.code,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.code = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.code = FhirResourceCreator.create(valueProvided, Coding);
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'valueCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueCodeableConcept = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.valueCodeableConcept = FhirResourceCreator.create(valueProvided, CodeableConcept);
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.valueQuantity = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description None
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'valueRange', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueRange,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueRange = undefined;
                    return;
                }
                const Range = require('../complex_types/range.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.valueRange = FhirResourceCreator.create(valueProvided, Range);
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.valueReference = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            code,
            valueCodeableConcept,
            valueQuantity,
            valueRange,
            valueReference
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
            code: this.code && this.code.toJSON(),
            valueCodeableConcept: this.valueCodeableConcept && this.valueCodeableConcept.toJSON(),
            valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
            valueRange: this.valueRange && this.valueRange.toJSON(),
            valueReference: this.valueReference && this.valueReference.toJSON()
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync ({ fnUpdateReferenceAsync }) {
            if (this.extension) { await async.each(this.extension, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.code) { await this.code.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.valueCodeableConcept) { await this.valueCodeableConcept.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.valueQuantity) { await this.valueQuantity.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.valueRange) { await this.valueRange.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.valueReference) { await this.valueReference.updateReferencesAsync({ fnUpdateReferenceAsync }); }
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
            code: this.code && this.code.toJSONInternal(),
            valueCodeableConcept: this.valueCodeableConcept && this.valueCodeableConcept.toJSONInternal(),
            valueQuantity: this.valueQuantity && this.valueQuantity.toJSONInternal(),
            valueRange: this.valueRange && this.valueRange.toJSONInternal(),
            valueReference: this.valueReference && this.valueReference.toJSONInternal()
        };

        return removeNull(json);
    }
}

module.exports = UsageContext;
