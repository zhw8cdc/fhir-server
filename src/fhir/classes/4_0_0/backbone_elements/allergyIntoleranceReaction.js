

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
AllergyIntolerance.Reaction
    Risk of harmful or undesirable, physiological response which is unique to an
    individual and associated with exposure to a substance.
*/
class AllergyIntoleranceReaction extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [substance],
     * @param {CodeableConcept[]} manifestation,
     * @param {String|undefined} [description],
     * @param {dateTime|undefined} [onset],
     * @param {code|undefined} [severity],
     * @param {CodeableConcept|undefined} [exposureRoute],
     * @param {Annotation[]|undefined} [note],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            substance,
            manifestation,
            description,
            onset,
            severity,
            exposureRoute,
            note
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
         * @description Identification of the specific substance (or pharmaceutical product)
    considered to be responsible for the Adverse Reaction event. Note: the
    substance for a specific reaction may be different from the substance
    identified as the cause of the risk, but it must be consistent with it. For
    instance, it may be a more specific substance (e.g. a brand medication) or a
    composite product that includes the identified substance. It must be
    clinically safe to only process the 'code' and ignore the
    'reaction.substance'.  If a receiving system is unable to confirm that
    AllergyIntolerance.reaction.substance falls within the semantic scope of
    AllergyIntolerance.code, then the receiving system should ignore
    AllergyIntolerance.reaction.substance.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'substance', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.substance,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.substance = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.substance = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Clinical symptoms and/or signs that are observed or associated with the
    adverse reaction event.
         * @property {CodeableConcept[]}
        */
        Object.defineProperty(this, 'manifestation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.manifestation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.manifestation = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.manifestation = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Text description about the reaction as a whole, including details of the
    manifestation if required.
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
         * @description Record of the date and/or time of the onset of the Reaction.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'onset', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.onset,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.onset = undefined;
                    return;
                }
                this.__data.onset = valueProvided;
            }
        });

        /**
         * @description Clinical assessment of the severity of the reaction event as a whole,
    potentially considering multiple different manifestations.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'severity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.severity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.severity = undefined;
                    return;
                }
                this.__data.severity = valueProvided;
            }
        });

        /**
         * @description Identification of the route by which the subject was exposed to the substance.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'exposureRoute', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.exposureRoute,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.exposureRoute = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.exposureRoute = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Additional text about the adverse reaction event not captured in other fields.
         * @property {Annotation[]|undefined}
        */
        Object.defineProperty(this, 'note', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.note,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.note = undefined;
                    return;
                }
                const Annotation = require('../complex_types/annotation.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.note = FhirResourceCreator.createArray(valueProvided, Annotation);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            substance,
            manifestation,
            description,
            onset,
            severity,
            exposureRoute,
            note
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
            substance: this.substance && this.substance.toJSON(),
            manifestation: this.manifestation && this.manifestation.map(v => v.toJSON()),
            description: this.description,
            onset: this.onset,
            severity: this.severity,
            exposureRoute: this.exposureRoute && this.exposureRoute.toJSON(),
            note: this.note && this.note.map(v => v.toJSON())
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
            if (this.substance) { await this.substance.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.manifestation) { await async.each(this.manifestation, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.exposureRoute) { await this.exposureRoute.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.note) { await async.each(this.note, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            substance: this.substance && this.substance.toJSONInternal(),
            manifestation: this.manifestation && this.manifestation.map(v => v.toJSONInternal()),
            description: this.description,
            onset: this.onset,
            severity: this.severity,
            exposureRoute: this.exposureRoute && this.exposureRoute.toJSONInternal(),
            note: this.note && this.note.map(v => v.toJSONInternal())
        };

        return removeNull(json);
    }
}

module.exports = AllergyIntoleranceReaction;
