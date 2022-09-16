/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
VerificationResult.Attestation
    Describes validation requirements, source(s), status and dates for one or more
    elements.
*/
class VerificationResultAttestation extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Reference|undefined} [who],
     * @param {Reference|undefined} [onBehalfOf],
     * @param {CodeableConcept|undefined} [communicationMethod],
     * @param {date|undefined} [date],
     * @param {String|undefined} [sourceIdentityCertificate],
     * @param {String|undefined} [proxyIdentityCertificate],
     * @param {Signature|undefined} [proxySignature],
     * @param {Signature|undefined} [sourceSignature],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            who,
            onBehalfOf,
            communicationMethod,
            date,
            sourceIdentityCertificate,
            proxyIdentityCertificate,
            proxySignature,
            sourceSignature,
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
         * @description The individual or organization attesting to information.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'who', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.who,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.who = new Reference(valueProvided);
            }
        });

        /**
         * @description When the who is asserting on behalf of another (organization or individual).
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'onBehalfOf', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.onBehalfOf,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.onBehalfOf = new Reference(valueProvided);
            }
        });

        /**
         * @description The method by which attested information was submitted/retrieved (manual; API;
    Push).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'communicationMethod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.communicationMethod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.communicationMethod = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The date the information was attested to.
         * @property {date|undefined}
        */
        Object.defineProperty(this, 'date', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.date,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.date = valueProvided;
            }
        });

        /**
         * @description A digital identity certificate associated with the attestation source.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'sourceIdentityCertificate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sourceIdentityCertificate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.sourceIdentityCertificate = valueProvided;
            }
        });

        /**
         * @description A digital identity certificate associated with the proxy entity submitting
    attested information on behalf of the attestation source.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'proxyIdentityCertificate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.proxyIdentityCertificate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.proxyIdentityCertificate = valueProvided;
            }
        });

        /**
         * @description Signed assertion by the proxy entity indicating that they have the right to
    submit attested information on behalf of the attestation source.
         * @property {Signature|undefined}
        */
        Object.defineProperty(this, 'proxySignature', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.proxySignature,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Signature = require('../complex_types/signature.js');
                this.__data.proxySignature = new Signature(valueProvided);
            }
        });

        /**
         * @description Signed assertion by the attestation source that they have attested to the
    information.
         * @property {Signature|undefined}
        */
        Object.defineProperty(this, 'sourceSignature', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sourceSignature,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Signature = require('../complex_types/signature.js');
                this.__data.sourceSignature = new Signature(valueProvided);
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
            who,
            onBehalfOf,
            communicationMethod,
            date,
            sourceIdentityCertificate,
            proxyIdentityCertificate,
            proxySignature,
            sourceSignature,
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
            who: this.who && this.who.toJSON(),
            onBehalfOf: this.onBehalfOf && this.onBehalfOf.toJSON(),
            communicationMethod: this.communicationMethod && this.communicationMethod.toJSON(),
            date: this.date,
            sourceIdentityCertificate: this.sourceIdentityCertificate,
            proxyIdentityCertificate: this.proxyIdentityCertificate,
            proxySignature: this.proxySignature && this.proxySignature.toJSON(),
            sourceSignature: this.sourceSignature && this.sourceSignature.toJSON(),
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

module.exports = VerificationResultAttestation;
