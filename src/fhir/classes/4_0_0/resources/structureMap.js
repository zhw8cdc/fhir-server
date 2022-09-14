/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
StructureMap
    A Map of relationships between 2 structures that can be used to transform
    data.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class StructureMap extends Resource {
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
     * @param {Identifier[]|undefined} [identifier],
     * @param {String|undefined} [version],
     * @param {String} name,
     * @param {String|undefined} [title],
     * @param {code} status,
     * @param {Boolean|undefined} [experimental],
     * @param {dateTime|undefined} [date],
     * @param {String|undefined} [publisher],
     * @param {ContactDetail[]|undefined} [contact],
     * @param {markdown|undefined} [description],
     * @param {UsageContext[]|undefined} [useContext],
     * @param {CodeableConcept[]|undefined} [jurisdiction],
     * @param {markdown|undefined} [purpose],
     * @param {markdown|undefined} [copyright],
     * @param {StructureMapStructure[]|undefined} [structure],
     * @param {canonical[]|undefined} [import_],
     * @param {StructureMapGroup[]} group,
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
            url,
            identifier,
            version,
            name,
            title,
            status,
            experimental,
            date,
            publisher,
            contact,
            description,
            useContext,
            jurisdiction,
            purpose,
            copyright,
            structure,
            'import': import_,
            group,
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
                    return;
                }
                let Meta = require('../complex_types/meta.js');
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
                    return;
                }
                let Narrative = require('../complex_types/narrative.js');
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
                    return;
                }
                let ResourceContainer = require('../simple_types/resourceContainer.js');
                const {getResource} = require('../../../../operations/common/getResource');
                if (Array.isArray(valueProvided)) {
                    this.__data.contained = valueProvided.map(v => {
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
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description An absolute URI that is used to identify this structure map when it is
    referenced in a specification, model, design or an instance; also called its
    canonical identifier. This SHOULD be globally unique and SHOULD be a literal
    address at which at which an authoritative instance of this structure map is
    (or will be) published. This URL can be the target of a canonical reference.
    It SHALL remain the same when the structure map is stored on different
    servers.
         * @property {uri}
        */
        Object.defineProperty(this, 'url', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.url,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.url = valueProvided;
            }
        });

        /**
         * @description A formal identifier that is used to identify this structure map when it is
    represented in other formats, or referenced in a specification, model, design
    or an instance.
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'identifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.identifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Identifier = require('../complex_types/identifier.js');
                this.__data.identifier = Array.isArray(valueProvided) ? valueProvided.map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description The identifier that is used to identify this version of the structure map when
    it is referenced in a specification, model, design or instance. This is an
    arbitrary value managed by the structure map author and is not expected to be
    globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a
    managed version is not available. There is also no expectation that versions
    can be placed in a lexicographical sequence.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'version', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.version,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.version = valueProvided;
            }
        });

        /**
         * @description A natural language name identifying the structure map. This name should be
    usable as an identifier for the module by machine processing applications such
    as code generation.
         * @property {String}
        */
        Object.defineProperty(this, 'name', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.name,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.name = valueProvided;
            }
        });

        /**
         * @description A short, descriptive, user-friendly title for the structure map.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'title', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.title,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.title = valueProvided;
            }
        });

        /**
         * @description The status of this structure map. Enables tracking the life-cycle of the
    content.
         * @property {code}
        */
        Object.defineProperty(this, 'status', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.status,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.status = valueProvided;
            }
        });

        /**
         * @description A Boolean value to indicate that this structure map is authored for testing
    purposes (or education/evaluation/marketing) and is not intended to be used
    for genuine usage.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'experimental', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.experimental,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.experimental = valueProvided;
            }
        });

        /**
         * @description The date  (and optionally time) when the structure map was published. The date
    must change when the business version changes and it must change if the status
    code changes. In addition, it should change when the substantive content of
    the structure map changes.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'date', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.date,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.date = valueProvided;
            }
        });

        /**
         * @description The name of the organization or individual that published the structure map.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'publisher', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.publisher,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
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
                    return;
                }
                let ContactDetail = require('../complex_types/contactDetail.js');
                this.__data.contact = Array.isArray(valueProvided) ? valueProvided.map(v => new ContactDetail(v)) : [new ContactDetail(valueProvided)];
            }
        });

        /**
         * @description A free text natural language description of the structure map from a
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
                    return;
                }
                this.__data.description = valueProvided;
            }
        });

        /**
         * @description The content was developed with a focus and intent of supporting the contexts
    that are listed. These contexts may be general categories (gender, age, ...)
    or may be references to specific programs (insurance plans, studies, ...) and
    may be used to assist with indexing and searching for appropriate structure
    map instances.
         * @property {UsageContext[]|undefined}
        */
        Object.defineProperty(this, 'useContext', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.useContext,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let UsageContext = require('../complex_types/usageContext.js');
                this.__data.useContext = Array.isArray(valueProvided) ? valueProvided.map(v => new UsageContext(v)) : [new UsageContext(valueProvided)];
            }
        });

        /**
         * @description A legal or geographic region in which the structure map is intended to be
    used.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'jurisdiction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.jurisdiction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.jurisdiction = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Explanation of why this structure map is needed and why it has been designed
    as it has.
         * @property {markdown|undefined}
        */
        Object.defineProperty(this, 'purpose', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.purpose,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.purpose = valueProvided;
            }
        });

        /**
         * @description A copyright statement relating to the structure map and/or its contents.
    Copyright statements are generally legal restrictions on the use and
    publishing of the structure map.
         * @property {markdown|undefined}
        */
        Object.defineProperty(this, 'copyright', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.copyright,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.copyright = valueProvided;
            }
        });

        /**
         * @description A structure definition used by this map. The structure definition may describe
    instances that are converted, or the instances that are produced.
         * @property {StructureMapStructure[]|undefined}
        */
        Object.defineProperty(this, 'structure', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.structure,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let StructureMapStructure = require('../backbone_elements/structureMapStructure.js');
                this.__data.structure = Array.isArray(valueProvided) ? valueProvided.map(v => new StructureMapStructure(v)) : [new StructureMapStructure(valueProvided)];
            }
        });

        /**
         * @description Other maps used by this map (canonical URLs).
         * @property {canonical[]|undefined}
        */
        Object.defineProperty(this, 'import', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.import,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.import = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Organizes the mapping into manageable chunks for human review/ease of
    maintenance.
         * @property {StructureMapGroup[]}
        */
        Object.defineProperty(this, 'group', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.group,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let StructureMapGroup = require('../backbone_elements/structureMapGroup.js');
                this.__data.group = Array.isArray(valueProvided) ? valueProvided.map(v => new StructureMapGroup(v)) : [new StructureMapGroup(valueProvided)];
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
            identifier,
            version,
            name,
            title,
            status,
            experimental,
            date,
            publisher,
            contact,
            description,
            useContext,
            jurisdiction,
            purpose,
            copyright,
            structure,
            'import': import_,
            group,
        });

        // Define a default non-writable resourceType property

        Object.defineProperty(this, 'resourceType', {
            value: 'StructureMap',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    static get resourceType() {
        return 'StructureMap';
    }

    /**
     * @description Creates a blank new resource
     * @returns {StructureMap}
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {uri} url,
     * @param {Identifier[]|undefined} [identifier],
     * @param {String|undefined} [version],
     * @param {String} name,
     * @param {String|undefined} [title],
     * @param {code} status,
     * @param {Boolean|undefined} [experimental],
     * @param {dateTime|undefined} [date],
     * @param {String|undefined} [publisher],
     * @param {ContactDetail[]|undefined} [contact],
     * @param {markdown|undefined} [description],
     * @param {UsageContext[]|undefined} [useContext],
     * @param {CodeableConcept[]|undefined} [jurisdiction],
     * @param {markdown|undefined} [purpose],
     * @param {markdown|undefined} [copyright],
     * @param {StructureMapStructure[]|undefined} [structure],
     * @param {canonical[]|undefined} [import_],
     * @param {StructureMapGroup[]} group,
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
            url,
            identifier,
            version,
            name,
            title,
            status,
            experimental,
            date,
            publisher,
            contact,
            description,
            useContext,
            jurisdiction,
            purpose,
            copyright,
            structure,
            'import': import_,
            group,
        }
    ) {
        return new StructureMap({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            url,
            identifier,
            version,
            name,
            title,
            status,
            experimental,
            date,
            publisher,
            contact,
            description,
            useContext,
            jurisdiction,
            purpose,
            copyright,
            structure,
            'import': import_,
            group,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {StructureMap}
    */
    copy() {
        return new StructureMap(this.toJSON());
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
            url: this.url,
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            version: this.version,
            name: this.name,
            title: this.title,
            status: this.status,
            experimental: this.experimental,
            date: this.date,
            publisher: this.publisher,
            contact: this.contact && this.contact.map(v => v.toJSON()),
            description: this.description,
            useContext: this.useContext && this.useContext.map(v => v.toJSON()),
            jurisdiction: this.jurisdiction && this.jurisdiction.map(v => v.toJSON()),
            purpose: this.purpose,
            copyright: this.copyright,
            structure: this.structure && this.structure.map(v => v.toJSON()),
            import: this.import,
            group: this.group && this.group.map(v => v.toJSON()),
        });
    }
}

module.exports = StructureMap;