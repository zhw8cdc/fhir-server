/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
ImplementationGuide.Definition
    A set of rules of how a particular interoperability or standards problem is
    solved - typically through the use of FHIR resources. This resource is used to
    gather all the parts of an implementation guide into a logical whole and to
    publish a computable definition of all the parts.
*/
class ImplementationGuideDefinition extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {ImplementationGuideGrouping[]|undefined} [grouping],
     * @param {ImplementationGuideResource[]} resource,
     * @param {ImplementationGuidePage|undefined} [page],
     * @param {ImplementationGuideParameter[]|undefined} [parameter],
     * @param {ImplementationGuideTemplate[]|undefined} [template],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            grouping,
            resource,
            page,
            parameter,
            template
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
         * @description A logical group of resources. Logical groups can be used when building pages.
         * @property {ImplementationGuideGrouping[]|undefined}
        */
        Object.defineProperty(this, 'grouping', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.grouping,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.grouping = undefined;
                    return;
                }
                const ImplementationGuideGrouping = require('../backbone_elements/implementationGuideGrouping.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.grouping = FhirResourceCreator.createArray(valueProvided, ImplementationGuideGrouping);
            }
        });

        /**
         * @description A resource that is part of the implementation guide. Conformance resources
    (value set, structure definition, capability statements etc.) are obvious
    candidates for inclusion, but any kind of resource can be included as an
    example resource.
         * @property {ImplementationGuideResource[]}
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
                const ImplementationGuideResource = require('../backbone_elements/implementationGuideResource.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.resource = FhirResourceCreator.createArray(valueProvided, ImplementationGuideResource);
            }
        });

        /**
         * @description A page / section in the implementation guide. The root page is the
    implementation guide home page.
         * @property {ImplementationGuidePage|undefined}
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
                const ImplementationGuidePage = require('../backbone_elements/implementationGuidePage.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.page = FhirResourceCreator.create(valueProvided, ImplementationGuidePage);
            }
        });

        /**
         * @description Defines how IG is built by tools.
         * @property {ImplementationGuideParameter[]|undefined}
        */
        Object.defineProperty(this, 'parameter', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.parameter,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.parameter = undefined;
                    return;
                }
                const ImplementationGuideParameter = require('../backbone_elements/implementationGuideParameter.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.parameter = FhirResourceCreator.createArray(valueProvided, ImplementationGuideParameter);
            }
        });

        /**
         * @description A template for building resources.
         * @property {ImplementationGuideTemplate[]|undefined}
        */
        Object.defineProperty(this, 'template', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.template,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.template = undefined;
                    return;
                }
                const ImplementationGuideTemplate = require('../backbone_elements/implementationGuideTemplate.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.template = FhirResourceCreator.createArray(valueProvided, ImplementationGuideTemplate);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            grouping,
            resource,
            page,
            parameter,
            template
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
            grouping: this.grouping && this.grouping.map(v => v.toJSON()),
            resource: this.resource && this.resource.map(v => v.toJSON()),
            page: this.page && this.page.toJSON(),
            parameter: this.parameter && this.parameter.map(v => v.toJSON()),
            template: this.template && this.template.map(v => v.toJSON())
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
            if (this.grouping) { await async.each(this.grouping, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.resource) { await async.each(this.resource, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.page) { await this.page.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.parameter) { await async.each(this.parameter, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.template) { await async.each(this.template, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            grouping: this.grouping && this.grouping.map(v => v.toJSONInternal()),
            resource: this.resource && this.resource.map(v => v.toJSONInternal()),
            page: this.page && this.page.toJSONInternal(),
            parameter: this.parameter && this.parameter.map(v => v.toJSONInternal()),
            template: this.template && this.template.map(v => v.toJSONInternal())
        };

        return removeNull(json);
    }
}

module.exports = ImplementationGuideDefinition;
