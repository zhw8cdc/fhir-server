/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
ExplanationOfBenefit.SubDetail
    This resource provides: the claim details; adjudication details from the
    processing of a Claim; and optionally account balance information, for
    informing the subscriber of the benefits provided.
*/
class ExplanationOfBenefitSubDetail extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Int} sequence,
     * @param {CodeableConcept|undefined} [revenue],
     * @param {CodeableConcept|undefined} [category],
     * @param {CodeableConcept} productOrService,
     * @param {CodeableConcept[]|undefined} [modifier],
     * @param {CodeableConcept[]|undefined} [programCode],
     * @param {Quantity|undefined} [quantity],
     * @param {Money|undefined} [unitPrice],
     * @param {decimal|undefined} [factor],
     * @param {Money|undefined} [net],
     * @param {Reference[]|undefined} [udi],
     * @param {Int[]|undefined} [noteNumber],
     * @param {ExplanationOfBenefitAdjudication[]|undefined} [adjudication],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            sequence,
            revenue,
            category,
            productOrService,
            modifier,
            programCode,
            quantity,
            unitPrice,
            factor,
            net,
            udi,
            noteNumber,
            adjudication,
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
                    this.__data.modifierExtension = undefined;
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description A claim detail line. Either a simple (a product or service) or a 'group' of
    sub-details which are simple items.
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
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.revenue = new CodeableConcept(valueProvided);
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
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.category = new CodeableConcept(valueProvided);
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
                let CodeableConcept = require('../complex_types/codeableConcept.js');
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
                let CodeableConcept = require('../complex_types/codeableConcept.js');
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
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.programCode = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
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
                let Quantity = require('../complex_types/quantity.js');
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
                let Money = require('../complex_types/money.js');
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
                let Money = require('../complex_types/money.js');
                this.__data.net = new Money(valueProvided);
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
                let Reference = require('../complex_types/reference.js');
                this.__data.udi = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
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
                let ExplanationOfBenefitAdjudication = require('../backbone_elements/explanationOfBenefitAdjudication.js');
                this.__data.adjudication = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ExplanationOfBenefitAdjudication(v)) : [new ExplanationOfBenefitAdjudication(valueProvided)];
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            sequence,
            revenue,
            category,
            productOrService,
            modifier,
            programCode,
            quantity,
            unitPrice,
            factor,
            net,
            udi,
            noteNumber,
            adjudication,
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
            revenue: this.revenue && this.revenue.toJSON(),
            category: this.category && this.category.toJSON(),
            productOrService: this.productOrService && this.productOrService.toJSON(),
            modifier: this.modifier && this.modifier.map(v => v.toJSON()),
            programCode: this.programCode && this.programCode.map(v => v.toJSON()),
            quantity: this.quantity && this.quantity.toJSON(),
            unitPrice: this.unitPrice && this.unitPrice.toJSON(),
            factor: this.factor,
            net: this.net && this.net.toJSON(),
            udi: this.udi && this.udi.map(v => v.toJSON()),
            noteNumber: this.noteNumber,
            adjudication: this.adjudication && this.adjudication.map(v => v.toJSON()),
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

module.exports = ExplanationOfBenefitSubDetail;
