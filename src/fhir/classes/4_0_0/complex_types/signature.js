/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
Signature
    A signature along with supporting context. The signature may be a digital
    signature that is cryptographic in nature, or some other signature acceptable
    to the domain. This other signature may be as simple as a graphical image
    representing a hand-written signature, or a signature ceremony Different
    signature approaches have different utilities.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class Signature extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Coding[]} type,
     * @param {instant} when,
     * @param {Reference} who,
     * @param {Reference|undefined} [onBehalfOf],
     * @param {code|undefined} [targetFormat],
     * @param {code|undefined} [sigFormat],
     * @param {base64Binary|undefined} [data],
    */
    constructor(
        {
            id,
            extension,
            type,
            when,
            who,
            onBehalfOf,
            targetFormat,
            sigFormat,
            data,
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
         * @description An indication of the reason that the entity signed this document. This may be
    explicitly included as part of the signature information and can be used when
    determining accountability for various actions concerning the document.
         * @property {Coding[]}
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
                let Coding = require('../complex_types/coding.js');
                this.__data.type = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Coding(v)) : [new Coding(valueProvided)];
            }
        });

        /**
         * @description When the digital signature was signed.
         * @property {instant}
        */
        Object.defineProperty(this, 'when', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.when,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.when = undefined;
                    return;
                }
                this.__data.when = valueProvided;
            }
        });

        /**
         * @description A reference to an application-usable description of the identity that signed
    (e.g. the signature used their private key).
         * @property {Reference}
        */
        Object.defineProperty(this, 'who', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.who,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.who = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.who = new Reference(valueProvided);
            }
        });

        /**
         * @description A reference to an application-usable description of the identity that is
    represented by the signature.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'onBehalfOf', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.onBehalfOf,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.onBehalfOf = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.onBehalfOf = new Reference(valueProvided);
            }
        });

        /**
         * @description A mime type that indicates the technical format of the target resources signed
    by the signature.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'targetFormat', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.targetFormat,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.targetFormat = undefined;
                    return;
                }
                this.__data.targetFormat = valueProvided;
            }
        });

        /**
         * @description A mime type that indicates the technical format of the signature. Important
    mime types are application/signature+xml for X ML DigSig, application/jose for
    JWS, and image/* for a graphical image of a signature, etc.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'sigFormat', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sigFormat,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sigFormat = undefined;
                    return;
                }
                this.__data.sigFormat = valueProvided;
            }
        });

        /**
         * @description The base64 encoding of the Signature content. When signature is not recorded
    electronically this element would be empty.
         * @property {base64Binary|undefined}
        */
        Object.defineProperty(this, 'data', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.data,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.data = undefined;
                    return;
                }
                this.__data.data = valueProvided;
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            type,
            when,
            who,
            onBehalfOf,
            targetFormat,
            sigFormat,
            data,
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
            type: this.type && this.type.map(v => v.toJSON()),
            when: this.when,
            who: this.who && this.who.toJSON(),
            onBehalfOf: this.onBehalfOf && this.onBehalfOf.toJSON(),
            targetFormat: this.targetFormat,
            sigFormat: this.sigFormat,
            data: this.data,
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

module.exports = Signature;
