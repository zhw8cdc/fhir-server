/**
 * @name exports
 * @static
 * @summary Arguments for the researchdefinition query
 */
module.exports = {
  'composed-of': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ResearchDefinition.relatedArtifact[type/@value='composed-of'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-composed-of',
    description: 'What resource is being referenced'
  },
  context: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchDefinition.useContext.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-context',
    description: 'A use context assigned to the research definition'
  },
  'context-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'ResearchDefinition.useContext.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-quantity',
    description: 'A quantity- or range-valued use context assigned to the research definition'
  },
  'context-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchDefinition.useContext.code',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-type',
    description: 'A type of use context assigned to the research definition'
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'ResearchDefinition.date',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-date',
    description: 'The research definition publication date'
  },
  'depends-on': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ResearchDefinition.relatedArtifact[type/@value='depends-on'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-depends-on',
    description: 'What resource is being referenced'
  },
  'derived-from': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ResearchDefinition.relatedArtifact[type/@value='derived-from'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-derived-from',
    description: 'What resource is being referenced'
  },
  description: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ResearchDefinition.description',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-description',
    description: 'The description of the research definition'
  },
  effective: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'ResearchDefinition.effectivePeriod',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-effective',
    description: 'The time during which the research definition is intended to be in use'
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchDefinition.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-identifier',
    description: 'External identifier for the research definition'
  },
  jurisdiction: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchDefinition.jurisdiction',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-jurisdiction',
    description: 'Intended jurisdiction for the research definition'
  },
  name: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ResearchDefinition.name',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-name',
    description: 'Computationally friendly name of the research definition'
  },
  predecessor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ResearchDefinition.relatedArtifact[type/@value='predecessor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-predecessor',
    description: 'What resource is being referenced'
  },
  publisher: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ResearchDefinition.publisher',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-publisher',
    description: 'Name of the publisher of the research definition'
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchDefinition.status',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-status',
    description: 'The current status of the research definition'
  },
  successor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "ResearchDefinition.relatedArtifact[type/@value='successor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-successor',
    description: 'What resource is being referenced'
  },
  title: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'ResearchDefinition.title',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-title',
    description: 'The human-friendly name of the research definition'
  },
  topic: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchDefinition.topic',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-topic',
    description: 'Topics associated with the ResearchDefinition'
  },
  url: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'ResearchDefinition.url',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-url',
    description: 'The uri that identifies the research definition'
  },
  version: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ResearchDefinition.version',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-version',
    description: 'The business version of the research definition'
  },
  'context-type-quantity': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-type-quantity',
    description: 'A use context type and quantity- or range-based value assigned to the research definition'
  },
  'context-type-value': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-type-value',
    description: 'A use context type and value assigned to the research definition'
  }
};
