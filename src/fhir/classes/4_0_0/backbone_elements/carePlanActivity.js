/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
CarePlan.Activity
    Describes the intention of how one or more practitioners intend to deliver
    care for a particular patient, group or community for a period of time,
    possibly limited to care for a specific condition or set of conditions.
*/
class CarePlanActivity extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept[]|undefined} [outcomeCodeableConcept],
     * @param {Reference[]|undefined} [outcomeReference],
     * @param {Annotation[]|undefined} [progress],
     * @param {Reference|undefined} [reference],
     * @param {CarePlanDetail|undefined} [detail],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            outcomeCodeableConcept,
            outcomeReference,
            progress,
            reference,
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
         * @description Identifies the outcome at the point when the status of the activity is
    assessed.  For example, the outcome of an education activity could be patient
    understands (or not).
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'outcomeCodeableConcept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.outcomeCodeableConcept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.outcomeCodeableConcept = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Details of the outcome or action resulting from the activity.  The reference
    to an "event" resource, such as Procedure or Encounter or Observation, is the
    result/outcome of the activity itself.  The activity can be conveyed using
    CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference
    to a “request” resource).
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'outcomeReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.outcomeReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.outcomeReference = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Notes about the adherence/status/progress of the activity.
         * @property {Annotation[]|undefined}
        */
        Object.defineProperty(this, 'progress', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.progress,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Annotation = require('../complex_types/annotation.js');
                this.__data.progress = Array.isArray(valueProvided) ? valueProvided.map(v => new Annotation(v)) : [new Annotation(valueProvided)];
            }
        });

        /**
         * @description The details of the proposed activity represented in a specific resource.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'reference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.reference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.reference = new Reference(valueProvided);
            }
        });

        /**
         * @description A simple summary of a planned activity suitable for a general care plan system
    (e.g. form driven) that doesn't know about specific resources such as
    procedure etc.
         * @property {CarePlanDetail|undefined}
        */
        Object.defineProperty(this, 'detail', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.detail,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CarePlanDetail = require('../backbone_elements/carePlanDetail.js');
                this.__data.detail = new CarePlanDetail(valueProvided);
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
            outcomeCodeableConcept,
            outcomeReference,
            progress,
            reference,
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
            outcomeCodeableConcept: this.outcomeCodeableConcept && this.outcomeCodeableConcept.map(v => v.toJSON()),
            outcomeReference: this.outcomeReference && this.outcomeReference.map(v => v.toJSON()),
            progress: this.progress && this.progress.map(v => v.toJSON()),
            reference: this.reference && this.reference.toJSON(),
            detail: this.detail && this.detail.toJSON(),
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

module.exports = CarePlanActivity;
