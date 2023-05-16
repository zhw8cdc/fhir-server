/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
ResearchElementDefinition.Characteristic
    The ResearchElementDefinition resource describes a "PICO" element that
    knowledge (evidence, assertion, recommendation) is about.
*/
class ResearchElementDefinitionCharacteristic extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [definitionCodeableConcept],
     * @param {canonical|undefined} [definitionCanonical],
     * @param {Expression|undefined} [definitionExpression],
     * @param {DataRequirement|undefined} [definitionDataRequirement],
     * @param {UsageContext[]|undefined} [usageContext],
     * @param {Boolean|undefined} [exclude],
     * @param {CodeableConcept|undefined} [unitOfMeasure],
     * @param {String|undefined} [studyEffectiveDescription],
     * @param {dateTime|undefined} [studyEffectiveDateTime],
     * @param {Period|undefined} [studyEffectivePeriod],
     * @param {Quantity|undefined} [studyEffectiveDuration],
     * @param {Timing|undefined} [studyEffectiveTiming],
     * @param {Quantity|undefined} [studyEffectiveTimeFromStart],
     * @param {code|undefined} [studyEffectiveGroupMeasure],
     * @param {String|undefined} [participantEffectiveDescription],
     * @param {dateTime|undefined} [participantEffectiveDateTime],
     * @param {Period|undefined} [participantEffectivePeriod],
     * @param {Quantity|undefined} [participantEffectiveDuration],
     * @param {Timing|undefined} [participantEffectiveTiming],
     * @param {Quantity|undefined} [participantEffectiveTimeFromStart],
     * @param {code|undefined} [participantEffectiveGroupMeasure],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            definitionCodeableConcept,
            definitionCanonical,
            definitionExpression,
            definitionDataRequirement,
            usageContext,
            exclude,
            unitOfMeasure,
            studyEffectiveDescription,
            studyEffectiveDateTime,
            studyEffectivePeriod,
            studyEffectiveDuration,
            studyEffectiveTiming,
            studyEffectiveTimeFromStart,
            studyEffectiveGroupMeasure,
            participantEffectiveDescription,
            participantEffectiveDateTime,
            participantEffectivePeriod,
            participantEffectiveDuration,
            participantEffectiveTiming,
            participantEffectiveTimeFromStart,
            participantEffectiveGroupMeasure,
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
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
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.modifierExtension = FhirResourceCreator.createArray(valueProvided, Extension);
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
                    this.__data.definitionCodeableConcept = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.definitionCodeableConcept = FhirResourceCreator.create(valueProvided, CodeableConcept);
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
                    this.__data.definitionCanonical = undefined;
                    return;
                }
                this.__data.definitionCanonical = valueProvided;
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
                    this.__data.definitionExpression = undefined;
                    return;
                }
                const Expression = require('../complex_types/expression.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.definitionExpression = FhirResourceCreator.create(valueProvided, Expression);
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
                    this.__data.definitionDataRequirement = undefined;
                    return;
                }
                const DataRequirement = require('../complex_types/dataRequirement.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.definitionDataRequirement = FhirResourceCreator.create(valueProvided, DataRequirement);
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
                    this.__data.usageContext = undefined;
                    return;
                }
                const UsageContext = require('../complex_types/usageContext.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.usageContext = FhirResourceCreator.createArray(valueProvided, UsageContext);
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
                    this.__data.exclude = undefined;
                    return;
                }
                this.__data.exclude = valueProvided;
            }
        });

        /**
         * @description Specifies the UCUM unit for the outcome.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'unitOfMeasure', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.unitOfMeasure,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.unitOfMeasure = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.unitOfMeasure = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description A narrative description of the time period the study covers.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'studyEffectiveDescription', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.studyEffectiveDescription,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.studyEffectiveDescription = undefined;
                    return;
                }
                this.__data.studyEffectiveDescription = valueProvided;
            }
        });

        /**
         * @description None
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'studyEffectiveDateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.studyEffectiveDateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.studyEffectiveDateTime = undefined;
                    return;
                }
                this.__data.studyEffectiveDateTime = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'studyEffectivePeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.studyEffectivePeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.studyEffectivePeriod = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.studyEffectivePeriod = FhirResourceCreator.create(valueProvided, Period);
            }
        });

        /**
         * @description None
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'studyEffectiveDuration', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.studyEffectiveDuration,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.studyEffectiveDuration = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.studyEffectiveDuration = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description None
         * @property {Timing|undefined}
        */
        Object.defineProperty(this, 'studyEffectiveTiming', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.studyEffectiveTiming,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.studyEffectiveTiming = undefined;
                    return;
                }
                const Timing = require('../backbone_elements/timing.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.studyEffectiveTiming = FhirResourceCreator.create(valueProvided, Timing);
            }
        });

        /**
         * @description Indicates duration from the study initiation.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'studyEffectiveTimeFromStart', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.studyEffectiveTimeFromStart,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.studyEffectiveTimeFromStart = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.studyEffectiveTimeFromStart = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description Indicates how elements are aggregated within the study effective period.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'studyEffectiveGroupMeasure', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.studyEffectiveGroupMeasure,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.studyEffectiveGroupMeasure = undefined;
                    return;
                }
                this.__data.studyEffectiveGroupMeasure = valueProvided;
            }
        });

        /**
         * @description A narrative description of the time period the study covers.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'participantEffectiveDescription', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.participantEffectiveDescription,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.participantEffectiveDescription = undefined;
                    return;
                }
                this.__data.participantEffectiveDescription = valueProvided;
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
                    this.__data.participantEffectiveDateTime = undefined;
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
                    this.__data.participantEffectivePeriod = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.participantEffectivePeriod = FhirResourceCreator.create(valueProvided, Period);
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
                    this.__data.participantEffectiveDuration = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.participantEffectiveDuration = FhirResourceCreator.create(valueProvided, Quantity);
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
                    this.__data.participantEffectiveTiming = undefined;
                    return;
                }
                const Timing = require('../backbone_elements/timing.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.participantEffectiveTiming = FhirResourceCreator.create(valueProvided, Timing);
            }
        });

        /**
         * @description Indicates duration from the participant's study entry.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'participantEffectiveTimeFromStart', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.participantEffectiveTimeFromStart,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.participantEffectiveTimeFromStart = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.participantEffectiveTimeFromStart = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description Indicates how elements are aggregated within the study effective period.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'participantEffectiveGroupMeasure', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.participantEffectiveGroupMeasure,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.participantEffectiveGroupMeasure = undefined;
                    return;
                }
                this.__data.participantEffectiveGroupMeasure = valueProvided;
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            definitionCodeableConcept,
            definitionCanonical,
            definitionExpression,
            definitionDataRequirement,
            usageContext,
            exclude,
            unitOfMeasure,
            studyEffectiveDescription,
            studyEffectiveDateTime,
            studyEffectivePeriod,
            studyEffectiveDuration,
            studyEffectiveTiming,
            studyEffectiveTimeFromStart,
            studyEffectiveGroupMeasure,
            participantEffectiveDescription,
            participantEffectiveDateTime,
            participantEffectivePeriod,
            participantEffectiveDuration,
            participantEffectiveTiming,
            participantEffectiveTimeFromStart,
            participantEffectiveGroupMeasure,
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
            definitionCodeableConcept: this.definitionCodeableConcept && this.definitionCodeableConcept.toJSON(),
            definitionCanonical: this.definitionCanonical,
            definitionExpression: this.definitionExpression && this.definitionExpression.toJSON(),
            definitionDataRequirement: this.definitionDataRequirement && this.definitionDataRequirement.toJSON(),
            usageContext: this.usageContext && this.usageContext.map(v => v.toJSON()),
            exclude: this.exclude,
            unitOfMeasure: this.unitOfMeasure && this.unitOfMeasure.toJSON(),
            studyEffectiveDescription: this.studyEffectiveDescription,
            studyEffectiveDateTime: this.studyEffectiveDateTime,
            studyEffectivePeriod: this.studyEffectivePeriod && this.studyEffectivePeriod.toJSON(),
            studyEffectiveDuration: this.studyEffectiveDuration && this.studyEffectiveDuration.toJSON(),
            studyEffectiveTiming: this.studyEffectiveTiming && this.studyEffectiveTiming.toJSON(),
            studyEffectiveTimeFromStart: this.studyEffectiveTimeFromStart && this.studyEffectiveTimeFromStart.toJSON(),
            studyEffectiveGroupMeasure: this.studyEffectiveGroupMeasure,
            participantEffectiveDescription: this.participantEffectiveDescription,
            participantEffectiveDateTime: this.participantEffectiveDateTime,
            participantEffectivePeriod: this.participantEffectivePeriod && this.participantEffectivePeriod.toJSON(),
            participantEffectiveDuration: this.participantEffectiveDuration && this.participantEffectiveDuration.toJSON(),
            participantEffectiveTiming: this.participantEffectiveTiming && this.participantEffectiveTiming.toJSON(),
            participantEffectiveTimeFromStart: this.participantEffectiveTimeFromStart && this.participantEffectiveTimeFromStart.toJSON(),
            participantEffectiveGroupMeasure: this.participantEffectiveGroupMeasure,
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
            if (this.definitionCodeableConcept) {await this.definitionCodeableConcept.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.definitionExpression) {await this.definitionExpression.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.definitionDataRequirement) {await this.definitionDataRequirement.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.usageContext) {await async.each(this.usageContext, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.unitOfMeasure) {await this.unitOfMeasure.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.studyEffectivePeriod) {await this.studyEffectivePeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.studyEffectiveDuration) {await this.studyEffectiveDuration.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.studyEffectiveTiming) {await this.studyEffectiveTiming.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.studyEffectiveTimeFromStart) {await this.studyEffectiveTimeFromStart.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.participantEffectivePeriod) {await this.participantEffectivePeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.participantEffectiveDuration) {await this.participantEffectiveDuration.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.participantEffectiveTiming) {await this.participantEffectiveTiming.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.participantEffectiveTimeFromStart) {await this.participantEffectiveTimeFromStart.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            definitionCodeableConcept: this.definitionCodeableConcept && this.definitionCodeableConcept.toJSONInternal(),
            definitionCanonical: this.definitionCanonical,
            definitionExpression: this.definitionExpression && this.definitionExpression.toJSONInternal(),
            definitionDataRequirement: this.definitionDataRequirement && this.definitionDataRequirement.toJSONInternal(),
            usageContext: this.usageContext && this.usageContext.map(v => v.toJSONInternal()),
            exclude: this.exclude,
            unitOfMeasure: this.unitOfMeasure && this.unitOfMeasure.toJSONInternal(),
            studyEffectiveDescription: this.studyEffectiveDescription,
            studyEffectiveDateTime: this.studyEffectiveDateTime,
            studyEffectivePeriod: this.studyEffectivePeriod && this.studyEffectivePeriod.toJSONInternal(),
            studyEffectiveDuration: this.studyEffectiveDuration && this.studyEffectiveDuration.toJSONInternal(),
            studyEffectiveTiming: this.studyEffectiveTiming && this.studyEffectiveTiming.toJSONInternal(),
            studyEffectiveTimeFromStart: this.studyEffectiveTimeFromStart && this.studyEffectiveTimeFromStart.toJSONInternal(),
            studyEffectiveGroupMeasure: this.studyEffectiveGroupMeasure,
            participantEffectiveDescription: this.participantEffectiveDescription,
            participantEffectiveDateTime: this.participantEffectiveDateTime,
            participantEffectivePeriod: this.participantEffectivePeriod && this.participantEffectivePeriod.toJSONInternal(),
            participantEffectiveDuration: this.participantEffectiveDuration && this.participantEffectiveDuration.toJSONInternal(),
            participantEffectiveTiming: this.participantEffectiveTiming && this.participantEffectiveTiming.toJSONInternal(),
            participantEffectiveTimeFromStart: this.participantEffectiveTimeFromStart && this.participantEffectiveTimeFromStart.toJSONInternal(),
            participantEffectiveGroupMeasure: this.participantEffectiveGroupMeasure,
        };



        return removeNull(json);
    }
}

module.exports = ResearchElementDefinitionCharacteristic;
