

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
EvidenceReport.Section
    The EvidenceReport Resource is a specialized container for a collection of
    resources and codable concepts, adapted to support compositions of Evidence,
    EvidenceVariable, and Citation resources and related concepts.
*/
class EvidenceReportSection extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {String|undefined} [title],
     * @param {CodeableConcept|undefined} [focus],
     * @param {Reference|undefined} [focusReference],
     * @param {Reference[]|undefined} [author],
     * @param {Narrative|undefined} [text],
     * @param {code|undefined} [mode],
     * @param {CodeableConcept|undefined} [orderedBy],
     * @param {CodeableConcept[]|undefined} [entryClassifier],
     * @param {Reference[]|undefined} [entryReference],
     * @param {Quantity[]|undefined} [entryQuantity],
     * @param {CodeableConcept|undefined} [emptyReason],
     * @param {EvidenceReportSection[]|undefined} [section],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            title,
            focus,
            focusReference,
            author,
            text,
            mode,
            orderedBy,
            entryClassifier,
            entryReference,
            entryQuantity,
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
         * @description A code identifying the kind of content contained within the section. This
    should be consistent with the section title.
         * @property {CodeableConcept|undefined}
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
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.focus = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description A definitional Resource identifying the kind of content contained within the
    section. This should be consistent with the section title.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'focusReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.focusReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.focusReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.focusReference = FhirResourceCreator.create(valueProvided, Reference);
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
         * @description A human-readable narrative that contains the attested content of the section,
    used to represent the content of the resource to a human. The narrative need
    not encode all the structured data, but is peferred to contain sufficient
    detail to make it acceptable for a human to just read the narrative.
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
         * @description Specifies any type of classification of the evidence report.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'entryClassifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.entryClassifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.entryClassifier = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.entryClassifier = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description A reference to the actual resource from which the narrative in the section is
    derived.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'entryReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.entryReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.entryReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.entryReference = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description Quantity as content.
         * @property {Quantity[]|undefined}
        */
        Object.defineProperty(this, 'entryQuantity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.entryQuantity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.entryQuantity = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.entryQuantity = FhirResourceCreator.createArray(valueProvided, Quantity);
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
         * @property {EvidenceReportSection[]|undefined}
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
                this.__data.section = FhirResourceCreator.createArray(valueProvided, EvidenceReportSection);
            }
        });


        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            title,
            focus,
            focusReference,
            author,
            text,
            mode,
            orderedBy,
            entryClassifier,
            entryReference,
            entryQuantity,
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
            focus: this.focus && this.focus.toJSON(),
            focusReference: this.focusReference && this.focusReference.toJSON(),
            author: this.author && this.author.map(v => v.toJSON()),
            text: this.text && this.text.toJSON(),
            mode: this.mode,
            orderedBy: this.orderedBy && this.orderedBy.toJSON(),
            entryClassifier: this.entryClassifier && this.entryClassifier.map(v => v.toJSON()),
            entryReference: this.entryReference && this.entryReference.map(v => v.toJSON()),
            entryQuantity: this.entryQuantity && this.entryQuantity.map(v => v.toJSON()),
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
            if (this.focus) { await this.focus.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.focusReference) { await this.focusReference.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.author) { await async.each(this.author, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.text) { await this.text.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.orderedBy) { await this.orderedBy.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.entryClassifier) { await async.each(this.entryClassifier, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.entryReference) { await async.each(this.entryReference, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.entryQuantity) { await async.each(this.entryQuantity, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            focus: this.focus && this.focus.toJSONInternal(),
            focusReference: this.focusReference && this.focusReference.toJSONInternal(),
            author: this.author && this.author.map(v => v.toJSONInternal()),
            text: this.text && this.text.toJSONInternal(),
            mode: this.mode,
            orderedBy: this.orderedBy && this.orderedBy.toJSONInternal(),
            entryClassifier: this.entryClassifier && this.entryClassifier.map(v => v.toJSONInternal()),
            entryReference: this.entryReference && this.entryReference.map(v => v.toJSONInternal()),
            entryQuantity: this.entryQuantity && this.entryQuantity.map(v => v.toJSONInternal()),
            emptyReason: this.emptyReason && this.emptyReason.toJSONInternal(),
            section: this.section && this.section.map(v => v.toJSONInternal())
        };

        return removeNull(json);
    }
}

module.exports = EvidenceReportSection;
