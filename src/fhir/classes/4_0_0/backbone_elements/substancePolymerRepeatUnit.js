/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
SubstancePolymer.RepeatUnit
    Todo.
*/
class SubstancePolymerRepeatUnit extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [orientationOfPolymerisation],
     * @param {String|undefined} [repeatUnit],
     * @param {SubstanceAmount|undefined} [amount],
     * @param {SubstancePolymerDegreeOfPolymerisation[]|undefined} [degreeOfPolymerisation],
     * @param {SubstancePolymerStructuralRepresentation[]|undefined} [structuralRepresentation],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            orientationOfPolymerisation,
            repeatUnit,
            amount,
            degreeOfPolymerisation,
            structuralRepresentation
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
         * @description Todo.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'orientationOfPolymerisation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.orientationOfPolymerisation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.orientationOfPolymerisation = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.orientationOfPolymerisation = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Todo.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'repeatUnit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.repeatUnit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.repeatUnit = undefined;
                    return;
                }
                this.__data.repeatUnit = valueProvided;
            }
        });

        /**
         * @description Todo.
         * @property {SubstanceAmount|undefined}
        */
        Object.defineProperty(this, 'amount', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.amount,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.amount = undefined;
                    return;
                }
                const SubstanceAmount = require('../backbone_elements/substanceAmount.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.amount = FhirResourceCreator.create(valueProvided, SubstanceAmount);
            }
        });

        /**
         * @description Todo.
         * @property {SubstancePolymerDegreeOfPolymerisation[]|undefined}
        */
        Object.defineProperty(this, 'degreeOfPolymerisation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.degreeOfPolymerisation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.degreeOfPolymerisation = undefined;
                    return;
                }
                const SubstancePolymerDegreeOfPolymerisation = require('../backbone_elements/substancePolymerDegreeOfPolymerisation.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.degreeOfPolymerisation = FhirResourceCreator.createArray(valueProvided, SubstancePolymerDegreeOfPolymerisation);
            }
        });

        /**
         * @description Todo.
         * @property {SubstancePolymerStructuralRepresentation[]|undefined}
        */
        Object.defineProperty(this, 'structuralRepresentation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.structuralRepresentation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.structuralRepresentation = undefined;
                    return;
                }
                const SubstancePolymerStructuralRepresentation = require('../backbone_elements/substancePolymerStructuralRepresentation.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.structuralRepresentation = FhirResourceCreator.createArray(valueProvided, SubstancePolymerStructuralRepresentation);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            orientationOfPolymerisation,
            repeatUnit,
            amount,
            degreeOfPolymerisation,
            structuralRepresentation
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
            orientationOfPolymerisation: this.orientationOfPolymerisation && this.orientationOfPolymerisation.toJSON(),
            repeatUnit: this.repeatUnit,
            amount: this.amount && this.amount.toJSON(),
            degreeOfPolymerisation: this.degreeOfPolymerisation && this.degreeOfPolymerisation.map(v => v.toJSON()),
            structuralRepresentation: this.structuralRepresentation && this.structuralRepresentation.map(v => v.toJSON())
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
            if (this.orientationOfPolymerisation) { await this.orientationOfPolymerisation.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.amount) { await this.amount.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.degreeOfPolymerisation) { await async.each(this.degreeOfPolymerisation, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.structuralRepresentation) { await async.each(this.structuralRepresentation, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            orientationOfPolymerisation: this.orientationOfPolymerisation && this.orientationOfPolymerisation.toJSONInternal(),
            repeatUnit: this.repeatUnit,
            amount: this.amount && this.amount.toJSONInternal(),
            degreeOfPolymerisation: this.degreeOfPolymerisation && this.degreeOfPolymerisation.map(v => v.toJSONInternal()),
            structuralRepresentation: this.structuralRepresentation && this.structuralRepresentation.map(v => v.toJSONInternal())
        };

        return removeNull(json);
    }
}

module.exports = SubstancePolymerRepeatUnit;
