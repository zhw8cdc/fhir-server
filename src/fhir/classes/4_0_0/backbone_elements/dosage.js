/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
Dosage
    Indicates how the medication is/was taken or should be taken by the patient.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class Dosage extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Int|undefined} [sequence],
     * @param {String|undefined} [text],
     * @param {CodeableConcept[]|undefined} [additionalInstruction],
     * @param {String|undefined} [patientInstruction],
     * @param {Timing|undefined} [timing],
     * @param {Boolean|undefined} [asNeededBoolean],
     * @param {CodeableConcept|undefined} [asNeededCodeableConcept],
     * @param {CodeableConcept|undefined} [site],
     * @param {CodeableConcept|undefined} [route],
     * @param {CodeableConcept|undefined} [method],
     * @param {DosageDoseAndRate[]|undefined} [doseAndRate],
     * @param {Ratio|undefined} [maxDosePerPeriod],
     * @param {Quantity|undefined} [maxDosePerAdministration],
     * @param {Quantity|undefined} [maxDosePerLifetime],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            sequence,
            text,
            additionalInstruction,
            patientInstruction,
            timing,
            asNeededBoolean,
            asNeededCodeableConcept,
            site,
            route,
            method,
            doseAndRate,
            maxDosePerPeriod,
            maxDosePerAdministration,
            maxDosePerLifetime,
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
         * @description Indicates the order in which the dosage instructions should be applied or
    interpreted.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'sequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sequence = undefined;
                    return;
                }
                this.__data.sequence = valueProvided;
            }
        });

        /**
         * @description Free text dosage instructions e.g. SIG.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'text', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.text,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.text = undefined;
                    return;
                }
                this.__data.text = valueProvided;
            }
        });

        /**
         * @description Supplemental instructions to the patient on how to take the medication  (e.g.
    "with meals" or"take half to one hour before food") or warnings for the
    patient about the medication (e.g. "may cause drowsiness" or "avoid exposure
    of skin to direct sunlight or sunlamps").
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'additionalInstruction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.additionalInstruction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.additionalInstruction = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.additionalInstruction = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Instructions in terms that are understood by the patient or consumer.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'patientInstruction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.patientInstruction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.patientInstruction = undefined;
                    return;
                }
                this.__data.patientInstruction = valueProvided;
            }
        });

        /**
         * @description When medication should be administered.
         * @property {Timing|undefined}
        */
        Object.defineProperty(this, 'timing', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timing,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.timing = undefined;
                    return;
                }
                const Timing = require('../backbone_elements/timing.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.timing = FhirResourceCreator.create(valueProvided, Timing);
            }
        });

        /**
         * @description None
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'asNeededBoolean', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.asNeededBoolean,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.asNeededBoolean = undefined;
                    return;
                }
                this.__data.asNeededBoolean = valueProvided;
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'asNeededCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.asNeededCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.asNeededCodeableConcept = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.asNeededCodeableConcept = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Body site to administer to.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'site', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.site,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.site = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.site = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description How drug should enter body.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'route', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.route,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.route = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.route = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Technique for administering medication.
         * @property {CodeableConcept|undefined}
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
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.method = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The amount of medication administered.
         * @property {DosageDoseAndRate[]|undefined}
        */
        Object.defineProperty(this, 'doseAndRate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.doseAndRate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.doseAndRate = undefined;
                    return;
                }
                const DosageDoseAndRate = require('../backbone_elements/dosageDoseAndRate.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.doseAndRate = FhirResourceCreator.createArray(valueProvided, DosageDoseAndRate);
            }
        });

        /**
         * @description Upper limit on medication per unit of time.
         * @property {Ratio|undefined}
        */
        Object.defineProperty(this, 'maxDosePerPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.maxDosePerPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.maxDosePerPeriod = undefined;
                    return;
                }
                const Ratio = require('../complex_types/ratio.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.maxDosePerPeriod = FhirResourceCreator.create(valueProvided, Ratio);
            }
        });

        /**
         * @description Upper limit on medication per administration.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'maxDosePerAdministration', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.maxDosePerAdministration,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.maxDosePerAdministration = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.maxDosePerAdministration = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description Upper limit on medication per lifetime of the patient.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'maxDosePerLifetime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.maxDosePerLifetime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.maxDosePerLifetime = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.maxDosePerLifetime = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            sequence,
            text,
            additionalInstruction,
            patientInstruction,
            timing,
            asNeededBoolean,
            asNeededCodeableConcept,
            site,
            route,
            method,
            doseAndRate,
            maxDosePerPeriod,
            maxDosePerAdministration,
            maxDosePerLifetime,
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
            sequence: this.sequence,
            text: this.text,
            additionalInstruction: this.additionalInstruction && this.additionalInstruction.map(v => v.toJSON()),
            patientInstruction: this.patientInstruction,
            timing: this.timing && this.timing.toJSON(),
            asNeededBoolean: this.asNeededBoolean,
            asNeededCodeableConcept: this.asNeededCodeableConcept && this.asNeededCodeableConcept.toJSON(),
            site: this.site && this.site.toJSON(),
            route: this.route && this.route.toJSON(),
            method: this.method && this.method.toJSON(),
            doseAndRate: this.doseAndRate && this.doseAndRate.map(v => v.toJSON()),
            maxDosePerPeriod: this.maxDosePerPeriod && this.maxDosePerPeriod.toJSON(),
            maxDosePerAdministration: this.maxDosePerAdministration && this.maxDosePerAdministration.toJSON(),
            maxDosePerLifetime: this.maxDosePerLifetime && this.maxDosePerLifetime.toJSON(),
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
            if (this.additionalInstruction) {await async.each(this.additionalInstruction, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.timing) {await this.timing.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.asNeededCodeableConcept) {await this.asNeededCodeableConcept.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.site) {await this.site.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.route) {await this.route.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.method) {await this.method.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.doseAndRate) {await async.each(this.doseAndRate, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.maxDosePerPeriod) {await this.maxDosePerPeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.maxDosePerAdministration) {await this.maxDosePerAdministration.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.maxDosePerLifetime) {await this.maxDosePerLifetime.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            sequence: this.sequence,
            text: this.text,
            additionalInstruction: this.additionalInstruction && this.additionalInstruction.map(v => v.toJSONInternal()),
            patientInstruction: this.patientInstruction,
            timing: this.timing && this.timing.toJSONInternal(),
            asNeededBoolean: this.asNeededBoolean,
            asNeededCodeableConcept: this.asNeededCodeableConcept && this.asNeededCodeableConcept.toJSONInternal(),
            site: this.site && this.site.toJSONInternal(),
            route: this.route && this.route.toJSONInternal(),
            method: this.method && this.method.toJSONInternal(),
            doseAndRate: this.doseAndRate && this.doseAndRate.map(v => v.toJSONInternal()),
            maxDosePerPeriod: this.maxDosePerPeriod && this.maxDosePerPeriod.toJSONInternal(),
            maxDosePerAdministration: this.maxDosePerAdministration && this.maxDosePerAdministration.toJSONInternal(),
            maxDosePerLifetime: this.maxDosePerLifetime && this.maxDosePerLifetime.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = Dosage;
