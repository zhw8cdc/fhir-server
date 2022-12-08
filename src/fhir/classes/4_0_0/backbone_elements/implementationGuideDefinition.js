/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


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
    constructor(
        {
            id,
            extension,
            modifierExtension,
            grouping,
            resource,
            page,
            parameter,
            template,
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
                let Extension = require('../extensions/extension.js');
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
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                let ImplementationGuideGrouping = require('../backbone_elements/implementationGuideGrouping.js');
                this.__data.grouping = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ImplementationGuideGrouping(v)) : [new ImplementationGuideGrouping(valueProvided)];
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
                let ImplementationGuideResource = require('../backbone_elements/implementationGuideResource.js');
                this.__data.resource = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ImplementationGuideResource(v)) : [new ImplementationGuideResource(valueProvided)];
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
                let ImplementationGuidePage = require('../backbone_elements/implementationGuidePage.js');
                this.__data.page = new ImplementationGuidePage(valueProvided);
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
                let ImplementationGuideParameter = require('../backbone_elements/implementationGuideParameter.js');
                this.__data.parameter = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ImplementationGuideParameter(v)) : [new ImplementationGuideParameter(valueProvided)];
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
                let ImplementationGuideTemplate = require('../backbone_elements/implementationGuideTemplate.js');
                this.__data.template = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ImplementationGuideTemplate(v)) : [new ImplementationGuideTemplate(valueProvided)];
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
            template,
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
            grouping: this.grouping && this.grouping.map(v => v.toJSON()),
            resource: this.resource && this.resource.map(v => v.toJSON()),
            page: this.page && this.page.toJSON(),
            parameter: this.parameter && this.parameter.map(v => v.toJSON()),
            template: this.template && this.template.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = this.toJSON();


        return removeNull(json);
    }
}

module.exports = ImplementationGuideDefinition;
