/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


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
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.operationType = new CodeableConcept(valueProvided);
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
                    return;
                }
                let Identifier = require('../complex_types/identifier.js');
                this.__data.authorisationReferenceNumber = new Identifier(valueProvided);
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
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.confidentialityIndicator = new CodeableConcept(valueProvided);
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
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.manufacturer = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
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
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.regulator = new Reference(valueProvided);
            }
        });


        /**
         * @description Specific instances of data or objects that have been accessed.
         * @property {AuditEventEntity[]|undefined}
         */
        Object.defineProperty(this, '_access', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._access,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null) {
                    return;
                }
                this.__data._access = valueProvided;
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
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = this.toJSON();

        if (this._access) {
            json._access = this._access;
        }
        return removeNull(json);
    }
}

module.exports = MedicinalProductManufacturingBusinessOperation;
