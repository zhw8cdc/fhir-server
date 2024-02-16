/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');
const async = require('async');

/**
CompartmentDefinition
    A compartment definition that defines how resources are accessed on a server.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class CompartmentDefinition extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {uri} url,
     * @param {String|undefined} [version],
     * @param {String} name,
     * @param {code} status,
     * @param {Boolean|undefined} [experimental],
     * @param {dateTime|undefined} [date],
     * @param {String|undefined} [publisher],
     * @param {ContactDetail[]|undefined} [contact],
     * @param {markdown|undefined} [description],
     * @param {UsageContext[]|undefined} [useContext],
     * @param {markdown|undefined} [purpose],
     * @param {code} code,
     * @param {Boolean} search,
     * @param {CompartmentDefinitionResource[]|undefined} [resource],
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
            url,
            version,
            name,
            status,
            experimental,
            date,
            publisher,
            contact,
            description,
            useContext,
            purpose,
            code,
            search,
            resource,
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
         * @description An absolute URI that is used to identify this compartment definition when it
    is referenced in a specification, model, design or an instance; also called
    its canonical identifier. This SHOULD be globally unique and SHOULD be a
    literal address at which at which an authoritative instance of this
    compartment definition is (or will be) published. This URL can be the target
    of a canonical reference. It SHALL remain the same when the compartment
    definition is stored on different servers.
         * @property {uri}
        */
        Object.defineProperty(this, 'url', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.url,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.url = undefined;
                    return;
                }
                this.__data.url = valueProvided;
            }
        });

        /**
         * @description The identifier that is used to identify this version of the compartment
    definition when it is referenced in a specification, model, design or
    instance. This is an arbitrary value managed by the compartment definition
    author and is not expected to be globally unique. For example, it might be a
    timestamp (e.g. yyyymmdd) if a managed version is not available. There is also
    no expectation that versions can be placed in a lexicographical sequence.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'version', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.version,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.version = undefined;
                    return;
                }
                this.__data.version = valueProvided;
            }
        });

        /**
         * @description A natural language name identifying the compartment definition. This name
    should be usable as an identifier for the module by machine processing
    applications such as code generation.
         * @property {String}
        */
        Object.defineProperty(this, 'name', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.name,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.name = undefined;
                    return;
                }
                this.__data.name = valueProvided;
            }
        });

        /**
         * @description The status of this compartment definition. Enables tracking the life-cycle of
    the content.
         * @property {code}
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
         * @description A Boolean value to indicate that this compartment definition is authored for
    testing purposes (or education/evaluation/marketing) and is not intended to be
    used for genuine usage.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'experimental', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.experimental,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.experimental = undefined;
                    return;
                }
                this.__data.experimental = valueProvided;
            }
        });

        /**
         * @description The date  (and optionally time) when the compartment definition was published.
    The date must change when the business version changes and it must change if
    the status code changes. In addition, it should change when the substantive
    content of the compartment definition changes.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'date', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.date,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.date = undefined;
                    return;
                }
                this.__data.date = valueProvided;
            }
        });

        /**
         * @description The name of the organization or individual that published the compartment
    definition.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'publisher', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.publisher,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.publisher = undefined;
                    return;
                }
                this.__data.publisher = valueProvided;
            }
        });

        /**
         * @description Contact details to assist a user in finding and communicating with the
    publisher.
         * @property {ContactDetail[]|undefined}
        */
        Object.defineProperty(this, 'contact', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contact,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contact = undefined;
                    return;
                }
                const ContactDetail = require('../complex_types/contactDetail.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.contact = FhirResourceCreator.createArray(valueProvided, ContactDetail);
            }
        });

        /**
         * @description A free text natural language description of the compartment definition from a
    consumer's perspective.
         * @property {markdown|undefined}
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
         * @description The content was developed with a focus and intent of supporting the contexts
    that are listed. These contexts may be general categories (gender, age, ...)
    or may be references to specific programs (insurance plans, studies, ...) and
    may be used to assist with indexing and searching for appropriate compartment
    definition instances.
         * @property {UsageContext[]|undefined}
        */
        Object.defineProperty(this, 'useContext', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.useContext,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.useContext = undefined;
                    return;
                }
                const UsageContext = require('../complex_types/usageContext.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.useContext = FhirResourceCreator.createArray(valueProvided, UsageContext);
            }
        });

        /**
         * @description Explanation of why this compartment definition is needed and why it has been
    designed as it has.
         * @property {markdown|undefined}
        */
        Object.defineProperty(this, 'purpose', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.purpose,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.purpose = undefined;
                    return;
                }
                this.__data.purpose = valueProvided;
            }
        });

        /**
         * @description Which compartment this definition describes.
         * @property {code}
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
                this.__data.code = valueProvided;
            }
        });

        /**
         * @description Whether the search syntax is supported,.
         * @property {Boolean}
        */
        Object.defineProperty(this, 'search', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.search,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.search = undefined;
                    return;
                }
                this.__data.search = valueProvided;
            }
        });

        /**
         * @description Information about how a resource is related to the compartment.
         * @property {CompartmentDefinitionResource[]|undefined}
        */
        Object.defineProperty(this, 'resource', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.resource,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.resource = undefined;
                    return;
                }
                const CompartmentDefinitionResource = require('../backbone_elements/compartmentDefinitionResource.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.resource = FhirResourceCreator.createArray(valueProvided, CompartmentDefinitionResource);
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
            url,
            version,
            name,
            status,
            experimental,
            date,
            publisher,
            contact,
            description,
            useContext,
            purpose,
            code,
            search,
            resource,
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
            value: 'CompartmentDefinition',
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
        return 'CompartmentDefinition';
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
     * @param {uri} url,
     * @param {String|undefined} [version],
     * @param {String} name,
     * @param {code} status,
     * @param {Boolean|undefined} [experimental],
     * @param {dateTime|undefined} [date],
     * @param {String|undefined} [publisher],
     * @param {ContactDetail[]|undefined} [contact],
     * @param {markdown|undefined} [description],
     * @param {UsageContext[]|undefined} [useContext],
     * @param {markdown|undefined} [purpose],
     * @param {code} code,
     * @param {Boolean} search,
     * @param {CompartmentDefinitionResource[]|undefined} [resource],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {CompartmentDefinition}
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
            url,
            version,
            name,
            status,
            experimental,
            date,
            publisher,
            contact,
            description,
            useContext,
            purpose,
            code,
            search,
            resource,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        }
    ) {
        return new CompartmentDefinition({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            url,
            version,
            name,
            status,
            experimental,
            date,
            publisher,
            contact,
            description,
            useContext,
            purpose,
            code,
            search,
            resource,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {CompartmentDefinition}
    */
    clone () {
        return new CompartmentDefinition(this.toJSONInternal());
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
            url: this.url,
            version: this.version,
            name: this.name,
            status: this.status,
            experimental: this.experimental,
            date: this.date,
            publisher: this.publisher,
            contact: this.contact && this.contact.map(v => v.toJSON()),
            description: this.description,
            useContext: this.useContext && this.useContext.map(v => v.toJSON()),
            purpose: this.purpose,
            code: this.code,
            search: this.search,
            resource: this.resource && this.resource.map(v => v.toJSON())
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
            if (this.contact) { await async.each(this.contact, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.useContext) { await async.each(this.useContext, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.resource) { await async.each(this.resource, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            url: this.url,
            version: this.version,
            name: this.name,
            status: this.status,
            experimental: this.experimental,
            date: this.date,
            publisher: this.publisher,
            contact: this.contact && this.contact.map(v => v.toJSONInternal()),
            description: this.description,
            useContext: this.useContext && this.useContext.map(v => v.toJSONInternal()),
            purpose: this.purpose,
            code: this.code,
            search: this.search,
            resource: this.resource && this.resource.map(v => v.toJSONInternal())
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

module.exports = CompartmentDefinition;
