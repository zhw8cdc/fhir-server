/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
MedicinalProductContraindication.OtherTherapy
    The clinical particulars - indications, contraindications etc. of a medicinal
    product, including for regulatory purposes.
*/
class MedicinalProductContraindicationOtherTherapy extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept} therapyRelationshipType,
     * @param {CodeableConcept|undefined} [medicationCodeableConcept],
     * @param {Reference|undefined} [medicationReference],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            therapyRelationshipType,
            medicationCodeableConcept,
            medicationReference,
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
         * @description The type of relationship between the medicinal product indication or
    contraindication and another therapy.
         * @property {CodeableConcept}
        */
        Object.defineProperty(this, 'therapyRelationshipType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.therapyRelationshipType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.therapyRelationshipType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.therapyRelationshipType = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'medicationCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.medicationCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.medicationCodeableConcept = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.medicationCodeableConcept = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'medicationReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.medicationReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.medicationReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.medicationReference = FhirResourceCreator.create(valueProvided, Reference);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            therapyRelationshipType,
            medicationCodeableConcept,
            medicationReference,
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
            therapyRelationshipType: this.therapyRelationshipType && this.therapyRelationshipType.toJSON(),
            medicationCodeableConcept: this.medicationCodeableConcept && this.medicationCodeableConcept.toJSON(),
            medicationReference: this.medicationReference && this.medicationReference.toJSON(),
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
            if (this.therapyRelationshipType) {await this.therapyRelationshipType.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.medicationCodeableConcept) {await this.medicationCodeableConcept.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.medicationReference) {await this.medicationReference.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            therapyRelationshipType: this.therapyRelationshipType && this.therapyRelationshipType.toJSONInternal(),
            medicationCodeableConcept: this.medicationCodeableConcept && this.medicationCodeableConcept.toJSONInternal(),
            medicationReference: this.medicationReference && this.medicationReference.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = MedicinalProductContraindicationOtherTherapy;
