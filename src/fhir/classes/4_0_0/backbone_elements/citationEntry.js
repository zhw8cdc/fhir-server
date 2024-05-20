

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
Citation.Entry
    The Citation Resource enables reference to any knowledge artifact for purposes
    of identification and attribution. The Citation Resource supports existing
    reference structures and developing publication practices such as versioning,
    expressing complex contributorship roles, and referencing computable
    resources.
*/
class CitationEntry extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {HumanName|undefined} [name],
     * @param {String|undefined} [initials],
     * @param {String|undefined} [collectiveName],
     * @param {Identifier[]|undefined} [identifier],
     * @param {CitationAffiliationInfo[]|undefined} [affiliationInfo],
     * @param {Address[]|undefined} [address],
     * @param {ContactPoint[]|undefined} [telecom],
     * @param {CodeableConcept[]|undefined} [contributionType],
     * @param {CodeableConcept|undefined} [role],
     * @param {CitationContributionInstance[]|undefined} [contributionInstance],
     * @param {Boolean|undefined} [correspondingContact],
     * @param {Int|undefined} [listOrder],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            name,
            initials,
            collectiveName,
            identifier,
            affiliationInfo,
            address,
            telecom,
            contributionType,
            role,
            contributionInstance,
            correspondingContact,
            listOrder
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
         * @description A name associated with the individual.
         * @property {HumanName|undefined}
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
                const HumanName = require('../complex_types/humanName.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.name = FhirResourceCreator.create(valueProvided, HumanName);
            }
        });

        /**
         * @description Initials for forename.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'initials', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.initials,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.initials = undefined;
                    return;
                }
                this.__data.initials = valueProvided;
            }
        });

        /**
         * @description Used for collective or corporate name as an author.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'collectiveName', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.collectiveName,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.collectiveName = undefined;
                    return;
                }
                this.__data.collectiveName = valueProvided;
            }
        });

        /**
         * @description Unique person identifier.
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
         * @description Organization affiliated with the entity.
         * @property {CitationAffiliationInfo[]|undefined}
        */
        Object.defineProperty(this, 'affiliationInfo', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.affiliationInfo,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.affiliationInfo = undefined;
                    return;
                }
                const CitationAffiliationInfo = require('../backbone_elements/citationAffiliationInfo.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.affiliationInfo = FhirResourceCreator.createArray(valueProvided, CitationAffiliationInfo);
            }
        });

        /**
         * @description Physical mailing address for the author or contributor.
         * @property {Address[]|undefined}
        */
        Object.defineProperty(this, 'address', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.address,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.address = undefined;
                    return;
                }
                const Address = require('../complex_types/address.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.address = FhirResourceCreator.createArray(valueProvided, Address);
            }
        });

        /**
         * @description Email or telephone contact methods for the author or contributor.
         * @property {ContactPoint[]|undefined}
        */
        Object.defineProperty(this, 'telecom', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.telecom,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.telecom = undefined;
                    return;
                }
                const ContactPoint = require('../complex_types/contactPoint.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.telecom = FhirResourceCreator.createArray(valueProvided, ContactPoint);
            }
        });

        /**
         * @description This element identifies the specific nature of an individual’s contribution
    with respect to the cited work.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'contributionType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contributionType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contributionType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.contributionType = FhirResourceCreator.createArray(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The role of the contributor (e.g. author, editor, reviewer).
         * @property {CodeableConcept|undefined}
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
                this.__data.role = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Contributions with accounting for time or number.
         * @property {CitationContributionInstance[]|undefined}
        */
        Object.defineProperty(this, 'contributionInstance', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contributionInstance,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contributionInstance = undefined;
                    return;
                }
                const CitationContributionInstance = require('../backbone_elements/citationContributionInstance.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.contributionInstance = FhirResourceCreator.createArray(valueProvided, CitationContributionInstance);
            }
        });

        /**
         * @description Indication of which contributor is the corresponding contributor for the role.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'correspondingContact', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.correspondingContact,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.correspondingContact = undefined;
                    return;
                }
                this.__data.correspondingContact = valueProvided;
            }
        });

        /**
         * @description Used to code order of authors.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'listOrder', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.listOrder,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.listOrder = undefined;
                    return;
                }
                this.__data.listOrder = valueProvided;
            }
        });


        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            name,
            initials,
            collectiveName,
            identifier,
            affiliationInfo,
            address,
            telecom,
            contributionType,
            role,
            contributionInstance,
            correspondingContact,
            listOrder
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
            name: this.name && this.name.toJSON(),
            initials: this.initials,
            collectiveName: this.collectiveName,
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            affiliationInfo: this.affiliationInfo && this.affiliationInfo.map(v => v.toJSON()),
            address: this.address && this.address.map(v => v.toJSON()),
            telecom: this.telecom && this.telecom.map(v => v.toJSON()),
            contributionType: this.contributionType && this.contributionType.map(v => v.toJSON()),
            role: this.role && this.role.toJSON(),
            contributionInstance: this.contributionInstance && this.contributionInstance.map(v => v.toJSON()),
            correspondingContact: this.correspondingContact,
            listOrder: this.listOrder
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
            if (this.name) { await this.name.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.identifier) { await async.each(this.identifier, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.affiliationInfo) { await async.each(this.affiliationInfo, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.address) { await async.each(this.address, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.telecom) { await async.each(this.telecom, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.contributionType) { await async.each(this.contributionType, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.role) { await this.role.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.contributionInstance) { await async.each(this.contributionInstance, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            name: this.name && this.name.toJSONInternal(),
            initials: this.initials,
            collectiveName: this.collectiveName,
            identifier: this.identifier && this.identifier.map(v => v.toJSONInternal()),
            affiliationInfo: this.affiliationInfo && this.affiliationInfo.map(v => v.toJSONInternal()),
            address: this.address && this.address.map(v => v.toJSONInternal()),
            telecom: this.telecom && this.telecom.map(v => v.toJSONInternal()),
            contributionType: this.contributionType && this.contributionType.map(v => v.toJSONInternal()),
            role: this.role && this.role.toJSONInternal(),
            contributionInstance: this.contributionInstance && this.contributionInstance.map(v => v.toJSONInternal()),
            correspondingContact: this.correspondingContact,
            listOrder: this.listOrder
        };

        return removeNull(json);
    }
}

module.exports = CitationEntry;
