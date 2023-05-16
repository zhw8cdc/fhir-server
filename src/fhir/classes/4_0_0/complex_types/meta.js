/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
Meta
    The metadata about a resource. This is content in the resource that is
    maintained by the infrastructure. Changes to the content might not always be
    associated with version changes to the resource.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class Meta extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {id|undefined} [versionId],
     * @param {instant|undefined} [lastUpdated],
     * @param {uri|undefined} [source],
     * @param {canonical[]|undefined} [profile],
     * @param {Coding[]|undefined} [security],
     * @param {Coding[]|undefined} [tag],
    */
    constructor(
        {
            id,
            extension,
            versionId,
            lastUpdated,
            source,
            profile,
            security,
            tag,
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.extension = FhirResourceCreator.createArray(valueProvided, Extension);
            }
        });

        /**
         * @description The version specific identifier, as it appears in the version portion of the
    URL. This value changes when the resource is created, updated, or deleted.
         * @property {id|undefined}
        */
        Object.defineProperty(this, 'versionId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.versionId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.versionId = undefined;
                    return;
                }
                this.__data.versionId = valueProvided;
            }
        });

        /**
         * @description When the resource last changed - e.g. when the version changed.
         * @property {instant|undefined}
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
         * @description A uri that identifies the source system of the resource. This provides a
    minimal amount of [[[Provenance]]] information that can be used to track or
    differentiate the source of information in the resource. The source may
    identify another FHIR server, document, message, database, etc.
         * @property {uri|undefined}
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
                this.__data.source = valueProvided;
            }
        });

        /**
         * @description A list of profiles (references to [[[StructureDefinition]]] resources) that
    this resource claims to conform to. The URL is a reference to
    [[[StructureDefinition.url]]].
         * @property {canonical[]|undefined}
        */
        Object.defineProperty(this, 'profile', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.profile,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.profile = undefined;
                    return;
                }
                this.__data.profile = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Security labels applied to this resource. These tags connect specific
    resources to the overall security policy and infrastructure.
         * @property {Coding[]|undefined}
        */
        Object.defineProperty(this, 'security', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.security,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.security = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.security = FhirResourceCreator.createArray(valueProvided, Coding);
            }
        });

        /**
         * @description Tags applied to this resource. Tags are intended to be used to identify and
    relate resources to process and workflow, and applications are not required to
    consider the tags when interpreting the meaning of a resource.
         * @property {Coding[]|undefined}
        */
        Object.defineProperty(this, 'tag', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.tag,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.tag = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.tag = FhirResourceCreator.createArray(valueProvided, Coding);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            versionId,
            lastUpdated,
            source,
            profile,
            security,
            tag,
        });

    }



    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON() {
        const {removeNull} = require('../../../../utils/nullRemover');

        return removeNull({
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSON()),
            versionId: this.versionId,
            lastUpdated: this.lastUpdated,
            source: this.source,
            profile: this.profile,
            security: this.security && this.security.map(v => v.toJSON()),
            tag: this.tag && this.tag.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.extension) {await async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.security) {await async.each(this.security, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.tag) {await async.each(this.tag, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = {
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            versionId: this.versionId,
            lastUpdated: this.lastUpdated,
            source: this.source,
            profile: this.profile,
            security: this.security && this.security.map(v => v.toJSONInternal()),
            tag: this.tag && this.tag.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = Meta;
