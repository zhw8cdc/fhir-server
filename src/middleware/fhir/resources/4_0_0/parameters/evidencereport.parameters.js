// Autogenerated by script: generate_search_parameters.py.  Do not edit.
/**
 * @name exports
 * @static
 * @summary Arguments for the EvidenceReport query
 */
module.exports = {
  context: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'EvidenceReport.useContext.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceReport-context',
    description: 'A use context assigned to the evidence report'
  },
  'context-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'EvidenceReport.useContext.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceReport-context-quantity',
    description: 'A quantity- or range-valued use context assigned to the evidence report'
  },
  'context-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'EvidenceReport.useContext.code',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceReport-context-type',
    description: 'A type of use context assigned to the evidence report'
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'EvidenceReport.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceReport-identifier',
    description: 'External identifier for the evidence report'
  },
  publisher: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'EvidenceReport.publisher',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceReport-publisher',
    description: 'Name of the publisher of the evidence report'
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'EvidenceReport.status',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceReport-status',
    description: 'The current status of the evidence report'
  },
  url: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'EvidenceReport.url',
    definition: 'http://hl7.org/fhir/SearchParameter/EvidenceReport-url',
    description: 'The uri that identifies the evidence report'
  }
};
