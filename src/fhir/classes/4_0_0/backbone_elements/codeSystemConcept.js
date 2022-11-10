/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
CodeSystem.Concept
    The CodeSystem resource is used to declare the existence of and describe a
    code system or code system supplement and its key properties, and optionally
    define a part or all of its content.
*/
class CodeSystemConcept extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {code} code,
     * @param {String|undefined} [display],
     * @param {String|undefined} [definition],
     * @param {CodeSystemDesignation[]|undefined} [designation],
     * @param {CodeSystemProperty1[]|undefined} [property],
     * @param {CodeSystemConcept[]|undefined} [concept],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            code,
            display,
            definition,
            designation,
            property,
            concept,
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
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description A code - a text symbol - that uniquely identifies the concept within the code
    system.
         * @property {code}
        */
        Object.defineProperty(this, 'code', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.code,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.code = valueProvided;
            }
        });

        /**
         * @description A human readable string that is the recommended default way to present this
    concept to a user.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'display', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.display,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.display = valueProvided;
            }
        });

        /**
         * @description The formal definition of the concept. The code system resource does not make
    formal definitions required, because of the prevalence of legacy systems.
    However, they are highly recommended, as without them there is no formal
    meaning associated with the concept.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'definition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.definition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.definition = valueProvided;
            }
        });

        /**
         * @description Additional representations for the concept - other languages, aliases,
    specialized purposes, used for particular purposes, etc.
         * @property {CodeSystemDesignation[]|undefined}
        */
        Object.defineProperty(this, 'designation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.designation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeSystemDesignation = require('../backbone_elements/codeSystemDesignation.js');
                this.__data.designation = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeSystemDesignation(v)) : [new CodeSystemDesignation(valueProvided)];
            }
        });

        /**
         * @description A property value for this concept.
         * @property {CodeSystemProperty1[]|undefined}
        */
        Object.defineProperty(this, 'property', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.property,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeSystemProperty1 = require('../backbone_elements/codeSystemProperty1.js');
                this.__data.property = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeSystemProperty1(v)) : [new CodeSystemProperty1(valueProvided)];
            }
        });

        /**
         * @description Defines children of a concept to produce a hierarchy of concepts. The nature
    of the relationships is variable (is-a/contains/categorizes) - see
    hierarchyMeaning.
         * @property {CodeSystemConcept[]|undefined}
        */
        Object.defineProperty(this, 'concept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.concept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.concept = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeSystemConcept(v)) : [new CodeSystemConcept(valueProvided)];
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            code,
            display,
            definition,
            designation,
            property,
            concept,
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
            definition: this.definition,
            designation: this.designation && this.designation.map(v => v.toJSON()),
            property: this.property && this.property.map(v => v.toJSON()),
            concept: this.concept && this.concept.map(v => v.toJSON()),
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

module.exports = CodeSystemConcept;
