/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
SubscriptionTopic.ResourceTrigger
    Describes a stream of resource state changes or events and annotated with
    labels useful to filter projections from this topic.
*/
class SubscriptionTopicResourceTrigger extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {markdown|undefined} [description],
     * @param {uri} resource,
     * @param {InteractionTrigger[]|undefined} [supportedInteraction],
     * @param {SubscriptionTopicQueryCriteria|undefined} [queryCriteria],
     * @param {String|undefined} [fhirPathCriteria],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            description,
            resource,
            supportedInteraction,
            queryCriteria,
            fhirPathCriteria
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
         * @description The human readable description of this resource trigger for the
    SubscriptionTopic -  for example, "An Encounter enters the 'in-progress'
    state".
         * @property {markdown|undefined}
        */
        Object.defineProperty(this, 'description', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.description,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.description = undefined;
                    return;
                }
                this.__data.description = valueProvided;
            }
        });

        /**
         * @description URL of the Resource that is the type used in this resource trigger.  Relative
    URLs are relative to the StructureDefinition root of the implemented FHIR
    version (e.g., http://hl7.org/fhir/StructureDefinition). For example,
    "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more
    information, see <a href="elementdefinition-
    definitions.html#ElementDefinition.type.code">ElementDefinition.type.code</a>.
         * @property {uri}
        */
        Object.defineProperty(this, 'resource', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.resource,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.resource = undefined;
                    return;
                }
                this.__data.resource = valueProvided;
            }
        });

        /**
         * @description The FHIR RESTful interaction which can be used to trigger a notification for
    the SubscriptionTopic. Multiple values are considered OR joined (e.g., CREATE
    or UPDATE).
         * @property {InteractionTrigger[]|undefined}
        */
        Object.defineProperty(this, 'supportedInteraction', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.supportedInteraction,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.supportedInteraction = undefined;
                    return;
                }
                const InteractionTrigger = require('../complex_types/interactionTrigger.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.supportedInteraction = FhirResourceCreator.createArray(valueProvided, InteractionTrigger);
            }
        });

        /**
         * @description The FHIR query based rules that the server should use to determine when to
    trigger a notification for this subscription topic.
         * @property {SubscriptionTopicQueryCriteria|undefined}
        */
        Object.defineProperty(this, 'queryCriteria', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.queryCriteria,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.queryCriteria = undefined;
                    return;
                }
                const SubscriptionTopicQueryCriteria = require('../backbone_elements/subscriptionTopicQueryCriteria.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.queryCriteria = FhirResourceCreator.create(valueProvided, SubscriptionTopicQueryCriteria);
            }
        });

        /**
         * @description The FHIRPath based rules that the server should use to determine when to
    trigger a notification for this topic.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'fhirPathCriteria', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.fhirPathCriteria,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.fhirPathCriteria = undefined;
                    return;
                }
                this.__data.fhirPathCriteria = valueProvided;
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            description,
            resource,
            supportedInteraction,
            queryCriteria,
            fhirPathCriteria
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
            description: this.description,
            resource: this.resource,
            supportedInteraction: this.supportedInteraction && this.supportedInteraction.map(v => v.toJSON()),
            queryCriteria: this.queryCriteria && this.queryCriteria.toJSON(),
            fhirPathCriteria: this.fhirPathCriteria
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
            if (this.supportedInteraction) { await async.each(this.supportedInteraction, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.queryCriteria) { await this.queryCriteria.updateReferencesAsync({ fnUpdateReferenceAsync }); }
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
            description: this.description,
            resource: this.resource,
            supportedInteraction: this.supportedInteraction && this.supportedInteraction.map(v => v.toJSONInternal()),
            queryCriteria: this.queryCriteria && this.queryCriteria.toJSONInternal(),
            fhirPathCriteria: this.fhirPathCriteria
        };

        return removeNull(json);
    }
}

module.exports = SubscriptionTopicResourceTrigger;
