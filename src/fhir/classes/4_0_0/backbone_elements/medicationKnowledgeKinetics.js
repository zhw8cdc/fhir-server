/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
MedicationKnowledge.Kinetics
    Information about a medication that is used to support knowledge.
*/
class MedicationKnowledgeKinetics extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Quantity[]|undefined} [areaUnderCurve],
     * @param {Quantity[]|undefined} [lethalDose50],
     * @param {Quantity|undefined} [halfLifePeriod],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            areaUnderCurve,
            lethalDose50,
            halfLifePeriod,
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
         * @description The drug concentration measured at certain discrete points in time.
         * @property {Quantity[]|undefined}
        */
        Object.defineProperty(this, 'areaUnderCurve', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.areaUnderCurve,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.areaUnderCurve = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                this.__data.areaUnderCurve = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Quantity(v)) : [new Quantity(valueProvided)];
            }
        });

        /**
         * @description The median lethal dose of a drug.
         * @property {Quantity[]|undefined}
        */
        Object.defineProperty(this, 'lethalDose50', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.lethalDose50,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.lethalDose50 = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                this.__data.lethalDose50 = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Quantity(v)) : [new Quantity(valueProvided)];
            }
        });

        /**
         * @description The time required for any specified property (e.g., the concentration of a
    substance in the body) to decrease by half.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'halfLifePeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.halfLifePeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.halfLifePeriod = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                this.__data.halfLifePeriod = new Quantity(valueProvided);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            areaUnderCurve,
            lethalDose50,
            halfLifePeriod,
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
            areaUnderCurve: this.areaUnderCurve && this.areaUnderCurve.map(v => v.toJSON()),
            lethalDose50: this.lethalDose50 && this.lethalDose50.map(v => v.toJSON()),
            halfLifePeriod: this.halfLifePeriod && this.halfLifePeriod.toJSON(),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.extension) { async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) { async.each(this.modifierExtension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.areaUnderCurve) { async.each(this.areaUnderCurve, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.lethalDose50) { async.each(this.lethalDose50, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.halfLifePeriod) {await this.halfLifePeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            areaUnderCurve: this.areaUnderCurve && this.areaUnderCurve.map(v => v.toJSONInternal()),
            lethalDose50: this.lethalDose50 && this.lethalDose50.map(v => v.toJSONInternal()),
            halfLifePeriod: this.halfLifePeriod && this.halfLifePeriod.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = MedicationKnowledgeKinetics;
