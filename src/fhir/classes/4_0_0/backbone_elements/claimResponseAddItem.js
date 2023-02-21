/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
ClaimResponse.AddItem
    This resource provides the adjudication details from the processing of a Claim
    resource.
*/
class ClaimResponseAddItem extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Int[]|undefined} [itemSequence],
     * @param {Int[]|undefined} [detailSequence],
     * @param {Int[]|undefined} [subdetailSequence],
     * @param {Reference[]|undefined} [provider],
     * @param {CodeableConcept} productOrService,
     * @param {CodeableConcept[]|undefined} [modifier],
     * @param {CodeableConcept[]|undefined} [programCode],
     * @param {date|undefined} [servicedDate],
     * @param {Period|undefined} [servicedPeriod],
     * @param {CodeableConcept|undefined} [locationCodeableConcept],
     * @param {Address|undefined} [locationAddress],
     * @param {Reference|undefined} [locationReference],
     * @param {Quantity|undefined} [quantity],
     * @param {Money|undefined} [unitPrice],
     * @param {decimal|undefined} [factor],
     * @param {Money|undefined} [net],
     * @param {CodeableConcept|undefined} [bodySite],
     * @param {CodeableConcept[]|undefined} [subSite],
     * @param {Int[]|undefined} [noteNumber],
     * @param {ClaimResponseAdjudication[]} adjudication,
     * @param {ClaimResponseDetail1[]|undefined} [detail],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            itemSequence,
            detailSequence,
            subdetailSequence,
            provider,
            productOrService,
            modifier,
            programCode,
            servicedDate,
            servicedPeriod,
            locationCodeableConcept,
            locationAddress,
            locationReference,
            quantity,
            unitPrice,
            factor,
            net,
            bodySite,
            subSite,
            noteNumber,
            adjudication,
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
         * @description Claim items which this service line is intended to replace.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'itemSequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.itemSequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.itemSequence = undefined;
                    return;
                }
                this.__data.itemSequence = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The sequence number of the details within the claim item which this line is
    intended to replace.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'detailSequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.detailSequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.detailSequence = undefined;
                    return;
                }
                this.__data.detailSequence = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The sequence number of the sub-details within the details within the claim
    item which this line is intended to replace.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'subdetailSequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subdetailSequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subdetailSequence = undefined;
                    return;
                }
                this.__data.subdetailSequence = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The providers who are authorized for the services rendered to the patient.
         * @property {Reference[]|undefined}
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
                this.__data.provider = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
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
         * @description Identifies the program under which this may be recovered.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'programCode', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.programCode,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.programCode = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.programCode = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description None
         * @property {date|undefined}
        */
        Object.defineProperty(this, 'servicedDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.servicedDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.servicedDate = undefined;
                    return;
                }
                this.__data.servicedDate = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'servicedPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.servicedPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.servicedPeriod = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                this.__data.servicedPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'locationCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.locationCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.locationCodeableConcept = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.locationCodeableConcept = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Address|undefined}
        */
        Object.defineProperty(this, 'locationAddress', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.locationAddress,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.locationAddress = undefined;
                    return;
                }
                const Address = require('../complex_types/address.js');
                this.__data.locationAddress = new Address(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'locationReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.locationReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.locationReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.locationReference = new Reference(valueProvided);
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
                this.__data.unitPrice = new Money(valueProvided);
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
                this.__data.net = new Money(valueProvided);
            }
        });

        /**
         * @description Physical service site on the patient (limb, tooth, etc.).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'bodySite', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.bodySite,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.bodySite = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.bodySite = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description A region or surface of the bodySite, e.g. limb region or tooth surface(s).
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'subSite', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subSite,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subSite = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.subSite = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
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
         * @property {ClaimResponseAdjudication[]}
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
                const ClaimResponseAdjudication = require('../backbone_elements/claimResponseAdjudication.js');
                this.__data.adjudication = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ClaimResponseAdjudication(v)) : [new ClaimResponseAdjudication(valueProvided)];
            }
        });

        /**
         * @description The second-tier service adjudications for payor added services.
         * @property {ClaimResponseDetail1[]|undefined}
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
                const ClaimResponseDetail1 = require('../backbone_elements/claimResponseDetail1.js');
                this.__data.detail = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ClaimResponseDetail1(v)) : [new ClaimResponseDetail1(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            itemSequence,
            detailSequence,
            subdetailSequence,
            provider,
            productOrService,
            modifier,
            programCode,
            servicedDate,
            servicedPeriod,
            locationCodeableConcept,
            locationAddress,
            locationReference,
            quantity,
            unitPrice,
            factor,
            net,
            bodySite,
            subSite,
            noteNumber,
            adjudication,
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
            itemSequence: this.itemSequence,
            detailSequence: this.detailSequence,
            subdetailSequence: this.subdetailSequence,
            provider: this.provider && this.provider.map(v => v.toJSON()),
            productOrService: this.productOrService && this.productOrService.toJSON(),
            modifier: this.modifier && this.modifier.map(v => v.toJSON()),
            programCode: this.programCode && this.programCode.map(v => v.toJSON()),
            servicedDate: this.servicedDate,
            servicedPeriod: this.servicedPeriod && this.servicedPeriod.toJSON(),
            locationCodeableConcept: this.locationCodeableConcept && this.locationCodeableConcept.toJSON(),
            locationAddress: this.locationAddress && this.locationAddress.toJSON(),
            locationReference: this.locationReference && this.locationReference.toJSON(),
            quantity: this.quantity && this.quantity.toJSON(),
            unitPrice: this.unitPrice && this.unitPrice.toJSON(),
            factor: this.factor,
            net: this.net && this.net.toJSON(),
            bodySite: this.bodySite && this.bodySite.toJSON(),
            subSite: this.subSite && this.subSite.map(v => v.toJSON()),
            noteNumber: this.noteNumber,
            adjudication: this.adjudication && this.adjudication.map(v => v.toJSON()),
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
            if (this.provider) { async.each(this.provider, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.productOrService) {await this.productOrService.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.modifier) { async.each(this.modifier, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.programCode) { async.each(this.programCode, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.servicedPeriod) {await this.servicedPeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.locationCodeableConcept) {await this.locationCodeableConcept.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.locationAddress) {await this.locationAddress.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.locationReference) {await this.locationReference.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.quantity) {await this.quantity.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.unitPrice) {await this.unitPrice.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.net) {await this.net.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.bodySite) {await this.bodySite.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.subSite) { async.each(this.subSite, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.adjudication) { async.each(this.adjudication, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            itemSequence: this.itemSequence,
            detailSequence: this.detailSequence,
            subdetailSequence: this.subdetailSequence,
            provider: this.provider && this.provider.map(v => v.toJSONInternal()),
            productOrService: this.productOrService && this.productOrService.toJSONInternal(),
            modifier: this.modifier && this.modifier.map(v => v.toJSONInternal()),
            programCode: this.programCode && this.programCode.map(v => v.toJSONInternal()),
            servicedDate: this.servicedDate,
            servicedPeriod: this.servicedPeriod && this.servicedPeriod.toJSONInternal(),
            locationCodeableConcept: this.locationCodeableConcept && this.locationCodeableConcept.toJSONInternal(),
            locationAddress: this.locationAddress && this.locationAddress.toJSONInternal(),
            locationReference: this.locationReference && this.locationReference.toJSONInternal(),
            quantity: this.quantity && this.quantity.toJSONInternal(),
            unitPrice: this.unitPrice && this.unitPrice.toJSONInternal(),
            factor: this.factor,
            net: this.net && this.net.toJSONInternal(),
            bodySite: this.bodySite && this.bodySite.toJSONInternal(),
            subSite: this.subSite && this.subSite.map(v => v.toJSONInternal()),
            noteNumber: this.noteNumber,
            adjudication: this.adjudication && this.adjudication.map(v => v.toJSONInternal()),
            detail: this.detail && this.detail.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = ClaimResponseAddItem;
