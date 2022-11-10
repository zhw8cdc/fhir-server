/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


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
                    return;
                }
                let Extension = require('../extensions/extension.js');
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
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.code = new CodeableConcept(valueProvided);
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
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.firstDose = new Quantity(valueProvided);
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
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.maxSingleDose = new Quantity(valueProvided);
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
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.maxDosePerDay = new Quantity(valueProvided);
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
                    return;
                }
                let Ratio = require('../complex_types/ratio.js');
                this.__data.maxDosePerTreatmentPeriod = new Ratio(valueProvided);
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
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.maxTreatmentPeriod = new Quantity(valueProvided);
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
                    return;
                }
                let MedicinalProductPharmaceuticalTargetSpecies = require('../backbone_elements/medicinalProductPharmaceuticalTargetSpecies.js');
                this.__data.targetSpecies = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new MedicinalProductPharmaceuticalTargetSpecies(v)) : [new MedicinalProductPharmaceuticalTargetSpecies(valueProvided)];
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
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = this.toJSON();


        return removeNull(json);
    }
}

module.exports = MedicinalProductPharmaceuticalRouteOfAdministration;
