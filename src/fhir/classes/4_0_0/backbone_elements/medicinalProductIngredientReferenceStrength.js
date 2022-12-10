/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
MedicinalProductIngredient.ReferenceStrength
    An ingredient of a manufactured item or pharmaceutical product.
*/
class MedicinalProductIngredientReferenceStrength extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [substance],
     * @param {Ratio} strength,
     * @param {Ratio|undefined} [strengthLowLimit],
     * @param {String|undefined} [measurementPoint],
     * @param {CodeableConcept[]|undefined} [country],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            substance,
            strength,
            strengthLowLimit,
            measurementPoint,
            country,
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
         * @description Relevant reference substance.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'substance', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.substance,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.substance = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.substance = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Strength expressed in terms of a reference substance.
         * @property {Ratio}
        */
        Object.defineProperty(this, 'strength', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.strength,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.strength = undefined;
                    return;
                }
                const Ratio = require('../complex_types/ratio.js');
                this.__data.strength = new Ratio(valueProvided);
            }
        });

        /**
         * @description Strength expressed in terms of a reference substance.
         * @property {Ratio|undefined}
        */
        Object.defineProperty(this, 'strengthLowLimit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.strengthLowLimit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.strengthLowLimit = undefined;
                    return;
                }
                const Ratio = require('../complex_types/ratio.js');
                this.__data.strengthLowLimit = new Ratio(valueProvided);
            }
        });

        /**
         * @description For when strength is measured at a particular point or distance.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'measurementPoint', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.measurementPoint,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.measurementPoint = undefined;
                    return;
                }
                this.__data.measurementPoint = valueProvided;
            }
        });

        /**
         * @description The country or countries for which the strength range applies.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'country', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.country,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.country = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.country = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            substance,
            strength,
            strengthLowLimit,
            measurementPoint,
            country,
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
            substance: this.substance && this.substance.toJSON(),
            strength: this.strength && this.strength.toJSON(),
            strengthLowLimit: this.strengthLowLimit && this.strengthLowLimit.toJSON(),
            measurementPoint: this.measurementPoint,
            country: this.country && this.country.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Reference} fnUpdateReference
     * @return {void}
     */
    updateReferences({fnUpdateReference}) {
            if (this.extension) {this.extension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.modifierExtension) {this.modifierExtension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.substance) {this.substance.updateReferences({fnUpdateReference});}
            if (this.strength) {this.strength.updateReferences({fnUpdateReference});}
            if (this.strengthLowLimit) {this.strengthLowLimit.updateReferences({fnUpdateReference});}
            if (this.country) {this.country.forEach(v => v.updateReferences({fnUpdateReference}));}
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

module.exports = MedicinalProductIngredientReferenceStrength;
