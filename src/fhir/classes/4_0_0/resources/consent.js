

// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');
const async = require('async');

/**
Consent
    A record of a healthcare consumer’s  choices, which permits or denies
    identified recipient(s) or recipient role(s) to perform one or more actions
    within a given policy context, for specific purposes and periods of time.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class Consent extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {code} status,
     * @param {CodeableConcept} scope,
     * @param {CodeableConcept[]} category,
     * @param {Reference|undefined} [patient],
     * @param {dateTime|undefined} [dateTime],
     * @param {Reference[]|undefined} [performer],
     * @param {Reference[]|undefined} [organization],
     * @param {Attachment|undefined} [sourceAttachment],
     * @param {Reference|undefined} [sourceReference],
     * @param {ConsentPolicy[]|undefined} [policy],
     * @param {CodeableConcept|undefined} [policyRule],
     * @param {ConsentVerification[]|undefined} [verification],
     * @param {ConsentProvision|undefined} [provision],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
    */
    constructor (
        {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            status,
            scope,
            category,
            patient,
            dateTime,
            performer,
            organization,
            sourceAttachment,
            sourceReference,
            policy,
            policyRule,
            verification,
            provision,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        }
    ) {
        super({});

        // ---- Define getters and setters as enumerable ---

        /**
         * @description The logical id of the resource, as used in the URL for the resource. Once
    assigned, this value never changes.
         * @property {id|undefined}
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
         * @description The metadata about the resource. This is content that is maintained by the
    infrastructure. Changes to the content might not always be associated with
    version changes to the resource.
         * @property {Meta|undefined}
        */
        Object.defineProperty(this, 'meta', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.meta,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.meta = undefined;
                    return;
                }
                const Meta = require('../complex_types/meta.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.meta = FhirResourceCreator.create(valueProvided, Meta);
            }
        });

        /**
         * @description A reference to a set of rules that were followed when the resource was
    constructed, and which must be understood when processing the content. Often,
    this is a reference to an implementation guide that defines the special rules
    along with other profiles etc.
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'implicitRules', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.implicitRules,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.implicitRules = undefined;
                    return;
                }
                this.__data.implicitRules = valueProvided;
            }
        });

        /**
         * @description The base language in which the resource is written.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'language', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.language,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.language = undefined;
                    return;
                }
                this.__data.language = valueProvided;
            }
        });

        /**
         * @description A human-readable narrative that contains a summary of the resource and can be
    used to represent the content of the resource to a human. The narrative need
    not encode all the structured data, but is required to contain sufficient
    detail to make it "clinically safe" for a human to just read the narrative.
    Resource definitions may define what content should be represented in the
    narrative to ensure clinical safety.
         * @property {Narrative|undefined}
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
                const Narrative = require('../complex_types/narrative.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.text = FhirResourceCreator.create(valueProvided, Narrative);
            }
        });

        /**
         * @description These resources do not have an independent existence apart from the resource
    that contains them - they cannot be identified independently, and nor can they
    have their own independent transaction scope.
         * @property {ResourceContainer[]|undefined}
        */
        Object.defineProperty(this, 'contained', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contained,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contained = undefined;
                    return;
                }
                const ResourceContainer = require('../simple_types/resourceContainer.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.contained = FhirResourceCreator.createArray(valueProvided);
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the resource. To make the use of extensions safe and manageable,
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
    definition of the resource and that modifies the understanding of the element
    that contains it and/or the understanding of the containing element's
    descendants. Usually modifier elements provide negation or qualification. To
    make the use of extensions safe and manageable, there is a strict set of
    governance applied to the definition and use of extensions. Though any
    implementer is allowed to define an extension, there is a set of requirements
    that SHALL be met as part of the definition of the extension. Applications
    processing a resource are required to check for modifier extensions.

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
         * @description Unique identifier for this copy of the Consent Statement.
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'identifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.identifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.identifier = undefined;
                    return;
                }
                const Identifier = require('../complex_types/identifier.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.identifier = FhirResourceCreator.createArray(valueProvided, Identifier);
            }
        });

        /**
         * @description Indicates the current state of this consent.
         * @property {code}
        */
        Object.defineProperty(this, 'status', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.status,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.status = undefined;
                    return;
                }
                this.__data.status = valueProvided;
            }
        });

        /**
         * @description A selector of the type of consent being presented: ADR, Privacy, Treatment,
    Research.  This list is now extensible.
         * @property {CodeableConcept}
        */
        Object.defineProperty(this, 'scope', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.scope,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.scope = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.scope = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description A classification of the type of consents found in the statement. This element
    supports indexing and retrieval of consent statements.
         * @property {CodeableConcept[]}
        */
        Object.defineProperty(this, 'category', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.category,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.category = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.category = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The patient/healthcare consumer to whom this consent applies.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'patient', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.patient,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.patient = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.patient = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description When this  Consent was issued / created / indexed.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'dateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.dateTime = undefined;
                    return;
                }
                this.__data.dateTime = valueProvided;
            }
        });

        /**
         * @description Either the Grantor, which is the entity responsible for granting the rights
    listed in a Consent Directive or the Grantee, which is the entity responsible
    for complying with the Consent Directive, including any obligations or
    limitations on authorizations and enforcement of prohibitions.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'performer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.performer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.performer = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.performer = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description The organization that manages the consent, and the framework within which it
    is executed.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'organization', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.organization,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.organization = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.organization = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description None
         * @property {Attachment|undefined}
        */
        Object.defineProperty(this, 'sourceAttachment', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sourceAttachment,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sourceAttachment = undefined;
                    return;
                }
                const Attachment = require('../complex_types/attachment.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.sourceAttachment = FhirResourceCreator.create(valueProvided, Attachment);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'sourceReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sourceReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sourceReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.sourceReference = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description The references to the policies that are included in this consent scope.
    Policies may be organizational, but are often defined jurisdictionally, or in
    law.
         * @property {ConsentPolicy[]|undefined}
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
                const ConsentPolicy = require('../backbone_elements/consentPolicy.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.policy = FhirResourceCreator.createArray(valueProvided, ConsentPolicy);
            }
        });

        /**
         * @description A reference to the specific base computable regulation or policy.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'policyRule', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.policyRule,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.policyRule = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.policyRule = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Whether a treatment instruction (e.g. artificial respiration yes or no) was
    verified with the patient, his/her family or another authorized person.
         * @property {ConsentVerification[]|undefined}
        */
        Object.defineProperty(this, 'verification', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.verification,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.verification = undefined;
                    return;
                }
                const ConsentVerification = require('../backbone_elements/consentVerification.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.verification = FhirResourceCreator.createArray(valueProvided, ConsentVerification);
            }
        });

        /**
         * @description An exception to the base policy of this consent. An exception can be an
    addition or removal of access permissions.
         * @property {ConsentProvision|undefined}
        */
        Object.defineProperty(this, 'provision', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.provision,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.provision = undefined;
                    return;
                }
                const ConsentProvision = require('../backbone_elements/consentProvision.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.provision = FhirResourceCreator.create(valueProvided, ConsentProvision);
            }
        });

        /**
         * @description _access
         * @property {Object|undefined}
         */
        Object.defineProperty(this, '_access', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._access,
            set: valueProvided => {
                this.__data._access = valueProvided;
            }
        });
        /**
         * @description _sourceAssigningAuthority
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_sourceAssigningAuthority', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceAssigningAuthority,
            set: valueProvided => {
                this.__data._sourceAssigningAuthority = valueProvided;
            }
        });
        /**
         * @description _uuid
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_uuid', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._uuid,
            set: valueProvided => {
                this.__data._uuid = valueProvided;
            }
        });
        /**
         * @description _sourceId
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_sourceId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceId,
            set: valueProvided => {
                this.__data._sourceId = valueProvided;
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            status,
            scope,
            category,
            patient,
            dateTime,
            performer,
            organization,
            sourceAttachment,
            sourceReference,
            policy,
            policyRule,
            verification,
            provision,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        });

        /**
         * @description Define a default non-writable resourceType property
         * @property {string|undefined}
         */
        Object.defineProperty(this, 'resourceType', {
            value: 'Consent',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    /**
     * @description Define a default non-writable resourceType property
     * @property {string|undefined}
     */
    static get resourceType () {
        return 'Consent';
    }

    /**
     * @description Creates a blank new resource
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {code} status,
     * @param {CodeableConcept} scope,
     * @param {CodeableConcept[]} category,
     * @param {Reference|undefined} [patient],
     * @param {dateTime|undefined} [dateTime],
     * @param {Reference[]|undefined} [performer],
     * @param {Reference[]|undefined} [organization],
     * @param {Attachment|undefined} [sourceAttachment],
     * @param {Reference|undefined} [sourceReference],
     * @param {ConsentPolicy[]|undefined} [policy],
     * @param {CodeableConcept|undefined} [policyRule],
     * @param {ConsentVerification[]|undefined} [verification],
     * @param {ConsentProvision|undefined} [provision],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {Consent}
    */
    create (
            {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            status,
            scope,
            category,
            patient,
            dateTime,
            performer,
            organization,
            sourceAttachment,
            sourceReference,
            policy,
            policyRule,
            verification,
            provision,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        }
    ) {
        return new Consent({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            status,
            scope,
            category,
            patient,
            dateTime,
            performer,
            organization,
            sourceAttachment,
            sourceReference,
            policy,
            policyRule,
            verification,
            provision,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {Consent}
    */
    clone () {
        return new Consent(this.toJSONInternal());
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON () {
        const { removeNull } = require('../../../../utils/nullRemover');

        return removeNull({
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSON(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSON(),
            contained: this.contained && this.contained.map(v => v.toJSON()),
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            status: this.status,
            scope: this.scope && this.scope.toJSON(),
            category: this.category && this.category.map(v => v.toJSON()),
            patient: this.patient && this.patient.toJSON(),
            dateTime: this.dateTime,
            performer: this.performer && this.performer.map(v => v.toJSON()),
            organization: this.organization && this.organization.map(v => v.toJSON()),
            sourceAttachment: this.sourceAttachment && this.sourceAttachment.toJSON(),
            sourceReference: this.sourceReference && this.sourceReference.toJSON(),
            policy: this.policy && this.policy.map(v => v.toJSON()),
            policyRule: this.policyRule && this.policyRule.toJSON(),
            verification: this.verification && this.verification.map(v => v.toJSON()),
            provision: this.provision && this.provision.toJSON()
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync ({ fnUpdateReferenceAsync }) {
            if (this.meta) { await this.meta.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.text) { await this.text.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.contained) { await async.each(this.contained, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.extension) { await async.each(this.extension, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.modifierExtension) { await async.each(this.modifierExtension, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.identifier) { await async.each(this.identifier, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.scope) { await this.scope.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.category) { await async.each(this.category, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.patient) { await this.patient.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.performer) { await async.each(this.performer, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.organization) { await async.each(this.organization, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.sourceAttachment) { await this.sourceAttachment.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.sourceReference) { await this.sourceReference.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.policy) { await async.each(this.policy, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.policyRule) { await this.policyRule.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.verification) { await async.each(this.verification, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.provision) { await this.provision.updateReferencesAsync({ fnUpdateReferenceAsync }); }
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal () {
        const { removeNull } = require('../../../../utils/nullRemover');
        const json = {
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSONInternal(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSONInternal(),
            contained: this.contained && this.contained.map(v => v.toJSONInternal()),
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            identifier: this.identifier && this.identifier.map(v => v.toJSONInternal()),
            status: this.status,
            scope: this.scope && this.scope.toJSONInternal(),
            category: this.category && this.category.map(v => v.toJSONInternal()),
            patient: this.patient && this.patient.toJSONInternal(),
            dateTime: this.dateTime,
            performer: this.performer && this.performer.map(v => v.toJSONInternal()),
            organization: this.organization && this.organization.map(v => v.toJSONInternal()),
            sourceAttachment: this.sourceAttachment && this.sourceAttachment.toJSONInternal(),
            sourceReference: this.sourceReference && this.sourceReference.toJSONInternal(),
            policy: this.policy && this.policy.map(v => v.toJSONInternal()),
            policyRule: this.policyRule && this.policyRule.toJSONInternal(),
            verification: this.verification && this.verification.map(v => v.toJSONInternal()),
            provision: this.provision && this.provision.toJSONInternal()
        };

        if (this._access) {
            json._access = this._access;
        }
        if (this._sourceAssigningAuthority) {
            json._sourceAssigningAuthority = this._sourceAssigningAuthority;
        }
        if (this._uuid) {
            json._uuid = this._uuid;
        }
        if (this._sourceId) {
            json._sourceId = this._sourceId;
        }

        return removeNull(json);
    }
}

module.exports = Consent;
