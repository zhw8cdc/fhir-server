

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
AuditEvent.Agent
    A record of an event made for purposes of maintaining a security log. Typical
    uses include detection of intrusion attempts and monitoring for inappropriate
    usage.
*/
class AuditEventAgent extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [type],
     * @param {CodeableConcept[]|undefined} [role],
     * @param {Reference|undefined} [who],
     * @param {String|undefined} [altId],
     * @param {String|undefined} [name],
     * @param {Boolean} requestor,
     * @param {Reference|undefined} [location],
     * @param {uri[]|undefined} [policy],
     * @param {Coding|undefined} [media],
     * @param {AuditEventNetwork|undefined} [network],
     * @param {CodeableConcept[]|undefined} [purposeOfUse],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            type,
            role,
            who,
            altId,
            name,
            requestor,
            location,
            policy,
            media,
            network,
            purposeOfUse
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.extension = FhirResourceCreator.createArray(valueProvided, Extension);
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
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.modifierExtension = FhirResourceCreator.createArray(valueProvided, Extension);
            }
        });

        /**
         * @description Specification of the participation type the user plays when performing the
    event.
         * @property {CodeableConcept|undefined}
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
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.type = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The security role that the user was acting under, that come from local codes
    defined by the access control security system (e.g. RBAC, ABAC) used in the
    local context.
         * @property {CodeableConcept[]|undefined}
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
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.role = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Reference to who this agent is that was involved in the event.
         * @property {Reference|undefined}
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
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.who = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description Alternative agent Identifier. For a human, this should be a user identifier
    text string from authentication system. This identifier would be one known to
    a common authentication system (e.g. single sign-on), if available.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'altId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.altId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.altId = undefined;
                    return;
                }
                this.__data.altId = valueProvided;
            }
        });

        /**
         * @description Human-meaningful name for the agent.
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
         * @description Indicator that the user is or is not the requestor, or initiator, for the
    event being audited.
         * @property {Boolean}
        */
        Object.defineProperty(this, 'requestor', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.requestor,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.requestor = undefined;
                    return;
                }
                this.__data.requestor = valueProvided;
            }
        });

        /**
         * @description Where the event occurred.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'location', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.location,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.location = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.location = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description The policy or plan that authorized the activity being recorded. Typically, a
    single activity may have multiple applicable policies, such as patient
    consent, guarantor funding, etc. The policy would also indicate the security
    token used.
         * @property {uri[]|undefined}
        */
        Object.defineProperty(this, 'policy', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.policy,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.policy = undefined;
                    return;
                }
                this.__data.policy = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Type of media involved. Used when the event is about exporting/importing onto
    media.
         * @property {Coding|undefined}
        */
        Object.defineProperty(this, 'media', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.media,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.media = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.media = FhirResourceCreator.create(valueProvided, Coding);
            }
        });

        /**
         * @description Logical network location for application activity, if the activity has a
    network location.
         * @property {AuditEventNetwork|undefined}
        */
        Object.defineProperty(this, 'network', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.network,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.network = undefined;
                    return;
                }
                const AuditEventNetwork = require('../backbone_elements/auditEventNetwork.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.network = FhirResourceCreator.create(valueProvided, AuditEventNetwork);
            }
        });

        /**
         * @description The reason (purpose of use), specific to this agent, that was used during the
    event being recorded.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'purposeOfUse', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.purposeOfUse,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.purposeOfUse = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.purposeOfUse = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            type,
            role,
            who,
            altId,
            name,
            requestor,
            location,
            policy,
            media,
            network,
            purposeOfUse
        });
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON () {
        const { removeNull } = require('../../../../utils/nullRemover');

        return removeNull({
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            type: this.type && this.type.toJSON(),
            role: this.role && this.role.map(v => v.toJSON()),
            who: this.who && this.who.toJSON(),
            altId: this.altId,
            name: this.name,
            requestor: this.requestor,
            location: this.location && this.location.toJSON(),
            policy: this.policy,
            media: this.media && this.media.toJSON(),
            network: this.network && this.network.toJSON(),
            purposeOfUse: this.purposeOfUse && this.purposeOfUse.map(v => v.toJSON())
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync ({ fnUpdateReferenceAsync }) {
            if (this.extension) { await async.each(this.extension, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.modifierExtension) { await async.each(this.modifierExtension, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.type) { await this.type.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.role) { await async.each(this.role, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.who) { await this.who.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.location) { await this.location.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.media) { await this.media.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.network) { await this.network.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.purposeOfUse) { await async.each(this.purposeOfUse, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal () {
        const { removeNull } = require('../../../../utils/nullRemover');
        const json = {
            id: this.id,
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            type: this.type && this.type.toJSONInternal(),
            role: this.role && this.role.map(v => v.toJSONInternal()),
            who: this.who && this.who.toJSONInternal(),
            altId: this.altId,
            name: this.name,
            requestor: this.requestor,
            location: this.location && this.location.toJSONInternal(),
            policy: this.policy,
            media: this.media && this.media.toJSONInternal(),
            network: this.network && this.network.toJSONInternal(),
            purposeOfUse: this.purposeOfUse && this.purposeOfUse.map(v => v.toJSONInternal())
        };

        return removeNull(json);
    }
}

module.exports = AuditEventAgent;
