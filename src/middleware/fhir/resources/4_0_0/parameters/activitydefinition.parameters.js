/**
 * @name exports
 * @static
 * @summary Arguments for the activitydefinition query
 */
module.exports = {
  'composed-of': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ActivityDefinition.relatedArtifact[type/@value='composed-of'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-composed-of',
    description: 'What resource is being referenced'
  },
  context: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ActivityDefinition.useContext.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-context',
    description: 'A use context assigned to the activity definition'
  },
  'context-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'ActivityDefinition.useContext.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-quantity',
    description: 'A quantity- or range-valued use context assigned to the activity definition'
  },
  'context-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ActivityDefinition.useContext.code',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-type',
    description: 'A type of use context assigned to the activity definition'
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'ActivityDefinition.date',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-date',
    description: 'The activity definition publication date'
  },
  'depends-on': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ActivityDefinition.relatedArtifact[type/@value='depends-on'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-depends-on',
    description: 'What resource is being referenced'
  },
  'derived-from': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ActivityDefinition.relatedArtifact[type/@value='derived-from'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-derived-from',
    description: 'What resource is being referenced'
  },
  description: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ActivityDefinition.description',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-description',
    description: 'The description of the activity definition'
  },
  effective: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'ActivityDefinition.effectivePeriod',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-effective',
    description: 'The time during which the activity definition is intended to be in use'
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ActivityDefinition.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-identifier',
    description: 'External identifier for the activity definition'
  },
  jurisdiction: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ActivityDefinition.jurisdiction',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-jurisdiction',
    description: 'Intended jurisdiction for the activity definition'
  },
  name: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ActivityDefinition.name',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-name',
    description: 'Computationally friendly name of the activity definition'
  },
  predecessor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ActivityDefinition.relatedArtifact[type/@value='predecessor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-predecessor',
    description: 'What resource is being referenced'
  },
  publisher: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ActivityDefinition.publisher',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-publisher',
    description: 'Name of the publisher of the activity definition'
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ActivityDefinition.status',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-status',
    description: 'The current status of the activity definition'
  },
  successor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ActivityDefinition.relatedArtifact[type/@value='successor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-successor',
    description: 'What resource is being referenced'
  },
  title: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ActivityDefinition.title',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-title',
    description: 'The human-friendly name of the activity definition'
  },
  topic: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ActivityDefinition.topic',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-topic',
    description: 'Topics associated with the module'
  },
  url: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'ActivityDefinition.url',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-url',
    description: 'The uri that identifies the activity definition'
  },
  version: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ActivityDefinition.version',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-version',
    description: 'The business version of the activity definition'
  },
  'context-type-quantity': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-type-quantity',
    description: 'A use context type and quantity- or range-based value assigned to the activity definition'
  },
  'context-type-value': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-type-value',
    description: 'A use context type and value assigned to the activity definition'
  }
};
