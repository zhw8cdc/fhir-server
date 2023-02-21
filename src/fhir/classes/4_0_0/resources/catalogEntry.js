/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');
const async = require('async');


/**
CatalogEntry
    Catalog entries are wrappers that contextualize items included in a catalog.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class CatalogEntry extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {CodeableConcept|undefined} [type],
     * @param {Boolean} orderable,
     * @param {Reference} referencedItem,
     * @param {Identifier[]|undefined} [additionalIdentifier],
     * @param {CodeableConcept[]|undefined} [classification],
     * @param {code|undefined} [status],
     * @param {Period|undefined} [validityPeriod],
     * @param {dateTime|undefined} [validTo],
     * @param {dateTime|undefined} [lastUpdated],
     * @param {CodeableConcept[]|undefined} [additionalCharacteristic],
     * @param {CodeableConcept[]|undefined} [additionalClassification],
     * @param {CatalogEntryRelatedEntry[]|undefined} [relatedEntry],
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
            identifier,
            type,
            orderable,
            referencedItem,
            additionalIdentifier,
            classification,
            status,
            validityPeriod,
            validTo,
            lastUpdated,
            additionalCharacteristic,
            additionalClassification,
            relatedEntry,
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
         * @description Used in supporting different identifiers for the same product, e.g.
    manufacturer code and retailer code.
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
                this.__data.identifier = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description The type of item - medication, device, service, protocol or other.
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
                this.__data.type = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Whether the entry represents an orderable item.
         * @property {Boolean}
        */
        Object.defineProperty(this, 'orderable', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.orderable,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.orderable = undefined;
                    return;
                }
                this.__data.orderable = valueProvided;
            }
        });

        /**
         * @description The item in a catalog or definition.
         * @property {Reference}
        */
        Object.defineProperty(this, 'referencedItem', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.referencedItem,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.referencedItem = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.referencedItem = new Reference(valueProvided);
            }
        });

        /**
         * @description Used in supporting related concepts, e.g. NDC to RxNorm.
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'additionalIdentifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.additionalIdentifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.additionalIdentifier = undefined;
                    return;
                }
                const Identifier = require('../complex_types/identifier.js');
                this.__data.additionalIdentifier = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description Classes of devices, or ATC for medication.
         * @property {CodeableConcept[]|undefined}
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
                this.__data.classification = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Used to support catalog exchange even for unsupported products, e.g. getting
    list of medications even if not prescribable.
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
         * @description The time period in which this catalog entry is expected to be active.
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'validityPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.validityPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.validityPeriod = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                this.__data.validityPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description The date until which this catalog entry is expected to be active.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'validTo', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.validTo,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.validTo = undefined;
                    return;
                }
                this.__data.validTo = valueProvided;
            }
        });

        /**
         * @description Typically date of issue is different from the beginning of the validity. This
    can be used to see when an item was last updated.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'lastUpdated', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.lastUpdated,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.lastUpdated = undefined;
                    return;
                }
                this.__data.lastUpdated = valueProvided;
            }
        });

        /**
         * @description Used for examplefor Out of Formulary, or any specifics.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'additionalCharacteristic', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.additionalCharacteristic,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.additionalCharacteristic = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.additionalCharacteristic = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description User for example for ATC classification, or.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'additionalClassification', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.additionalClassification,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.additionalClassification = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.additionalClassification = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Used for example, to point to a substance, or to a device used to administer a
    medication.
         * @property {CatalogEntryRelatedEntry[]|undefined}
        */
        Object.defineProperty(this, 'relatedEntry', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.relatedEntry,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.relatedEntry = undefined;
                    return;
                }
                const CatalogEntryRelatedEntry = require('../backbone_elements/catalogEntryRelatedEntry.js');
                this.__data.relatedEntry = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CatalogEntryRelatedEntry(v)) : [new CatalogEntryRelatedEntry(valueProvided)];
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
            type,
            orderable,
            referencedItem,
            additionalIdentifier,
            classification,
            status,
            validityPeriod,
            validTo,
            lastUpdated,
            additionalCharacteristic,
            additionalClassification,
            relatedEntry,
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
            value: 'CatalogEntry',
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
        return 'CatalogEntry';
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
     * @param {Identifier[]|undefined} [identifier],
     * @param {CodeableConcept|undefined} [type],
     * @param {Boolean} orderable,
     * @param {Reference} referencedItem,
     * @param {Identifier[]|undefined} [additionalIdentifier],
     * @param {CodeableConcept[]|undefined} [classification],
     * @param {code|undefined} [status],
     * @param {Period|undefined} [validityPeriod],
     * @param {dateTime|undefined} [validTo],
     * @param {dateTime|undefined} [lastUpdated],
     * @param {CodeableConcept[]|undefined} [additionalCharacteristic],
     * @param {CodeableConcept[]|undefined} [additionalClassification],
     * @param {CatalogEntryRelatedEntry[]|undefined} [relatedEntry],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {CatalogEntry}
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
            identifier,
            type,
            orderable,
            referencedItem,
            additionalIdentifier,
            classification,
            status,
            validityPeriod,
            validTo,
            lastUpdated,
            additionalCharacteristic,
            additionalClassification,
            relatedEntry,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        return new CatalogEntry({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            type,
            orderable,
            referencedItem,
            additionalIdentifier,
            classification,
            status,
            validityPeriod,
            validTo,
            lastUpdated,
            additionalCharacteristic,
            additionalClassification,
            relatedEntry,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {CatalogEntry}
    */
    clone() {
        return new CatalogEntry(this.toJSONInternal());
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
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            type: this.type && this.type.toJSON(),
            orderable: this.orderable,
            referencedItem: this.referencedItem && this.referencedItem.toJSON(),
            additionalIdentifier: this.additionalIdentifier && this.additionalIdentifier.map(v => v.toJSON()),
            classification: this.classification && this.classification.map(v => v.toJSON()),
            status: this.status,
            validityPeriod: this.validityPeriod && this.validityPeriod.toJSON(),
            validTo: this.validTo,
            lastUpdated: this.lastUpdated,
            additionalCharacteristic: this.additionalCharacteristic && this.additionalCharacteristic.map(v => v.toJSON()),
            additionalClassification: this.additionalClassification && this.additionalClassification.map(v => v.toJSON()),
            relatedEntry: this.relatedEntry && this.relatedEntry.map(v => v.toJSON()),
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
            if (this.identifier) { async.each(this.identifier, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.type) {await this.type.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.referencedItem) {await this.referencedItem.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.additionalIdentifier) { async.each(this.additionalIdentifier, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.classification) { async.each(this.classification, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.validityPeriod) {await this.validityPeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.additionalCharacteristic) { async.each(this.additionalCharacteristic, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.additionalClassification) { async.each(this.additionalClassification, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.relatedEntry) { async.each(this.relatedEntry, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            identifier: this.identifier && this.identifier.map(v => v.toJSONInternal()),
            type: this.type && this.type.toJSONInternal(),
            orderable: this.orderable,
            referencedItem: this.referencedItem && this.referencedItem.toJSONInternal(),
            additionalIdentifier: this.additionalIdentifier && this.additionalIdentifier.map(v => v.toJSONInternal()),
            classification: this.classification && this.classification.map(v => v.toJSONInternal()),
            status: this.status,
            validityPeriod: this.validityPeriod && this.validityPeriod.toJSONInternal(),
            validTo: this.validTo,
            lastUpdated: this.lastUpdated,
            additionalCharacteristic: this.additionalCharacteristic && this.additionalCharacteristic.map(v => v.toJSONInternal()),
            additionalClassification: this.additionalClassification && this.additionalClassification.map(v => v.toJSONInternal()),
            relatedEntry: this.relatedEntry && this.relatedEntry.map(v => v.toJSONInternal()),
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

module.exports = CatalogEntry;
