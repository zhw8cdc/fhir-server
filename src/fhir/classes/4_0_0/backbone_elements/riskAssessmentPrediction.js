

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
RiskAssessment.Prediction
    An assessment of the likely outcome(s) for a patient or other subject as well
    as the likelihood of each outcome.
*/
class RiskAssessmentPrediction extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [outcome],
     * @param {decimal|undefined} [probabilityDecimal],
     * @param {Range|undefined} [probabilityRange],
     * @param {CodeableConcept|undefined} [qualitativeRisk],
     * @param {decimal|undefined} [relativeRisk],
     * @param {Period|undefined} [whenPeriod],
     * @param {Range|undefined} [whenRange],
     * @param {String|undefined} [rationale],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            outcome,
            probabilityDecimal,
            probabilityRange,
            qualitativeRisk,
            relativeRisk,
            whenPeriod,
            whenRange,
            rationale
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
         * @description One of the potential outcomes for the patient (e.g. remission, death,  a
    particular condition).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'outcome', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.outcome,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.outcome = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.outcome = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description None
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'probabilityDecimal', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.probabilityDecimal,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.probabilityDecimal = undefined;
                    return;
                }
                this.__data.probabilityDecimal = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'probabilityRange', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.probabilityRange,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.probabilityRange = undefined;
                    return;
                }
                const Range = require('../complex_types/range.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.probabilityRange = FhirResourceCreator.create(valueProvided, Range);
            }
        });

        /**
         * @description Indicates how likely the outcome is (in the specified timeframe), expressed as
    a qualitative value (e.g. low, medium, or high).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'qualitativeRisk', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.qualitativeRisk,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.qualitativeRisk = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.qualitativeRisk = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Indicates the risk for this particular subject (with their specific
    characteristics) divided by the risk of the population in general.  (Numbers
    greater than 1 = higher risk than the population, numbers less than 1 = lower
    risk.).
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'relativeRisk', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.relativeRisk,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.relativeRisk = undefined;
                    return;
                }
                this.__data.relativeRisk = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'whenPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.whenPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.whenPeriod = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.whenPeriod = FhirResourceCreator.create(valueProvided, Period);
            }
        });

        /**
         * @description None
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'whenRange', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.whenRange,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.whenRange = undefined;
                    return;
                }
                const Range = require('../complex_types/range.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.whenRange = FhirResourceCreator.create(valueProvided, Range);
            }
        });

        /**
         * @description Additional information explaining the basis for the prediction.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'rationale', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.rationale,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.rationale = undefined;
                    return;
                }
                this.__data.rationale = valueProvided;
            }
        });


        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            outcome,
            probabilityDecimal,
            probabilityRange,
            qualitativeRisk,
            relativeRisk,
            whenPeriod,
            whenRange,
            rationale
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
            outcome: this.outcome && this.outcome.toJSON(),
            probabilityDecimal: this.probabilityDecimal,
            probabilityRange: this.probabilityRange && this.probabilityRange.toJSON(),
            qualitativeRisk: this.qualitativeRisk && this.qualitativeRisk.toJSON(),
            relativeRisk: this.relativeRisk,
            whenPeriod: this.whenPeriod && this.whenPeriod.toJSON(),
            whenRange: this.whenRange && this.whenRange.toJSON(),
            rationale: this.rationale
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
            if (this.outcome) { await this.outcome.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.probabilityRange) { await this.probabilityRange.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.qualitativeRisk) { await this.qualitativeRisk.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.whenPeriod) { await this.whenPeriod.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.whenRange) { await this.whenRange.updateReferencesAsync({ fnUpdateReferenceAsync }); }
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
            outcome: this.outcome && this.outcome.toJSONInternal(),
            probabilityDecimal: this.probabilityDecimal,
            probabilityRange: this.probabilityRange && this.probabilityRange.toJSONInternal(),
            qualitativeRisk: this.qualitativeRisk && this.qualitativeRisk.toJSONInternal(),
            relativeRisk: this.relativeRisk,
            whenPeriod: this.whenPeriod && this.whenPeriod.toJSONInternal(),
            whenRange: this.whenRange && this.whenRange.toJSONInternal(),
            rationale: this.rationale
        };

        return removeNull(json);
    }
}

module.exports = RiskAssessmentPrediction;
