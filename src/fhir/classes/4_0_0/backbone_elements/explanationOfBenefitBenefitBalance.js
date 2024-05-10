

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
ExplanationOfBenefit.BenefitBalance
    This resource provides: the claim details; adjudication details from the
    processing of a Claim; and optionally account balance information, for
    informing the subscriber of the benefits provided.
*/
class ExplanationOfBenefitBenefitBalance extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept} category,
     * @param {Boolean|undefined} [excluded],
     * @param {String|undefined} [name],
     * @param {String|undefined} [description],
     * @param {CodeableConcept|undefined} [network],
     * @param {CodeableConcept|undefined} [unit],
     * @param {CodeableConcept|undefined} [term],
     * @param {ExplanationOfBenefitFinancial[]|undefined} [financial],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            category,
            excluded,
            name,
            description,
            network,
            unit,
            term,
            financial
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.modifierExtension = FhirResourceCreator.createArray(valueProvided, Extension);
            }
        });

        /**
         * @description Code to identify the general type of benefits under which products and
    services are provided.
         * @property {CodeableConcept}
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.category = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description True if the indicated class of service is excluded from the plan, missing or
    False indicates the product or service is included in the coverage.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'excluded', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.excluded,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.excluded = undefined;
                    return;
                }
                this.__data.excluded = valueProvided;
            }
        });

        /**
         * @description A short name or tag for the benefit.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'name', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.name,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.name = undefined;
                    return;
                }
                this.__data.name = valueProvided;
            }
        });

        /**
         * @description A richer description of the benefit or services covered.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'description', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.description,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.description = undefined;
                    return;
                }
                this.__data.description = valueProvided;
            }
        });

        /**
         * @description Is a flag to indicate whether the benefits refer to in-network providers or
    out-of-network providers.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'network', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.network,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.network = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.network = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Indicates if the benefits apply to an individual or to the family.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'unit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.unit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.unit = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.unit = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The term or period of the values such as 'maximum lifetime benefit' or
    'maximum annual visits'.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'term', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.term,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.term = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.term = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Benefits Used to date.
         * @property {ExplanationOfBenefitFinancial[]|undefined}
        */
        Object.defineProperty(this, 'financial', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.financial,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.financial = undefined;
                    return;
                }
                const ExplanationOfBenefitFinancial = require('../backbone_elements/explanationOfBenefitFinancial.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.financial = FhirResourceCreator.createArray(valueProvided, ExplanationOfBenefitFinancial);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            category,
            excluded,
            name,
            description,
            network,
            unit,
            term,
            financial
        });
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON () {
        const { removeNull } = require('../../../../utils/nullRemover');

        return removeNull({
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            category: this.category && this.category.toJSON(),
            excluded: this.excluded,
            name: this.name,
            description: this.description,
            network: this.network && this.network.toJSON(),
            unit: this.unit && this.unit.toJSON(),
            term: this.term && this.term.toJSON(),
            financial: this.financial && this.financial.map(v => v.toJSON())
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync ({ fnUpdateReferenceAsync }) {
            if (this.extension) { await async.each(this.extension, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.modifierExtension) { await async.each(this.modifierExtension, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.category) { await this.category.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.network) { await this.network.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.unit) { await this.unit.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.term) { await this.term.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.financial) { await async.each(this.financial, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal () {
        const { removeNull } = require('../../../../utils/nullRemover');
        const json = {
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            category: this.category && this.category.toJSONInternal(),
            excluded: this.excluded,
            name: this.name,
            description: this.description,
            network: this.network && this.network.toJSONInternal(),
            unit: this.unit && this.unit.toJSONInternal(),
            term: this.term && this.term.toJSONInternal(),
            financial: this.financial && this.financial.map(v => v.toJSONInternal())
        };

        return removeNull(json);
    }
}

module.exports = ExplanationOfBenefitBenefitBalance;
