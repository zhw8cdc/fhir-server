/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
SubstanceSpecification.Relationship
    The detailed description of a substance, typically at a level beyond what is
    used for prescribing.
*/
class SubstanceSpecificationRelationship extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Reference|undefined} [substanceReference],
     * @param {CodeableConcept|undefined} [substanceCodeableConcept],
     * @param {CodeableConcept|undefined} [relationship],
     * @param {Boolean|undefined} [isDefining],
     * @param {Quantity|undefined} [amountQuantity],
     * @param {Range|undefined} [amountRange],
     * @param {Ratio|undefined} [amountRatio],
     * @param {String|undefined} [amountString],
     * @param {Ratio|undefined} [amountRatioLowLimit],
     * @param {CodeableConcept|undefined} [amountType],
     * @param {Reference[]|undefined} [source],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            substanceReference,
            substanceCodeableConcept,
            relationship,
            isDefining,
            amountQuantity,
            amountRange,
            amountRatio,
            amountString,
            amountRatioLowLimit,
            amountType,
            source
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
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'substanceReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.substanceReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.substanceReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.substanceReference = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'substanceCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.substanceCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.substanceCodeableConcept = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.substanceCodeableConcept = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description For example "salt to parent", "active moiety", "starting material".
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'relationship', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.relationship,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.relationship = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.relationship = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description For example where an enzyme strongly bonds with a particular substance, this
    is a defining relationship for that enzyme, out of several possible substance
    relationships.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'isDefining', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.isDefining,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.isDefining = undefined;
                    return;
                }
                this.__data.isDefining = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'amountQuantity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.amountQuantity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.amountQuantity = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.amountQuantity = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description None
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'amountRange', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.amountRange,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.amountRange = undefined;
                    return;
                }
                const Range = require('../complex_types/range.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.amountRange = FhirResourceCreator.create(valueProvided, Range);
            }
        });

        /**
         * @description None
         * @property {Ratio|undefined}
        */
        Object.defineProperty(this, 'amountRatio', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.amountRatio,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.amountRatio = undefined;
                    return;
                }
                const Ratio = require('../complex_types/ratio.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.amountRatio = FhirResourceCreator.create(valueProvided, Ratio);
            }
        });

        /**
         * @description None
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'amountString', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.amountString,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.amountString = undefined;
                    return;
                }
                this.__data.amountString = valueProvided;
            }
        });

        /**
         * @description For use when the numeric.
         * @property {Ratio|undefined}
        */
        Object.defineProperty(this, 'amountRatioLowLimit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.amountRatioLowLimit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.amountRatioLowLimit = undefined;
                    return;
                }
                const Ratio = require('../complex_types/ratio.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.amountRatioLowLimit = FhirResourceCreator.create(valueProvided, Ratio);
            }
        });

        /**
         * @description An operator for the amount, for example "average", "approximately", "less
    than".
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'amountType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.amountType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.amountType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.amountType = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Supporting literature.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'source', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.source,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.source = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.source = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            substanceReference,
            substanceCodeableConcept,
            relationship,
            isDefining,
            amountQuantity,
            amountRange,
            amountRatio,
            amountString,
            amountRatioLowLimit,
            amountType,
            source
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
            substanceReference: this.substanceReference && this.substanceReference.toJSON(),
            substanceCodeableConcept: this.substanceCodeableConcept && this.substanceCodeableConcept.toJSON(),
            relationship: this.relationship && this.relationship.toJSON(),
            isDefining: this.isDefining,
            amountQuantity: this.amountQuantity && this.amountQuantity.toJSON(),
            amountRange: this.amountRange && this.amountRange.toJSON(),
            amountRatio: this.amountRatio && this.amountRatio.toJSON(),
            amountString: this.amountString,
            amountRatioLowLimit: this.amountRatioLowLimit && this.amountRatioLowLimit.toJSON(),
            amountType: this.amountType && this.amountType.toJSON(),
            source: this.source && this.source.map(v => v.toJSON())
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
            if (this.substanceReference) { await this.substanceReference.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.substanceCodeableConcept) { await this.substanceCodeableConcept.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.relationship) { await this.relationship.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.amountQuantity) { await this.amountQuantity.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.amountRange) { await this.amountRange.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.amountRatio) { await this.amountRatio.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.amountRatioLowLimit) { await this.amountRatioLowLimit.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.amountType) { await this.amountType.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.source) { await async.each(this.source, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            substanceReference: this.substanceReference && this.substanceReference.toJSONInternal(),
            substanceCodeableConcept: this.substanceCodeableConcept && this.substanceCodeableConcept.toJSONInternal(),
            relationship: this.relationship && this.relationship.toJSONInternal(),
            isDefining: this.isDefining,
            amountQuantity: this.amountQuantity && this.amountQuantity.toJSONInternal(),
            amountRange: this.amountRange && this.amountRange.toJSONInternal(),
            amountRatio: this.amountRatio && this.amountRatio.toJSONInternal(),
            amountString: this.amountString,
            amountRatioLowLimit: this.amountRatioLowLimit && this.amountRatioLowLimit.toJSONInternal(),
            amountType: this.amountType && this.amountType.toJSONInternal(),
            source: this.source && this.source.map(v => v.toJSONInternal())
        };

        return removeNull(json);
    }
}

module.exports = SubstanceSpecificationRelationship;
