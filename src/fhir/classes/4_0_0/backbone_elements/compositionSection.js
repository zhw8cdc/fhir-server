/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
Composition.Section
    A set of healthcare-related information that is assembled together into a
    single logical package that provides a single coherent statement of meaning,
    establishes its own context and that has clinical attestation with regard to
    who is making the statement. A Composition defines the structure and narrative
    content necessary for a document. However, a Composition alone does not
    constitute a document. Rather, the Composition must be the first entry in a
    Bundle where Bundle.type=document, and any other resources referenced from
    Composition must be included as subsequent entries in the Bundle (for example
    Patient, Practitioner, Encounter, etc.).
*/
class CompositionSection extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {String|undefined} [title],
     * @param {CodeableConcept|undefined} [code],
     * @param {Reference[]|undefined} [author],
     * @param {Reference|undefined} [focus],
     * @param {Narrative|undefined} [text],
     * @param {code|undefined} [mode],
     * @param {CodeableConcept|undefined} [orderedBy],
     * @param {Reference[]|undefined} [entry],
     * @param {CodeableConcept|undefined} [emptyReason],
     * @param {CompositionSection[]|undefined} [section],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            title,
            code,
            author,
            focus,
            text,
            mode,
            orderedBy,
            entry,
            emptyReason,
            section
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
         * @description The label for this particular section.  This will be part of the rendered
    content for the document, and is often used to build a table of contents.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'title', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.title,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.title = undefined;
                    return;
                }
                this.__data.title = valueProvided;
            }
        });

        /**
         * @description A code identifying the kind of content contained within the section. This must
    be consistent with the section title.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'code', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.code,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.code = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.code = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Identifies who is responsible for the information in this section, not
    necessarily who typed it in.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'author', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.author,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.author = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.author = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description The actual focus of the section when it is not the subject of the composition,
    but instead represents something or someone associated with the subject such
    as (for a patient subject) a spouse, parent, fetus, or donor. If not focus is
    specified, the focus is assumed to be focus of the parent section, or, for a
    section in the Composition itself, the subject of the composition. Sections
    with a focus SHALL only include resources where the logical subject (patient,
    subject, focus, etc.) matches the section focus, or the resources have no
    logical subject (few resources).
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'focus', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.focus,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.focus = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.focus = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description A human-readable narrative that contains the attested content of the section,
    used to represent the content of the resource to a human. The narrative need
    not encode all the structured data, but is required to contain sufficient
    detail to make it "clinically safe" for a human to just read the narrative.
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.text = FhirResourceCreator.create(valueProvided, Narrative);
            }
        });

        /**
         * @description How the entry list was prepared - whether it is a working list that is
    suitable for being maintained on an ongoing basis, or if it represents a
    snapshot of a list of items from another source, or whether it is a prepared
    list where items may be marked as added, modified or deleted.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'mode', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.mode,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.mode = undefined;
                    return;
                }
                this.__data.mode = valueProvided;
            }
        });

        /**
         * @description Specifies the order applied to the items in the section entries.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'orderedBy', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.orderedBy,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.orderedBy = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.orderedBy = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description A reference to the actual resource from which the narrative in the section is
    derived.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'entry', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.entry,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.entry = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.entry = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description If the section is empty, why the list is empty. An empty section typically has
    some text explaining the empty reason.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'emptyReason', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.emptyReason,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.emptyReason = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.emptyReason = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description A nested sub-section within this section.
         * @property {CompositionSection[]|undefined}
        */
        Object.defineProperty(this, 'section', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.section,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.section = undefined;
                    return;
                }
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.section = FhirResourceCreator.createArray(valueProvided, CompositionSection);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            title,
            code,
            author,
            focus,
            text,
            mode,
            orderedBy,
            entry,
            emptyReason,
            section
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
            title: this.title,
            code: this.code && this.code.toJSON(),
            author: this.author && this.author.map(v => v.toJSON()),
            focus: this.focus && this.focus.toJSON(),
            text: this.text && this.text.toJSON(),
            mode: this.mode,
            orderedBy: this.orderedBy && this.orderedBy.toJSON(),
            entry: this.entry && this.entry.map(v => v.toJSON()),
            emptyReason: this.emptyReason && this.emptyReason.toJSON(),
            section: this.section && this.section.map(v => v.toJSON())
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
            if (this.code) { await this.code.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.author) { await async.each(this.author, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.focus) { await this.focus.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.text) { await this.text.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.orderedBy) { await this.orderedBy.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.entry) { await async.each(this.entry, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.emptyReason) { await this.emptyReason.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.section) { await async.each(this.section, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            title: this.title,
            code: this.code && this.code.toJSONInternal(),
            author: this.author && this.author.map(v => v.toJSONInternal()),
            focus: this.focus && this.focus.toJSONInternal(),
            text: this.text && this.text.toJSONInternal(),
            mode: this.mode,
            orderedBy: this.orderedBy && this.orderedBy.toJSONInternal(),
            entry: this.entry && this.entry.map(v => v.toJSONInternal()),
            emptyReason: this.emptyReason && this.emptyReason.toJSONInternal(),
            section: this.section && this.section.map(v => v.toJSONInternal())
        };

        return removeNull(json);
    }
}

module.exports = CompositionSection;
