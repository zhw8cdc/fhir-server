/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
Claim.Item
    A provider issued list of professional services and products which have been
    provided, or are to be provided, to a patient which is sent to an insurer for
    reimbursement.
*/
class ClaimItem extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Int} sequence,
     * @param {Int[]|undefined} [careTeamSequence],
     * @param {Int[]|undefined} [diagnosisSequence],
     * @param {Int[]|undefined} [procedureSequence],
     * @param {Int[]|undefined} [informationSequence],
     * @param {CodeableConcept|undefined} [revenue],
     * @param {CodeableConcept|undefined} [category],
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
     * @param {Reference[]|undefined} [udi],
     * @param {CodeableConcept|undefined} [bodySite],
     * @param {CodeableConcept[]|undefined} [subSite],
     * @param {Reference[]|undefined} [encounter],
     * @param {ClaimDetail[]|undefined} [detail],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            sequence,
            careTeamSequence,
            diagnosisSequence,
            procedureSequence,
            informationSequence,
            revenue,
            category,
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
            udi,
            bodySite,
            subSite,
            encounter,
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
         * @description A number to uniquely identify item entries.
         * @property {Int}
        */
        Object.defineProperty(this, 'sequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sequence = undefined;
                    return;
                }
                this.__data.sequence = valueProvided;
            }
        });

        /**
         * @description CareTeam members related to this service or product.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'careTeamSequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.careTeamSequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.careTeamSequence = undefined;
                    return;
                }
                this.__data.careTeamSequence = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Diagnosis applicable for this service or product.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'diagnosisSequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.diagnosisSequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.diagnosisSequence = undefined;
                    return;
                }
                this.__data.diagnosisSequence = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Procedures applicable for this service or product.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'procedureSequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.procedureSequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.procedureSequence = undefined;
                    return;
                }
                this.__data.procedureSequence = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Exceptions, special conditions and supporting information applicable for this
    service or product.
         * @property {Int[]|undefined}
        */
        Object.defineProperty(this, 'informationSequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.informationSequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.informationSequence = undefined;
                    return;
                }
                this.__data.informationSequence = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The type of revenue or cost center providing the product and/or service.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'revenue', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.revenue,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.revenue = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.revenue = FhirResourceCreator.create(valueProvided, CodeableConcept);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.category = FhirResourceCreator.create(valueProvided, CodeableConcept);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.programCode = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.servicedPeriod = FhirResourceCreator.create(valueProvided, Period);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.locationCodeableConcept = FhirResourceCreator.create(valueProvided, CodeableConcept);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.locationAddress = FhirResourceCreator.create(valueProvided, Address);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.locationReference = FhirResourceCreator.create(valueProvided, Reference);
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
         * @description Unique Device Identifiers associated with this line item.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'udi', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.udi,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.udi = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.udi = FhirResourceCreator.createArray(valueProvided, Reference);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.bodySite = FhirResourceCreator.create(valueProvided, CodeableConcept);
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.subSite = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The Encounters during which this Claim was created or to which the creation of
    this record is tightly associated.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'encounter', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.encounter,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.encounter = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.encounter = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description A claim detail line. Either a simple (a product or service) or a 'group' of
    sub-details which are simple items.
         * @property {ClaimDetail[]|undefined}
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
                const ClaimDetail = require('../backbone_elements/claimDetail.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.detail = FhirResourceCreator.createArray(valueProvided, ClaimDetail);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            sequence,
            careTeamSequence,
            diagnosisSequence,
            procedureSequence,
            informationSequence,
            revenue,
            category,
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
            udi,
            bodySite,
            subSite,
            encounter,
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
            sequence: this.sequence,
            careTeamSequence: this.careTeamSequence,
            diagnosisSequence: this.diagnosisSequence,
            procedureSequence: this.procedureSequence,
            informationSequence: this.informationSequence,
            revenue: this.revenue && this.revenue.toJSON(),
            category: this.category && this.category.toJSON(),
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
            udi: this.udi && this.udi.map(v => v.toJSON()),
            bodySite: this.bodySite && this.bodySite.toJSON(),
            subSite: this.subSite && this.subSite.map(v => v.toJSON()),
            encounter: this.encounter && this.encounter.map(v => v.toJSON()),
            detail: this.detail && this.detail.map(v => v.toJSON()),
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
            if (this.revenue) {await this.revenue.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.category) {await this.category.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.productOrService) {await this.productOrService.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.modifier) {await async.each(this.modifier, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.programCode) {await async.each(this.programCode, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.servicedPeriod) {await this.servicedPeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.locationCodeableConcept) {await this.locationCodeableConcept.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.locationAddress) {await this.locationAddress.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.locationReference) {await this.locationReference.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.quantity) {await this.quantity.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.unitPrice) {await this.unitPrice.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.net) {await this.net.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.udi) {await async.each(this.udi, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.bodySite) {await this.bodySite.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.subSite) {await async.each(this.subSite, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.encounter) {await async.each(this.encounter, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.detail) {await async.each(this.detail, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            sequence: this.sequence,
            careTeamSequence: this.careTeamSequence,
            diagnosisSequence: this.diagnosisSequence,
            procedureSequence: this.procedureSequence,
            informationSequence: this.informationSequence,
            revenue: this.revenue && this.revenue.toJSONInternal(),
            category: this.category && this.category.toJSONInternal(),
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
            udi: this.udi && this.udi.map(v => v.toJSONInternal()),
            bodySite: this.bodySite && this.bodySite.toJSONInternal(),
            subSite: this.subSite && this.subSite.map(v => v.toJSONInternal()),
            encounter: this.encounter && this.encounter.map(v => v.toJSONInternal()),
            detail: this.detail && this.detail.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = ClaimItem;
