/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
AdverseEvent
    Actual or  potential/avoided event causing unintended physical injury
    resulting from or contributed to by medical care, a research study or other
    healthcare setting factors that requires additional monitoring, treatment, or
    hospitalization, or that results in death.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class AdverseEvent extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier|undefined} [identifier],
     * @param {code} actuality,
     * @param {CodeableConcept[]|undefined} [category],
     * @param {CodeableConcept|undefined} [event],
     * @param {Reference} subject,
     * @param {Reference|undefined} [encounter],
     * @param {dateTime|undefined} [date],
     * @param {dateTime|undefined} [detected],
     * @param {dateTime|undefined} [recordedDate],
     * @param {Reference[]|undefined} [resultingCondition],
     * @param {Reference|undefined} [location],
     * @param {CodeableConcept|undefined} [seriousness],
     * @param {CodeableConcept|undefined} [severity],
     * @param {CodeableConcept|undefined} [outcome],
     * @param {Reference|undefined} [recorder],
     * @param {Reference[]|undefined} [contributor],
     * @param {AdverseEventSuspectEntity[]|undefined} [suspectEntity],
     * @param {Reference[]|undefined} [subjectMedicalHistory],
     * @param {Reference[]|undefined} [referenceDocument],
     * @param {Reference[]|undefined} [study],
     * @param {Object|undefined} [_access]
     * @param {Object|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
    */
    constructor(
        {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            actuality,
            category,
            event,
            subject,
            encounter,
            date,
            detected,
            recordedDate,
            resultingCondition,
            location,
            seriousness,
            severity,
            outcome,
            recorder,
            contributor,
            suspectEntity,
            subjectMedicalHistory,
            referenceDocument,
            study,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        super({});

        // ---- Define getters and setters as enumerable ---

        /**
         * @description The logical id of the resource, as used in the URL for the resource. Once
    assigned, this value never changes.
         * @property {id|undefined}
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
         * @description The metadata about the resource. This is content that is maintained by the
    infrastructure. Changes to the content might not always be associated with
    version changes to the resource.
         * @property {Meta|undefined}
        */
        Object.defineProperty(this, 'meta', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.meta,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.meta = undefined;
                    return;
                }
                let Meta = require('../complex_types/meta.js');
                this.__data.meta = new Meta(valueProvided);
            }
        });

        /**
         * @description A reference to a set of rules that were followed when the resource was
    constructed, and which must be understood when processing the content. Often,
    this is a reference to an implementation guide that defines the special rules
    along with other profiles etc.
         * @property {uri|undefined}
        */
        Object.defineProperty(this, 'implicitRules', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.implicitRules,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.implicitRules = undefined;
                    return;
                }
                this.__data.implicitRules = valueProvided;
            }
        });

        /**
         * @description The base language in which the resource is written.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'language', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.language,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.language = undefined;
                    return;
                }
                this.__data.language = valueProvided;
            }
        });

        /**
         * @description A human-readable narrative that contains a summary of the resource and can be
    used to represent the content of the resource to a human. The narrative need
    not encode all the structured data, but is required to contain sufficient
    detail to make it "clinically safe" for a human to just read the narrative.
    Resource definitions may define what content should be represented in the
    narrative to ensure clinical safety.
         * @property {Narrative|undefined}
        */
        Object.defineProperty(this, 'text', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.text,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.text = undefined;
                    return;
                }
                let Narrative = require('../complex_types/narrative.js');
                this.__data.text = new Narrative(valueProvided);
            }
        });

        /**
         * @description These resources do not have an independent existence apart from the resource
    that contains them - they cannot be identified independently, and nor can they
    have their own independent transaction scope.
         * @property {ResourceContainer[]|undefined}
        */
        Object.defineProperty(this, 'contained', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contained,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contained = undefined;
                    return;
                }
                let ResourceContainer = require('../simple_types/resourceContainer.js');
                const {getResource} = require('../../../../operations/common/getResource');
                if (Array.isArray(valueProvided)) {
                    this.__data.contained = valueProvided.filter(v => v).map(v => {
                        const ResourceCreator = getResource('4_0_0', v.resourceType);
                        return new ResourceCreator(v);
                    });
                } else {
                const ResourceCreator = getResource('4_0_0', valueProvided.resourceType);
                this.__data.contained = [new ResourceCreator(valueProvided)];
                }
            }
        });

        /**
         * @description May be used to represent additional information that is not part of the basic
    definition of the resource. To make the use of extensions safe and manageable,
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
    definition of the resource and that modifies the understanding of the element
    that contains it and/or the understanding of the containing element's
    descendants. Usually modifier elements provide negation or qualification. To
    make the use of extensions safe and manageable, there is a strict set of
    governance applied to the definition and use of extensions. Though any
    implementer is allowed to define an extension, there is a set of requirements
    that SHALL be met as part of the definition of the extension. Applications
    processing a resource are required to check for modifier extensions.

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
         * @description Business identifiers assigned to this adverse event by the performer or other
    systems which remain constant as the resource is updated and propagates from
    server to server.
         * @property {Identifier|undefined}
        */
        Object.defineProperty(this, 'identifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.identifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.identifier = undefined;
                    return;
                }
                let Identifier = require('../complex_types/identifier.js');
                this.__data.identifier = new Identifier(valueProvided);
            }
        });

        /**
         * @description Whether the event actually happened, or just had the potential to. Note that
    this is independent of whether anyone was affected or harmed or how severely.
         * @property {code}
        */
        Object.defineProperty(this, 'actuality', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.actuality,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.actuality = undefined;
                    return;
                }
                this.__data.actuality = valueProvided;
            }
        });

        /**
         * @description The overall type of event, intended for search and filtering purposes.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'category', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.category,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.category = undefined;
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.category = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description This element defines the specific type of event that occurred or that was
    prevented from occurring.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'event', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.event,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.event = undefined;
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.event = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description This subject or group impacted by the event.
         * @property {Reference}
        */
        Object.defineProperty(this, 'subject', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subject,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subject = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.subject = new Reference(valueProvided);
            }
        });

        /**
         * @description The Encounter during which AdverseEvent was created or to which the creation
    of this record is tightly associated.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'encounter', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.encounter,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.encounter = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.encounter = new Reference(valueProvided);
            }
        });

        /**
         * @description The date (and perhaps time) when the adverse event occurred.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'date', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.date,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.date = undefined;
                    return;
                }
                this.__data.date = valueProvided;
            }
        });

        /**
         * @description Estimated or actual date the AdverseEvent began, in the opinion of the
    reporter.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'detected', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.detected,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.detected = undefined;
                    return;
                }
                this.__data.detected = valueProvided;
            }
        });

        /**
         * @description The date on which the existence of the AdverseEvent was first recorded.
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'recordedDate', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.recordedDate,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.recordedDate = undefined;
                    return;
                }
                this.__data.recordedDate = valueProvided;
            }
        });

        /**
         * @description Includes information about the reaction that occurred as a result of exposure
    to a substance (for example, a drug or a chemical).
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'resultingCondition', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.resultingCondition,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.resultingCondition = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.resultingCondition = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description The information about where the adverse event occurred.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'location', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.location,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.location = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.location = new Reference(valueProvided);
            }
        });

        /**
         * @description Assessment whether this event was of real importance.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'seriousness', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.seriousness,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.seriousness = undefined;
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.seriousness = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Describes the severity of the adverse event, in relation to the subject.
    Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but
    a mild heart problem is.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'severity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.severity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.severity = undefined;
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.severity = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Describes the type of outcome from the adverse event.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'outcome', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.outcome,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.outcome = undefined;
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.outcome = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Information on who recorded the adverse event.  May be the patient or a
    practitioner.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'recorder', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.recorder,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.recorder = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.recorder = new Reference(valueProvided);
            }
        });

        /**
         * @description Parties that may or should contribute or have contributed information to the
    adverse event, which can consist of one or more activities.  Such information
    includes information leading to the decision to perform the activity and how
    to perform the activity (e.g. consultant), information that the activity
    itself seeks to reveal (e.g. informant of clinical history), or information
    about what activity was performed (e.g. informant witness).
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'contributor', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contributor,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.contributor = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.contributor = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Describes the entity that is suspected to have caused the adverse event.
         * @property {AdverseEventSuspectEntity[]|undefined}
        */
        Object.defineProperty(this, 'suspectEntity', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.suspectEntity,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.suspectEntity = undefined;
                    return;
                }
                let AdverseEventSuspectEntity = require('../backbone_elements/adverseEventSuspectEntity.js');
                this.__data.suspectEntity = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new AdverseEventSuspectEntity(v)) : [new AdverseEventSuspectEntity(valueProvided)];
            }
        });

        /**
         * @description AdverseEvent.subjectMedicalHistory.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'subjectMedicalHistory', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.subjectMedicalHistory,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.subjectMedicalHistory = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.subjectMedicalHistory = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description AdverseEvent.referenceDocument.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'referenceDocument', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.referenceDocument,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.referenceDocument = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.referenceDocument = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description AdverseEvent.study.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'study', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.study,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.study = undefined;
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.study = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });


        /**
         * @description _access
         * @property {Object|undefined}
         */
        Object.defineProperty(this, '_access', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._access,
            set: valueProvided => {
                this.__data._access = valueProvided;
            }
        });
        /**
         * @description _sourceAssigningAuthority
         * @property {Object|undefined}
         */
        Object.defineProperty(this, '_sourceAssigningAuthority', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceAssigningAuthority,
            set: valueProvided => {
                this.__data._sourceAssigningAuthority = valueProvided;
            }
        });
        /**
         * @description _uuid
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_uuid', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._uuid,
            set: valueProvided => {
                this.__data._uuid = valueProvided;
            }
        });
        /**
         * @description _sourceId
         * @property {string|undefined}
         */
        Object.defineProperty(this, '_sourceId', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data._sourceId,
            set: valueProvided => {
                this.__data._sourceId = valueProvided;
            }
        });

        // --- Now copy properties from passed in object ----
        Object.assign(this, {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            actuality,
            category,
            event,
            subject,
            encounter,
            date,
            detected,
            recordedDate,
            resultingCondition,
            location,
            seriousness,
            severity,
            outcome,
            recorder,
            contributor,
            suspectEntity,
            subjectMedicalHistory,
            referenceDocument,
            study,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });

        /**
         * @description Define a default non-writable resourceType property
         * @property {string|undefined}
         */
        Object.defineProperty(this, 'resourceType', {
            value: 'AdverseEvent',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    /**
     * @description Define a default non-writable resourceType property
     * @property {string|undefined}
     */
    static get resourceType() {
        return 'AdverseEvent';
    }

    /**
     * @description Creates a blank new resource
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier|undefined} [identifier],
     * @param {code} actuality,
     * @param {CodeableConcept[]|undefined} [category],
     * @param {CodeableConcept|undefined} [event],
     * @param {Reference} subject,
     * @param {Reference|undefined} [encounter],
     * @param {dateTime|undefined} [date],
     * @param {dateTime|undefined} [detected],
     * @param {dateTime|undefined} [recordedDate],
     * @param {Reference[]|undefined} [resultingCondition],
     * @param {Reference|undefined} [location],
     * @param {CodeableConcept|undefined} [seriousness],
     * @param {CodeableConcept|undefined} [severity],
     * @param {CodeableConcept|undefined} [outcome],
     * @param {Reference|undefined} [recorder],
     * @param {Reference[]|undefined} [contributor],
     * @param {AdverseEventSuspectEntity[]|undefined} [suspectEntity],
     * @param {Reference[]|undefined} [subjectMedicalHistory],
     * @param {Reference[]|undefined} [referenceDocument],
     * @param {Reference[]|undefined} [study],
     * @param {Object|undefined} [_access]
     * @param {Object|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {AdverseEvent}
    */
    create(
            {
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            actuality,
            category,
            event,
            subject,
            encounter,
            date,
            detected,
            recordedDate,
            resultingCondition,
            location,
            seriousness,
            severity,
            outcome,
            recorder,
            contributor,
            suspectEntity,
            subjectMedicalHistory,
            referenceDocument,
            study,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        return new AdverseEvent({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            actuality,
            category,
            event,
            subject,
            encounter,
            date,
            detected,
            recordedDate,
            resultingCondition,
            location,
            seriousness,
            severity,
            outcome,
            recorder,
            contributor,
            suspectEntity,
            subjectMedicalHistory,
            referenceDocument,
            study,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {AdverseEvent}
    */
    clone() {
        return new AdverseEvent(this.toJSONInternal());
    }


    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSON() {
        const {removeNull} = require('../../../../utils/nullRemover');

        return removeNull({
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSON(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSON(),
            contained: this.contained && this.contained.map(v => v.toJSON()),
            extension: this.extension && this.extension.map(v => v.toJSON()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
            identifier: this.identifier && this.identifier.toJSON(),
            actuality: this.actuality,
            category: this.category && this.category.map(v => v.toJSON()),
            event: this.event && this.event.toJSON(),
            subject: this.subject && this.subject.toJSON(),
            encounter: this.encounter && this.encounter.toJSON(),
            date: this.date,
            detected: this.detected,
            recordedDate: this.recordedDate,
            resultingCondition: this.resultingCondition && this.resultingCondition.map(v => v.toJSON()),
            location: this.location && this.location.toJSON(),
            seriousness: this.seriousness && this.seriousness.toJSON(),
            severity: this.severity && this.severity.toJSON(),
            outcome: this.outcome && this.outcome.toJSON(),
            recorder: this.recorder && this.recorder.toJSON(),
            contributor: this.contributor && this.contributor.map(v => v.toJSON()),
            suspectEntity: this.suspectEntity && this.suspectEntity.map(v => v.toJSON()),
            subjectMedicalHistory: this.subjectMedicalHistory && this.subjectMedicalHistory.map(v => v.toJSON()),
            referenceDocument: this.referenceDocument && this.referenceDocument.map(v => v.toJSON()),
            study: this.study && this.study.map(v => v.toJSON()),
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
        if (this._sourceAssigningAuthority) {
            json._sourceAssigningAuthority = this._sourceAssigningAuthority;
        }
        if (this._uuid) {
            json._uuid = this._uuid;
        }
        if (this._sourceId) {
            json._sourceId = this._sourceId;
        }

        return removeNull(json);
    }
}

module.exports = AdverseEvent;
