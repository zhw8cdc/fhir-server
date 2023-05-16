/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
InsurancePlan.Plan
    Details of a Health Insurance product/plan provided by an organization.
*/
class InsurancePlanPlan extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {CodeableConcept|undefined} [type],
     * @param {Reference[]|undefined} [coverageArea],
     * @param {Reference[]|undefined} [network],
     * @param {InsurancePlanGeneralCost[]|undefined} [generalCost],
     * @param {InsurancePlanSpecificCost[]|undefined} [specificCost],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            identifier,
            type,
            coverageArea,
            network,
            generalCost,
            specificCost,
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
         * @description Business identifiers assigned to this health insurance plan which remain
    constant as the resource is updated and propagates from server to server.
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'identifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.identifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.identifier = undefined;
                    return;
                }
                const Identifier = require('../complex_types/identifier.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.identifier = FhirResourceCreator.createArray(valueProvided, Identifier);
            }
        });

        /**
         * @description Type of plan. For example, "Platinum" or "High Deductable".
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'type', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.type,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.type = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.type = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The geographic region in which a health insurance plan's benefits apply.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'coverageArea', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.coverageArea,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.coverageArea = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.coverageArea = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description Reference to the network that providing the type of coverage.
         * @property {Reference[]|undefined}
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
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.network = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description Overall costs associated with the plan.
         * @property {InsurancePlanGeneralCost[]|undefined}
        */
        Object.defineProperty(this, 'generalCost', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.generalCost,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.generalCost = undefined;
                    return;
                }
                const InsurancePlanGeneralCost = require('../backbone_elements/insurancePlanGeneralCost.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.generalCost = FhirResourceCreator.createArray(valueProvided, InsurancePlanGeneralCost);
            }
        });

        /**
         * @description Costs associated with the coverage provided by the product.
         * @property {InsurancePlanSpecificCost[]|undefined}
        */
        Object.defineProperty(this, 'specificCost', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.specificCost,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.specificCost = undefined;
                    return;
                }
                const InsurancePlanSpecificCost = require('../backbone_elements/insurancePlanSpecificCost.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.specificCost = FhirResourceCreator.createArray(valueProvided, InsurancePlanSpecificCost);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            identifier,
            type,
            coverageArea,
            network,
            generalCost,
            specificCost,
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
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            type: this.type && this.type.toJSON(),
            coverageArea: this.coverageArea && this.coverageArea.map(v => v.toJSON()),
            network: this.network && this.network.map(v => v.toJSON()),
            generalCost: this.generalCost && this.generalCost.map(v => v.toJSON()),
            specificCost: this.specificCost && this.specificCost.map(v => v.toJSON()),
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
            if (this.identifier) {await async.each(this.identifier, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.type) {await this.type.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.coverageArea) {await async.each(this.coverageArea, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.network) {await async.each(this.network, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.generalCost) {await async.each(this.generalCost, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.specificCost) {await async.each(this.specificCost, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            identifier: this.identifier && this.identifier.map(v => v.toJSONInternal()),
            type: this.type && this.type.toJSONInternal(),
            coverageArea: this.coverageArea && this.coverageArea.map(v => v.toJSONInternal()),
            network: this.network && this.network.map(v => v.toJSONInternal()),
            generalCost: this.generalCost && this.generalCost.map(v => v.toJSONInternal()),
            specificCost: this.specificCost && this.specificCost.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = InsurancePlanPlan;
