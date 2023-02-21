/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
CoverageEligibilityRequest.Item
    The CoverageEligibilityRequest provides patient and insurance coverage
    information to an insurer for them to respond, in the form of an
    CoverageEligibilityResponse, with information regarding whether the stated
    coverage is valid and in-force and optionally to provide the insurance details
    of the policy.
*/
class CoverageEligibilityRequestItem extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Int[]|undefined} [supportingInfoSequence],
     * @param {CodeableConcept|undefined} [category],
     * @param {CodeableConcept|undefined} [productOrService],
     * @param {CodeableConcept[]|undefined} [modifier],
     * @param {Reference|undefined} [provider],
     * @param {Quantity|undefined} [quantity],
     * @param {Money|undefined} [unitPrice],
     * @param {Reference|undefined} [facility],
     * @param {CoverageEligibilityRequestDiagnosis[]|undefined} [diagnosis],
     * @param {Reference[]|undefined} [detail],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            supportingInfoSequence,
            category,
            productOrService,
            modifier,
            provider,
            quantity,
            unitPrice,
            facility,
            diagnosis,
            detail,
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
         * @description Exceptions, special conditions and supporting information applicable for this
    service or product line.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'supportingInfoSequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.supportingInfoSequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.supportingInfoSequence = undefined;
                    return;
                }
                this.__data.supportingInfoSequence = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Code to identify the general type of benefits under which products and
    services are provided.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'category', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.category,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.category = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.category = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description This contains the product, service, drug or other billing code for the item.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'productOrService', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.productOrService,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.productOrService = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.productOrService = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Item typification or modifiers codes to convey additional context for the
    product or service.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'modifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.modifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.modifier = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.modifier = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description The practitioner who is responsible for the product or service to be rendered
    to the patient.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'provider', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.provider,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.provider = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.provider = new Reference(valueProvided);
            }
        });

        /**
         * @description The number of repetitions of a service or product.
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
                const Quantity = require('../complex_types/quantity.js');
                this.__data.quantity = new Quantity(valueProvided);
            }
        });

        /**
         * @description The amount charged to the patient by the provider for a single unit.
         * @property {Money|undefined}
        */
        Object.defineProperty(this, 'unitPrice', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.unitPrice,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.unitPrice = undefined;
                    return;
                }
                const Money = require('../complex_types/money.js');
                this.__data.unitPrice = new Money(valueProvided);
            }
        });

        /**
         * @description Facility where the services will be provided.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'facility', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.facility,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.facility = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.facility = new Reference(valueProvided);
            }
        });

        /**
         * @description Patient diagnosis for which care is sought.
         * @property {CoverageEligibilityRequestDiagnosis[]|undefined}
        */
        Object.defineProperty(this, 'diagnosis', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.diagnosis,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.diagnosis = undefined;
                    return;
                }
                const CoverageEligibilityRequestDiagnosis = require('../backbone_elements/coverageEligibilityRequestDiagnosis.js');
                this.__data.diagnosis = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CoverageEligibilityRequestDiagnosis(v)) : [new CoverageEligibilityRequestDiagnosis(valueProvided)];
            }
        });

        /**
         * @description The plan/proposal/order describing the proposed service in detail.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'detail', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.detail,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.detail = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.detail = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            supportingInfoSequence,
            category,
            productOrService,
            modifier,
            provider,
            quantity,
            unitPrice,
            facility,
            diagnosis,
            detail,
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
            supportingInfoSequence: this.supportingInfoSequence,
            category: this.category && this.category.toJSON(),
            productOrService: this.productOrService && this.productOrService.toJSON(),
            modifier: this.modifier && this.modifier.map(v => v.toJSON()),
            provider: this.provider && this.provider.toJSON(),
            quantity: this.quantity && this.quantity.toJSON(),
            unitPrice: this.unitPrice && this.unitPrice.toJSON(),
            facility: this.facility && this.facility.toJSON(),
            diagnosis: this.diagnosis && this.diagnosis.map(v => v.toJSON()),
            detail: this.detail && this.detail.map(v => v.toJSON()),
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
            if (this.category) {await this.category.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.productOrService) {await this.productOrService.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.modifier) { async.each(this.modifier, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.provider) {await this.provider.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.quantity) {await this.quantity.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.unitPrice) {await this.unitPrice.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.facility) {await this.facility.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.diagnosis) { async.each(this.diagnosis, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.detail) { async.each(this.detail, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            supportingInfoSequence: this.supportingInfoSequence,
            category: this.category && this.category.toJSONInternal(),
            productOrService: this.productOrService && this.productOrService.toJSONInternal(),
            modifier: this.modifier && this.modifier.map(v => v.toJSONInternal()),
            provider: this.provider && this.provider.toJSONInternal(),
            quantity: this.quantity && this.quantity.toJSONInternal(),
            unitPrice: this.unitPrice && this.unitPrice.toJSONInternal(),
            facility: this.facility && this.facility.toJSONInternal(),
            diagnosis: this.diagnosis && this.diagnosis.map(v => v.toJSONInternal()),
            detail: this.detail && this.detail.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = CoverageEligibilityRequestItem;
