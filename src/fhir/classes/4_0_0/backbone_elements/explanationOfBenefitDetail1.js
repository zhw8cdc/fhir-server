/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
ExplanationOfBenefit.Detail1
    This resource provides: the claim details; adjudication details from the
    processing of a Claim; and optionally account balance information, for
    informing the subscriber of the benefits provided.
*/
class ExplanationOfBenefitDetail1 extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept} productOrService,
     * @param {CodeableConcept[]|undefined} [modifier],
     * @param {Quantity|undefined} [quantity],
     * @param {Money|undefined} [unitPrice],
     * @param {decimal|undefined} [factor],
     * @param {Money|undefined} [net],
     * @param {Int[]|undefined} [noteNumber],
     * @param {ExplanationOfBenefitAdjudication[]|undefined} [adjudication],
     * @param {ExplanationOfBenefitSubDetail1[]|undefined} [subDetail],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            productOrService,
            modifier,
            quantity,
            unitPrice,
            factor,
            net,
            noteNumber,
            adjudication,
            subDetail,
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
         * @description When the value is a group code then this item collects a set of related claim
    details, otherwise this contains the product, service, drug or other billing
    code for the item.
         * @property {CodeableConcept}
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.productOrService = FhirResourceCreator.create(valueProvided, CodeableConcept);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.modifier = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.quantity = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description If the item is not a group then this is the fee for the product or service,
    otherwise this is the total of the fees for the details of the group.
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.unitPrice = FhirResourceCreator.create(valueProvided, Money);
            }
        });

        /**
         * @description A real number that represents a multiplier used in determining the overall
    value of services delivered and/or goods received. The concept of a Factor
    allows for a discount or surcharge multiplier to be applied to a monetary
    amount.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'factor', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.factor,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.factor = undefined;
                    return;
                }
                this.__data.factor = valueProvided;
            }
        });

        /**
         * @description The quantity times the unit price for an additional service or product or
    charge.
         * @property {Money|undefined}
        */
        Object.defineProperty(this, 'net', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.net,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.net = undefined;
                    return;
                }
                const Money = require('../complex_types/money.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.net = FhirResourceCreator.create(valueProvided, Money);
            }
        });

        /**
         * @description The numbers associated with notes below which apply to the adjudication of
    this item.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'noteNumber', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.noteNumber,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.noteNumber = undefined;
                    return;
                }
                this.__data.noteNumber = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The adjudication results.
         * @property {ExplanationOfBenefitAdjudication[]|undefined}
        */
        Object.defineProperty(this, 'adjudication', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.adjudication,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.adjudication = undefined;
                    return;
                }
                const ExplanationOfBenefitAdjudication = require('../backbone_elements/explanationOfBenefitAdjudication.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.adjudication = FhirResourceCreator.createArray(valueProvided, ExplanationOfBenefitAdjudication);
            }
        });

        /**
         * @description The third-tier service adjudications for payor added services.
         * @property {ExplanationOfBenefitSubDetail1[]|undefined}
        */
        Object.defineProperty(this, 'subDetail', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subDetail,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subDetail = undefined;
                    return;
                }
                const ExplanationOfBenefitSubDetail1 = require('../backbone_elements/explanationOfBenefitSubDetail1.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.subDetail = FhirResourceCreator.createArray(valueProvided, ExplanationOfBenefitSubDetail1);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            productOrService,
            modifier,
            quantity,
            unitPrice,
            factor,
            net,
            noteNumber,
            adjudication,
            subDetail,
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
            productOrService: this.productOrService && this.productOrService.toJSON(),
            modifier: this.modifier && this.modifier.map(v => v.toJSON()),
            quantity: this.quantity && this.quantity.toJSON(),
            unitPrice: this.unitPrice && this.unitPrice.toJSON(),
            factor: this.factor,
            net: this.net && this.net.toJSON(),
            noteNumber: this.noteNumber,
            adjudication: this.adjudication && this.adjudication.map(v => v.toJSON()),
            subDetail: this.subDetail && this.subDetail.map(v => v.toJSON()),
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
            if (this.productOrService) {await this.productOrService.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.modifier) {await async.each(this.modifier, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.quantity) {await this.quantity.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.unitPrice) {await this.unitPrice.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.net) {await this.net.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.adjudication) {await async.each(this.adjudication, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.subDetail) {await async.each(this.subDetail, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            productOrService: this.productOrService && this.productOrService.toJSONInternal(),
            modifier: this.modifier && this.modifier.map(v => v.toJSONInternal()),
            quantity: this.quantity && this.quantity.toJSONInternal(),
            unitPrice: this.unitPrice && this.unitPrice.toJSONInternal(),
            factor: this.factor,
            net: this.net && this.net.toJSONInternal(),
            noteNumber: this.noteNumber,
            adjudication: this.adjudication && this.adjudication.map(v => v.toJSONInternal()),
            subDetail: this.subDetail && this.subDetail.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = ExplanationOfBenefitDetail1;
