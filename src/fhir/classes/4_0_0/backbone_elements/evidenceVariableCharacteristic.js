/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
EvidenceVariable.Characteristic
    The EvidenceVariable resource describes a "PICO" element that knowledge
    (evidence, assertion, recommendation) is about.
*/
class EvidenceVariableCharacteristic extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {String|undefined} [description],
     * @param {Reference|undefined} [definitionReference],
     * @param {canonical|undefined} [definitionCanonical],
     * @param {CodeableConcept|undefined} [definitionCodeableConcept],
     * @param {Expression|undefined} [definitionExpression],
     * @param {DataRequirement|undefined} [definitionDataRequirement],
     * @param {TriggerDefinition|undefined} [definitionTriggerDefinition],
     * @param {UsageContext[]|undefined} [usageContext],
     * @param {Boolean|undefined} [exclude],
     * @param {dateTime|undefined} [participantEffectiveDateTime],
     * @param {Period|undefined} [participantEffectivePeriod],
     * @param {Quantity|undefined} [participantEffectiveDuration],
     * @param {Timing|undefined} [participantEffectiveTiming],
     * @param {Quantity|undefined} [timeFromStart],
     * @param {code|undefined} [groupMeasure],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            description,
            definitionReference,
            definitionCanonical,
            definitionCodeableConcept,
            definitionExpression,
            definitionDataRequirement,
            definitionTriggerDefinition,
            usageContext,
            exclude,
            participantEffectiveDateTime,
            participantEffectivePeriod,
            participantEffectiveDuration,
            participantEffectiveTiming,
            timeFromStart,
            groupMeasure,
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
         * @description A short, natural language description of the characteristic that could be used
    to communicate the criteria to an end-user.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'description', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.description,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.description = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'definitionReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.definitionReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.definitionReference = new Reference(valueProvided);
            }
        });

        /**
         * @description None
         * @property {canonical|undefined}
        */
        Object.defineProperty(this, 'definitionCanonical', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.definitionCanonical,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.definitionCanonical = valueProvided;
            }
        });

        /**
         * @description None
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'definitionCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.definitionCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.definitionCodeableConcept = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Expression|undefined}
        */
        Object.defineProperty(this, 'definitionExpression', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.definitionExpression,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Expression = require('../complex_types/expression.js');
                this.__data.definitionExpression = new Expression(valueProvided);
            }
        });

        /**
         * @description None
         * @property {DataRequirement|undefined}
        */
        Object.defineProperty(this, 'definitionDataRequirement', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.definitionDataRequirement,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let DataRequirement = require('../complex_types/dataRequirement.js');
                this.__data.definitionDataRequirement = new DataRequirement(valueProvided);
            }
        });

        /**
         * @description None
         * @property {TriggerDefinition|undefined}
        */
        Object.defineProperty(this, 'definitionTriggerDefinition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.definitionTriggerDefinition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let TriggerDefinition = require('../complex_types/triggerDefinition.js');
                this.__data.definitionTriggerDefinition = new TriggerDefinition(valueProvided);
            }
        });

        /**
         * @description Use UsageContext to define the members of the population, such as Age Ranges,
    Genders, Settings.
         * @property {UsageContext[]|undefined}
        */
        Object.defineProperty(this, 'usageContext', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.usageContext,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let UsageContext = require('../complex_types/usageContext.js');
                this.__data.usageContext = Array.isArray(valueProvided) ? valueProvided.map(v => new UsageContext(v)) : [new UsageContext(valueProvided)];
            }
        });

        /**
         * @description When true, members with this characteristic are excluded from the element.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'exclude', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.exclude,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.exclude = valueProvided;
            }
        });

        /**
         * @description None
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'participantEffectiveDateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.participantEffectiveDateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.participantEffectiveDateTime = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'participantEffectivePeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.participantEffectivePeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Period = require('../complex_types/period.js');
                this.__data.participantEffectivePeriod = new Period(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'participantEffectiveDuration', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.participantEffectiveDuration,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.participantEffectiveDuration = new Quantity(valueProvided);
            }
        });

        /**
         * @description None
         * @property {Timing|undefined}
        */
        Object.defineProperty(this, 'participantEffectiveTiming', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.participantEffectiveTiming,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Timing = require('../backbone_elements/timing.js');
                this.__data.participantEffectiveTiming = new Timing(valueProvided);
            }
        });

        /**
         * @description Indicates duration from the participant's study entry.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'timeFromStart', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.timeFromStart,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Quantity = require('../complex_types/quantity.js');
                this.__data.timeFromStart = new Quantity(valueProvided);
            }
        });

        /**
         * @description Indicates how elements are aggregated within the study effective period.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'groupMeasure', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.groupMeasure,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.groupMeasure = valueProvided;
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
            description,
            definitionReference,
            definitionCanonical,
            definitionCodeableConcept,
            definitionExpression,
            definitionDataRequirement,
            definitionTriggerDefinition,
            usageContext,
            exclude,
            participantEffectiveDateTime,
            participantEffectivePeriod,
            participantEffectiveDuration,
            participantEffectiveTiming,
            timeFromStart,
            groupMeasure,
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
            description: this.description,
            definitionReference: this.definitionReference && this.definitionReference.toJSON(),
            definitionCanonical: this.definitionCanonical,
            definitionCodeableConcept: this.definitionCodeableConcept && this.definitionCodeableConcept.toJSON(),
            definitionExpression: this.definitionExpression && this.definitionExpression.toJSON(),
            definitionDataRequirement: this.definitionDataRequirement && this.definitionDataRequirement.toJSON(),
            definitionTriggerDefinition: this.definitionTriggerDefinition && this.definitionTriggerDefinition.toJSON(),
            usageContext: this.usageContext && this.usageContext.map(v => v.toJSON()),
            exclude: this.exclude,
            participantEffectiveDateTime: this.participantEffectiveDateTime,
            participantEffectivePeriod: this.participantEffectivePeriod && this.participantEffectivePeriod.toJSON(),
            participantEffectiveDuration: this.participantEffectiveDuration && this.participantEffectiveDuration.toJSON(),
            participantEffectiveTiming: this.participantEffectiveTiming && this.participantEffectiveTiming.toJSON(),
            timeFromStart: this.timeFromStart && this.timeFromStart.toJSON(),
            groupMeasure: this.groupMeasure,
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

module.exports = EvidenceVariableCharacteristic;
