// Autogenerated by script: generate_search_parameters.py.  Do not edit.
/**
 * @name exports
 * @static
 * @summary Arguments for the PlanDefinition query
 */
module.exports = {
  'composed-of': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'PlanDefinition.relatedArtifact[type/@value=\'composed-of\'].resource',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-composed-of',
    description: 'What resource is being referenced'
  },
  context: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'PlanDefinition.useContext.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-context',
    description: 'A use context assigned to the plan definition'
  },
  'context-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'PlanDefinition.useContext.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-context-quantity',
    description: 'A quantity- or range-valued use context assigned to the plan definition'
  },
  'context-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'PlanDefinition.useContext.code',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-context-type',
    description: 'A type of use context assigned to the plan definition'
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'PlanDefinition.date',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-date',
    description: 'The plan definition publication date'
  },
  definition: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'PlanDefinition.action.definitionCanonical',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-definition',
    description: 'Activity or plan definitions used by plan definition'
  },
  'depends-on': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'PlanDefinition.relatedArtifact[type/@value=\'depends-on\'].resource',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-depends-on',
    description: 'What resource is being referenced'
  },
  'derived-from': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'PlanDefinition.relatedArtifact[type/@value=\'derived-from\'].resource',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-derived-from',
    description: 'What resource is being referenced'
  },
  description: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'PlanDefinition.description',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-description',
    description: 'The description of the plan definition'
  },
  effective: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'PlanDefinition.effectivePeriod',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-effective',
    description: 'The time during which the plan definition is intended to be in use'
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'PlanDefinition.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-identifier',
    description: 'External identifier for the plan definition'
  },
  jurisdiction: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'PlanDefinition.jurisdiction',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-jurisdiction',
    description: 'Intended jurisdiction for the plan definition'
  },
  name: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'PlanDefinition.name',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-name',
    description: 'Computationally friendly name of the plan definition'
  },
  predecessor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'PlanDefinition.relatedArtifact[type/@value=\'predecessor\'].resource',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-predecessor',
    description: 'What resource is being referenced'
  },
  publisher: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'PlanDefinition.publisher',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-publisher',
    description: 'Name of the publisher of the plan definition'
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'PlanDefinition.status',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-status',
    description: 'The current status of the plan definition'
  },
  successor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'PlanDefinition.relatedArtifact[type/@value=\'successor\'].resource',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-successor',
    description: 'What resource is being referenced'
  },
  title: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'PlanDefinition.title',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-title',
    description: 'The human-friendly name of the plan definition'
  },
  topic: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'PlanDefinition.topic',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-topic',
    description: 'Topics associated with the module'
  },
  type: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'PlanDefinition.type',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-type',
    description: 'The type of artifact the plan (e.g. order-set, eca-rule, protocol)'
  },
  url: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'PlanDefinition.url',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-url',
    description: 'The uri that identifies the plan definition'
  },
  version: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'PlanDefinition.version',
    definition: 'http://hl7.org/fhir/SearchParameter/PlanDefinition-version',
    description: 'The business version of the plan definition'
  }
};
