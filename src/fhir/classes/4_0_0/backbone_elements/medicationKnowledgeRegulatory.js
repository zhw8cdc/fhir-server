/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
MedicationKnowledge.Regulatory
    Information about a medication that is used to support knowledge.
*/
class MedicationKnowledgeRegulatory extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Reference} regulatoryAuthority,
     * @param {MedicationKnowledgeSubstitution[]|undefined} [substitution],
     * @param {MedicationKnowledgeSchedule[]|undefined} [schedule],
     * @param {MedicationKnowledgeMaxDispense|undefined} [maxDispense],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            regulatoryAuthority,
            substitution,
            schedule,
            maxDispense,
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
         * @description The authority that is specifying the regulations.
         * @property {Reference}
        */
        Object.defineProperty(this, 'regulatoryAuthority', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.regulatoryAuthority,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.regulatoryAuthority = new Reference(valueProvided);
            }
        });

        /**
         * @description Specifies if changes are allowed when dispensing a medication from a
    regulatory perspective.
         * @property {MedicationKnowledgeSubstitution[]|undefined}
        */
        Object.defineProperty(this, 'substitution', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.substitution,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MedicationKnowledgeSubstitution = require('../backbone_elements/medicationKnowledgeSubstitution.js');
                this.__data.substitution = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new MedicationKnowledgeSubstitution(v)) : [new MedicationKnowledgeSubstitution(valueProvided)];
            }
        });

        /**
         * @description Specifies the schedule of a medication in jurisdiction.
         * @property {MedicationKnowledgeSchedule[]|undefined}
        */
        Object.defineProperty(this, 'schedule', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.schedule,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MedicationKnowledgeSchedule = require('../backbone_elements/medicationKnowledgeSchedule.js');
                this.__data.schedule = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new MedicationKnowledgeSchedule(v)) : [new MedicationKnowledgeSchedule(valueProvided)];
            }
        });

        /**
         * @description The maximum number of units of the medication that can be dispensed in a
    period.
         * @property {MedicationKnowledgeMaxDispense|undefined}
        */
        Object.defineProperty(this, 'maxDispense', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.maxDispense,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MedicationKnowledgeMaxDispense = require('../backbone_elements/medicationKnowledgeMaxDispense.js');
                this.__data.maxDispense = new MedicationKnowledgeMaxDispense(valueProvided);
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            regulatoryAuthority,
            substitution,
            schedule,
            maxDispense,
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
            regulatoryAuthority: this.regulatoryAuthority && this.regulatoryAuthority.toJSON(),
            substitution: this.substitution && this.substitution.map(v => v.toJSON()),
            schedule: this.schedule && this.schedule.map(v => v.toJSON()),
            maxDispense: this.maxDispense && this.maxDispense.toJSON(),
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

module.exports = MedicationKnowledgeRegulatory;
