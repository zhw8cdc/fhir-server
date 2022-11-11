/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
Bundle.Request
    A container for a collection of resources.
*/
class BundleRequest extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {code} method,
     * @param {uri} url,
     * @param {String|undefined} [ifNoneMatch],
     * @param {instant|undefined} [ifModifiedSince],
     * @param {String|undefined} [ifMatch],
     * @param {String|undefined} [ifNoneExist],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            method,
            url,
            ifNoneMatch,
            ifModifiedSince,
            ifMatch,
            ifNoneExist,
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
         * @description In a transaction or batch, this is the HTTP action to be executed for this
    entry. In a history bundle, this indicates the HTTP action that occurred.
         * @property {code}
        */
        Object.defineProperty(this, 'method', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.method,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.method = undefined;
                    return;
                }
                this.__data.method = valueProvided;
            }
        });

        /**
         * @description The URL for this entry, relative to the root (the address to which the request
    is posted).
         * @property {uri}
        */
        Object.defineProperty(this, 'url', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.url,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.url = undefined;
                    return;
                }
                this.__data.url = valueProvided;
            }
        });

        /**
         * @description If the ETag values match, return a 304 Not Modified status. See the API
    documentation for ["Conditional Read"](http.html#cread).
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'ifNoneMatch', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.ifNoneMatch,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.ifNoneMatch = undefined;
                    return;
                }
                this.__data.ifNoneMatch = valueProvided;
            }
        });

        /**
         * @description Only perform the operation if the last updated date matches. See the API
    documentation for ["Conditional Read"](http.html#cread).
         * @property {instant|undefined}
        */
        Object.defineProperty(this, 'ifModifiedSince', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.ifModifiedSince,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.ifModifiedSince = undefined;
                    return;
                }
                this.__data.ifModifiedSince = valueProvided;
            }
        });

        /**
         * @description Only perform the operation if the Etag value matches. For more information,
    see the API section ["Managing Resource Contention"](http.html#concurrency).
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'ifMatch', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.ifMatch,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.ifMatch = undefined;
                    return;
                }
                this.__data.ifMatch = valueProvided;
            }
        });

        /**
         * @description Instruct the server not to perform the create if a specified resource already
    exists. For further information, see the API documentation for ["Conditional
    Create"](http.html#ccreate). This is just the query portion of the URL - what
    follows the "?" (not including the "?").
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'ifNoneExist', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.ifNoneExist,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.ifNoneExist = undefined;
                    return;
                }
                this.__data.ifNoneExist = valueProvided;
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            method,
            url,
            ifNoneMatch,
            ifModifiedSince,
            ifMatch,
            ifNoneExist,
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
            method: this.method,
            url: this.url,
            ifNoneMatch: this.ifNoneMatch,
            ifModifiedSince: this.ifModifiedSince,
            ifMatch: this.ifMatch,
            ifNoneExist: this.ifNoneExist,
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

module.exports = BundleRequest;
