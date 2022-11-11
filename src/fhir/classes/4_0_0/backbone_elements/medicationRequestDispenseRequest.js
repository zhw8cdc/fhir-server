/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
MedicationRequest.DispenseRequest
    An order or request for both supply of the medication and the instructions for
    administration of the medication to a patient. The resource is called
    "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder"
    to generalize the use across inpatient and outpatient settings, including care
    plans, etc., and to harmonize with workflow patterns.
*/
class MedicationRequestDispenseRequest extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {MedicationRequestInitialFill|undefined} [initialFill],
     * @param {Quantity|undefined} [dispenseInterval],
     * @param {Period|undefined} [validityPeriod],
     * @param {unsignedInt|undefined} [numberOfRepeatsAllowed],
     * @param {Quantity|undefined} [quantity],
     * @param {Quantity|undefined} [expectedSupplyDuration],
     * @param {Reference|undefined} [performer],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            initialFill,
            dispenseInterval,
            validityPeriod,
            numberOfRepeatsAllowed,
            quantity,
            expectedSupplyDuration,
            performer,
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
                    this.__data.modifierExtension = undefined;
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description Indicates the quantity or duration for the first dispense of the medication.
         * @property {MedicationRequestInitialFill|undefined}
        */
        Object.defineProperty(this, 'initialFill', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.initialFill,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.initialFill = undefined;
                    return;
                }
                let MedicationRequestInitialFill = require('../backbone_elements/medicationRequestInitialFill.js');
                this.__data.initialFill = new MedicationRequestInitialFill(valueProvided);
            }
        });

        /**
         * @description The minimum period of time that must occur between dispenses of the
    medication.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'dispenseInterval', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dispenseInterval,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.dispenseInterval = undefined;
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.dispenseInterval = new Quantity(valueProvided);
            }
        });

        /**
         * @description This indicates the validity period of a prescription (stale dating the
    Prescription).
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'validityPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.validityPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.validityPeriod = undefined;
                    return;
                }
                let Period = require('../complex_types/period.js');
                this.__data.validityPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description An integer indicating the number of times, in addition to the original
    dispense, (aka refills or repeats) that the patient can receive the prescribed
    medication. Usage Notes: This integer does not include the original order
    dispense. This means that if an order indicates dispense 30 tablets plus "3
    repeats", then the order can be dispensed a total of 4 times and the patient
    can receive a total of 120 tablets.  A prescriber may explicitly say that zero
    refills are permitted after the initial dispense.
         * @property {unsignedInt|undefined}
        */
        Object.defineProperty(this, 'numberOfRepeatsAllowed', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.numberOfRepeatsAllowed,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.numberOfRepeatsAllowed = undefined;
                    return;
                }
                this.__data.numberOfRepeatsAllowed = valueProvided;
            }
        });

        /**
         * @description The amount that is to be dispensed for one fill.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'quantity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.quantity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.quantity = undefined;
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.quantity = new Quantity(valueProvided);
            }
        });

        /**
         * @description Identifies the period time over which the supplied product is expected to be
    used, or the length of time the dispense is expected to last.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'expectedSupplyDuration', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.expectedSupplyDuration,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.expectedSupplyDuration = undefined;
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.expectedSupplyDuration = new Quantity(valueProvided);
            }
        });

        /**
         * @description Indicates the intended dispensing Organization specified by the prescriber.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'performer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.performer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.performer = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.performer = new Reference(valueProvided);
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            initialFill,
            dispenseInterval,
            validityPeriod,
            numberOfRepeatsAllowed,
            quantity,
            expectedSupplyDuration,
            performer,
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
            initialFill: this.initialFill && this.initialFill.toJSON(),
            dispenseInterval: this.dispenseInterval && this.dispenseInterval.toJSON(),
            validityPeriod: this.validityPeriod && this.validityPeriod.toJSON(),
            numberOfRepeatsAllowed: this.numberOfRepeatsAllowed,
            quantity: this.quantity && this.quantity.toJSON(),
            expectedSupplyDuration: this.expectedSupplyDuration && this.expectedSupplyDuration.toJSON(),
            performer: this.performer && this.performer.toJSON(),
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

module.exports = MedicationRequestDispenseRequest;
