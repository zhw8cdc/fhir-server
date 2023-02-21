/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');
const async = require('async');


/**
SubstanceNucleicAcid.Subunit
    Nucleic acids are defined by three distinct elements: the base, sugar and
    linkage. Individual substance/moiety IDs will be created for each of these
    elements. The nucleotide sequence will be always entered in the 5’-3’
    direction.
*/
class SubstanceNucleicAcidSubunit extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Int|undefined} [subunit],
     * @param {String|undefined} [sequence],
     * @param {Int|undefined} [length],
     * @param {Attachment|undefined} [sequenceAttachment],
     * @param {CodeableConcept|undefined} [fivePrime],
     * @param {CodeableConcept|undefined} [threePrime],
     * @param {SubstanceNucleicAcidLinkage[]|undefined} [linkage],
     * @param {SubstanceNucleicAcidSugar[]|undefined} [sugar],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            subunit,
            sequence,
            length,
            sequenceAttachment,
            fivePrime,
            threePrime,
            linkage,
            sugar,
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
         * @description Index of linear sequences of nucleic acids in order of decreasing length.
    Sequences of the same length will be ordered by molecular weight. Subunits
    that have identical sequences will be repeated and have sequential subscripts.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'subunit', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subunit,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subunit = undefined;
                    return;
                }
                this.__data.subunit = valueProvided;
            }
        });

        /**
         * @description Actual nucleotide sequence notation from 5' to 3' end using standard single
    letter codes. In addition to the base sequence, sugar and type of phosphate or
    non-phosphate linkage should also be captured.
         * @property {String|undefined}
        */
        Object.defineProperty(this, 'sequence', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sequence,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sequence = undefined;
                    return;
                }
                this.__data.sequence = valueProvided;
            }
        });

        /**
         * @description The length of the sequence shall be captured.
         * @property {Int|undefined}
        */
        Object.defineProperty(this, 'length', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.length,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.length = undefined;
                    return;
                }
                this.__data.length = valueProvided;
            }
        });

        /**
         * @description (TBC).
         * @property {Attachment|undefined}
        */
        Object.defineProperty(this, 'sequenceAttachment', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sequenceAttachment,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sequenceAttachment = undefined;
                    return;
                }
                const Attachment = require('../complex_types/attachment.js');
                this.__data.sequenceAttachment = new Attachment(valueProvided);
            }
        });

        /**
         * @description The nucleotide present at the 5’ terminal shall be specified based on a
    controlled vocabulary. Since the sequence is represented from the 5' to the 3'
    end, the 5’ prime nucleotide is the letter at the first position in the
    sequence. A separate representation would be redundant.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'fivePrime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.fivePrime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.fivePrime = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.fivePrime = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The nucleotide present at the 3’ terminal shall be specified based on a
    controlled vocabulary. Since the sequence is represented from the 5' to the 3'
    end, the 5’ prime nucleotide is the letter at the last position in the
    sequence. A separate representation would be redundant.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'threePrime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.threePrime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.threePrime = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.threePrime = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The linkages between sugar residues will also be captured.
         * @property {SubstanceNucleicAcidLinkage[]|undefined}
        */
        Object.defineProperty(this, 'linkage', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.linkage,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.linkage = undefined;
                    return;
                }
                const SubstanceNucleicAcidLinkage = require('../backbone_elements/substanceNucleicAcidLinkage.js');
                this.__data.linkage = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new SubstanceNucleicAcidLinkage(v)) : [new SubstanceNucleicAcidLinkage(valueProvided)];
            }
        });

        /**
         * @description 5.3.6.8.1 Sugar ID (Mandatory).
         * @property {SubstanceNucleicAcidSugar[]|undefined}
        */
        Object.defineProperty(this, 'sugar', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.sugar,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.sugar = undefined;
                    return;
                }
                const SubstanceNucleicAcidSugar = require('../backbone_elements/substanceNucleicAcidSugar.js');
                this.__data.sugar = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new SubstanceNucleicAcidSugar(v)) : [new SubstanceNucleicAcidSugar(valueProvided)];
            }
        });




        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            subunit,
            sequence,
            length,
            sequenceAttachment,
            fivePrime,
            threePrime,
            linkage,
            sugar,
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
            subunit: this.subunit,
            sequence: this.sequence,
            length: this.length,
            sequenceAttachment: this.sequenceAttachment && this.sequenceAttachment.toJSON(),
            fivePrime: this.fivePrime && this.fivePrime.toJSON(),
            threePrime: this.threePrime && this.threePrime.toJSON(),
            linkage: this.linkage && this.linkage.map(v => v.toJSON()),
            sugar: this.sugar && this.sugar.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.extension) { async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) { async.each(this.modifierExtension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.sequenceAttachment) {await this.sequenceAttachment.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.fivePrime) {await this.fivePrime.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.threePrime) {await this.threePrime.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.linkage) { async.each(this.linkage, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.sugar) { async.each(this.sugar, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
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
            subunit: this.subunit,
            sequence: this.sequence,
            length: this.length,
            sequenceAttachment: this.sequenceAttachment && this.sequenceAttachment.toJSONInternal(),
            fivePrime: this.fivePrime && this.fivePrime.toJSONInternal(),
            threePrime: this.threePrime && this.threePrime.toJSONInternal(),
            linkage: this.linkage && this.linkage.map(v => v.toJSONInternal()),
            sugar: this.sugar && this.sugar.map(v => v.toJSONInternal()),
        };



        return removeNull(json);
    }
}

module.exports = SubstanceNucleicAcidSubunit;
