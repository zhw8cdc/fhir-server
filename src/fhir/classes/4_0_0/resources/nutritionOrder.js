/* eslint-disable no-unused-vars */
// This file is auto-generated by generate_classes so do not edit manually

const Resource = require('../resources/resource');


/**
NutritionOrder
    A request to supply a diet, formula feeding (enteral) or oral nutritional
    supplement to a patient/resident.
    If the element is present, it must have either a @value, an @id, or extensions
*/
class NutritionOrder extends Resource {
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
     * @param {canonical[]|undefined} [instantiatesCanonical],
     * @param {uri[]|undefined} [instantiatesUri],
     * @param {uri[]|undefined} [instantiates],
     * @param {code} status,
     * @param {code} intent,
     * @param {Reference} patient,
     * @param {Reference|undefined} [encounter],
     * @param {dateTime} dateTime,
     * @param {Reference|undefined} [orderer],
     * @param {Reference[]|undefined} [allergyIntolerance],
     * @param {CodeableConcept[]|undefined} [foodPreferenceModifier],
     * @param {CodeableConcept[]|undefined} [excludeFoodModifier],
     * @param {NutritionOrderOralDiet|undefined} [oralDiet],
     * @param {NutritionOrderSupplement[]|undefined} [supplement],
     * @param {NutritionOrderEnteralFormula|undefined} [enteralFormula],
     * @param {Annotation[]|undefined} [note],
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
            instantiatesCanonical,
            instantiatesUri,
            instantiates,
            status,
            intent,
            patient,
            encounter,
            dateTime,
            orderer,
            allergyIntolerance,
            foodPreferenceModifier,
            excludeFoodModifier,
            oralDiet,
            supplement,
            enteralFormula,
            note,
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
                const Narrative = require('../complex_types/narrative.js');
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
                const ResourceContainer = require('../simple_types/resourceContainer.js');
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
                const Extension = require('../complex_types/extension.js');
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
                const Extension = require('../complex_types/extension.js');
                this.__data.modifierExtension = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Extension(v)) : [new Extension(valueProvided)];
            }
        });

        /**
         * @description Identifiers assigned to this order by the order sender or by the order
    receiver.
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
                this.__data.identifier = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Identifier(v)) : [new Identifier(valueProvided)];
            }
        });

        /**
         * @description The URL pointing to a FHIR-defined protocol, guideline, orderset or other
    definition that is adhered to in whole or in part by this NutritionOrder.
         * @property {canonical[]|undefined}
        */
        Object.defineProperty(this, 'instantiatesCanonical', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.instantiatesCanonical,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.instantiatesCanonical = undefined;
                    return;
                }
                this.__data.instantiatesCanonical = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The URL pointing to an externally maintained protocol, guideline, orderset or
    other definition that is adhered to in whole or in part by this
    NutritionOrder.
         * @property {uri[]|undefined}
        */
        Object.defineProperty(this, 'instantiatesUri', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.instantiatesUri,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.instantiatesUri = undefined;
                    return;
                }
                this.__data.instantiatesUri = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The URL pointing to a protocol, guideline, orderset or other definition that
    is adhered to in whole or in part by this NutritionOrder.
         * @property {uri[]|undefined}
        */
        Object.defineProperty(this, 'instantiates', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.instantiates,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.instantiates = undefined;
                    return;
                }
                this.__data.instantiates = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => v) : [valueProvided];
            }
        });

        /**
         * @description The workflow status of the nutrition order/request.
         * @property {code}
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
         * @description Indicates the level of authority/intentionality associated with the
    NutrionOrder and where the request fits into the workflow chain.
         * @property {code}
        */
        Object.defineProperty(this, 'intent', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.intent,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.intent = undefined;
                    return;
                }
                this.__data.intent = valueProvided;
            }
        });

        /**
         * @description The person (patient) who needs the nutrition order for an oral diet,
    nutritional supplement and/or enteral or formula feeding.
         * @property {Reference}
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
                this.__data.patient = new Reference(valueProvided);
            }
        });

        /**
         * @description An encounter that provides additional information about the healthcare context
    in which this request is made.
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
                const Reference = require('../complex_types/reference.js');
                this.__data.encounter = new Reference(valueProvided);
            }
        });

        /**
         * @description The date and time that this nutrition order was requested.
         * @property {dateTime}
        */
        Object.defineProperty(this, 'dateTime', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.dateTime,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.dateTime = undefined;
                    return;
                }
                this.__data.dateTime = valueProvided;
            }
        });

        /**
         * @description The practitioner that holds legal responsibility for ordering the diet,
    nutritional supplement, or formula feedings.
         * @property {Reference|undefined}
        */
        Object.defineProperty(this, 'orderer', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.orderer,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.orderer = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.orderer = new Reference(valueProvided);
            }
        });

        /**
         * @description A link to a record of allergies or intolerances  which should be included in
    the nutrition order.
         * @property {Reference[]|undefined}
        */
        Object.defineProperty(this, 'allergyIntolerance', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.allergyIntolerance,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.allergyIntolerance = undefined;
                    return;
                }
                const Reference = require('../complex_types/reference.js');
                this.__data.allergyIntolerance = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Reference(v)) : [new Reference(valueProvided)];
            }
        });

        /**
         * @description This modifier is used to convey order-specific modifiers about the type of
    food that should be given. These can be derived from patient allergies,
    intolerances, or preferences such as Halal, Vegan or Kosher. This modifier
    applies to the entire nutrition order inclusive of the oral diet, nutritional
    supplements and enteral formula feedings.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'foodPreferenceModifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.foodPreferenceModifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.foodPreferenceModifier = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.foodPreferenceModifier = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description This modifier is used to convey Order-specific modifier about the type of oral
    food or oral fluids that should not be given. These can be derived from
    patient allergies, intolerances, or preferences such as No Red Meat, No Soy or
    No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy
    or intolerance information captured in the referenced AllergyIntolerance
    resource in the excludeFoodModifier, this element may be used to convey
    additional specificity related to foods that should be eliminated from the
    patient’s diet for any reason.  This modifier applies to the entire nutrition
    order inclusive of the oral diet, nutritional supplements and enteral formula
    feedings.
         * @property {CodeableConcept[]|undefined}
        */
        Object.defineProperty(this, 'excludeFoodModifier', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.excludeFoodModifier,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.excludeFoodModifier = undefined;
                    return;
                }
                const CodeableConcept = require('../complex_types/codeableConcept.js');
                this.__data.excludeFoodModifier = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new CodeableConcept(v)) : [new CodeableConcept(valueProvided)];
            }
        });

        /**
         * @description Diet given orally in contrast to enteral (tube) feeding.
         * @property {NutritionOrderOralDiet|undefined}
        */
        Object.defineProperty(this, 'oralDiet', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.oralDiet,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.oralDiet = undefined;
                    return;
                }
                const NutritionOrderOralDiet = require('../backbone_elements/nutritionOrderOralDiet.js');
                this.__data.oralDiet = new NutritionOrderOralDiet(valueProvided);
            }
        });

        /**
         * @description Oral nutritional products given in order to add further nutritional value to
    the patient's diet.
         * @property {NutritionOrderSupplement[]|undefined}
        */
        Object.defineProperty(this, 'supplement', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.supplement,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.supplement = undefined;
                    return;
                }
                const NutritionOrderSupplement = require('../backbone_elements/nutritionOrderSupplement.js');
                this.__data.supplement = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new NutritionOrderSupplement(v)) : [new NutritionOrderSupplement(valueProvided)];
            }
        });

        /**
         * @description Feeding provided through the gastrointestinal tract via a tube, catheter, or
    stoma that delivers nutrition distal to the oral cavity.
         * @property {NutritionOrderEnteralFormula|undefined}
        */
        Object.defineProperty(this, 'enteralFormula', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.enteralFormula,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.enteralFormula = undefined;
                    return;
                }
                const NutritionOrderEnteralFormula = require('../backbone_elements/nutritionOrderEnteralFormula.js');
                this.__data.enteralFormula = new NutritionOrderEnteralFormula(valueProvided);
            }
        });

        /**
         * @description Comments made about the {{title}} by the requester, performer, subject or
    other participants.
         * @property {Annotation[]|undefined}
        */
        Object.defineProperty(this, 'note', {
            // https://www.w3schools.com/js/js_object_es5.asp
            enumerable: true,
            configurable: true,
            get: () => this.__data.note,
            set: valueProvided => {
                if (valueProvided === undefined || valueProvided === null || (Array.isArray(valueProvided) && valueProvided.length === 0)) {
                    this.__data.note = undefined;
                    return;
                }
                const Annotation = require('../complex_types/annotation.js');
                this.__data.note = Array.isArray(valueProvided) ? valueProvided.filter(v => v).map(v => new Annotation(v)) : [new Annotation(valueProvided)];
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
            instantiatesCanonical,
            instantiatesUri,
            instantiates,
            status,
            intent,
            patient,
            encounter,
            dateTime,
            orderer,
            allergyIntolerance,
            foodPreferenceModifier,
            excludeFoodModifier,
            oralDiet,
            supplement,
            enteralFormula,
            note,
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
            value: 'NutritionOrder',
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
        return 'NutritionOrder';
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
     * @param {canonical[]|undefined} [instantiatesCanonical],
     * @param {uri[]|undefined} [instantiatesUri],
     * @param {uri[]|undefined} [instantiates],
     * @param {code} status,
     * @param {code} intent,
     * @param {Reference} patient,
     * @param {Reference|undefined} [encounter],
     * @param {dateTime} dateTime,
     * @param {Reference|undefined} [orderer],
     * @param {Reference[]|undefined} [allergyIntolerance],
     * @param {CodeableConcept[]|undefined} [foodPreferenceModifier],
     * @param {CodeableConcept[]|undefined} [excludeFoodModifier],
     * @param {NutritionOrderOralDiet|undefined} [oralDiet],
     * @param {NutritionOrderSupplement[]|undefined} [supplement],
     * @param {NutritionOrderEnteralFormula|undefined} [enteralFormula],
     * @param {Annotation[]|undefined} [note],
     * @param {Object|undefined} [_access]
     * @param {Object|undefined} [_sourceAssigningAuthority]
     * @param {string|undefined} [_uuid]
     * @param {string|undefined} [_sourceId]
     * @returns {NutritionOrder}
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
            instantiatesCanonical,
            instantiatesUri,
            instantiates,
            status,
            intent,
            patient,
            encounter,
            dateTime,
            orderer,
            allergyIntolerance,
            foodPreferenceModifier,
            excludeFoodModifier,
            oralDiet,
            supplement,
            enteralFormula,
            note,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        }
    ) {
        return new NutritionOrder({
            id,
            meta,
            implicitRules,
            language,
            text,
            contained,
            extension,
            modifierExtension,
            identifier,
            instantiatesCanonical,
            instantiatesUri,
            instantiates,
            status,
            intent,
            patient,
            encounter,
            dateTime,
            orderer,
            allergyIntolerance,
            foodPreferenceModifier,
            excludeFoodModifier,
            oralDiet,
            supplement,
            enteralFormula,
            note,
            _access,
            _sourceAssigningAuthority,
            _uuid,
            _sourceId,
        });
    }

    /**
     * @description creates a copy of this resource
     * @returns {NutritionOrder}
    */
    clone() {
        return new NutritionOrder(this.toJSONInternal());
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
            instantiatesCanonical: this.instantiatesCanonical,
            instantiatesUri: this.instantiatesUri,
            instantiates: this.instantiates,
            status: this.status,
            intent: this.intent,
            patient: this.patient && this.patient.toJSON(),
            encounter: this.encounter && this.encounter.toJSON(),
            dateTime: this.dateTime,
            orderer: this.orderer && this.orderer.toJSON(),
            allergyIntolerance: this.allergyIntolerance && this.allergyIntolerance.map(v => v.toJSON()),
            foodPreferenceModifier: this.foodPreferenceModifier && this.foodPreferenceModifier.map(v => v.toJSON()),
            excludeFoodModifier: this.excludeFoodModifier && this.excludeFoodModifier.map(v => v.toJSON()),
            oralDiet: this.oralDiet && this.oralDiet.toJSON(),
            supplement: this.supplement && this.supplement.map(v => v.toJSON()),
            enteralFormula: this.enteralFormula && this.enteralFormula.toJSON(),
            note: this.note && this.note.map(v => v.toJSON()),
        });
    }

    /**
     * Returns JSON representation of entity
     * @param {function(Reference): Reference} fnUpdateReference
     * @return {void}
     */
    updateReferences({fnUpdateReference}) {
            if (this.meta) {this.meta.updateReferences({fnUpdateReference});}
            if (this.text) {this.text.updateReferences({fnUpdateReference});}
            if (this.contained) {this.contained.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.extension) {this.extension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.modifierExtension) {this.modifierExtension.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.identifier) {this.identifier.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.patient) {this.patient.updateReferences({fnUpdateReference});}
            if (this.encounter) {this.encounter.updateReferences({fnUpdateReference});}
            if (this.orderer) {this.orderer.updateReferences({fnUpdateReference});}
            if (this.allergyIntolerance) {this.allergyIntolerance.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.foodPreferenceModifier) {this.foodPreferenceModifier.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.excludeFoodModifier) {this.excludeFoodModifier.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.oralDiet) {this.oralDiet.updateReferences({fnUpdateReference});}
            if (this.supplement) {this.supplement.forEach(v => v.updateReferences({fnUpdateReference}));}
            if (this.enteralFormula) {this.enteralFormula.updateReferences({fnUpdateReference});}
            if (this.note) {this.note.forEach(v => v.updateReferences({fnUpdateReference}));}
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

module.exports = NutritionOrder;
