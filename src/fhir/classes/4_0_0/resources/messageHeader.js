/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');
const async = require('async');

/**
MessageHeader
    The header for a message exchange that is either requesting or responding to
    an action.  The reference(s) that are the subject of the action as well as
    other information related to the action are typically transmitted in a bundle
    in which the MessageHeader resource instance is the first resource in the
    bundle.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class MessageHeader extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Coding|undefined} [eventCoding],
     * @param {uri|undefined} [eventUri],
     * @param {MessageHeaderDestination[]|undefined} [destination],
     * @param {Reference|undefined} [sender],
     * @param {Reference|undefined} [enterer],
     * @param {Reference|undefined} [author],
     * @param {MessageHeaderSource} source,
     * @param {Reference|undefined} [responsible],
     * @param {CodeableConcept|undefined} [reason],
     * @param {MessageHeaderResponse|undefined} [response],
     * @param {Reference[]|undefined} [focus],
     * @param {canonical|undefined} [definition],
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
            eventCoding,
            eventUri,
            destination,
            sender,
            enterer,
            author,
            source,
            responsible,
            reason,
            response,
            focus,
            definition,
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
         * @description None
         * @property {Coding|undefined}
        */
        Object.defineProperty(this, 'eventCoding', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.eventCoding,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.eventCoding = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.eventCoding = FhirResourceCreator.create(valueProvided, Coding);
            }
        });

        /**
         * @description None
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'eventUri', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.eventUri,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.eventUri = undefined;
                    return;
                }
                this.__data.eventUri = valueProvided;
            }
        });

        /**
         * @description The destination application which the message is intended for.
         * @property {MessageHeaderDestination[]|undefined}
        */
        Object.defineProperty(this, 'destination', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.destination,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.destination = undefined;
                    return;
                }
                const MessageHeaderDestination = require('../backbone_elements/messageHeaderDestination.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.destination = FhirResourceCreator.createArray(valueProvided, MessageHeaderDestination);
            }
        });

        /**
         * @description Identifies the sending system to allow the use of a trust relationship.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'sender', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sender,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sender = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.sender = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description The person or device that performed the data entry leading to this message.
    When there is more than one candidate, pick the most proximal to the message.
    Can provide other enterers in extensions.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'enterer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.enterer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.enterer = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.enterer = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description The logical author of the message - the person or device that decided the
    described event should happen. When there is more than one candidate, pick the
    most proximal to the MessageHeader. Can provide other authors in extensions.
         * @property {Reference|undefined}
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
                this.__data.author = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description The source application from which this message originated.
         * @property {MessageHeaderSource}
        */
        Object.defineProperty(this, 'source', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.source,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.source = undefined;
                    return;
                }
                const MessageHeaderSource = require('../backbone_elements/messageHeaderSource.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.source = FhirResourceCreator.create(valueProvided, MessageHeaderSource);
            }
        });

        /**
         * @description The person or organization that accepts overall responsibility for the
    contents of the message. The implication is that the message event happened
    under the policies of the responsible party.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'responsible', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.responsible,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.responsible = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.responsible = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description Coded indication of the cause for the event - indicates  a reason for the
    occurrence of the event that is a focus of this message.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'reason', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.reason,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.reason = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.reason = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Information about the message that this message is a response to.  Only
    present if this message is a response.
         * @property {MessageHeaderResponse|undefined}
        */
        Object.defineProperty(this, 'response', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.response,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.response = undefined;
                    return;
                }
                const MessageHeaderResponse = require('../backbone_elements/messageHeaderResponse.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.response = FhirResourceCreator.create(valueProvided, MessageHeaderResponse);
            }
        });

        /**
         * @description The actual data of the message - a reference to the root/focus class of the
    event.
         * @property {Reference[]|undefined}
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
                this.__data.focus = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description Permanent link to the MessageDefinition for this message.
         * @property {canonical|undefined}
        */
        Object.defineProperty(this, 'definition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.definition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.definition = undefined;
                    return;
                }
                this.__data.definition = valueProvided;
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
            eventCoding,
            eventUri,
            destination,
            sender,
            enterer,
            author,
            source,
            responsible,
            reason,
            response,
            focus,
            definition,
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
            value: 'MessageHeader',
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
        return 'MessageHeader';
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
     * @param {Coding|undefined} [eventCoding],
     * @param {uri|undefined} [eventUri],
     * @param {MessageHeaderDestination[]|undefined} [destination],
     * @param {Reference|undefined} [sender],
     * @param {Reference|undefined} [enterer],
     * @param {Reference|undefined} [author],
     * @param {MessageHeaderSource} source,
     * @param {Reference|undefined} [responsible],
     * @param {CodeableConcept|undefined} [reason],
     * @param {MessageHeaderResponse|undefined} [response],
     * @param {Reference[]|undefined} [focus],
     * @param {canonical|undefined} [definition],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {MessageHeader}
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
            eventCoding,
            eventUri,
            destination,
            sender,
            enterer,
            author,
            source,
            responsible,
            reason,
            response,
            focus,
            definition,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        }
    ) {
        return new MessageHeader({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            eventCoding,
            eventUri,
            destination,
            sender,
            enterer,
            author,
            source,
            responsible,
            reason,
            response,
            focus,
            definition,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {MessageHeader}
    */
    clone () {
        return new MessageHeader(this.toJSONInternal());
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
            eventCoding: this.eventCoding && this.eventCoding.toJSON(),
            eventUri: this.eventUri,
            destination: this.destination && this.destination.map(v => v.toJSON()),
            sender: this.sender && this.sender.toJSON(),
            enterer: this.enterer && this.enterer.toJSON(),
            author: this.author && this.author.toJSON(),
            source: this.source && this.source.toJSON(),
            responsible: this.responsible && this.responsible.toJSON(),
            reason: this.reason && this.reason.toJSON(),
            response: this.response && this.response.toJSON(),
            focus: this.focus && this.focus.map(v => v.toJSON()),
            definition: this.definition
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
            if (this.eventCoding) { await this.eventCoding.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.destination) { await async.each(this.destination, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.sender) { await this.sender.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.enterer) { await this.enterer.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.author) { await this.author.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.source) { await this.source.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.responsible) { await this.responsible.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.reason) { await this.reason.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.response) { await this.response.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.focus) { await async.each(this.focus, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            eventCoding: this.eventCoding && this.eventCoding.toJSONInternal(),
            eventUri: this.eventUri,
            destination: this.destination && this.destination.map(v => v.toJSONInternal()),
            sender: this.sender && this.sender.toJSONInternal(),
            enterer: this.enterer && this.enterer.toJSONInternal(),
            author: this.author && this.author.toJSONInternal(),
            source: this.source && this.source.toJSONInternal(),
            responsible: this.responsible && this.responsible.toJSONInternal(),
            reason: this.reason && this.reason.toJSONInternal(),
            response: this.response && this.response.toJSONInternal(),
            focus: this.focus && this.focus.map(v => v.toJSONInternal()),
            definition: this.definition
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

module.exports = MessageHeader;
