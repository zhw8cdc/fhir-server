/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
Address
    An address expressed using postal conventions (as opposed to GPS or other
    location definition formats).  This data type may be used to convey addresses
    for use in delivering mail as well as for visiting locations which might not
    be valid for mail delivery.  There are a variety of postal address formats
    defined around the world.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class Address extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {code|undefined} [use],
     * @param {code|undefined} [type],
     * @param {String|undefined} [text],
     * @param {String[]|undefined} [line],
     * @param {String|undefined} [city],
     * @param {String|undefined} [district],
     * @param {String|undefined} [state],
     * @param {String|undefined} [postalCode],
     * @param {String|undefined} [country],
     * @param {Period|undefined} [period],
    */
    constructor(
        {
            id,
            extension,
            use,
            type,
            text,
            line,
            city,
            district,
            state,
            postalCode,
            country,
            period,
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
         * @description The purpose of this address.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'use', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.use,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.use = undefined;
                    return;
                }
                this.__data.use = valueProvided;
            }
        });

        /**
         * @description Distinguishes between physical addresses (those you can visit) and mailing
    addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
         * @property {code|undefined}
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
                this.__data.type = valueProvided;
            }
        });

        /**
         * @description Specifies the entire address as it should be displayed e.g. on a postal label.
    This may be provided instead of or as well as the specific parts.
         * @property {String|undefined}
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
                this.__data.text = valueProvided;
            }
        });

        /**
         * @description This component contains the house number, apartment number, street name,
    street direction,  P.O. Box number, delivery hints, and similar address
    information.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'line', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.line,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.line = undefined;
                    return;
                }
                this.__data.line = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The name of the city, town, suburb, village or other community or delivery
    center.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'city', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.city,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.city = undefined;
                    return;
                }
                this.__data.city = valueProvided;
            }
        });

        /**
         * @description The name of the administrative area (county).
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'district', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.district,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.district = undefined;
                    return;
                }
                this.__data.district = valueProvided;
            }
        });

        /**
         * @description Sub-unit of a country with limited sovereignty in a federally organized
    country. A code may be used if codes are in common use (e.g. US 2 letter state
    codes).
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'state', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.state,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.state = undefined;
                    return;
                }
                this.__data.state = valueProvided;
            }
        });

        /**
         * @description A postal code designating a region defined by the postal service.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'postalCode', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.postalCode,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.postalCode = undefined;
                    return;
                }
                this.__data.postalCode = valueProvided;
            }
        });

        /**
         * @description Country - a nation as commonly understood or generally accepted.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'country', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.country,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.country = undefined;
                    return;
                }
                this.__data.country = valueProvided;
            }
        });

        /**
         * @description Time period when address was/is in use.
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'period', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.period,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.period = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                this.__data.period = new Period(valueProvided);
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            use,
            type,
            text,
            line,
            city,
            district,
            state,
            postalCode,
            country,
            period,
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
            use: this.use,
            type: this.type,
            text: this.text,
            line: this.line,
            city: this.city,
            district: this.district,
            state: this.state,
            postalCode: this.postalCode,
            country: this.country,
            period: this.period && this.period.toJSON(),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.extension) { async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.period) {await this.period.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            use: this.use,
            type: this.type,
            text: this.text,
            line: this.line,
            city: this.city,
            district: this.district,
            state: this.state,
            postalCode: this.postalCode,
            country: this.country,
            period: this.period && this.period.toJSONInternal(),
        };



        return removeNull(json);
    }
}

module.exports = Address;
