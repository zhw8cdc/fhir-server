/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
Contract.Term
    Legally enforceable, formally recorded unilateral or bilateral directive i.e.,
    a policy or agreement.
*/
class ContractTerm extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier|undefined} [identifier],
     * @param {dateTime|undefined} [issued],
     * @param {Period|undefined} [applies],
     * @param {CodeableConcept|undefined} [topicCodeableConcept],
     * @param {Reference|undefined} [topicReference],
     * @param {CodeableConcept|undefined} [type],
     * @param {CodeableConcept|undefined} [subType],
     * @param {String|undefined} [text],
     * @param {ContractSecurityLabel[]|undefined} [securityLabel],
     * @param {ContractOffer} offer,
     * @param {ContractAsset[]|undefined} [asset],
     * @param {ContractAction[]|undefined} [action],
     * @param {ContractTerm[]|undefined} [group],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            identifier,
            issued,
            applies,
            topicCodeableConcept,
            topicReference,
            type,
            subType,
            text,
            securityLabel,
            offer,
            asset,
            action,
            group
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
         * @description Unique identifier for this particular Contract Provision.
         * @property {Identifier|undefined}
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
                this.__data.identifier = FhirResourceCreator.create(valueProvided, Identifier);
            }
        });

        /**
         * @description When this Contract Provision was issued.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'issued', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.issued,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.issued = undefined;
                    return;
                }
                this.__data.issued = valueProvided;
            }
        });

        /**
         * @description Relevant time or time-period when this Contract Provision is applicable.
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'applies', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.applies,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.applies = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.applies = FhirResourceCreator.create(valueProvided, Period);
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'topicCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.topicCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.topicCodeableConcept = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.topicCodeableConcept = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'topicReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.topicReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.topicReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.topicReference = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description A legal clause or condition contained within a contract that requires one or
    both parties to perform a particular requirement by some specified time or
    prevents one or both parties from performing a particular requirement by some
    specified time.
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
         * @description A specialized legal clause or condition based on overarching contract type.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'subType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.subType = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Statement of a provision in a policy or a contract.
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
         * @description Security labels that protect the handling of information about the term and
    its elements, which may be specifically identified..
         * @property {ContractSecurityLabel[]|undefined}
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
                const ContractSecurityLabel = require('../backbone_elements/contractSecurityLabel.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.securityLabel = FhirResourceCreator.createArray(valueProvided, ContractSecurityLabel);
            }
        });

        /**
         * @description The matter of concern in the context of this provision of the agrement.
         * @property {ContractOffer}
        */
        Object.defineProperty(this, 'offer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.offer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.offer = undefined;
                    return;
                }
                const ContractOffer = require('../backbone_elements/contractOffer.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.offer = FhirResourceCreator.create(valueProvided, ContractOffer);
            }
        });

        /**
         * @description Contract Term Asset List.
         * @property {ContractAsset[]|undefined}
        */
        Object.defineProperty(this, 'asset', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.asset,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.asset = undefined;
                    return;
                }
                const ContractAsset = require('../backbone_elements/contractAsset.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.asset = FhirResourceCreator.createArray(valueProvided, ContractAsset);
            }
        });

        /**
         * @description An actor taking a role in an activity for which it can be assigned some degree
    of responsibility for the activity taking place.
         * @property {ContractAction[]|undefined}
        */
        Object.defineProperty(this, 'action', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.action,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.action = undefined;
                    return;
                }
                const ContractAction = require('../backbone_elements/contractAction.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.action = FhirResourceCreator.createArray(valueProvided, ContractAction);
            }
        });

        /**
         * @description Nested group of Contract Provisions.
         * @property {ContractTerm[]|undefined}
        */
        Object.defineProperty(this, 'group', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.group,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.group = undefined;
                    return;
                }
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.group = FhirResourceCreator.createArray(valueProvided, ContractTerm);
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            identifier,
            issued,
            applies,
            topicCodeableConcept,
            topicReference,
            type,
            subType,
            text,
            securityLabel,
            offer,
            asset,
            action,
            group
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
            identifier: this.identifier && this.identifier.toJSON(),
            issued: this.issued,
            applies: this.applies && this.applies.toJSON(),
            topicCodeableConcept: this.topicCodeableConcept && this.topicCodeableConcept.toJSON(),
            topicReference: this.topicReference && this.topicReference.toJSON(),
            type: this.type && this.type.toJSON(),
            subType: this.subType && this.subType.toJSON(),
            text: this.text,
            securityLabel: this.securityLabel && this.securityLabel.map(v => v.toJSON()),
            offer: this.offer && this.offer.toJSON(),
            asset: this.asset && this.asset.map(v => v.toJSON()),
            action: this.action && this.action.map(v => v.toJSON()),
            group: this.group && this.group.map(v => v.toJSON())
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
            if (this.identifier) { await this.identifier.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.applies) { await this.applies.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.topicCodeableConcept) { await this.topicCodeableConcept.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.topicReference) { await this.topicReference.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.type) { await this.type.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.subType) { await this.subType.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.securityLabel) { await async.each(this.securityLabel, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.offer) { await this.offer.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.asset) { await async.each(this.asset, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.action) { await async.each(this.action, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.group) { await async.each(this.group, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            identifier: this.identifier && this.identifier.toJSONInternal(),
            issued: this.issued,
            applies: this.applies && this.applies.toJSONInternal(),
            topicCodeableConcept: this.topicCodeableConcept && this.topicCodeableConcept.toJSONInternal(),
            topicReference: this.topicReference && this.topicReference.toJSONInternal(),
            type: this.type && this.type.toJSONInternal(),
            subType: this.subType && this.subType.toJSONInternal(),
            text: this.text,
            securityLabel: this.securityLabel && this.securityLabel.map(v => v.toJSONInternal()),
            offer: this.offer && this.offer.toJSONInternal(),
            asset: this.asset && this.asset.map(v => v.toJSONInternal()),
            action: this.action && this.action.map(v => v.toJSONInternal()),
            group: this.group && this.group.map(v => v.toJSONInternal())
        };

        return removeNull(json);
    }
}

module.exports = ContractTerm;
