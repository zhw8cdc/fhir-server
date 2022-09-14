/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
MedicinalProduct
    Detailed definition of a medicinal product, typically for uses other than
    direct patient care (e.g. regulatory use).
    If the element is present, it must have either a @value, an @id, or extensions
*/
class MedicinalProduct extends Resource {
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
     * @param {CodeableConcept|undefined} [type],
     * @param {Coding|undefined} [domain],
     * @param {CodeableConcept|undefined} [combinedPharmaceuticalDoseForm],
     * @param {CodeableConcept|undefined} [legalStatusOfSupply],
     * @param {CodeableConcept|undefined} [additionalMonitoringIndicator],
     * @param {String[]|undefined} [specialMeasures],
     * @param {CodeableConcept|undefined} [paediatricUseIndicator],
     * @param {CodeableConcept[]|undefined} [productClassification],
     * @param {MarketingStatus[]|undefined} [marketingStatus],
     * @param {Reference[]|undefined} [pharmaceuticalProduct],
     * @param {Reference[]|undefined} [packagedMedicinalProduct],
     * @param {Reference[]|undefined} [attachedDocument],
     * @param {Reference[]|undefined} [masterFile],
     * @param {Reference[]|undefined} [contact],
     * @param {Reference[]|undefined} [clinicalTrial],
     * @param {MedicinalProductName[]} name,
     * @param {Identifier[]|undefined} [crossReference],
     * @param {MedicinalProductManufacturingBusinessOperation[]|undefined} [manufacturingBusinessOperation],
     * @param {MedicinalProductSpecialDesignation[]|undefined} [specialDesignation],
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
            type,
            domain,
            combinedPharmaceuticalDoseForm,
            legalStatusOfSupply,
            additionalMonitoringIndicator,
            specialMeasures,
            paediatricUseIndicator,
            productClassification,
            marketingStatus,
            pharmaceuticalProduct,
            packagedMedicinalProduct,
            attachedDocument,
            masterFile,
            contact,
            clinicalTrial,
            name,
            crossReference,
            manufacturingBusinessOperation,
            specialDesignation,
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
                    return;
                }
                let ResourceContainer = require('../simple_types/resourceContainer.js');
                const {getResource} = require('../../../../operations/common/getResource');
                if (Array.isArray(valueProvided)) {
                    this.__data.contained = valueProvided.map(v => {
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
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.extension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
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
                    return;
                }
                let Extension = require('../extensions/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description Business identifier for this product. Could be an MPID.
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'identifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.identifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Identifier = require('../complex_types/identifier.js');
                this.__data.identifier = Array.isArray(valueProvided) ? valueProvided.map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description Regulatory type, e.g. Investigational or Authorized.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'type', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.type,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.type = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description If this medicine applies to human or veterinary uses.
         * @property {Coding|undefined}
        */
        Object.defineProperty(this, 'domain', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.domain,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Coding = require('../complex_types/coding.js');
                this.__data.domain = new Coding(valueProvided);
            }
        });

        /**
         * @description The dose form for a single part product, or combined form of a multiple part
    product.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'combinedPharmaceuticalDoseForm', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.combinedPharmaceuticalDoseForm,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.combinedPharmaceuticalDoseForm = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description The legal status of supply of the medicinal product as classified by the
    regulator.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'legalStatusOfSupply', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.legalStatusOfSupply,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.legalStatusOfSupply = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Whether the Medicinal Product is subject to additional monitoring for
    regulatory reasons.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'additionalMonitoringIndicator', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.additionalMonitoringIndicator,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.additionalMonitoringIndicator = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Whether the Medicinal Product is subject to special measures for regulatory
    reasons.
         * @property {String[]|undefined}
        */
        Object.defineProperty(this, 'specialMeasures', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.specialMeasures,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                this.__data.specialMeasures = Array.isArray(valueProvided) ? valueProvided.map(v => v) : [valueProvided];
            }
        });

        /**
         * @description If authorised for use in children.
         * @property {CodeableConcept|undefined}
        */
        Object.defineProperty(this, 'paediatricUseIndicator', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.paediatricUseIndicator,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.paediatricUseIndicator = new CodeableConcept(valueProvided);
            }
        });

        /**
         * @description Allows the product to be classified by various systems.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'productClassification', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.productClassification,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.productClassification = Array.isArray(valueProvided) ? valueProvided.map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Marketing status of the medicinal product, in contrast to marketing
    authorizaton.
         * @property {MarketingStatus[]|undefined}
        */
        Object.defineProperty(this, 'marketingStatus', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.marketingStatus,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MarketingStatus = require('../backbone_elements/marketingStatus.js');
                this.__data.marketingStatus = Array.isArray(valueProvided) ? valueProvided.map(v => new MarketingStatus(v)) : [new MarketingStatus(valueProvided)];
            }
        });

        /**
         * @description Pharmaceutical aspects of product.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'pharmaceuticalProduct', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.pharmaceuticalProduct,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.pharmaceuticalProduct = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Package representation for the product.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'packagedMedicinalProduct', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.packagedMedicinalProduct,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.packagedMedicinalProduct = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Supporting documentation, typically for regulatory submission.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'attachedDocument', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.attachedDocument,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.attachedDocument = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description A master file for to the medicinal product (e.g. Pharmacovigilance System
    Master File).
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'masterFile', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.masterFile,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.masterFile = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description A product specific contact, person (in a role), or an organization.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'contact', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.contact,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.contact = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description Clinical trials or studies that this product is involved in.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'clinicalTrial', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.clinicalTrial,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Reference = require('../complex_types/reference.js');
                this.__data.clinicalTrial = Array.isArray(valueProvided) ? valueProvided.map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description The product's name, including full name and possibly coded parts.
         * @property {MedicinalProductName[]}
        */
        Object.defineProperty(this, 'name', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.name,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MedicinalProductName = require('../backbone_elements/medicinalProductName.js');
                this.__data.name = Array.isArray(valueProvided) ? valueProvided.map(v => new MedicinalProductName(v)) : [new MedicinalProductName(valueProvided)];
            }
        });

        /**
         * @description Reference to another product, e.g. for linking authorised to investigational
    product.
         * @property {Identifier[]|undefined}
        */
        Object.defineProperty(this, 'crossReference', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.crossReference,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let Identifier = require('../complex_types/identifier.js');
                this.__data.crossReference = Array.isArray(valueProvided) ? valueProvided.map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description An operation applied to the product, for manufacturing or adminsitrative
    purpose.
         * @property {MedicinalProductManufacturingBusinessOperation[]|undefined}
        */
        Object.defineProperty(this, 'manufacturingBusinessOperation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.manufacturingBusinessOperation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MedicinalProductManufacturingBusinessOperation = require('../backbone_elements/medicinalProductManufacturingBusinessOperation.js');
                this.__data.manufacturingBusinessOperation = Array.isArray(valueProvided) ? valueProvided.map(v => new MedicinalProductManufacturingBusinessOperation(v)) : [new MedicinalProductManufacturingBusinessOperation(valueProvided)];
            }
        });

        /**
         * @description Indicates if the medicinal product has an orphan designation for the treatment
    of a rare disease.
         * @property {MedicinalProductSpecialDesignation[]|undefined}
        */
        Object.defineProperty(this, 'specialDesignation', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.specialDesignation,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    return;
                }
                let MedicinalProductSpecialDesignation = require('../backbone_elements/medicinalProductSpecialDesignation.js');
                this.__data.specialDesignation = Array.isArray(valueProvided) ? valueProvided.map(v => new MedicinalProductSpecialDesignation(v)) : [new MedicinalProductSpecialDesignation(valueProvided)];
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
            type,
            domain,
            combinedPharmaceuticalDoseForm,
            legalStatusOfSupply,
            additionalMonitoringIndicator,
            specialMeasures,
            paediatricUseIndicator,
            productClassification,
            marketingStatus,
            pharmaceuticalProduct,
            packagedMedicinalProduct,
            attachedDocument,
            masterFile,
            contact,
            clinicalTrial,
            name,
            crossReference,
            manufacturingBusinessOperation,
            specialDesignation,
        });

        // Define a default non-writable resourceType property

        Object.defineProperty(this, 'resourceType', {
            value: 'MedicinalProduct',
            enumerable: true,
            writable: false,
            configurable: true
        });
    }

    static get resourceType() {
        return 'MedicinalProduct';
    }

    /**
     * @description Creates a blank new resource
     * @returns {MedicinalProduct}
     * @param {id|undefined} [id],
     * @param {Meta|undefined} [meta],
     * @param {uri|undefined} [implicitRules],
     * @param {code|undefined} [language],
     * @param {Narrative|undefined} [text],
     * @param {ResourceContainer[]|undefined} [contained],
     * @param {Extension[]|undefined} [extension],
     * @param {Extension[]|undefined} [modifierExtension],
     * @param {Identifier[]|undefined} [identifier],
     * @param {CodeableConcept|undefined} [type],
     * @param {Coding|undefined} [domain],
     * @param {CodeableConcept|undefined} [combinedPharmaceuticalDoseForm],
     * @param {CodeableConcept|undefined} [legalStatusOfSupply],
     * @param {CodeableConcept|undefined} [additionalMonitoringIndicator],
     * @param {String[]|undefined} [specialMeasures],
     * @param {CodeableConcept|undefined} [paediatricUseIndicator],
     * @param {CodeableConcept[]|undefined} [productClassification],
     * @param {MarketingStatus[]|undefined} [marketingStatus],
     * @param {Reference[]|undefined} [pharmaceuticalProduct],
     * @param {Reference[]|undefined} [packagedMedicinalProduct],
     * @param {Reference[]|undefined} [attachedDocument],
     * @param {Reference[]|undefined} [masterFile],
     * @param {Reference[]|undefined} [contact],
     * @param {Reference[]|undefined} [clinicalTrial],
     * @param {MedicinalProductName[]} name,
     * @param {Identifier[]|undefined} [crossReference],
     * @param {MedicinalProductManufacturingBusinessOperation[]|undefined} [manufacturingBusinessOperation],
     * @param {MedicinalProductSpecialDesignation[]|undefined} [specialDesignation],
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
            type,
            domain,
            combinedPharmaceuticalDoseForm,
            legalStatusOfSupply,
            additionalMonitoringIndicator,
            specialMeasures,
            paediatricUseIndicator,
            productClassification,
            marketingStatus,
            pharmaceuticalProduct,
            packagedMedicinalProduct,
            attachedDocument,
            masterFile,
            contact,
            clinicalTrial,
            name,
            crossReference,
            manufacturingBusinessOperation,
            specialDesignation,
        }
    ) {
        return new MedicinalProduct({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            type,
            domain,
            combinedPharmaceuticalDoseForm,
            legalStatusOfSupply,
            additionalMonitoringIndicator,
            specialMeasures,
            paediatricUseIndicator,
            productClassification,
            marketingStatus,
            pharmaceuticalProduct,
            packagedMedicinalProduct,
            attachedDocument,
            masterFile,
            contact,
            clinicalTrial,
            name,
            crossReference,
            manufacturingBusinessOperation,
            specialDesignation,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {MedicinalProduct}
    */
    copy() {
        return new MedicinalProduct(this.toJSON());
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
            type: this.type && this.type.toJSON(),
            domain: this.domain && this.domain.toJSON(),
            combinedPharmaceuticalDoseForm: this.combinedPharmaceuticalDoseForm && this.combinedPharmaceuticalDoseForm.toJSON(),
            legalStatusOfSupply: this.legalStatusOfSupply && this.legalStatusOfSupply.toJSON(),
            additionalMonitoringIndicator: this.additionalMonitoringIndicator && this.additionalMonitoringIndicator.toJSON(),
            specialMeasures: this.specialMeasures,
            paediatricUseIndicator: this.paediatricUseIndicator && this.paediatricUseIndicator.toJSON(),
            productClassification: this.productClassification && this.productClassification.map(v => v.toJSON()),
            marketingStatus: this.marketingStatus && this.marketingStatus.map(v => v.toJSON()),
            pharmaceuticalProduct: this.pharmaceuticalProduct && this.pharmaceuticalProduct.map(v => v.toJSON()),
            packagedMedicinalProduct: this.packagedMedicinalProduct && this.packagedMedicinalProduct.map(v => v.toJSON()),
            attachedDocument: this.attachedDocument && this.attachedDocument.map(v => v.toJSON()),
            masterFile: this.masterFile && this.masterFile.map(v => v.toJSON()),
            contact: this.contact && this.contact.map(v => v.toJSON()),
            clinicalTrial: this.clinicalTrial && this.clinicalTrial.map(v => v.toJSON()),
            name: this.name && this.name.map(v => v.toJSON()),
            crossReference: this.crossReference && this.crossReference.map(v => v.toJSON()),
            manufacturingBusinessOperation: this.manufacturingBusinessOperation && this.manufacturingBusinessOperation.map(v => v.toJSON()),
            specialDesignation: this.specialDesignation && this.specialDesignation.map(v => v.toJSON()),
        });
    }
}

module.exports = MedicinalProduct;