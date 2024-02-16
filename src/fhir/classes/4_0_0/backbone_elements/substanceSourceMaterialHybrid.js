/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
SubstanceSourceMaterial.Hybrid
    Source material shall capture information on the taxonomic and anatomical
    origins as well as the fraction of a material that can result in or can be
    modified to form a substance. This set of data elements shall be used to
    define polymer substances isolated from biological matrices. Taxonomic and
    anatomical origins shall be described using a controlled vocabulary as
    required. This information is captured for naturally derived polymers ( .
    starch) and structurally diverse substances. For Organisms belonging to the
    Kingdom Plantae the Substance level defines the fresh material of a single
    species or infraspecies, the Herbal Drug and the Herbal preparation. For
    Herbal preparations, the fraction information will be captured at the
    Substance information level and additional information for herbal extracts
    will be captured at the Specified Substance Group 1 information level. See for
    further explanation the Substance Class: Structurally Diverse and the herbal
    annex.
*/
class SubstanceSourceMaterialHybrid extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {String|undefined} [maternalOrganismId],
     * @param {String|undefined} [maternalOrganismName],
     * @param {String|undefined} [paternalOrganismId],
     * @param {String|undefined} [paternalOrganismName],
     * @param {CodeableConcept|undefined} [hybridType],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            maternalOrganismId,
            maternalOrganismName,
            paternalOrganismId,
            paternalOrganismName,
            hybridType
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
         * @description The identifier of the maternal species constituting the hybrid organism shall
    be specified based on a controlled vocabulary. For plants, the parents aren’t
    always known, and it is unlikely that it will be known which is maternal and
    which is paternal.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'maternalOrganismId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.maternalOrganismId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.maternalOrganismId = undefined;
                    return;
                }
                this.__data.maternalOrganismId = valueProvided;
            }
        });

        /**
         * @description The name of the maternal species constituting the hybrid organism shall be
    specified. For plants, the parents aren’t always known, and it is unlikely
    that it will be known which is maternal and which is paternal.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'maternalOrganismName', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.maternalOrganismName,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.maternalOrganismName = undefined;
                    return;
                }
                this.__data.maternalOrganismName = valueProvided;
            }
        });

        /**
         * @description The identifier of the paternal species constituting the hybrid organism shall
    be specified based on a controlled vocabulary.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'paternalOrganismId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.paternalOrganismId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.paternalOrganismId = undefined;
                    return;
                }
                this.__data.paternalOrganismId = valueProvided;
            }
        });

        /**
         * @description The name of the paternal species constituting the hybrid organism shall be
    specified.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'paternalOrganismName', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.paternalOrganismName,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.paternalOrganismName = undefined;
                    return;
                }
                this.__data.paternalOrganismName = valueProvided;
            }
        });

        /**
         * @description The hybrid type of an organism shall be specified.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'hybridType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.hybridType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.hybridType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.hybridType = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            maternalOrganismId,
            maternalOrganismName,
            paternalOrganismId,
            paternalOrganismName,
            hybridType
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
            maternalOrganismId: this.maternalOrganismId,
            maternalOrganismName: this.maternalOrganismName,
            paternalOrganismId: this.paternalOrganismId,
            paternalOrganismName: this.paternalOrganismName,
            hybridType: this.hybridType && this.hybridType.toJSON()
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
            if (this.hybridType) { await this.hybridType.updateReferencesAsync({ fnUpdateReferenceAsync }); }
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
            maternalOrganismId: this.maternalOrganismId,
            maternalOrganismName: this.maternalOrganismName,
            paternalOrganismId: this.paternalOrganismId,
            paternalOrganismName: this.paternalOrganismName,
            hybridType: this.hybridType && this.hybridType.toJSONInternal()
        };

        return removeNull(json);
    }
}

module.exports = SubstanceSourceMaterialHybrid;
