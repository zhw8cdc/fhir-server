/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
SubstanceSpecification.Isotope
    The detailed description of a substance, typically at a level beyond what is
    used for prescribing.
*/
class SubstanceSpecificationIsotope extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier|undefined} [identifier],
     * @param {CodeableConcept|undefined} [name],
     * @param {CodeableConcept|undefined} [substitution],
     * @param {Quantity|undefined} [halfLife],
     * @param {SubstanceSpecificationMolecularWeight|undefined} [molecularWeight],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            identifier,
            name,
            substitution,
            halfLife,
            molecularWeight,
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
         * @description Substance identifier for each non-natural or radioisotope.
         * @property {Identifier|undefined}
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
                this.__data.identifier = FhirResourceCreator.create(valueProvided, Identifier);
            }
        });

        /**
         * @description Substance name for each non-natural or radioisotope.
         * @property {CodeableConcept|undefined}
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
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.name = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The type of isotopic substitution present in a single substance.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'substitution', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.substitution,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.substitution = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.substitution = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Half life - for a non-natural nuclide.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'halfLife', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.halfLife,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.halfLife = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.halfLife = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description The molecular weight or weight range (for proteins, polymers or nucleic
    acids).
         * @property {SubstanceSpecificationMolecularWeight|undefined}
        */
        Object.defineProperty(this, 'molecularWeight', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.molecularWeight,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.molecularWeight = undefined;
                    return;
                }
                const SubstanceSpecificationMolecularWeight = require('../backbone_elements/substanceSpecificationMolecularWeight.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.molecularWeight = FhirResourceCreator.create(valueProvided, SubstanceSpecificationMolecularWeight);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            identifier,
            name,
            substitution,
            halfLife,
            molecularWeight,
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
            identifier: this.identifier && this.identifier.toJSON(),
            name: this.name && this.name.toJSON(),
            substitution: this.substitution && this.substitution.toJSON(),
            halfLife: this.halfLife && this.halfLife.toJSON(),
            molecularWeight: this.molecularWeight && this.molecularWeight.toJSON(),
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
            if (this.identifier) {await this.identifier.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.name) {await this.name.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.substitution) {await this.substitution.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.halfLife) {await this.halfLife.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.molecularWeight) {await this.molecularWeight.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            identifier: this.identifier && this.identifier.toJSONInternal(),
            name: this.name && this.name.toJSONInternal(),
            substitution: this.substitution && this.substitution.toJSONInternal(),
            halfLife: this.halfLife && this.halfLife.toJSONInternal(),
            molecularWeight: this.molecularWeight && this.molecularWeight.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = SubstanceSpecificationIsotope;
