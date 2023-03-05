/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
Observation.ReferenceRange
    Measurements and simple assertions made about a patient, device or other
    subject.
*/
class ObservationReferenceRange extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Quantity|undefined} [low],
     * @param {Quantity|undefined} [high],
     * @param {CodeableConcept|undefined} [type],
     * @param {CodeableConcept[]|undefined} [appliesTo],
     * @param {Range|undefined} [age],
     * @param {String|undefined} [text],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            low,
            high,
            type,
            appliesTo,
            age,
            text,
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
         * @description The value of the low bound of the reference range.  The low bound of the
    reference range endpoint is inclusive of the value (e.g.  reference range is
    >=5 - <=9). If the low bound is omitted,  it is assumed to be meaningless
    (e.g. reference range is <=2.3).
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'low', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.low,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.low = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.low = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description The value of the high bound of the reference range.  The high bound of the
    reference range endpoint is inclusive of the value (e.g.  reference range is
    >=5 - <=9). If the high bound is omitted,  it is assumed to be meaningless
    (e.g. reference range is >= 2.3).
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'high', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.high,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.high = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.high = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description Codes to indicate the what part of the targeted reference population it
    applies to. For example, the normal or therapeutic range.
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
         * @description Codes to indicate the target population this reference range applies to.  For
    example, a reference range may be based on the normal population or a
    particular sex or race.  Multiple `appliesTo`  are interpreted as an "AND" of
    the target populations.  For example, to represent a target population of
    African American females, both a code of female and a code for African
    American would be used.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'appliesTo', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.appliesTo,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.appliesTo = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.appliesTo = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The age at which this reference range is applicable. This is a neonatal age
    (e.g. number of weeks at term) if the meaning says so.
         * @property {Range|undefined}
        */
        Object.defineProperty(this, 'age', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.age,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.age = undefined;
                    return;
                }
                const Range = require('../complex_types/range.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.age = FhirResourceCreator.create(valueProvided, Range);
            }
        });

        /**
         * @description Text based reference range in an observation which may be used when a
    quantitative range is not appropriate for an observation.  An example would be
    a reference value of "Negative" or a list or table of "normals".
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'text', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.text,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.text = undefined;
                    return;
                }
                this.__data.text = valueProvided;
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            low,
            high,
            type,
            appliesTo,
            age,
            text,
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
            low: this.low && this.low.toJSON(),
            high: this.high && this.high.toJSON(),
            type: this.type && this.type.toJSON(),
            appliesTo: this.appliesTo && this.appliesTo.map(v => v.toJSON()),
            age: this.age && this.age.toJSON(),
            text: this.text,
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
            if (this.low) {await this.low.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.high) {await this.high.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.type) {await this.type.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.appliesTo) {await async.each(this.appliesTo, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.age) {await this.age.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            low: this.low && this.low.toJSONInternal(),
            high: this.high && this.high.toJSONInternal(),
            type: this.type && this.type.toJSONInternal(),
            appliesTo: this.appliesTo && this.appliesTo.map(v => v.toJSONInternal()),
            age: this.age && this.age.toJSONInternal(),
            text: this.text,
        };



        return removeNull(json);
    }
}

module.exports = ObservationReferenceRange;
