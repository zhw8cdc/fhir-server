/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
StructureMap.Rule
    A Map of relationships between 2 structures that can be used to transform
    data.
*/
class StructureMapRule extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {id} name,
     * @param {StructureMapSource[]} source,
     * @param {StructureMapTarget[]|undefined} [target],
     * @param {StructureMapRule[]|undefined} [rule],
     * @param {StructureMapDependent[]|undefined} [dependent],
     * @param {String|undefined} [documentation],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            name,
            source,
            target,
            rule,
            dependent,
            documentation
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
         * @description Name of the rule for internal references.
         * @property {id}
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
                this.__data.name = valueProvided;
            }
        });

        /**
         * @description Source inputs to the mapping.
         * @property {StructureMapSource[]}
        */
        Object.defineProperty(this, 'source', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.source,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.source = undefined;
                    return;
                }
                const StructureMapSource = require('../backbone_elements/structureMapSource.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.source = FhirResourceCreator.createArray(valueProvided, StructureMapSource);
            }
        });

        /**
         * @description Content to create because of this mapping rule.
         * @property {StructureMapTarget[]|undefined}
        */
        Object.defineProperty(this, 'target', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.target,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.target = undefined;
                    return;
                }
                const StructureMapTarget = require('../backbone_elements/structureMapTarget.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.target = FhirResourceCreator.createArray(valueProvided, StructureMapTarget);
            }
        });

        /**
         * @description Rules contained in this rule.
         * @property {StructureMapRule[]|undefined}
        */
        Object.defineProperty(this, 'rule', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.rule,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.rule = undefined;
                    return;
                }
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.rule = FhirResourceCreator.createArray(valueProvided, StructureMapRule);
            }
        });

        /**
         * @description Which other rules to apply in the context of this rule.
         * @property {StructureMapDependent[]|undefined}
        */
        Object.defineProperty(this, 'dependent', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dependent,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.dependent = undefined;
                    return;
                }
                const StructureMapDependent = require('../backbone_elements/structureMapDependent.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.dependent = FhirResourceCreator.createArray(valueProvided, StructureMapDependent);
            }
        });

        /**
         * @description Documentation for this instance of data.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'documentation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.documentation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.documentation = undefined;
                    return;
                }
                this.__data.documentation = valueProvided;
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            name,
            source,
            target,
            rule,
            dependent,
            documentation
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
            name: this.name,
            source: this.source && this.source.map(v => v.toJSON()),
            target: this.target && this.target.map(v => v.toJSON()),
            rule: this.rule && this.rule.map(v => v.toJSON()),
            dependent: this.dependent && this.dependent.map(v => v.toJSON()),
            documentation: this.documentation
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
            if (this.source) { await async.each(this.source, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.target) { await async.each(this.target, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.rule) { await async.each(this.rule, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
            if (this.dependent) { await async.each(this.dependent, async v => await v.updateReferencesAsync({ fnUpdateReferenceAsync })); }
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
            name: this.name,
            source: this.source && this.source.map(v => v.toJSONInternal()),
            target: this.target && this.target.map(v => v.toJSONInternal()),
            rule: this.rule && this.rule.map(v => v.toJSONInternal()),
            dependent: this.dependent && this.dependent.map(v => v.toJSONInternal()),
            documentation: this.documentation
        };

        return removeNull(json);
    }
}

module.exports = StructureMapRule;
