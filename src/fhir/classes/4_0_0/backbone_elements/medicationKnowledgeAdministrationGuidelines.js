/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
MedicationKnowledge.AdministrationGuidelines
    Information about a medication that is used to support knowledge.
*/
class MedicationKnowledgeAdministrationGuidelines extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {MedicationKnowledgeDosage[]|undefined} [dosage],
     * @param {CodeableConcept|undefined} [indicationCodeableConcept],
     * @param {Reference|undefined} [indicationReference],
     * @param {MedicationKnowledgePatientCharacteristics[]|undefined} [patientCharacteristics],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            dosage,
            indicationCodeableConcept,
            indicationReference,
            patientCharacteristics,
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
         * @description Dosage for the medication for the specific guidelines.
         * @property {MedicationKnowledgeDosage[]|undefined}
        */
        Object.defineProperty(this, 'dosage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dosage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.dosage = undefined;
                    return;
                }
                const MedicationKnowledgeDosage = require('../backbone_elements/medicationKnowledgeDosage.js');
                this.__data.dosage = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new MedicationKnowledgeDosage(v)) : [new MedicationKnowledgeDosage(valueProvided)];
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'indicationCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.indicationCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.indicationCodeableConcept = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.indicationCodeableConcept = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'indicationReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.indicationReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.indicationReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.indicationReference = new Reference(valueProvided);
            }
        });

        /**
         * @description Characteristics of the patient that are relevant to the administration
    guidelines (for example, height, weight, gender, etc.).
         * @property {MedicationKnowledgePatientCharacteristics[]|undefined}
        */
        Object.defineProperty(this, 'patientCharacteristics', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.patientCharacteristics,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.patientCharacteristics = undefined;
                    return;
                }
                const MedicationKnowledgePatientCharacteristics = require('../backbone_elements/medicationKnowledgePatientCharacteristics.js');
                this.__data.patientCharacteristics = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new MedicationKnowledgePatientCharacteristics(v)) : [new MedicationKnowledgePatientCharacteristics(valueProvided)];
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            dosage,
            indicationCodeableConcept,
            indicationReference,
            patientCharacteristics,
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
            dosage: this.dosage && this.dosage.map(v => v.toJSON()),
            indicationCodeableConcept: this.indicationCodeableConcept && this.indicationCodeableConcept.toJSON(),
            indicationReference: this.indicationReference && this.indicationReference.toJSON(),
            patientCharacteristics: this.patientCharacteristics && this.patientCharacteristics.map(v => v.toJSON()),
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
            if (this.dosage) {this.dosage.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.indicationCodeableConcept) {this.indicationCodeableConcept.updateReferences({fnUpdateReference});}
            if (this.indicationReference) {this.indicationReference.updateReferences({fnUpdateReference});}
            if (this.patientCharacteristics) {this.patientCharacteristics.forEach(v => v.updateReferences({fnUpdateReference}));}
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

module.exports = MedicationKnowledgeAdministrationGuidelines;
