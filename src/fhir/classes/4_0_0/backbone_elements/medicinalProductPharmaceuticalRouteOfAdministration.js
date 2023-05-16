/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
MedicinalProductPharmaceutical.RouteOfAdministration
    A pharmaceutical product described in terms of its composition and dose form.
*/
class MedicinalProductPharmaceuticalRouteOfAdministration extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept} code,
     * @param {Quantity|undefined} [firstDose],
     * @param {Quantity|undefined} [maxSingleDose],
     * @param {Quantity|undefined} [maxDosePerDay],
     * @param {Ratio|undefined} [maxDosePerTreatmentPeriod],
     * @param {Quantity|undefined} [maxTreatmentPeriod],
     * @param {MedicinalProductPharmaceuticalTargetSpecies[]|undefined} [targetSpecies],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            code,
            firstDose,
            maxSingleDose,
            maxDosePerDay,
            maxDosePerTreatmentPeriod,
            maxTreatmentPeriod,
            targetSpecies,
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
         * @description Coded expression for the route.
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
         * @description The first dose (dose quantity) administered in humans can be specified, for a
    product under investigation, using a numerical value and its unit of
    measurement.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'firstDose', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.firstDose,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.firstDose = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.firstDose = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description The maximum single dose that can be administered as per the protocol of a
    clinical trial can be specified using a numerical value and its unit of
    measurement.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'maxSingleDose', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.maxSingleDose,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.maxSingleDose = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.maxSingleDose = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description The maximum dose per day (maximum dose quantity to be administered in any one
    24-h period) that can be administered as per the protocol referenced in the
    clinical trial authorisation.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'maxDosePerDay', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.maxDosePerDay,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.maxDosePerDay = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.maxDosePerDay = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description The maximum dose per treatment period that can be administered as per the
    protocol referenced in the clinical trial authorisation.
         * @property {Ratio|undefined}
        */
        Object.defineProperty(this, 'maxDosePerTreatmentPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.maxDosePerTreatmentPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.maxDosePerTreatmentPeriod = undefined;
                    return;
                }
                const Ratio = require('../complex_types/ratio.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.maxDosePerTreatmentPeriod = FhirResourceCreator.create(valueProvided, Ratio);
            }
        });

        /**
         * @description The maximum treatment period during which an Investigational Medicinal Product
    can be administered as per the protocol referenced in the clinical trial
    authorisation.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'maxTreatmentPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.maxTreatmentPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.maxTreatmentPeriod = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.maxTreatmentPeriod = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description A species for which this route applies.
         * @property {MedicinalProductPharmaceuticalTargetSpecies[]|undefined}
        */
        Object.defineProperty(this, 'targetSpecies', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.targetSpecies,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.targetSpecies = undefined;
                    return;
                }
                const MedicinalProductPharmaceuticalTargetSpecies = require('../backbone_elements/medicinalProductPharmaceuticalTargetSpecies.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.targetSpecies = FhirResourceCreator.createArray(valueProvided, MedicinalProductPharmaceuticalTargetSpecies);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            code,
            firstDose,
            maxSingleDose,
            maxDosePerDay,
            maxDosePerTreatmentPeriod,
            maxTreatmentPeriod,
            targetSpecies,
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
            firstDose: this.firstDose && this.firstDose.toJSON(),
            maxSingleDose: this.maxSingleDose && this.maxSingleDose.toJSON(),
            maxDosePerDay: this.maxDosePerDay && this.maxDosePerDay.toJSON(),
            maxDosePerTreatmentPeriod: this.maxDosePerTreatmentPeriod && this.maxDosePerTreatmentPeriod.toJSON(),
            maxTreatmentPeriod: this.maxTreatmentPeriod && this.maxTreatmentPeriod.toJSON(),
            targetSpecies: this.targetSpecies && this.targetSpecies.map(v => v.toJSON()),
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
            if (this.firstDose) {await this.firstDose.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.maxSingleDose) {await this.maxSingleDose.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.maxDosePerDay) {await this.maxDosePerDay.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.maxDosePerTreatmentPeriod) {await this.maxDosePerTreatmentPeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.maxTreatmentPeriod) {await this.maxTreatmentPeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.targetSpecies) {await async.each(this.targetSpecies, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            firstDose: this.firstDose && this.firstDose.toJSONInternal(),
            maxSingleDose: this.maxSingleDose && this.maxSingleDose.toJSONInternal(),
            maxDosePerDay: this.maxDosePerDay && this.maxDosePerDay.toJSONInternal(),
            maxDosePerTreatmentPeriod: this.maxDosePerTreatmentPeriod && this.maxDosePerTreatmentPeriod.toJSONInternal(),
            maxTreatmentPeriod: this.maxTreatmentPeriod && this.maxTreatmentPeriod.toJSONInternal(),
            targetSpecies: this.targetSpecies && this.targetSpecies.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = MedicinalProductPharmaceuticalRouteOfAdministration;
