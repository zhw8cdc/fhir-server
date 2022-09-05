/**
 * @name exports
 * @static
 * @summary Arguments for the library query
 */
module.exports = {
  'composed-of': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "Library.relatedArtifact[type/@value='composed-of'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/Library-composed-of',
    description: 'What resource is being referenced'
  },
  'content-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Library.content.contentType',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-content-type',
    description: 'The type of content in the library (e.g. text/cql)'
  },
  context: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Library.useContext.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-context',
    description: 'A use context assigned to the library'
  },
  'context-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'Library.useContext.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-context-quantity',
    description: 'A quantity- or range-valued use context assigned to the library'
  },
  'context-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Library.useContext.code',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-context-type',
    description: 'A type of use context assigned to the library'
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Library.date',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-date',
    description: 'The library publication date'
  },
  'depends-on': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "Library.relatedArtifact[type/@value='depends-on'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/Library-depends-on',
    description: 'What resource is being referenced'
  },
  'derived-from': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "Library.relatedArtifact[type/@value='derived-from'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/Library-derived-from',
    description: 'What resource is being referenced'
  },
  description: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Library.description',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-description',
    description: 'The description of the library'
  },
  effective: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Library.effectivePeriod',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-effective',
    description: 'The time during which the library is intended to be in use'
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Library.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-identifier',
    description: 'External identifier for the library'
  },
  jurisdiction: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Library.jurisdiction',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-jurisdiction',
    description: 'Intended jurisdiction for the library'
  },
  name: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Library.name',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-name',
    description: 'Computationally friendly name of the library'
  },
  predecessor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "Library.relatedArtifact[type/@value='predecessor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/Library-predecessor',
    description: 'What resource is being referenced'
  },
  publisher: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Library.publisher',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-publisher',
    description: 'Name of the publisher of the library'
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Library.status',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-status',
    description: 'The current status of the library'
  },
  successor: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: "Library.relatedArtifact[type/@value='successor'].resource",
    definition: 'http://hl7.org/fhir/SearchParameter/Library-successor',
    description: 'What resource is being referenced'
  },
  title: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Library.title',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-title',
    description: 'The human-friendly name of the library'
  },
  topic: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Library.topic',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-topic',
    description: 'Topics associated with the module'
  },
  type: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Library.type',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-type',
    description: 'The type of the library (e.g. logic-library, model-definition, asset-collection, module-definition)'
  },
  url: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'Library.url',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-url',
    description: 'The uri that identifies the library'
  },
  version: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Library.version',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-version',
    description: 'The business version of the library'
  },
  'context-type-quantity': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-context-type-quantity',
    description: 'A use context type and quantity- or range-based value assigned to the library'
  },
  'context-type-value': {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Library-context-type-value',
    description: 'A use context type and value assigned to the library'
  }
};
