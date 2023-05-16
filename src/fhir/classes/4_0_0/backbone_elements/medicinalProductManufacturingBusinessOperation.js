/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
MedicinalProduct.ManufacturingBusinessOperation
    Detailed definition of a medicinal product, typically for uses other than
    direct patient care (e.g. regulatory use).
*/
class MedicinalProductManufacturingBusinessOperation extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [operationType],
     * @param {Identifier|undefined} [authorisationReferenceNumber],
     * @param {dateTime|undefined} [effectiveDate],
     * @param {CodeableConcept|undefined} [confidentialityIndicator],
     * @param {Reference[]|undefined} [manufacturer],
     * @param {Reference|undefined} [regulator],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            operationType,
            authorisationReferenceNumber,
            effectiveDate,
            confidentialityIndicator,
            manufacturer,
            regulator,
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
         * @description The type of manufacturing operation.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'operationType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.operationType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.operationType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.operationType = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Regulatory authorization reference number.
         * @property {Identifier|undefined}
        */
        Object.defineProperty(this, 'authorisationReferenceNumber', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.authorisationReferenceNumber,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.authorisationReferenceNumber = undefined;
                    return;
                }
                const Identifier = require('../complex_types/identifier.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.authorisationReferenceNumber = FhirResourceCreator.create(valueProvided, Identifier);
            }
        });

        /**
         * @description Regulatory authorization date.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'effectiveDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.effectiveDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.effectiveDate = undefined;
                    return;
                }
                this.__data.effectiveDate = valueProvided;
            }
        });

        /**
         * @description To indicate if this proces is commercially confidential.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'confidentialityIndicator', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.confidentialityIndicator,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.confidentialityIndicator = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.confidentialityIndicator = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The manufacturer or establishment associated with the process.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'manufacturer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.manufacturer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.manufacturer = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.manufacturer = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description A regulator which oversees the operation.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'regulator', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.regulator,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.regulator = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.regulator = FhirResourceCreator.create(valueProvided, Reference);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            operationType,
            authorisationReferenceNumber,
            effectiveDate,
            confidentialityIndicator,
            manufacturer,
            regulator,
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
            operationType: this.operationType && this.operationType.toJSON(),
            authorisationReferenceNumber: this.authorisationReferenceNumber && this.authorisationReferenceNumber.toJSON(),
            effectiveDate: this.effectiveDate,
            confidentialityIndicator: this.confidentialityIndicator && this.confidentialityIndicator.toJSON(),
            manufacturer: this.manufacturer && this.manufacturer.map(v => v.toJSON()),
            regulator: this.regulator && this.regulator.toJSON(),
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
            if (this.operationType) {await this.operationType.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.authorisationReferenceNumber) {await this.authorisationReferenceNumber.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.confidentialityIndicator) {await this.confidentialityIndicator.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.manufacturer) {await async.each(this.manufacturer, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.regulator) {await this.regulator.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            operationType: this.operationType && this.operationType.toJSONInternal(),
            authorisationReferenceNumber: this.authorisationReferenceNumber && this.authorisationReferenceNumber.toJSONInternal(),
            effectiveDate: this.effectiveDate,
            confidentialityIndicator: this.confidentialityIndicator && this.confidentialityIndicator.toJSONInternal(),
            manufacturer: this.manufacturer && this.manufacturer.map(v => v.toJSONInternal()),
            regulator: this.regulator && this.regulator.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = MedicinalProductManufacturingBusinessOperation;
