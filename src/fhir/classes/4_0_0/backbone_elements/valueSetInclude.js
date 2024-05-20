

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
ValueSet.Include
    A ValueSet resource instance specifies a set of codes drawn from one or more
    code systems, intended for use in a particular context. Value sets link
    between [CodeSystem](codesystem.html) definitions and their use in [coded
    elements](terminologies.html).
*/
class ValueSetInclude extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {uri|undefined} [system],
     * @param {String|undefined} [version],
     * @param {ValueSetConcept[]|undefined} [concept],
     * @param {ValueSetFilter[]|undefined} [filter],
     * @param {canonical[]|undefined} [valueSet],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            system,
            version,
            concept,
            filter,
            valueSet
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
         * @description An absolute URI which is the code system from which the selected codes come
    from.
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'system', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.system,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.system = undefined;
                    return;
                }
                this.__data.system = valueProvided;
            }
        });

        /**
         * @description The version of the code system that the codes are selected from, or the
    special version '*' for all versions.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'version', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.version,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.version = undefined;
                    return;
                }
                this.__data.version = valueProvided;
            }
        });

        /**
         * @description Specifies a concept to be included or excluded.
         * @property {ValueSetConcept[]|undefined}
        */
        Object.defineProperty(this, 'concept', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.concept,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.concept = undefined;
                    return;
                }
                const ValueSetConcept = require('../backbone_elements/valueSetConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.concept = FhirResourceCreator.createArray(valueProvided, ValueSetConcept);
            }
        });

        /**
         * @description Select concepts by specify a matching criterion based on the properties
    (including relationships) defined by the system, or on filters defined by the
    system. If multiple filters are specified, they SHALL all be true.
         * @property {ValueSetFilter[]|undefined}
        */
        Object.defineProperty(this, 'filter', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.filter,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.filter = undefined;
                    return;
                }
                const ValueSetFilter = require('../backbone_elements/valueSetFilter.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.filter = FhirResourceCreator.createArray(valueProvided, ValueSetFilter);
            }
        });

        /**
         * @description Selects the concepts found in this value set (based on its value set
    definition). This is an absolute URI that is a reference to ValueSet.url.  If
    multiple value sets are specified this includes the union of the contents of
    all of the referenced value sets.
         * @property {canonical[]|undefined}
        */
        Object.defineProperty(this, 'valueSet', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.valueSet,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.valueSet = undefined;
                    return;
                }
                this.__data.valueSet = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });


        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            system,
            version,
            concept,
            filter,
            valueSet
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
            system: this.system,
            version: this.version,
            concept: this.concept && this.concept.map(v => v.toJSON()),
            filter: this.filter && this.filter.map(v => v.toJSON()),
            valueSet: this.valueSet
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
            if (this.concept) { await async.each(this.concept, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.filter) { await async.each(this.filter, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            system: this.system,
            version: this.version,
            concept: this.concept && this.concept.map(v => v.toJSONInternal()),
            filter: this.filter && this.filter.map(v => v.toJSONInternal()),
            valueSet: this.valueSet
        };

        return removeNull(json);
    }
}

module.exports = ValueSetInclude;
