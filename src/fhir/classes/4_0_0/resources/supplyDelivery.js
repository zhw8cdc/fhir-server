/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');
const async = require('async');


/**
SupplyDelivery
    Record of delivery of what is supplied.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class SupplyDelivery extends Resource {
    /**
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {Reference[]|undefined} [basedOn],
     * @param {Reference[]|undefined} [partOf],
     * @param {code|undefined} [status],
     * @param {Reference|undefined} [patient],
     * @param {CodeableConcept|undefined} [type],
     * @param {SupplyDeliverySuppliedItem|undefined} [suppliedItem],
     * @param {dateTime|undefined} [occurrenceDateTime],
     * @param {Period|undefined} [occurrencePeriod],
     * @param {Timing|undefined} [occurrenceTiming],
     * @param {Reference|undefined} [supplier],
     * @param {Reference|undefined} [destination],
     * @param {Reference[]|undefined} [receiver],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
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
            basedOn,
            partOf,
            status,
            patient,
            type,
            suppliedItem,
            occurrenceDateTime,
            occurrencePeriod,
            occurrenceTiming,
            supplier,
            destination,
            receiver,
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
                const Meta = require('../complex_types/meta.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.meta = FhirResourceCreator.create(valueProvided, Meta);
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
                const Narrative = require('../complex_types/narrative.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.text = FhirResourceCreator.create(valueProvided, Narrative);
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
                const ResourceContainer = require('../simple_types/resourceContainer.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.contained = FhirResourceCreator.createArray(valueProvided);
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
                const Extension = require('../complex_types/extension.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.extension = FhirResourceCreator.createArray(valueProvided, Extension);
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
                const Extension = require('../complex_types/extension.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.modifierExtension = FhirResourceCreator.createArray(valueProvided, Extension);
            }
        });

        /**
         * @description Identifier for the supply delivery event that is used to identify it across
    multiple disparate systems.
         * @property {Identifier[]|undefined}
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
                const Identifier = require('../complex_types/identifier.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.identifier = FhirResourceCreator.createArray(valueProvided, Identifier);
            }
        });

        /**
         * @description A plan, proposal or order that is fulfilled in whole or in part by this event.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'basedOn', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.basedOn,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.basedOn = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.basedOn = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description A larger event of which this particular event is a component or step.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'partOf', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.partOf,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.partOf = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.partOf = FhirResourceCreator.createArray(valueProvided, Reference);
            }
        });

        /**
         * @description A code specifying the state of the dispense event.
         * @property {code|undefined}
        */
        Object.defineProperty(this, 'status', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.status,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.status = undefined;
                    return;
                }
                this.__data.status = valueProvided;
            }
        });

        /**
         * @description A link to a resource representing the person whom the delivered item is for.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'patient', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.patient,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.patient = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.patient = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description Indicates the type of dispensing event that is performed. Examples include:
    Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
         * @property {CodeableConcept|undefined}
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
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.type = FhirResourceCreator.create(valueProvided, CodeableConcept);
            }
        });

        /**
         * @description The item that is being delivered or has been supplied.
         * @property {SupplyDeliverySuppliedItem|undefined}
        */
        Object.defineProperty(this, 'suppliedItem', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.suppliedItem,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.suppliedItem = undefined;
                    return;
                }
                const SupplyDeliverySuppliedItem = require('../backbone_elements/supplyDeliverySuppliedItem.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.suppliedItem = FhirResourceCreator.create(valueProvided, SupplyDeliverySuppliedItem);
            }
        });

        /**
         * @description None
         * @property {dateTime|undefined}
        */
        Object.defineProperty(this, 'occurrenceDateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.occurrenceDateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.occurrenceDateTime = undefined;
                    return;
                }
                this.__data.occurrenceDateTime = valueProvided;
            }
        });

        /**
         * @description None
         * @property {Period|undefined}
        */
        Object.defineProperty(this, 'occurrencePeriod', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.occurrencePeriod,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.occurrencePeriod = undefined;
                    return;
                }
                const Period = require('../complex_types/period.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.occurrencePeriod = FhirResourceCreator.create(valueProvided, Period);
            }
        });

        /**
         * @description None
         * @property {Timing|undefined}
        */
        Object.defineProperty(this, 'occurrenceTiming', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.occurrenceTiming,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.occurrenceTiming = undefined;
                    return;
                }
                const Timing = require('../backbone_elements/timing.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.occurrenceTiming = FhirResourceCreator.create(valueProvided, Timing);
            }
        });

        /**
         * @description The individual responsible for dispensing the medication, supplier or device.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'supplier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.supplier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.supplier = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.supplier = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description Identification of the facility/location where the Supply was shipped to, as
    part of the dispense event.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'destination', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.destination,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.destination = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.destination = FhirResourceCreator.create(valueProvided, Reference);
            }
        });

        /**
         * @description Identifies the person who picked up the Supply.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'receiver', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.receiver,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.receiver = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                const {FhirResourceCreator} = require('../../../fhirResourceCreator');
                this.__data.receiver = FhirResourceCreator.createArray(valueProvided, Reference);
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
         * @property {string|undefined}
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
            basedOn,
            partOf,
            status,
            patient,
            type,
            suppliedItem,
            occurrenceDateTime,
            occurrencePeriod,
            occurrenceTiming,
            supplier,
            destination,
            receiver,
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
            value: 'SupplyDelivery',
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
        return 'SupplyDelivery';
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
     * @param {Identifier[]|undefined} [identifier],
     * @param {Reference[]|undefined} [basedOn],
     * @param {Reference[]|undefined} [partOf],
     * @param {code|undefined} [status],
     * @param {Reference|undefined} [patient],
     * @param {CodeableConcept|undefined} [type],
     * @param {SupplyDeliverySuppliedItem|undefined} [suppliedItem],
     * @param {dateTime|undefined} [occurrenceDateTime],
     * @param {Period|undefined} [occurrencePeriod],
     * @param {Timing|undefined} [occurrenceTiming],
     * @param {Reference|undefined} [supplier],
     * @param {Reference|undefined} [destination],
     * @param {Reference[]|undefined} [receiver],
     * @param {Object|undefined} [_access]
     * @param {string|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {SupplyDelivery}
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
            basedOn,
            partOf,
            status,
            patient,
            type,
            suppliedItem,
            occurrenceDateTime,
            occurrencePeriod,
            occurrenceTiming,
            supplier,
            destination,
            receiver,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        return new SupplyDelivery({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            basedOn,
            partOf,
            status,
            patient,
            type,
            suppliedItem,
            occurrenceDateTime,
            occurrencePeriod,
            occurrenceTiming,
            supplier,
            destination,
            receiver,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {SupplyDelivery}
    */
    clone() {
        return new SupplyDelivery(this.toJSONInternal());
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
            identifier: this.identifier && this.identifier.map(v => v.toJSON()),
            basedOn: this.basedOn && this.basedOn.map(v => v.toJSON()),
            partOf: this.partOf && this.partOf.map(v => v.toJSON()),
            status: this.status,
            patient: this.patient && this.patient.toJSON(),
            type: this.type && this.type.toJSON(),
            suppliedItem: this.suppliedItem && this.suppliedItem.toJSON(),
            occurrenceDateTime: this.occurrenceDateTime,
            occurrencePeriod: this.occurrencePeriod && this.occurrencePeriod.toJSON(),
            occurrenceTiming: this.occurrenceTiming && this.occurrenceTiming.toJSON(),
            supplier: this.supplier && this.supplier.toJSON(),
            destination: this.destination && this.destination.toJSON(),
            receiver: this.receiver && this.receiver.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Promise<Reference>} fnUpdateReferenceAsync
     * @return {void}
     */
    async updateReferencesAsync({fnUpdateReferenceAsync}) {
            if (this.meta) {await this.meta.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.text) {await this.text.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.contained) {await async.each(this.contained, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.extension) {await async.each(this.extension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.modifierExtension) {await async.each(this.modifierExtension, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.identifier) {await async.each(this.identifier, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.basedOn) {await async.each(this.basedOn, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.partOf) {await async.each(this.partOf, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
            if (this.patient) {await this.patient.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.type) {await this.type.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.suppliedItem) {await this.suppliedItem.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.occurrencePeriod) {await this.occurrencePeriod.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.occurrenceTiming) {await this.occurrenceTiming.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.supplier) {await this.supplier.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.destination) {await this.destination.updateReferencesAsync({fnUpdateReferenceAsync});}
            if (this.receiver) {await async.each(this.receiver, async v => await v.updateReferencesAsync({fnUpdateReferenceAsync}));}
    }

    /**
     * Returns JSON representation of entity
     * @return {Object}
     */
    toJSONInternal() {
        const {removeNull} = require('../../../../utils/nullRemover');
        const json = {
            resourceType: this.resourceType,
            id: this.id,
            meta: this.meta && this.meta.toJSONInternal(),
            implicitRules: this.implicitRules,
            language: this.language,
            text: this.text && this.text.toJSONInternal(),
            contained: this.contained && this.contained.map(v => v.toJSONInternal()),
            extension: this.extension && this.extension.map(v => v.toJSONInternal()),
            modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSONInternal()),
            identifier: this.identifier && this.identifier.map(v => v.toJSONInternal()),
            basedOn: this.basedOn && this.basedOn.map(v => v.toJSONInternal()),
            partOf: this.partOf && this.partOf.map(v => v.toJSONInternal()),
            status: this.status,
            patient: this.patient && this.patient.toJSONInternal(),
            type: this.type && this.type.toJSONInternal(),
            suppliedItem: this.suppliedItem && this.suppliedItem.toJSONInternal(),
            occurrenceDateTime: this.occurrenceDateTime,
            occurrencePeriod: this.occurrencePeriod && this.occurrencePeriod.toJSONInternal(),
            occurrenceTiming: this.occurrenceTiming && this.occurrenceTiming.toJSONInternal(),
            supplier: this.supplier && this.supplier.toJSONInternal(),
            destination: this.destination && this.destination.toJSONInternal(),
            receiver: this.receiver && this.receiver.map(v => v.toJSONInternal()),
        };


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

module.exports = SupplyDelivery;
