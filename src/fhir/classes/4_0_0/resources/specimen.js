

// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');
const async = require('async');

/**
Specimen
    A sample to be used for analysis.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class Specimen extends Resource {
    /**
     * @param {String|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {Identifier|undefined} [accessionIdentifier],
     * @param {code|undefined} [status],
     * @param {CodeableConcept|undefined} [type],
     * @param {Reference|undefined} [subject],
     * @param {dateTime|undefined} [receivedTime],
     * @param {Reference[]|undefined} [parent],
     * @param {Reference[]|undefined} [request],
     * @param {SpecimenCollection|undefined} [collection],
     * @param {SpecimenProcessing[]|undefined} [processing],
     * @param {SpecimenContainer[]|undefined} [container],
     * @param {CodeableConcept[]|undefined} [condition],
     * @param {Annotation[]|undefined} [note],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
    */
    constructor (
        {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            accessionIdentifier,
            status,
            type,
            subject,
            receivedTime,
            parent,
            request,
            collection,
            processing,
            container,
            condition,
            note,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        }
    ) {
        super({});

        // ---- Define getters and setters as enumerable ---

        /**
         * @description The logical id of the resource, as used in the URL for the resource. Once
    assigned, this value never changes.
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.meta = FhirResourceCreator.create(valueProvided, Meta);
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.text = FhirResourceCreator.create(valueProvided, Narrative);
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.contained = FhirResourceCreator.createArray(valueProvided);
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.extension = FhirResourceCreator.createArray(valueProvided, Extension);
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.modifierExtension = FhirResourceCreator.createArray(valueProvided, Extension);
            }
        });

        /**
         * @description Id for specimen.
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.identifier = FhirResourceCreator.createArray(valueProvided, Identifier);
            }
        });

        /**
         * @description The identifier assigned by the lab when accessioning specimen(s). This is not
    necessarily the same as the specimen identifier, depending on local lab
    procedures.
         * @property {Identifier|undefined}
        */
        Object.defineProperty(this, 'accessionIdentifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.accessionIdentifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.accessionIdentifier = undefined;
                    return;
                }
                const Identifier = require('../complex_types/identifier.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.accessionIdentifier = FhirResourceCreator.create(valueProvided, Identifier);
            }
        });

        /**
         * @description The availability of the specimen.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'status', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.status,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.status = undefined;
                    return;
                }
                this.__data.status = valueProvided;
            }
        });

        /**
         * @description The kind of material that forms the specimen.
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.type = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Where the specimen came from. This may be from patient(s), from a location
    (e.g., the source of an environmental sample), or a sampling of a substance or
    a device.
         * @property {Reference|undefined}
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.subject = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description Time when specimen was received for processing or testing.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'receivedTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.receivedTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.receivedTime = undefined;
                    return;
                }
                this.__data.receivedTime = valueProvided;
            }
        });

        /**
         * @description Reference to the parent (source) specimen which is used when the specimen was
    either derived from or a component of another specimen.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'parent', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.parent,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.parent = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.parent = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description Details concerning a service request that required a specimen to be collected.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'request', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.request,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.request = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.request = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description Details concerning the specimen collection.
         * @property {SpecimenCollection|undefined}
        */
        Object.defineProperty(this, 'collection', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.collection,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.collection = undefined;
                    return;
                }
                const SpecimenCollection = require('../backbone_elements/specimenCollection.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.collection = FhirResourceCreator.create(valueProvided, SpecimenCollection);
            }
        });

        /**
         * @description Details concerning processing and processing steps for the specimen.
         * @property {SpecimenProcessing[]|undefined}
        */
        Object.defineProperty(this, 'processing', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.processing,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.processing = undefined;
                    return;
                }
                const SpecimenProcessing = require('../backbone_elements/specimenProcessing.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.processing = FhirResourceCreator.createArray(valueProvided, SpecimenProcessing);
            }
        });

        /**
         * @description The container holding the specimen.  The recursive nature of containers; i.e.
    blood in tube in tray in rack is not addressed here.
         * @property {SpecimenContainer[]|undefined}
        */
        Object.defineProperty(this, 'container', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.container,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.container = undefined;
                    return;
                }
                const SpecimenContainer = require('../backbone_elements/specimenContainer.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.container = FhirResourceCreator.createArray(valueProvided, SpecimenContainer);
            }
        });

        /**
         * @description A mode or state of being that describes the nature of the specimen.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'condition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.condition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.condition = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.condition = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description To communicate any details or issues about the specimen or during the specimen
    collection. (for example: broken vial, sent with patient, frozen).
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
            identifier,
            accessionIdentifier,
            status,
            type,
            subject,
            receivedTime,
            parent,
            request,
            collection,
            processing,
            container,
            condition,
            note,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        });

        /**
         * @description Define a default non-writable resourceType property
         * @property {string|undefined}
         */
        Object.defineProperty(this, 'resourceType', {
            value: 'Specimen',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    /**
     * @description Define a default non-writable resourceType property
     * @property {string|undefined}
     */
    static get resourceType () {
        return 'Specimen';
    }

    /**
     * @description Creates a blank new resource
     * @param {String|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {Identifier|undefined} [accessionIdentifier],
     * @param {code|undefined} [status],
     * @param {CodeableConcept|undefined} [type],
     * @param {Reference|undefined} [subject],
     * @param {dateTime|undefined} [receivedTime],
     * @param {Reference[]|undefined} [parent],
     * @param {Reference[]|undefined} [request],
     * @param {SpecimenCollection|undefined} [collection],
     * @param {SpecimenProcessing[]|undefined} [processing],
     * @param {SpecimenContainer[]|undefined} [container],
     * @param {CodeableConcept[]|undefined} [condition],
     * @param {Annotation[]|undefined} [note],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {Specimen}
    */
    create (
            {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            accessionIdentifier,
            status,
            type,
            subject,
            receivedTime,
            parent,
            request,
            collection,
            processing,
            container,
            condition,
            note,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        }
    ) {
        return new Specimen({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            accessionIdentifier,
            status,
            type,
            subject,
            receivedTime,
            parent,
            request,
            collection,
            processing,
            container,
            condition,
            note,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {Specimen}
    */
    clone () {
        return new Specimen(this.toJSONInternal());
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON () {
        const { removeNull } = require('../../../../utils/nullRemover');

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
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            accessionIdentifier: this.accessionIdentifier && this.accessionIdentifier.toJSON(),
            status: this.status,
            type: this.type && this.type.toJSON(),
            subject: this.subject && this.subject.toJSON(),
            receivedTime: this.receivedTime,
            parent: this.parent && this.parent.map(v => v.toJSON()),
            request: this.request && this.request.map(v => v.toJSON()),
            collection: this.collection && this.collection.toJSON(),
            processing: this.processing && this.processing.map(v => v.toJSON()),
            container: this.container && this.container.map(v => v.toJSON()),
            condition: this.condition && this.condition.map(v => v.toJSON()),
            note: this.note && this.note.map(v => v.toJSON())
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync ({ fnUpdateReferenceAsync }) {
            if (this.meta) { await this.meta.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.text) { await this.text.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.contained) { await async.each(this.contained, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.extension) { await async.each(this.extension, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.modifierExtension) { await async.each(this.modifierExtension, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.identifier) { await async.each(this.identifier, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.accessionIdentifier) { await this.accessionIdentifier.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.type) { await this.type.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.subject) { await this.subject.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.parent) { await async.each(this.parent, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.request) { await async.each(this.request, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.collection) { await this.collection.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.processing) { await async.each(this.processing, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.container) { await async.each(this.container, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.condition) { await async.each(this.condition, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.note) { await async.each(this.note, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal () {
        const { removeNull } = require('../../../../utils/nullRemover');
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
            identifier: this.identifier && this.identifier.map(v => v.toJSONInternal()),
            accessionIdentifier: this.accessionIdentifier && this.accessionIdentifier.toJSONInternal(),
            status: this.status,
            type: this.type && this.type.toJSONInternal(),
            subject: this.subject && this.subject.toJSONInternal(),
            receivedTime: this.receivedTime,
            parent: this.parent && this.parent.map(v => v.toJSONInternal()),
            request: this.request && this.request.map(v => v.toJSONInternal()),
            collection: this.collection && this.collection.toJSONInternal(),
            processing: this.processing && this.processing.map(v => v.toJSONInternal()),
            container: this.container && this.container.map(v => v.toJSONInternal()),
            condition: this.condition && this.condition.map(v => v.toJSONInternal()),
            note: this.note && this.note.map(v => v.toJSONInternal())
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

module.exports = Specimen;
