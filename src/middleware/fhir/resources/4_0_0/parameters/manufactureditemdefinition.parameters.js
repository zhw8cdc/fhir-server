// Autogenerated by script: generate_search_parameters.py.  Do not edit.
/**
 * @name exports
 * @static
 * @summary Arguments for the ManufacturedItemDefinition query
 */
module.exports = {
  'dose-form': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ManufacturedItemDefinition.manufacturedDoseForm',
    definition: 'http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-dose-form',
    description: 'Dose form as manufactured and before any transformation into the pharmaceutical product'
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ManufacturedItemDefinition.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-identifier',
    description: 'Unique identifier'
  },
  ingredient: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'ManufacturedItemDefinition.ingredient',
    definition: 'http://hl7.org/fhir/SearchParameter/ManufacturedItemDefinition-ingredient',
    description: 'An ingredient of this item'
  }
};
