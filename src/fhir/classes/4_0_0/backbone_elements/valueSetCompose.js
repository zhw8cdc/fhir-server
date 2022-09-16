/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
ValueSet.Compose
    A ValueSet resource instance specifies a set of codes drawn from one or more
    code systems, intended for use in a particular context. Value sets link
    between [[[CodeSystem]]] definitions and their use in [coded
    elements](terminologies.html).
*/
class ValueSetCompose extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {date|undefined} [lockedDate],
     * @param {Boolean|undefined} [inactive],
     * @param {ValueSetInclude[]} include,
     * @param {ValueSetInclude[]|undefined} [exclude],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            lockedDate,
            inactive,
            include,
            exclude,
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
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description The Locked Date is  the effective date that is used to determine the version
    of all referenced Code Systems and Value Set Definitions included in the
    compose that are not already tied to a specific version.
         * @property {date|undefined}
        */
        Object.defineProperty(this, 'lockedDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.lockedDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.lockedDate = valueProvided;
            }
        });

        /**
         * @description Whether inactive codes - codes that are not approved for current use - are in
    the value set. If inactive = true, inactive codes are to be included in the
    expansion, if inactive = false, the inactive codes will not be included in the
    expansion. If absent, the behavior is determined by the implementation, or by
    the applicable $expand parameters (but generally, inactive codes would be
    expected to be included).
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'inactive', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.inactive,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.inactive = valueProvided;
            }
        });

        /**
         * @description Include one or more codes from a code system or other value set(s).
         * @property {ValueSetInclude[]}
        */
        Object.defineProperty(this, 'include', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.include,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let ValueSetInclude = require('../backbone_elements/valueSetInclude.js');
                this.__data.include = Array.isArray(valueProvided) ? valueProvided.map(v => new ValueSetInclude(v)) : [new ValueSetInclude(valueProvided)];
            }
        });

        /**
         * @description Exclude one or more codes from the value set based on code system filters
    and/or other value sets.
         * @property {ValueSetInclude[]|undefined}
        */
        Object.defineProperty(this, 'exclude', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.exclude,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let ValueSetInclude = require('../backbone_elements/valueSetInclude.js');
                this.__data.exclude = Array.isArray(valueProvided) ? valueProvided.map(v => new ValueSetInclude(v)) : [new ValueSetInclude(valueProvided)];
            }
        });


        /**
         * @description Specific instances of data or objects that have been accessed.
         * @property {AuditEventEntity[]|undefined}
         */
        Object.defineProperty(this, '_access', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._access,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null) {
                    return;
                }
                this.__data._access = valueProvided;
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            lockedDate,
            inactive,
            include,
            exclude,
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
            lockedDate: this.lockedDate,
            inactive: this.inactive,
            include: this.include && this.include.map(v => v.toJSON()),
            exclude: this.exclude && this.exclude.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = this.toJSON();

        if (this._access) {
            json._access = this._access;
        }
        return removeNull(json);
    }
}

module.exports = ValueSetCompose;
