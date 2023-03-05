/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
Observation.Component
    Measurements and simple assertions made about a patient, device or other
    subject.
*/
class ObservationComponent extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept} code,
     * @param {Quantity|undefined} [valueQuantity],
     * @param {CodeableConcept|undefined} [valueCodeableConcept],
     * @param {String|undefined} [valueString],
     * @param {Boolean|undefined} [valueBoolean],
     * @param {Int|undefined} [valueInteger],
     * @param {Range|undefined} [valueRange],
     * @param {Ratio|undefined} [valueRatio],
     * @param {SampledData|undefined} [valueSampledData],
     * @param {time|undefined} [valueTime],
     * @param {dateTime|undefined} [valueDateTime],
     * @param {Period|undefined} [valuePeriod],
     * @param {CodeableConcept|undefined} [dataAbsentReason],
     * @param {CodeableConcept[]|undefined} [interpretation],
     * @param {ObservationReferenceRange[]|undefined} [referenceRange],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            code,
            valueQuantity,
            valueCodeableConcept,
            valueString,
            valueBoolean,
            valueInteger,
            valueRange,
            valueRatio,
            valueSampledData,
            valueTime,
            valueDateTime,
            valuePeriod,
            dataAbsentReason,
            interpretation,
            referenceRange,
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
         * @description Describes what was observed. Sometimes this is called the observation "code".
         * @property {CodeableConcept}
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
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.code = FhirResourceCreator.create(valueProvided, CodeableConcept);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.valueQuantity = FhirResourceCreator.create(valueProvided, Quantity);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.valueCodeableConcept = FhirResourceCreator.create(valueProvided, CodeableConcept);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.valueRange = FhirResourceCreator.create(valueProvided, Range);
            }
        });

        /**
         * @description None
         * @property {Ratio|undefined}
        */
        Object.defineProperty(this, 'valueRatio', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueRatio,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueRatio = undefined;
                    return;
                }
                const Ratio = require('../complex_types/ratio.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.valueRatio = FhirResourceCreator.create(valueProvided, Ratio);
            }
        });

        /**
         * @description None
         * @property {SampledData|undefined}
        */
        Object.defineProperty(this, 'valueSampledData', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueSampledData,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueSampledData = undefined;
                    return;
                }
                const SampledData = require('../complex_types/sampledData.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.valueSampledData = FhirResourceCreator.create(valueProvided, SampledData);
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
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'valuePeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valuePeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valuePeriod = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.valuePeriod = FhirResourceCreator.create(valueProvided, Period);
            }
        });

        /**
         * @description Provides a reason why the expected value in the element
    Observation.component.value[x] is missing.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'dataAbsentReason', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dataAbsentReason,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.dataAbsentReason = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.dataAbsentReason = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description A categorical assessment of an observation value.  For example, high, low,
    normal.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'interpretation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.interpretation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.interpretation = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.interpretation = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Guidance on how to interpret the value by comparison to a normal or
    recommended range.
         * @property {ObservationReferenceRange[]|undefined}
        */
        Object.defineProperty(this, 'referenceRange', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.referenceRange,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.referenceRange = undefined;
                    return;
                }
                const ObservationReferenceRange = require('../backbone_elements/observationReferenceRange.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.referenceRange = FhirResourceCreator.createArray(valueProvided, ObservationReferenceRange);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            code,
            valueQuantity,
            valueCodeableConcept,
            valueString,
            valueBoolean,
            valueInteger,
            valueRange,
            valueRatio,
            valueSampledData,
            valueTime,
            valueDateTime,
            valuePeriod,
            dataAbsentReason,
            interpretation,
            referenceRange,
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
            code: this.code && this.code.toJSON(),
            valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
            valueCodeableConcept: this.valueCodeableConcept && this.valueCodeableConcept.toJSON(),
            valueString: this.valueString,
            valueBoolean: this.valueBoolean,
            valueInteger: this.valueInteger,
            valueRange: this.valueRange && this.valueRange.toJSON(),
            valueRatio: this.valueRatio && this.valueRatio.toJSON(),
            valueSampledData: this.valueSampledData && this.valueSampledData.toJSON(),
            valueTime: this.valueTime,
            valueDateTime: this.valueDateTime,
            valuePeriod: this.valuePeriod && this.valuePeriod.toJSON(),
            dataAbsentReason: this.dataAbsentReason && this.dataAbsentReason.toJSON(),
            interpretation: this.interpretation && this.interpretation.map(v => v.toJSON()),
            referenceRange: this.referenceRange && this.referenceRange.map(v => v.toJSON()),
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
            if (this.code) {await this.code.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.valueQuantity) {await this.valueQuantity.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.valueCodeableConcept) {await this.valueCodeableConcept.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.valueRange) {await this.valueRange.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.valueRatio) {await this.valueRatio.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.valueSampledData) {await this.valueSampledData.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.valuePeriod) {await this.valuePeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.dataAbsentReason) {await this.dataAbsentReason.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.interpretation) {await async.each(this.interpretation, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.referenceRange) {await async.each(this.referenceRange, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            code: this.code && this.code.toJSONInternal(),
            valueQuantity: this.valueQuantity && this.valueQuantity.toJSONInternal(),
            valueCodeableConcept: this.valueCodeableConcept && this.valueCodeableConcept.toJSONInternal(),
            valueString: this.valueString,
            valueBoolean: this.valueBoolean,
            valueInteger: this.valueInteger,
            valueRange: this.valueRange && this.valueRange.toJSONInternal(),
            valueRatio: this.valueRatio && this.valueRatio.toJSONInternal(),
            valueSampledData: this.valueSampledData && this.valueSampledData.toJSONInternal(),
            valueTime: this.valueTime,
            valueDateTime: this.valueDateTime,
            valuePeriod: this.valuePeriod && this.valuePeriod.toJSONInternal(),
            dataAbsentReason: this.dataAbsentReason && this.dataAbsentReason.toJSONInternal(),
            interpretation: this.interpretation && this.interpretation.map(v => v.toJSONInternal()),
            referenceRange: this.referenceRange && this.referenceRange.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = ObservationComponent;
