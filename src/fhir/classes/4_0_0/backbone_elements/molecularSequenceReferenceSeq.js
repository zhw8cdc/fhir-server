/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const Resource = require('../resources/resource');
const async = require('async');


/**
MolecularSequence.ReferenceSeq
    Raw data describing a biological sequence.
*/
class MolecularSequenceReferenceSeq extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {CodeableConcept|undefined} [chromosome],
     * @param {String|undefined} [genomeBuild],
     * @param {code|undefined} [orientation],
     * @param {CodeableConcept|undefined} [referenceSeqId],
     * @param {Reference|undefined} [referenceSeqPointer],
     * @param {String|undefined} [referenceSeqString],
     * @param {code|undefined} [strand],
     * @param {Int|undefined} [windowStart],
     * @param {Int|undefined} [windowEnd],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            chromosome,
            genomeBuild,
            orientation,
            referenceSeqId,
            referenceSeqPointer,
            referenceSeqString,
            strand,
            windowStart,
            windowEnd,
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
         * @description Structural unit composed of a nucleic acid molecule which controls its own
    replication through the interaction of specific proteins at one or more
    origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/c
    urrent_svn/term/SO:0000340)).
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'chromosome', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.chromosome,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.chromosome = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.chromosome = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The Genome Build used for reference, following GRCh build versions e.g. 'GRCh
    37'.  Version number must be included if a versioned release of a primary
    build was used.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'genomeBuild', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.genomeBuild,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.genomeBuild = undefined;
                    return;
                }
                this.__data.genomeBuild = valueProvided;
            }
        });

        /**
         * @description A relative reference to a DNA strand based on gene orientation. The strand
    that contains the open reading frame of the gene is the "sense" strand, and
    the opposite complementary strand is the "antisense" strand.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'orientation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.orientation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.orientation = undefined;
                    return;
                }
                this.__data.orientation = valueProvided;
            }
        });

        /**
         * @description Reference identifier of reference sequence submitted to NCBI. It must match
    the type in the MolecularSequence.type field. For example, the prefix, “NG_”
    identifies reference sequence for genes, “NM_” for messenger RNA transcripts,
    and “NP_” for amino acid sequences.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'referenceSeqId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.referenceSeqId,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.referenceSeqId = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.referenceSeqId = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description A pointer to another MolecularSequence entity as reference sequence.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'referenceSeqPointer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.referenceSeqPointer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.referenceSeqPointer = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.referenceSeqPointer = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description A string like "ACGT".
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'referenceSeqString', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.referenceSeqString,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.referenceSeqString = undefined;
                    return;
                }
                this.__data.referenceSeqString = valueProvided;
            }
        });

        /**
         * @description An absolute reference to a strand. The Watson strand is the strand whose
    5'-end is on the short arm of the chromosome, and the Crick strand as the one
    whose 5'-end is on the long arm.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'strand', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.strand,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.strand = undefined;
                    return;
                }
                this.__data.strand = valueProvided;
            }
        });

        /**
         * @description Start position of the window on the reference sequence. If the coordinate
    system is either 0-based or 1-based, then start position is inclusive.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'windowStart', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.windowStart,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.windowStart = undefined;
                    return;
                }
                this.__data.windowStart = valueProvided;
            }
        });

        /**
         * @description End position of the window on the reference sequence. If the coordinate system
    is 0-based then end is exclusive and does not include the last position. If
    the coordinate system is 1-base, then end is inclusive and includes the last
    position.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'windowEnd', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.windowEnd,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.windowEnd = undefined;
                    return;
                }
                this.__data.windowEnd = valueProvided;
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            chromosome,
            genomeBuild,
            orientation,
            referenceSeqId,
            referenceSeqPointer,
            referenceSeqString,
            strand,
            windowStart,
            windowEnd,
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
            chromosome: this.chromosome && this.chromosome.toJSON(),
            genomeBuild: this.genomeBuild,
            orientation: this.orientation,
            referenceSeqId: this.referenceSeqId && this.referenceSeqId.toJSON(),
            referenceSeqPointer: this.referenceSeqPointer && this.referenceSeqPointer.toJSON(),
            referenceSeqString: this.referenceSeqString,
            strand: this.strand,
            windowStart: this.windowStart,
            windowEnd: this.windowEnd,
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
            if (this.chromosome) {await this.chromosome.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.referenceSeqId) {await this.referenceSeqId.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.referenceSeqPointer) {await this.referenceSeqPointer.updateReferencesAsync({fnUpdateReferenceAsync});}
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
            chromosome: this.chromosome && this.chromosome.toJSONInternal(),
            genomeBuild: this.genomeBuild,
            orientation: this.orientation,
            referenceSeqId: this.referenceSeqId && this.referenceSeqId.toJSONInternal(),
            referenceSeqPointer: this.referenceSeqPointer && this.referenceSeqPointer.toJSONInternal(),
            referenceSeqString: this.referenceSeqString,
            strand: this.strand,
            windowStart: this.windowStart,
            windowEnd: this.windowEnd,
        };



        return removeNull(json);
    }
}

module.exports = MolecularSequenceReferenceSeq;
