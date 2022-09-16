/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
CapabilityStatement.Rest
    A Capability Statement documents a set of capabilities (behaviors) of a FHIR
    Server for a particular version of FHIR that may be used as a statement of
    actual server functionality or a statement of required or desired server
    implementation.
*/
class CapabilityStatementRest extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {code} mode,
     * @param {markdown|undefined} [documentation],
     * @param {CapabilityStatementSecurity|undefined} [security],
     * @param {CapabilityStatementResource[]|undefined} [resource],
     * @param {CapabilityStatementInteraction1[]|undefined} [interaction],
     * @param {CapabilityStatementSearchParam[]|undefined} [searchParam],
     * @param {CapabilityStatementOperation[]|undefined} [operation],
     * @param {canonical[]|undefined} [compartment],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            mode,
            documentation,
            security,
            resource,
            interaction,
            searchParam,
            operation,
            compartment,
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
         * @description Identifies whether this portion of the statement is describing the ability to
    initiate or receive restful operations.
         * @property {code}
        */
        Object.defineProperty(this, 'mode', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.mode,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.mode = valueProvided;
            }
        });

        /**
         * @description Information about the system's restful capabilities that apply across all
    applications, such as security.
         * @property {markdown|undefined}
        */
        Object.defineProperty(this, 'documentation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.documentation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.documentation = valueProvided;
            }
        });

        /**
         * @description Information about security implementation from an interface perspective - what
    a client needs to know.
         * @property {CapabilityStatementSecurity|undefined}
        */
        Object.defineProperty(this, 'security', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.security,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CapabilityStatementSecurity = require('../backbone_elements/capabilityStatementSecurity.js');
                this.__data.security = new CapabilityStatementSecurity(valueProvided);
            }
        });

        /**
         * @description A specification of the restful capabilities of the solution for a specific
    resource type.
         * @property {CapabilityStatementResource[]|undefined}
        */
        Object.defineProperty(this, 'resource', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.resource,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CapabilityStatementResource = require('../backbone_elements/capabilityStatementResource.js');
                this.__data.resource = Array.isArray(valueProvided) ? valueProvided.map(v => new CapabilityStatementResource(v)) : [new CapabilityStatementResource(valueProvided)];
            }
        });

        /**
         * @description A specification of restful operations supported by the system.
         * @property {CapabilityStatementInteraction1[]|undefined}
        */
        Object.defineProperty(this, 'interaction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.interaction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CapabilityStatementInteraction1 = require('../backbone_elements/capabilityStatementInteraction1.js');
                this.__data.interaction = Array.isArray(valueProvided) ? valueProvided.map(v => new CapabilityStatementInteraction1(v)) : [new CapabilityStatementInteraction1(valueProvided)];
            }
        });

        /**
         * @description Search parameters that are supported for searching all resources for
    implementations to support and/or make use of - either references to ones
    defined in the specification, or additional ones defined for/by the
    implementation.
         * @property {CapabilityStatementSearchParam[]|undefined}
        */
        Object.defineProperty(this, 'searchParam', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.searchParam,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CapabilityStatementSearchParam = require('../backbone_elements/capabilityStatementSearchParam.js');
                this.__data.searchParam = Array.isArray(valueProvided) ? valueProvided.map(v => new CapabilityStatementSearchParam(v)) : [new CapabilityStatementSearchParam(valueProvided)];
            }
        });

        /**
         * @description Definition of an operation or a named query together with its parameters and
    their meaning and type.
         * @property {CapabilityStatementOperation[]|undefined}
        */
        Object.defineProperty(this, 'operation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.operation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CapabilityStatementOperation = require('../backbone_elements/capabilityStatementOperation.js');
                this.__data.operation = Array.isArray(valueProvided) ? valueProvided.map(v => new CapabilityStatementOperation(v)) : [new CapabilityStatementOperation(valueProvided)];
            }
        });

        /**
         * @description An absolute URI which is a reference to the definition of a compartment that
    the system supports. The reference is to a CompartmentDefinition resource by
    its canonical URL .
         * @property {canonical[]|undefined}
        */
        Object.defineProperty(this, 'compartment', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.compartment,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.compartment = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
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
            mode,
            documentation,
            security,
            resource,
            interaction,
            searchParam,
            operation,
            compartment,
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
            mode: this.mode,
            documentation: this.documentation,
            security: this.security && this.security.toJSON(),
            resource: this.resource && this.resource.map(v => v.toJSON()),
            interaction: this.interaction && this.interaction.map(v => v.toJSON()),
            searchParam: this.searchParam && this.searchParam.map(v => v.toJSON()),
            operation: this.operation && this.operation.map(v => v.toJSON()),
            compartment: this.compartment,
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

module.exports = CapabilityStatementRest;
