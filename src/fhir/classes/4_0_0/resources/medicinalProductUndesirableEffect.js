/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');
const async = require('async');


/**
MedicinalProductUndesirableEffect
    Describe the undesirable effects of the medicinal product.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class MedicinalProductUndesirableEffect extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Reference[]|undefined} [subject],
     * @param {CodeableConcept|undefined} [symptomConditionEffect],
     * @param {CodeableConcept|undefined} [classification],
     * @param {CodeableConcept|undefined} [frequencyOfOccurrence],
     * @param {Population[]|undefined} [population],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
    */
    constructor(
        {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            subject,
            symptomConditionEffect,
            classification,
            frequencyOfOccurrence,
            population,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        super({});

        // ---- Define getters and setters as enumerable ---

        /**
         * @description The logical id of the resource, as used in the URL for the resource. Once
    assigned, this value never changes.
         * @property {id|undefined}
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
         * @description The metadata about the resource. This is content that is maintained by the
    infrastructure. Changes to the content might not always be associated with
    version changes to the resource.
         * @property {Meta|undefined}
        */
        Object.defineProperty(this, 'meta', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.meta,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.meta = undefined;
                    return;
                }
                const Meta = require('../complex_types/meta.js');
                this.__data.meta = new Meta(valueProvided);
            }
        });

        /**
         * @description A reference to a set of rules that were followed when the resource was
    constructed, and which must be understood when processing the content. Often,
    this is a reference to an implementation guide that defines the special rules
    along with other profiles etc.
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'implicitRules', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.implicitRules,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.implicitRules = undefined;
                    return;
                }
                this.__data.implicitRules = valueProvided;
            }
        });

        /**
         * @description The base language in which the resource is written.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'language', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.language,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.language = undefined;
                    return;
                }
                this.__data.language = valueProvided;
            }
        });

        /**
         * @description A human-readable narrative that contains a summary of the resource and can be
    used to represent the content of the resource to a human. The narrative need
    not encode all the structured data, but is required to contain sufficient
    detail to make it "clinically safe" for a human to just read the narrative.
    Resource definitions may define what content should be represented in the
    narrative to ensure clinical safety.
         * @property {Narrative|undefined}
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
                const Narrative = require('../complex_types/narrative.js');
                this.__data.text = new Narrative(valueProvided);
            }
        });

        /**
         * @description These resources do not have an independent existence apart from the resource
    that contains them - they cannot be identified independently, and nor can they
    have their own independent transaction scope.
         * @property {ResourceContainer[]|undefined}
        */
        Object.defineProperty(this, 'contained', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contained,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contained = undefined;
                    return;
                }
                const ResourceContainer = require('../simple_types/resourceContainer.js');
                const {getResource} = require('../../../../operations/common/getResource');
                if (Array.isArray(valueProvided)) {
                    this.__data.contained = valueProvided.filter(v => v).map(v => {
                        const ResourceCreator = getResource('4_0_0', v.resourceType);
                        return new ResourceCreator(v);
                    });
                } else {
                const ResourceCreator = getResource('4_0_0', valueProvided.resourceType);
                this.__data.contained = [new ResourceCreator(valueProvided)];
                }
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the resource. To make the use of extensions safe and manageable,
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
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the resource and that modifies the understanding of the element
    that contains it and/or the understanding of the containing element's
    descendants. Usually modifier elements provide negation or qualification. To
    make the use of extensions safe and manageable, there is a strict set of
    governance applied to the definition and use of extensions. Though any
    implementer is allowed to define an extension, there is a set of requirements
    that SHALL be met as part of the definition of the extension. Applications
    processing a resource are required to check for modifier extensions.

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
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description The medication for which this is an indication.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'subject', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subject,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subject = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.subject = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description The symptom, condition or undesirable effect.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'symptomConditionEffect', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.symptomConditionEffect,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.symptomConditionEffect = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.symptomConditionEffect = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Classification of the effect.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'classification', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.classification,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.classification = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.classification = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The frequency of occurrence of the effect.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'frequencyOfOccurrence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.frequencyOfOccurrence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.frequencyOfOccurrence = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.frequencyOfOccurrence = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The population group to which this applies.
         * @property {Population[]|undefined}
        */
        Object.defineProperty(this, 'population', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.population,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.population = undefined;
                    return;
                }
                const Population = require('../backbone_elements/population.js');
                this.__data.population = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Population(v)) : [new Population(valueProvided)];
            }
        });


        /**
         * @description _access
         * @property {Object|undefined}
         */
        Object.defineProperty(this, '_access', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._access,
            set: valueProvided => {
                this.__data._access = valueProvided;
            }
        });
        /**
         * @description _sourceAssigningAuthority
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_sourceAssigningAuthority', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceAssigningAuthority,
            set: valueProvided => {
                this.__data._sourceAssigningAuthority = valueProvided;
            }
        });
        /**
         * @description _uuid
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_uuid', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._uuid,
            set: valueProvided => {
                this.__data._uuid = valueProvided;
            }
        });
        /**
         * @description _sourceId
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_sourceId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceId,
            set: valueProvided => {
                this.__data._sourceId = valueProvided;
            }
        });


        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            subject,
            symptomConditionEffect,
            classification,
            frequencyOfOccurrence,
            population,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });

        /**
         * @description Define a default non-writable resourceType property
         * @property {string|undefined}
         */
        Object.defineProperty(this, 'resourceType', {
            value: 'MedicinalProductUndesirableEffect',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    /**
     * @description Define a default non-writable resourceType property
     * @property {string|undefined}
     */
    static get resourceType() {
        return 'MedicinalProductUndesirableEffect';
    }

    /**
     * @description Creates a blank new resource
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Reference[]|undefined} [subject],
     * @param {CodeableConcept|undefined} [symptomConditionEffect],
     * @param {CodeableConcept|undefined} [classification],
     * @param {CodeableConcept|undefined} [frequencyOfOccurrence],
     * @param {Population[]|undefined} [population],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {MedicinalProductUndesirableEffect}
    */
    create(
            {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            subject,
            symptomConditionEffect,
            classification,
            frequencyOfOccurrence,
            population,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        return new MedicinalProductUndesirableEffect({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            subject,
            symptomConditionEffect,
            classification,
            frequencyOfOccurrence,
            population,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {MedicinalProductUndesirableEffect}
    */
    clone() {
        return new MedicinalProductUndesirableEffect(this.toJSONInternal());
    }


    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON() {
        const {removeNull} = require('../../../../utils/nullRemover');

        return removeNull({
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSON(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSON(),
            contained: this.contained && this.contained.map(v => v.toJSON()),
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            subject: this.subject && this.subject.map(v => v.toJSON()),
            symptomConditionEffect: this.symptomConditionEffect && this.symptomConditionEffect.toJSON(),
            classification: this.classification && this.classification.toJSON(),
            frequencyOfOccurrence: this.frequencyOfOccurrence && this.frequencyOfOccurrence.toJSON(),
            population: this.population && this.population.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.meta) {await this.meta.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.text) {await this.text.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.contained) { async.each(this.contained, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.extension) { async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) { async.each(this.modifierExtension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.subject) { async.each(this.subject, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.symptomConditionEffect) {await this.symptomConditionEffect.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.classification) {await this.classification.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.frequencyOfOccurrence) {await this.frequencyOfOccurrence.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.population) { async.each(this.population, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = {
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSONInternal(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSONInternal(),
            contained: this.contained && this.contained.map(v => v.toJSONInternal()),
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            subject: this.subject && this.subject.map(v => v.toJSONInternal()),
            symptomConditionEffect: this.symptomConditionEffect && this.symptomConditionEffect.toJSONInternal(),
            classification: this.classification && this.classification.toJSONInternal(),
            frequencyOfOccurrence: this.frequencyOfOccurrence && this.frequencyOfOccurrence.toJSONInternal(),
            population: this.population && this.population.map(v => v.toJSONInternal()),
        };


        if (this._access) {
            json._access = this._access;
        }
        if (this._sourceAssigningAuthority) {
            json._sourceAssigningAuthority = this._sourceAssigningAuthority;
        }
        if (this._uuid) {
            json._uuid = this._uuid;
        }
        if (this._sourceId) {
            json._sourceId = this._sourceId;
        }

        return removeNull(json);
    }
}

module.exports = MedicinalProductUndesirableEffect;
