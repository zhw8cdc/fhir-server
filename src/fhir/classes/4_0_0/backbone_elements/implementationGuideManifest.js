/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
ImplementationGuide.Manifest
    A set of rules of how a particular interoperability or standards problem is
    solved - typically through the use of FHIR resources. This resource is used to
    gather all the parts of an implementation guide into a logical whole and to
    publish a computable definition of all the parts.
*/
class ImplementationGuideManifest extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {url|undefined} [rendering],
     * @param {ImplementationGuideResource1[]} resource,
     * @param {ImplementationGuidePage1[]|undefined} [page],
     * @param {String[]|undefined} [image],
     * @param {String[]|undefined} [other],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            rendering,
            resource,
            page,
            image,
            other,
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
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description A pointer to official web page, PDF or other rendering of the implementation
    guide.
         * @property {url|undefined}
        */
        Object.defineProperty(this, 'rendering', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.rendering,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.rendering = undefined;
                    return;
                }
                this.__data.rendering = valueProvided;
            }
        });

        /**
         * @description A resource that is part of the implementation guide. Conformance resources
    (value set, structure definition, capability statements etc.) are obvious
    candidates for inclusion, but any kind of resource can be included as an
    example resource.
         * @property {ImplementationGuideResource1[]}
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
                const ImplementationGuideResource1 = require('../backbone_elements/implementationGuideResource1.js');
                this.__data.resource = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ImplementationGuideResource1(v)) : [new ImplementationGuideResource1(valueProvided)];
            }
        });

        /**
         * @description Information about a page within the IG.
         * @property {ImplementationGuidePage1[]|undefined}
        */
        Object.defineProperty(this, 'page', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.page,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.page = undefined;
                    return;
                }
                const ImplementationGuidePage1 = require('../backbone_elements/implementationGuidePage1.js');
                this.__data.page = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ImplementationGuidePage1(v)) : [new ImplementationGuidePage1(valueProvided)];
            }
        });

        /**
         * @description Indicates a relative path to an image that exists within the IG.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'image', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.image,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.image = undefined;
                    return;
                }
                this.__data.image = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Indicates the relative path of an additional non-page, non-image file that is
    part of the IG - e.g. zip, jar and similar files that could be the target of a
    hyperlink in a derived IG.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'other', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.other,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.other = undefined;
                    return;
                }
                this.__data.other = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            rendering,
            resource,
            page,
            image,
            other,
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
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            rendering: this.rendering,
            resource: this.resource && this.resource.map(v => v.toJSON()),
            page: this.page && this.page.map(v => v.toJSON()),
            image: this.image,
            other: this.other,
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.extension) { async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) { async.each(this.modifierExtension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.resource) { async.each(this.resource, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.page) { async.each(this.page, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            rendering: this.rendering,
            resource: this.resource && this.resource.map(v => v.toJSONInternal()),
            page: this.page && this.page.map(v => v.toJSONInternal()),
            image: this.image,
            other: this.other,
        };



        return removeNull(json);
    }
}

module.exports = ImplementationGuideManifest;
