/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
AuditEvent.Entity
    A record of an event made for purposes of maintaining a security log. Typical
    uses include detection of intrusion attempts and monitoring for inappropriate
    usage.
*/
class AuditEventEntity extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Reference|undefined} [what],
     * @param {Coding|undefined} [type],
     * @param {Coding|undefined} [role],
     * @param {Coding|undefined} [lifecycle],
     * @param {Coding[]|undefined} [securityLabel],
     * @param {String|undefined} [name],
     * @param {String|undefined} [description],
     * @param {base64Binary|undefined} [query],
     * @param {AuditEventDetail[]|undefined} [detail],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            what,
            type,
            role,
            lifecycle,
            securityLabel,
            name,
            description,
            query,
            detail,
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
         * @description Identifies a specific instance of the entity. The reference should be version
    specific.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'what', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.what,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.what = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.what = new Reference(valueProvided);
            }
        });

        /**
         * @description The type of the object that was involved in this audit event.
         * @property {Coding|undefined}
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
                const Coding = require('../complex_types/coding.js');
                this.__data.type = new Coding(valueProvided);
            }
        });

        /**
         * @description Code representing the role the entity played in the event being audited.
         * @property {Coding|undefined}
        */
        Object.defineProperty(this, 'role', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.role,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.role = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                this.__data.role = new Coding(valueProvided);
            }
        });

        /**
         * @description Identifier for the data life-cycle stage for the entity.
         * @property {Coding|undefined}
        */
        Object.defineProperty(this, 'lifecycle', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.lifecycle,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.lifecycle = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                this.__data.lifecycle = new Coding(valueProvided);
            }
        });

        /**
         * @description Security labels for the identified entity.
         * @property {Coding[]|undefined}
        */
        Object.defineProperty(this, 'securityLabel', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.securityLabel,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.securityLabel = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                this.__data.securityLabel = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Coding(v)) : [new Coding(valueProvided)];
            }
        });

        /**
         * @description A name of the entity in the audit event.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'name', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.name,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.name = undefined;
                    return;
                }
                this.__data.name = valueProvided;
            }
        });

        /**
         * @description Text that describes the entity in more detail.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'description', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.description,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.description = undefined;
                    return;
                }
                this.__data.description = valueProvided;
            }
        });

        /**
         * @description The query parameters for a query-type entities.
         * @property {base64Binary|undefined}
        */
        Object.defineProperty(this, 'query', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.query,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.query = undefined;
                    return;
                }
                this.__data.query = valueProvided;
            }
        });

        /**
         * @description Tagged value pairs for conveying additional information about the entity.
         * @property {AuditEventDetail[]|undefined}
        */
        Object.defineProperty(this, 'detail', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.detail,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.detail = undefined;
                    return;
                }
                const AuditEventDetail = require('../backbone_elements/auditEventDetail.js');
                this.__data.detail = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new AuditEventDetail(v)) : [new AuditEventDetail(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            what,
            type,
            role,
            lifecycle,
            securityLabel,
            name,
            description,
            query,
            detail,
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
            what: this.what && this.what.toJSON(),
            type: this.type && this.type.toJSON(),
            role: this.role && this.role.toJSON(),
            lifecycle: this.lifecycle && this.lifecycle.toJSON(),
            securityLabel: this.securityLabel && this.securityLabel.map(v => v.toJSON()),
            name: this.name,
            description: this.description,
            query: this.query,
            detail: this.detail && this.detail.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.extension) {await async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) {await async.each(this.modifierExtension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.what) {await this.what.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.type) {await this.type.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.role) {await this.role.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.lifecycle) {await this.lifecycle.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.securityLabel) {await async.each(this.securityLabel, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.detail) {await async.each(this.detail, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            what: this.what && this.what.toJSONInternal(),
            type: this.type && this.type.toJSONInternal(),
            role: this.role && this.role.toJSONInternal(),
            lifecycle: this.lifecycle && this.lifecycle.toJSONInternal(),
            securityLabel: this.securityLabel && this.securityLabel.map(v => v.toJSONInternal()),
            name: this.name,
            description: this.description,
            query: this.query,
            detail: this.detail && this.detail.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = AuditEventEntity;
