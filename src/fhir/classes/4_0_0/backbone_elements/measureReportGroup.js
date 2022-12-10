/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
MeasureReport.Group
    The MeasureReport resource contains the results of the calculation of a
    measure; and optionally a reference to the resources involved in that
    calculation.
*/
class MeasureReportGroup extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [code],
     * @param {MeasureReportPopulation[]|undefined} [population],
     * @param {Quantity|undefined} [measureScore],
     * @param {MeasureReportStratifier[]|undefined} [stratifier],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            code,
            population,
            measureScore,
            stratifier,
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
         * @description The meaning of the population group as defined in the measure definition.
         * @property {CodeableConcept|undefined}
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
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.code = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The populations that make up the population group, one for each type of
    population appropriate for the measure.
         * @property {MeasureReportPopulation[]|undefined}
        */
        Object.defineProperty(this, 'population', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.population,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.population = undefined;
                    return;
                }
                const MeasureReportPopulation = require('../backbone_elements/measureReportPopulation.js');
                this.__data.population = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new MeasureReportPopulation(v)) : [new MeasureReportPopulation(valueProvided)];
            }
        });

        /**
         * @description The measure score for this population group, calculated as appropriate for the
    measure type and scoring method, and based on the contents of the populations
    defined in the group.
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'measureScore', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.measureScore,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.measureScore = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                this.__data.measureScore = new Quantity(valueProvided);
            }
        });

        /**
         * @description When a measure includes multiple stratifiers, there will be a stratifier group
    for each stratifier defined by the measure.
         * @property {MeasureReportStratifier[]|undefined}
        */
        Object.defineProperty(this, 'stratifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.stratifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.stratifier = undefined;
                    return;
                }
                const MeasureReportStratifier = require('../backbone_elements/measureReportStratifier.js');
                this.__data.stratifier = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new MeasureReportStratifier(v)) : [new MeasureReportStratifier(valueProvided)];
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            code,
            population,
            measureScore,
            stratifier,
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
            code: this.code && this.code.toJSON(),
            population: this.population && this.population.map(v => v.toJSON()),
            measureScore: this.measureScore && this.measureScore.toJSON(),
            stratifier: this.stratifier && this.stratifier.map(v => v.toJSON()),
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
            if (this.code) {this.code.updateReferences({fnUpdateReference});}
            if (this.population) {this.population.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.measureScore) {this.measureScore.updateReferences({fnUpdateReference});}
            if (this.stratifier) {this.stratifier.forEach(v => v.updateReferences({fnUpdateReference}));}
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

module.exports = MeasureReportGroup;
