// Autogenerated by script: generate_search_parameters.py.  Do not edit.
/**
 * @name exports
 * @static
 * @summary Arguments for the ClinicalUseDefinition query
 */
module.exports = {
  contraindication: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ClinicalUseDefinition.contraindication.diseaseSymptomProcedure',
    definition: 'http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-contraindication',
    description: 'The situation that is being documented as contraindicating against this item, as a code'
  },
  'contraindication-reference': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ClinicalUseDefinition.contraindication.diseaseSymptomProcedure',
    definition: 'http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-contraindication-reference',
    description: 'The situation that is being documented as contraindicating against this item, as a reference'
  },
  effect: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ClinicalUseDefinition.undesirableEffect.symptomConditionEffect',
    definition: 'http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-effect',
    description: 'The situation in which the undesirable effect may manifest, as a code'
  },
  'effect-reference': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ClinicalUseDefinition.undesirableEffect.symptomConditionEffect',
    definition: 'http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-effect-reference',
    description: 'The situation in which the undesirable effect may manifest, as a reference'
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ClinicalUseDefinition.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-identifier',
    description: 'Business identifier for this issue'
  },
  indication: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ClinicalUseDefinition.indication.diseaseSymptomProcedure',
    definition: 'http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-indication',
    description: 'The situation that is being documented as an indicaton for this item, as a code'
  },
  'indication-reference': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ClinicalUseDefinition.indication.diseaseSymptomProcedure',
    definition: 'http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-indication-reference',
    description: 'The situation that is being documented as an indicaton for this item, as a reference'
  },
  interaction: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ClinicalUseDefinition.interaction.type',
    definition: 'http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-interaction',
    description: 'The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction'
  },
  product: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ClinicalUseDefinition.subject',
    definition: 'http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-product',
    description: 'The medicinal product for which this is a clinical usage issue'
  },
  subject: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'ClinicalUseDefinition.subject',
    definition: 'http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-subject',
    description: 'The resource for which this is a clinical usage issue'
  },
  type: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ClinicalUseDefinition.type',
    definition: 'http://hl7.org/fhir/SearchParameter/ClinicalUseDefinition-type',
    description: 'indication | contraindication | interaction | undesirable-effect | warning'
  }
};
