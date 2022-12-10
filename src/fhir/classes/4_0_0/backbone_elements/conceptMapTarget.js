/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
ConceptMap.Target
    A statement of relationships from one set of concepts to one or more other
    concepts - either concepts in code systems, or data element/data element
    concepts, or classes in class models.
*/
class ConceptMapTarget extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {code|undefined} [code],
     * @param {String|undefined} [display],
     * @param {code} equivalence,
     * @param {String|undefined} [comment],
     * @param {ConceptMapDependsOn[]|undefined} [dependsOn],
     * @param {ConceptMapDependsOn[]|undefined} [product],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            code,
            display,
            equivalence,
            comment,
            dependsOn,
            product,
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
         * @description Identity (code or path) or the element/item that the map refers to.
         * @property {code|undefined}
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
         * @description The display for the code. The display is only provided to help editors when
    editing the concept map.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'display', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.display,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.display = undefined;
                    return;
                }
                this.__data.display = valueProvided;
            }
        });

        /**
         * @description The equivalence between the source and target concepts (counting for the
    dependencies and products). The equivalence is read from target to source
    (e.g. the target is 'wider' than the source).
         * @property {code}
        */
        Object.defineProperty(this, 'equivalence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.equivalence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.equivalence = undefined;
                    return;
                }
                this.__data.equivalence = valueProvided;
            }
        });

        /**
         * @description A description of status/issues in mapping that conveys additional information
    not represented in  the structured data.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'comment', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.comment,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.comment = undefined;
                    return;
                }
                this.__data.comment = valueProvided;
            }
        });

        /**
         * @description A set of additional dependencies for this mapping to hold. This mapping is
    only applicable if the specified element can be resolved, and it has the
    specified value.
         * @property {ConceptMapDependsOn[]|undefined}
        */
        Object.defineProperty(this, 'dependsOn', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dependsOn,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.dependsOn = undefined;
                    return;
                }
                const ConceptMapDependsOn = require('../backbone_elements/conceptMapDependsOn.js');
                this.__data.dependsOn = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ConceptMapDependsOn(v)) : [new ConceptMapDependsOn(valueProvided)];
            }
        });

        /**
         * @description A set of additional outcomes from this mapping to other elements. To properly
    execute this mapping, the specified element must be mapped to some data
    element or source that is in context. The mapping may still be useful without
    a place for the additional data elements, but the equivalence cannot be relied
    on.
         * @property {ConceptMapDependsOn[]|undefined}
        */
        Object.defineProperty(this, 'product', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.product,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.product = undefined;
                    return;
                }
                const ConceptMapDependsOn = require('../backbone_elements/conceptMapDependsOn.js');
                this.__data.product = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ConceptMapDependsOn(v)) : [new ConceptMapDependsOn(valueProvided)];
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            code,
            display,
            equivalence,
            comment,
            dependsOn,
            product,
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
            code: this.code,
            display: this.display,
            equivalence: this.equivalence,
            comment: this.comment,
            dependsOn: this.dependsOn && this.dependsOn.map(v => v.toJSON()),
            product: this.product && this.product.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Reference} fnUpdateReference
     * @return {void}
     */
    updateReferences({fnUpdateReference}) {
            if (this.extension) {this.extension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.modifierExtension) {this.modifierExtension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.dependsOn) {this.dependsOn.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.product) {this.product.forEach(v => v.updateReferences({fnUpdateReference}));}
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

module.exports = ConceptMapTarget;
