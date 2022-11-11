/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Element = require('../complex_types/element');


/**
ImagingStudy.Series
    Representation of the content produced in a DICOM imaging study. A study
    comprises a set of series, each of which includes a set of Service-Object Pair
    Instances (SOP Instances - images or other data) acquired or produced in a
    common context.  A series is of only one modality (e.g. X-ray, CT, MR,
    ultrasound), but a study may have multiple series of different modalities.
*/
class ImagingStudySeries extends Element {
    /**
     * @param {String|undefined} [id],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {id} uid,
     * @param {unsignedInt|undefined} [number],
     * @param {Coding} modality,
     * @param {String|undefined} [description],
     * @param {unsignedInt|undefined} [numberOfInstances],
     * @param {Reference[]|undefined} [endpoint],
     * @param {Coding|undefined} [bodySite],
     * @param {Coding|undefined} [laterality],
     * @param {Reference[]|undefined} [specimen],
     * @param {dateTime|undefined} [started],
     * @param {ImagingStudyPerformer[]|undefined} [performer],
     * @param {ImagingStudyInstance[]|undefined} [instance],
    */
    constructor(
        {
            id,
            extension,
            modifierExtension,
            uid,
            number,
            modality,
            description,
            numberOfInstances,
            endpoint,
            bodySite,
            laterality,
            specimen,
            started,
            performer,
            instance,
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
                let Extension = require('../extensions/extension.js');
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
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description The DICOM Series Instance UID for the series.
         * @property {id}
        */
        Object.defineProperty(this, 'uid', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.uid,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.uid = undefined;
                    return;
                }
                this.__data.uid = valueProvided;
            }
        });

        /**
         * @description The numeric identifier of this series in the study.
         * @property {unsignedInt|undefined}
        */
        Object.defineProperty(this, 'number', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.number,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.number = undefined;
                    return;
                }
                this.__data.number = valueProvided;
            }
        });

        /**
         * @description The modality of this series sequence.
         * @property {Coding}
        */
        Object.defineProperty(this, 'modality', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.modality,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.modality = undefined;
                    return;
                }
                let Coding = require('../complex_types/coding.js');
                this.__data.modality = new Coding(valueProvided);
            }
        });

        /**
         * @description A description of the series.
         * @property {String|undefined}
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
         * @description Number of SOP Instances in the Study. The value given may be larger than the
    number of instance elements this resource contains due to resource
    availability, security, or other factors. This element should be present if
    any instance elements are present.
         * @property {unsignedInt|undefined}
        */
        Object.defineProperty(this, 'numberOfInstances', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.numberOfInstances,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.numberOfInstances = undefined;
                    return;
                }
                this.__data.numberOfInstances = valueProvided;
            }
        });

        /**
         * @description The network service providing access (e.g., query, view, or retrieval) for
    this series. See implementation notes for information about using DICOM
    endpoints. A series-level endpoint, if present, has precedence over a study-
    level endpoint with the same Endpoint.connectionType.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'endpoint', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.endpoint,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.endpoint = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.endpoint = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema
    .org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to
    SNOMED-CT mappings. The bodySite may indicate the laterality of body part
    imaged; if so, it shall be consistent with any content of
    ImagingStudy.series.laterality.
         * @property {Coding|undefined}
        */
        Object.defineProperty(this, 'bodySite', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.bodySite,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.bodySite = undefined;
                    return;
                }
                let Coding = require('../complex_types/coding.js');
                this.__data.bodySite = new Coding(valueProvided);
            }
        });

        /**
         * @description The laterality of the (possibly paired) anatomic structures examined. E.g.,
    the left knee, both lungs, or unpaired abdomen. If present, shall be
    consistent with any laterality information indicated in
    ImagingStudy.series.bodySite.
         * @property {Coding|undefined}
        */
        Object.defineProperty(this, 'laterality', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.laterality,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.laterality = undefined;
                    return;
                }
                let Coding = require('../complex_types/coding.js');
                this.__data.laterality = new Coding(valueProvided);
            }
        });

        /**
         * @description The specimen imaged, e.g., for whole slide imaging of a biopsy.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'specimen', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.specimen,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.specimen = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.specimen = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description The date and time the series was started.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'started', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.started,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.started = undefined;
                    return;
                }
                this.__data.started = valueProvided;
            }
        });

        /**
         * @description Indicates who or what performed the series and how they were involved.
         * @property {ImagingStudyPerformer[]|undefined}
        */
        Object.defineProperty(this, 'performer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.performer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.performer = undefined;
                    return;
                }
                let ImagingStudyPerformer = require('../backbone_elements/imagingStudyPerformer.js');
                this.__data.performer = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ImagingStudyPerformer(v)) : [new ImagingStudyPerformer(valueProvided)];
            }
        });

        /**
         * @description A single SOP instance within the series, e.g. an image, or presentation state.
         * @property {ImagingStudyInstance[]|undefined}
        */
        Object.defineProperty(this, 'instance', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.instance,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.instance = undefined;
                    return;
                }
                let ImagingStudyInstance = require('../backbone_elements/imagingStudyInstance.js');
                this.__data.instance = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new ImagingStudyInstance(v)) : [new ImagingStudyInstance(valueProvided)];
            }
        });



        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            extension,
            modifierExtension,
            uid,
            number,
            modality,
            description,
            numberOfInstances,
            endpoint,
            bodySite,
            laterality,
            specimen,
            started,
            performer,
            instance,
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
            uid: this.uid,
            number: this.number,
            modality: this.modality && this.modality.toJSON(),
            description: this.description,
            numberOfInstances: this.numberOfInstances,
            endpoint: this.endpoint && this.endpoint.map(v => v.toJSON()),
            bodySite: this.bodySite && this.bodySite.toJSON(),
            laterality: this.laterality && this.laterality.toJSON(),
            specimen: this.specimen && this.specimen.map(v => v.toJSON()),
            started: this.started,
            performer: this.performer && this.performer.map(v => v.toJSON()),
            instance: this.instance && this.instance.map(v => v.toJSON()),
        });
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

module.exports = ImagingStudySeries;
