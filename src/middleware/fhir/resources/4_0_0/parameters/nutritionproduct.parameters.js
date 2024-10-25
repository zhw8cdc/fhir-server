// Autogenerated by script: generate_search_parameters.py.  Do not edit.
/**
 * @name exports
 * @static
 * @summary Arguments for the NutritionProduct query
 */
module.exports = {
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'NutritionProduct.instance.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/NutritionProduct-identifier',
    description: 'The identifier for the physical instance, typically a serial number'
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'NutritionProduct.status',
    definition: 'http://hl7.org/fhir/SearchParameter/NutritionProduct-status',
    description: 'active | inactive | entered-in-error'
  }
};
