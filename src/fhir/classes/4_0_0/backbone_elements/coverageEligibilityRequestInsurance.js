/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
CoverageEligibilityRequest.Insurance
    The CoverageEligibilityRequest provides patient and insurance coverage
    information to an insurer for them to respond, in the form of an
    CoverageEligibilityResponse, with information regarding whether the stated
    coverage is valid and in-force and optionally to provide the insurance details
    of the policy.
*/
class CoverageEligibilityRequestInsurance extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Boolean|undefined} [focal],
     * @param {Reference} coverage,
     * @param {String|undefined} [businessArrangement],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            focal,
            coverage,
            businessArrangement,
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
         * @description A flag to indicate that this Coverage is to be used for evaluation of this
    request when set to true.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'focal', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.focal,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.focal = undefined;
                    return;
                }
                this.__data.focal = valueProvided;
            }
        });

        /**
         * @description Reference to the insurance card level information contained in the Coverage
    resource. The coverage issuing insurer will use these details to locate the
    patient's actual coverage within the insurer's information system.
         * @property {Reference}
        */
        Object.defineProperty(this, 'coverage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.coverage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.coverage = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.coverage = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description A business agreement number established between the provider and the insurer
    for special business processing purposes.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'businessArrangement', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.businessArrangement,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.businessArrangement = undefined;
                    return;
                }
                this.__data.businessArrangement = valueProvided;
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            focal,
            coverage,
            businessArrangement,
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
            focal: this.focal,
            coverage: this.coverage && this.coverage.toJSON(),
            businessArrangement: this.businessArrangement,
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
            if (this.coverage) {await this.coverage.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            focal: this.focal,
            coverage: this.coverage && this.coverage.toJSONInternal(),
            businessArrangement: this.businessArrangement,
        };



        return removeNull(json);
    }
}

module.exports = CoverageEligibilityRequestInsurance;
