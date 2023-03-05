/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
Distance
    A length - a value with a unit that is a physical distance.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class Distance extends Element {
    /**
     * @param {decimal|undefined} [value],
     * @param {code|undefined} [comparator],
     * @param {String|undefined} [unit],
     * @param {uri|undefined} [system],
     * @param {code|undefined} [code],
    */
    constructor(
        {
            value,
            comparator,
            unit,
            system,
            code,
        }
    ) {
        super({});

        // ---- Define getters and setters as enumerable ---

        /**
         * @description The value of the measured amount. The value includes an implicit precision in
    the presentation of the value.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'value', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.value,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.value = undefined;
                    return;
                }
                this.__data.value = valueProvided;
            }
        });

        /**
         * @description How the value should be understood and represented - whether the actual value
    is greater or less than the stated value due to measurement issues; e.g. if
    the comparator is "<" , then the real value is < stated value.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'comparator', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.comparator,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.comparator = undefined;
                    return;
                }
                this.__data.comparator = valueProvided;
            }
        });

        /**
         * @description A human-readable form of the unit.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'unit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.unit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.unit = undefined;
                    return;
                }
                this.__data.unit = valueProvided;
            }
        });

        /**
         * @description The identification of the system that provides the coded form of the unit.
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
         * @description A computer processable form of the unit in some unit representation system.
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




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            value,
            comparator,
            unit,
            system,
            code,
        });

    }



    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON() {
        const {removeNull} = require('../../../../utils/nullRemover');

        return removeNull({
            value: this.value,
            comparator: this.comparator,
            unit: this.unit,
            system: this.system,
            code: this.code,
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = {
            value: this.value,
            comparator: this.comparator,
            unit: this.unit,
            system: this.system,
            code: this.code,
        };



        return removeNull(json);
    }
}

module.exports = Distance;
