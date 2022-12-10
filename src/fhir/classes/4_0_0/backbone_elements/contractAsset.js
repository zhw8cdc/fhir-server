/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
Contract.Asset
    Legally enforceable, formally recorded unilateral or bilateral directive i.e.,
    a policy or agreement.
*/
class ContractAsset extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [scope],
     * @param {CodeableConcept[]|undefined} [type],
     * @param {Reference[]|undefined} [typeReference],
     * @param {CodeableConcept[]|undefined} [subtype],
     * @param {Coding|undefined} [relationship],
     * @param {ContractContext[]|undefined} [context],
     * @param {String|undefined} [condition],
     * @param {CodeableConcept[]|undefined} [periodType],
     * @param {Period[]|undefined} [period],
     * @param {Period[]|undefined} [usePeriod],
     * @param {String|undefined} [text],
     * @param {String[]|undefined} [linkId],
     * @param {ContractAnswer[]|undefined} [answer],
     * @param {unsignedInt[]|undefined} [securityLabelNumber],
     * @param {ContractValuedItem[]|undefined} [valuedItem],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            scope,
            type,
            typeReference,
            subtype,
            relationship,
            context,
            condition,
            periodType,
            period,
            usePeriod,
            text,
            linkId,
            answer,
            securityLabelNumber,
            valuedItem,
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
         * @description Differentiates the kind of the asset .
         * @property {CodeableConcept|undefined}
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
                this.__data.scope = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Target entity type about which the term may be concerned.
         * @property {CodeableConcept[]|undefined}
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
                this.__data.type = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Associated entities.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'typeReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.typeReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.typeReference = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.typeReference = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description May be a subtype or part of an offered asset.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'subtype', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subtype,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subtype = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.subtype = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Specifies the applicability of the term to an asset resource instance, and
    instances it refers to orinstances that refer to it, and/or are owned by the
    offeree.
         * @property {Coding|undefined}
        */
        Object.defineProperty(this, 'relationship', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.relationship,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.relationship = undefined;
                    return;
                }
                const Coding = require('../complex_types/coding.js');
                this.__data.relationship = new Coding(valueProvided);
            }
        });

        /**
         * @description Circumstance of the asset.
         * @property {ContractContext[]|undefined}
        */
        Object.defineProperty(this, 'context', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.context,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.context = undefined;
                    return;
                }
                const ContractContext = require('../backbone_elements/contractContext.js');
                this.__data.context = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ContractContext(v)) : [new ContractContext(valueProvided)];
            }
        });

        /**
         * @description Description of the quality and completeness of the asset that imay be a factor
    in its valuation.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'condition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.condition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.condition = undefined;
                    return;
                }
                this.__data.condition = valueProvided;
            }
        });

        /**
         * @description Type of Asset availability for use or ownership.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'periodType', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.periodType,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.periodType = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.periodType = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Asset relevant contractual time period.
         * @property {Period[]|undefined}
        */
        Object.defineProperty(this, 'period', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.period,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.period = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                this.__data.period = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Period(v)) : [new Period(valueProvided)];
            }
        });

        /**
         * @description Time period of asset use.
         * @property {Period[]|undefined}
        */
        Object.defineProperty(this, 'usePeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.usePeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.usePeriod = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                this.__data.usePeriod = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Period(v)) : [new Period(valueProvided)];
            }
        });

        /**
         * @description Clause or question text (Prose Object) concerning the asset in a linked form,
    such as a QuestionnaireResponse used in the formation of the contract.
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
         * @description Id [identifier??] of the clause or question text about the asset in the
    referenced form or QuestionnaireResponse.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'linkId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.linkId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.linkId = undefined;
                    return;
                }
                this.__data.linkId = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Response to assets.
         * @property {ContractAnswer[]|undefined}
        */
        Object.defineProperty(this, 'answer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.answer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.answer = undefined;
                    return;
                }
                const ContractAnswer = require('../backbone_elements/contractAnswer.js');
                this.__data.answer = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ContractAnswer(v)) : [new ContractAnswer(valueProvided)];
            }
        });

        /**
         * @description Security labels that protects the asset.
         * @property {unsignedInt[]|undefined}
        */
        Object.defineProperty(this, 'securityLabelNumber', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.securityLabelNumber,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.securityLabelNumber = undefined;
                    return;
                }
                this.__data.securityLabelNumber = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description Contract Valued Item List.
         * @property {ContractValuedItem[]|undefined}
        */
        Object.defineProperty(this, 'valuedItem', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valuedItem,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valuedItem = undefined;
                    return;
                }
                const ContractValuedItem = require('../backbone_elements/contractValuedItem.js');
                this.__data.valuedItem = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ContractValuedItem(v)) : [new ContractValuedItem(valueProvided)];
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            scope,
            type,
            typeReference,
            subtype,
            relationship,
            context,
            condition,
            periodType,
            period,
            usePeriod,
            text,
            linkId,
            answer,
            securityLabelNumber,
            valuedItem,
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
            scope: this.scope && this.scope.toJSON(),
            type: this.type && this.type.map(v => v.toJSON()),
            typeReference: this.typeReference && this.typeReference.map(v => v.toJSON()),
            subtype: this.subtype && this.subtype.map(v => v.toJSON()),
            relationship: this.relationship && this.relationship.toJSON(),
            context: this.context && this.context.map(v => v.toJSON()),
            condition: this.condition,
            periodType: this.periodType && this.periodType.map(v => v.toJSON()),
            period: this.period && this.period.map(v => v.toJSON()),
            usePeriod: this.usePeriod && this.usePeriod.map(v => v.toJSON()),
            text: this.text,
            linkId: this.linkId,
            answer: this.answer && this.answer.map(v => v.toJSON()),
            securityLabelNumber: this.securityLabelNumber,
            valuedItem: this.valuedItem && this.valuedItem.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Reference} fnUpdateReference
     * @return {void}
     */
    updateReferences({fnUpdateReference}) {
            if (this.extension) {this.extension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.modifierExtension) {this.modifierExtension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.scope) {this.scope.updateReferences({fnUpdateReference});}
            if (this.type) {this.type.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.typeReference) {this.typeReference.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.subtype) {this.subtype.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.relationship) {this.relationship.updateReferences({fnUpdateReference});}
            if (this.context) {this.context.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.periodType) {this.periodType.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.period) {this.period.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.usePeriod) {this.usePeriod.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.answer) {this.answer.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.valuedItem) {this.valuedItem.forEach(v => v.updateReferences({fnUpdateReference}));}
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

module.exports = ContractAsset;
