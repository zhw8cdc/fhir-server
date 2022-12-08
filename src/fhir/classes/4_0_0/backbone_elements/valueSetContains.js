/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
ValueSet.Contains
    A ValueSet resource instance specifies a set of codes drawn from one or more
    code systems, intended for use in a particular context. Value sets link
    between [[[CodeSystem]]] definitions and their use in [coded
    elements](terminologies.html).
*/
class ValueSetContains extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {uri|undefined} [system],
     * @param {Boolean|undefined} [abstract],
     * @param {Boolean|undefined} [inactive],
     * @param {String|undefined} [version],
     * @param {code|undefined} [code],
     * @param {String|undefined} [display],
     * @param {ValueSetDesignation[]|undefined} [designation],
     * @param {ValueSetContains[]|undefined} [contains],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            system,
            abstract,
            inactive,
            version,
            code,
            display,
            designation,
            contains,
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
         * @description An absolute URI which is the code system in which the code for this item in
    the expansion is defined.
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'system', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.system,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.system = undefined;
                    return;
                }
                this.__data.system = valueProvided;
            }
        });

        /**
         * @description If true, this entry is included in the expansion for navigational purposes,
    and the user cannot select the code directly as a proper value.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'abstract', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.abstract,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.abstract = undefined;
                    return;
                }
                this.__data.abstract = valueProvided;
            }
        });

        /**
         * @description If the concept is inactive in the code system that defines it. Inactive codes
    are those that are no longer to be used, but are maintained by the code system
    for understanding legacy data. It might not be known or specified whether an
    concept is inactive (and it may depend on the context of use).
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'inactive', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.inactive,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.inactive = undefined;
                    return;
                }
                this.__data.inactive = valueProvided;
            }
        });

        /**
         * @description The version of the code system from this code was taken. Note that a well-
    maintained code system does not need the version reported, because the meaning
    of codes is consistent across versions. However this cannot consistently be
    assured, and when the meaning is not guaranteed to be consistent, the version
    SHOULD be exchanged.
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
         * @description The code for this item in the expansion hierarchy. If this code is missing the
    entry in the hierarchy is a place holder (abstract) and does not represent a
    valid code in the value set.
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
         * @description The recommended display for this item in the expansion.
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
         * @description Additional representations for this item - other languages, aliases,
    specialized purposes, used for particular purposes, etc. These are relevant
    when the conditions of the expansion do not fix to a single correct
    representation.
         * @property {ValueSetDesignation[]|undefined}
        */
        Object.defineProperty(this, 'designation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.designation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.designation = undefined;
                    return;
                }
                let ValueSetDesignation = require('../backbone_elements/valueSetDesignation.js');
                this.__data.designation = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ValueSetDesignation(v)) : [new ValueSetDesignation(valueProvided)];
            }
        });

        /**
         * @description Other codes and entries contained under this entry in the hierarchy.
         * @property {ValueSetContains[]|undefined}
        */
        Object.defineProperty(this, 'contains', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contains,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contains = undefined;
                    return;
                }
                this.__data.contains = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ValueSetContains(v)) : [new ValueSetContains(valueProvided)];
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            system,
            abstract,
            inactive,
            version,
            code,
            display,
            designation,
            contains,
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
            system: this.system,
            abstract: this.abstract,
            inactive: this.inactive,
            version: this.version,
            code: this.code,
            display: this.display,
            designation: this.designation && this.designation.map(v => v.toJSON()),
            contains: this.contains && this.contains.map(v => v.toJSON()),
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

module.exports = ValueSetContains;
