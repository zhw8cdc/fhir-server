/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
SubscriptionTopic.QueryCriteria
    Describes a stream of resource state changes or events and annotated with
    labels useful to filter projections from this topic.
*/
class SubscriptionTopicQueryCriteria extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {String|undefined} [previous],
     * @param {code|undefined} [resultForCreate],
     * @param {String|undefined} [current],
     * @param {code|undefined} [resultForDelete],
     * @param {Boolean|undefined} [requireBoth],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            previous,
            resultForCreate,
            current,
            resultForDelete,
            requireBoth
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
         * @description The FHIR query based rules are applied to the previous resource state (e.g.,
    state before an update).
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'previous', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.previous,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.previous = undefined;
                    return;
                }
                this.__data.previous = valueProvided;
            }
        });

        /**
         * @description For "create" interactions, should the "previous" criteria count as an
    automatic pass or an automatic fail.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'resultForCreate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.resultForCreate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.resultForCreate = undefined;
                    return;
                }
                this.__data.resultForCreate = valueProvided;
            }
        });

        /**
         * @description The FHIR query based rules are applied to the current resource state (e.g.,
    state after an update).
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'current', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.current,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.current = undefined;
                    return;
                }
                this.__data.current = valueProvided;
            }
        });

        /**
         * @description For "delete" interactions, should the "current" criteria count as an automatic
    pass or an automatic fail.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'resultForDelete', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.resultForDelete,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.resultForDelete = undefined;
                    return;
                }
                this.__data.resultForDelete = valueProvided;
            }
        });

        /**
         * @description If set to true, both current and previous criteria must evaluate true to
    trigger a notification for this topic.  Otherwise a notification for this
    topic will be triggered if either one evaluates to true.
         * @property {Boolean|undefined}
        */
        Object.defineProperty(this, 'requireBoth', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.requireBoth,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.requireBoth = undefined;
                    return;
                }
                this.__data.requireBoth = valueProvided;
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            previous,
            resultForCreate,
            current,
            resultForDelete,
            requireBoth
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
            previous: this.previous,
            resultForCreate: this.resultForCreate,
            current: this.current,
            resultForDelete: this.resultForDelete,
            requireBoth: this.requireBoth
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
            previous: this.previous,
            resultForCreate: this.resultForCreate,
            current: this.current,
            resultForDelete: this.resultForDelete,
            requireBoth: this.requireBoth
        };

        return removeNull(json);
    }
}

module.exports = SubscriptionTopicQueryCriteria;
