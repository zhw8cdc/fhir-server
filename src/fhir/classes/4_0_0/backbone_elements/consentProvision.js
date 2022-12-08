/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
Consent.Provision
    A record of a healthcare consumer’s  choices, which permits or denies
    identified recipient(s) or recipient role(s) to perform one or more actions
    within a given policy context, for specific purposes and periods of time.
*/
class ConsentProvision extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {code|undefined} [type],
     * @param {Period|undefined} [period],
     * @param {ConsentActor[]|undefined} [actor],
     * @param {CodeableConcept[]|undefined} [action],
     * @param {Coding[]|undefined} [securityLabel],
     * @param {Coding[]|undefined} [purpose],
     * @param {Coding[]|undefined} [class_],
     * @param {CodeableConcept[]|undefined} [code],
     * @param {Period|undefined} [dataPeriod],
     * @param {ConsentData[]|undefined} [data],
     * @param {ConsentProvision[]|undefined} [provision],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            type,
            period,
            actor,
            action,
            securityLabel,
            purpose,
            'class': class_,
            code,
            dataPeriod,
            data,
            provision,
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
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description Action  to take - permit or deny - when the rule conditions are met.  Not
    permitted in root rule, required in all nested rules.
         * @property {code|undefined}
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
                this.__data.type = valueProvided;
            }
        });

        /**
         * @description The timeframe in this rule is valid.
         * @property {Period|undefined}
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
                let Period = require('../complex_types/period.js');
                this.__data.period = new Period(valueProvided);
            }
        });

        /**
         * @description Who or what is controlled by this rule. Use group to identify a set of actors
    by some property they share (e.g. 'admitting officers').
         * @property {ConsentActor[]|undefined}
        */
        Object.defineProperty(this, 'actor', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.actor,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.actor = undefined;
                    return;
                }
                let ConsentActor = require('../backbone_elements/consentActor.js');
                this.__data.actor = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ConsentActor(v)) : [new ConsentActor(valueProvided)];
            }
        });

        /**
         * @description Actions controlled by this Rule.
         * @property {CodeableConcept[]|undefined}
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
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.action = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description A security label, comprised of 0..* security label fields (Privacy tags),
    which define which resources are controlled by this exception.
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
                let Coding = require('../complex_types/coding.js');
                this.__data.securityLabel = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Coding(v)) : [new Coding(valueProvided)];
            }
        });

        /**
         * @description The context of the activities a user is taking - why the user is accessing the
    data - that are controlled by this rule.
         * @property {Coding[]|undefined}
        */
        Object.defineProperty(this, 'purpose', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.purpose,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.purpose = undefined;
                    return;
                }
                let Coding = require('../complex_types/coding.js');
                this.__data.purpose = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Coding(v)) : [new Coding(valueProvided)];
            }
        });

        /**
         * @description The class of information covered by this rule. The type can be a FHIR resource
    type, a profile on a type, or a CDA document, or some other type that
    indicates what sort of information the consent relates to.
         * @property {Coding[]|undefined}
        */
        Object.defineProperty(this, 'class', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.class,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.class = undefined;
                    return;
                }
                let Coding = require('../complex_types/coding.js');
                this.__data.class = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Coding(v)) : [new Coding(valueProvided)];
            }
        });

        /**
         * @description If this code is found in an instance, then the rule applies.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'code', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.code,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.code = undefined;
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.code = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Clinical or Operational Relevant period of time that bounds the data
    controlled by this rule.
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'dataPeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dataPeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.dataPeriod = undefined;
                    return;
                }
                let Period = require('../complex_types/period.js');
                this.__data.dataPeriod = new Period(valueProvided);
            }
        });

        /**
         * @description The resources controlled by this rule if specific resources are referenced.
         * @property {ConsentData[]|undefined}
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
                let ConsentData = require('../backbone_elements/consentData.js');
                this.__data.data = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ConsentData(v)) : [new ConsentData(valueProvided)];
            }
        });

        /**
         * @description Rules which provide exceptions to the base rule or subrules.
         * @property {ConsentProvision[]|undefined}
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
                this.__data.provision = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ConsentProvision(v)) : [new ConsentProvision(valueProvided)];
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            type,
            period,
            actor,
            action,
            securityLabel,
            purpose,
            'class': class_,
            code,
            dataPeriod,
            data,
            provision,
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
            type: this.type,
            period: this.period && this.period.toJSON(),
            actor: this.actor && this.actor.map(v => v.toJSON()),
            action: this.action && this.action.map(v => v.toJSON()),
            securityLabel: this.securityLabel && this.securityLabel.map(v => v.toJSON()),
            purpose: this.purpose && this.purpose.map(v => v.toJSON()),
            class: this.class && this.class.map(v => v.toJSON()),
            code: this.code && this.code.map(v => v.toJSON()),
            dataPeriod: this.dataPeriod && this.dataPeriod.toJSON(),
            data: this.data && this.data.map(v => v.toJSON()),
            provision: this.provision && this.provision.map(v => v.toJSON()),
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

module.exports = ConsentProvision;
