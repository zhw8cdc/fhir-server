

// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');

/**
MolecularSequence.Quality
    Raw data describing a biological sequence.
*/
class MolecularSequenceQuality extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {code} type,
     * @param {CodeableConcept|undefined} [standardSequence],
     * @param {Int|undefined} [start],
     * @param {Int|undefined} [end],
     * @param {Quantity|undefined} [score],
     * @param {CodeableConcept|undefined} [method],
     * @param {decimal|undefined} [truthTP],
     * @param {decimal|undefined} [queryTP],
     * @param {decimal|undefined} [truthFN],
     * @param {decimal|undefined} [queryFP],
     * @param {decimal|undefined} [gtFP],
     * @param {decimal|undefined} [precision],
     * @param {decimal|undefined} [recall],
     * @param {decimal|undefined} [fScore],
     * @param {MolecularSequenceRoc|undefined} [roc],
    */
    constructor (
        {
            id,
            extension,
            modifierExtension,
            type,
            standardSequence,
            start,
            end,
            score,
            method,
            truthTP,
            queryTP,
            truthFN,
            queryFP,
            gtFP,
            precision,
            recall,
            fScore,
            roc
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
         * @description INDEL / SNP / Undefined variant.
         * @property {code}
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
         * @description Gold standard sequence used for comparing against.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'standardSequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.standardSequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.standardSequence = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.standardSequence = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description Start position of the sequence. If the coordinate system is either 0-based or
    1-based, then start position is inclusive.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'start', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.start,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.start = undefined;
                    return;
                }
                this.__data.start = valueProvided;
            }
        });

        /**
         * @description End position of the sequence. If the coordinate system is 0-based then end is
    exclusive and does not include the last position. If the coordinate system is
    1-base, then end is inclusive and includes the last position.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'end', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.end,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.end = undefined;
                    return;
                }
                this.__data.end = valueProvided;
            }
        });

        /**
         * @description The score of an experimentally derived feature such as a p-value ([SO:0001685]
    (http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
         * @property {Quantity|undefined}
        */
        Object.defineProperty(this, 'score', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.score,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.score = undefined;
                    return;
                }
                const Quantity = require('../complex_types/quantity.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.score = FhirResourceCreator.create(valueProvided, Quantity);
            }
        });

        /**
         * @description Which method is used to get sequence quality.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'method', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.method,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.method = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.method = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description True positives, from the perspective of the truth data, i.e. the number of
    sites in the Truth Call Set for which there are paths through the Query Call
    Set that are consistent with all of the alleles at this site, and for which
    there is an accurate genotype call for the event.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'truthTP', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.truthTP,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.truthTP = undefined;
                    return;
                }
                this.__data.truthTP = valueProvided;
            }
        });

        /**
         * @description True positives, from the perspective of the query data, i.e. the number of
    sites in the Query Call Set for which there are paths through the Truth Call
    Set that are consistent with all of the alleles at this site, and for which
    there is an accurate genotype call for the event.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'queryTP', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.queryTP,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.queryTP = undefined;
                    return;
                }
                this.__data.queryTP = valueProvided;
            }
        });

        /**
         * @description False negatives, i.e. the number of sites in the Truth Call Set for which
    there is no path through the Query Call Set that is consistent with all of the
    alleles at this site, or sites for which there is an inaccurate genotype call
    for the event. Sites with correct variant but incorrect genotype are counted
    here.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'truthFN', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.truthFN,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.truthFN = undefined;
                    return;
                }
                this.__data.truthFN = valueProvided;
            }
        });

        /**
         * @description False positives, i.e. the number of sites in the Query Call Set for which
    there is no path through the Truth Call Set that is consistent with this site.
    Sites with correct variant but incorrect genotype are counted here.
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'queryFP', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.queryFP,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.queryFP = undefined;
                    return;
                }
                this.__data.queryFP = valueProvided;
            }
        });

        /**
         * @description The number of false positives where the non-REF alleles in the Truth and Query
    Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or
    similar).
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'gtFP', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.gtFP,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.gtFP = undefined;
                    return;
                }
                this.__data.gtFP = valueProvided;
            }
        });

        /**
         * @description QUERY.TP / (QUERY.TP + QUERY.FP).
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'precision', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.precision,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.precision = undefined;
                    return;
                }
                this.__data.precision = valueProvided;
            }
        });

        /**
         * @description TRUTH.TP / (TRUTH.TP + TRUTH.FN).
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'recall', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.recall,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.recall = undefined;
                    return;
                }
                this.__data.recall = valueProvided;
            }
        });

        /**
         * @description Harmonic mean of Recall and Precision, computed as: 2 * precision * recall /
    (precision + recall).
         * @property {decimal|undefined}
        */
        Object.defineProperty(this, 'fScore', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.fScore,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.fScore = undefined;
                    return;
                }
                this.__data.fScore = valueProvided;
            }
        });

        /**
         * @description Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity
    tradeoff.
         * @property {MolecularSequenceRoc|undefined}
        */
        Object.defineProperty(this, 'roc', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.roc,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.roc = undefined;
                    return;
                }
                const MolecularSequenceRoc = require('../backbone_elements/molecularSequenceRoc.js');
                const { FhirResourceCreator } = require('../../../fhirResourceCreator');
                this.__data.roc = FhirResourceCreator.create(valueProvided, MolecularSequenceRoc);
            }
        });


        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            type,
            standardSequence,
            start,
            end,
            score,
            method,
            truthTP,
            queryTP,
            truthFN,
            queryFP,
            gtFP,
            precision,
            recall,
            fScore,
            roc
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
            type: this.type,
            standardSequence: this.standardSequence && this.standardSequence.toJSON(),
            start: this.start,
            end: this.end,
            score: this.score && this.score.toJSON(),
            method: this.method && this.method.toJSON(),
            truthTP: this.truthTP,
            queryTP: this.queryTP,
            truthFN: this.truthFN,
            queryFP: this.queryFP,
            gtFP: this.gtFP,
            precision: this.precision,
            recall: this.recall,
            fScore: this.fScore,
            roc: this.roc && this.roc.toJSON()
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
            if (this.standardSequence) { await this.standardSequence.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.score) { await this.score.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.method) { await this.method.updateReferencesAsync({ fnUpdateReferenceAsync }); }
            if (this.roc) { await this.roc.updateReferencesAsync({ fnUpdateReferenceAsync }); }
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
            type: this.type,
            standardSequence: this.standardSequence && this.standardSequence.toJSONInternal(),
            start: this.start,
            end: this.end,
            score: this.score && this.score.toJSONInternal(),
            method: this.method && this.method.toJSONInternal(),
            truthTP: this.truthTP,
            queryTP: this.queryTP,
            truthFN: this.truthFN,
            queryFP: this.queryFP,
            gtFP: this.gtFP,
            precision: this.precision,
            recall: this.recall,
            fScore: this.fScore,
            roc: this.roc && this.roc.toJSONInternal()
        };

        return removeNull(json);
    }
}

module.exports = MolecularSequenceQuality;
