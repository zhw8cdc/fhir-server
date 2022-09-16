/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
Reference
    A reference from one resource to another.
    If the element is present, it must have a value for at least one of the
    defined elements, an @id referenced from the Narrative, or extensions
*/
class Reference extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {String|undefined} [reference],
     * @param {uri|undefined} [type],
     * @param {Identifier|undefined} [identifier],
     * @param {String|undefined} [display],
    */
    constructor(
        {
            id,
            extension,
            reference,
            type,
            identifier,
            display,
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
         * @description A reference to a location at which the other resource is found. The reference
    may be a relative reference, in which case it is relative to the service base
    URL, or an absolute URL that resolves to the location where the resource is
    found. The reference may be version specific or not. If the reference is not
    to a FHIR RESTful server, then it should be assumed to be version specific.
    Internal fragment references (start with '#') refer to contained resources.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'reference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.reference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.reference = valueProvided;
            }
        });

        /**
         * @description The expected type of the target of the reference. If both Reference.type and
    Reference.reference are populated and Reference.reference is a FHIR URL, both
    SHALL be consistent.

    The type is the Canonical URL of Resource Definition that is the type this
    reference refers to. References are URLs that are relative to
    http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to
    http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only
    allowed for logical models (and can only be used in references in logical
    models, not resources).
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'type', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.type,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.type = valueProvided;
            }
        });

        /**
         * @description An identifier for the target resource. This is used when there is no way to
    reference the other resource directly, either because the entity it represents
    is not available through a FHIR server, or because there is no way for the
    author of the resource to convert a known identifier to an actual location.
    There is no requirement that a Reference.identifier point to something that is
    actually exposed as a FHIR instance, but it SHALL point to a business concept
    that would be expected to be exposed as a FHIR instance, and that instance
    would need to be of a FHIR resource type allowed by the reference.
         * @property {Identifier|undefined}
        */
        Object.defineProperty(this, 'identifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.identifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Identifier = require('../complex_types/identifier.js');
                this.__data.identifier = new Identifier(valueProvided);
            }
        });

        /**
         * @description Plain text narrative that identifies the resource in addition to the resource
    reference.
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
            reference,
            type,
            identifier,
            display,
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
            reference: this.reference,
            type: this.type,
            identifier: this.identifier && this.identifier.toJSON(),
            display: this.display,
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

module.exports = Reference;
