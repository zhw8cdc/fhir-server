

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
NutritionOrder.OralDiet
    A request to supply a diet, formula feeding (enteral) or oral nutritional
    supplement to a patient/resident.
*/
class NutritionOrderOralDiet extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept[]|undefined} [type],
     * @param {Timing[]|undefined} [schedule],
     * @param {NutritionOrderNutrient[]|undefined} [nutrient],
     * @param {NutritionOrderTexture[]|undefined} [texture],
     * @param {CodeableConcept[]|undefined} [fluidConsistencyType],
     * @param {String|undefined} [instruction],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            type,
            schedule,
            nutrient,
            texture,
            fluidConsistencyType,
            instruction
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
         * @description The kind of diet or dietary restriction such as fiber restricted diet or
    diabetic diet.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'type', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.type,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.type = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.type = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The time period and frequency at which the diet should be given.  The diet
    should be given for the combination of all schedules if more than one schedule
    is present.
         * @property {Timing[]|undefined}
        */
        Object.defineProperty(this, 'schedule', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.schedule,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.schedule = undefined;
                    return;
                }
                const Timing = require('../backbone_elements/timing.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.schedule = FhirResourceCreator.createArray(valueProvided, Timing);
            }
        });

        /**
         * @description Class that defines the quantity and type of nutrient modifications (for
    example carbohydrate, fiber or sodium) required for the oral diet.
         * @property {NutritionOrderNutrient[]|undefined}
        */
        Object.defineProperty(this, 'nutrient', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.nutrient,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.nutrient = undefined;
                    return;
                }
                const NutritionOrderNutrient = require('../backbone_elements/nutritionOrderNutrient.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.nutrient = FhirResourceCreator.createArray(valueProvided, NutritionOrderNutrient);
            }
        });

        /**
         * @description Class that describes any texture modifications required for the patient to
    safely consume various types of solid foods.
         * @property {NutritionOrderTexture[]|undefined}
        */
        Object.defineProperty(this, 'texture', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.texture,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.texture = undefined;
                    return;
                }
                const NutritionOrderTexture = require('../backbone_elements/nutritionOrderTexture.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.texture = FhirResourceCreator.createArray(valueProvided, NutritionOrderTexture);
            }
        });

        /**
         * @description The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of
    liquids or fluids served to the patient.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'fluidConsistencyType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.fluidConsistencyType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.fluidConsistencyType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.fluidConsistencyType = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Free text or additional instructions or information pertaining to the oral
    diet.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'instruction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.instruction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.instruction = undefined;
                    return;
                }
                this.__data.instruction = valueProvided;
            }
        });


        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            type,
            schedule,
            nutrient,
            texture,
            fluidConsistencyType,
            instruction
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
            type: this.type && this.type.map(v => v.toJSON()),
            schedule: this.schedule && this.schedule.map(v => v.toJSON()),
            nutrient: this.nutrient && this.nutrient.map(v => v.toJSON()),
            texture: this.texture && this.texture.map(v => v.toJSON()),
            fluidConsistencyType: this.fluidConsistencyType && this.fluidConsistencyType.map(v => v.toJSON()),
            instruction: this.instruction
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
            if (this.type) { await async.each(this.type, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.schedule) { await async.each(this.schedule, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.nutrient) { await async.each(this.nutrient, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.texture) { await async.each(this.texture, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.fluidConsistencyType) { await async.each(this.fluidConsistencyType, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            type: this.type && this.type.map(v => v.toJSONInternal()),
            schedule: this.schedule && this.schedule.map(v => v.toJSONInternal()),
            nutrient: this.nutrient && this.nutrient.map(v => v.toJSONInternal()),
            texture: this.texture && this.texture.map(v => v.toJSONInternal()),
            fluidConsistencyType: this.fluidConsistencyType && this.fluidConsistencyType.map(v => v.toJSONInternal()),
            instruction: this.instruction
        };

        return removeNull(json);
    }
}

module.exports = NutritionOrderOralDiet;
