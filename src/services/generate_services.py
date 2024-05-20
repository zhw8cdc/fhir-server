import os
from pathlib import Path
import shutil

def main() -> int:
    resources = ['Account', 'ActivityDefinition', 'AdministrableProductDefinition', 'AdverseEvent',
        'AllergyIntolerance', 'Appointment', 'AppointmentResponse', 'AuditEvent', 'Basic', 'Binary',
        'BiologicallyDerivedProduct', 'BodyStructure', 'Bundle', 'CapabilityStatement', 'CarePlan',
        'CareTeam', 'CatalogEntry', 'ChargeItem', 'ChargeItemDefinition', 'Citation', 'Claim',
        'ClaimResponse', 'ClinicalImpression', 'ClinicalUseDefinition', 'CodeSystem', 'Communication',
        'CommunicationRequest', 'CompartmentDefinition', 'Composition', 'ConceptMap', 'Condition',
        'Consent', 'Contract', 'Coverage', 'CoverageEligibilityRequest', 'CoverageEligibilityResponse',
        'DetectedIssue', 'Device', 'DeviceDefinition', 'DeviceMetric', 'DeviceRequest', 'DeviceUseStatement',
        'DiagnosticReport', 'DocumentManifest', 'DocumentReference', 'Encounter',
        'Endpoint', 'EnrollmentRequest', 'EnrollmentResponse', 'EpisodeOfCare', 'EventDefinition',
        'Evidence', 'EvidenceReport', 'EvidenceVariable', 'ExampleScenario', 'ExplanationOfBenefit',
        'FamilyMemberHistory', 'Flag', 'Goal', 'GraphDefinition', 'Group', 'GuidanceResponse',
        'HealthcareService', 'ImagingStudy', 'Immunization', 'ImmunizationEvaluation',
        'ImmunizationRecommendation', 'ImplementationGuide', 'Ingredient', 'InsurancePlan', 'Invoice',
        'Library', 'Linkage', 'List', 'Location', 'ManufacturedItemDefinition', 'Measure', 'MeasureReport',
        'Media', 'Medication', 'MedicationAdministration', 'MedicationDispense', 'MedicationKnowledge',
        'MedicationRequest', 'MedicationStatement', 'MedicinalProductDefinition', 'MessageDefinition',
        'MessageHeader', 'MolecularSequence', 'NamingSystem', 'NutritionOrder', 'NutritionProduct',
        'Observation', 'ObservationDefinition', 'OperationDefinition', 'OperationOutcome', 'Organization',
        'OrganizationAffiliation', 'PackagedProductDefinition', 'Parameters', 'Patient', 'PaymentNotice',
        'PaymentReconciliation', 'Person', 'PlanDefinition', 'Practitioner', 'PractitionerRole', 'Procedure',
        'Provenance', 'Questionnaire', 'QuestionnaireResponse', 'RegulatedAuthorization', 'RelatedPerson',
        'RequestGroup', 'ResearchDefinition', 'ResearchElementDefinition', 'ResearchStudy', 'ResearchSubject',
        'RiskAssessment', 'Schedule', 'SearchParameter', 'ServiceRequest', 'Slot', 'Specimen',
        'SpecimenDefinition', 'StructureDefinition', 'StructureMap', 'Subscription', 'SubscriptionStatus',
        'SubscriptionTopic', 'Substance', 'SubstanceDefinition', 'SupplyDelivery', 'SupplyRequest', 'Task',
        'TerminologyCapabilities', 'TestReport', 'TestScript', 'ValueSet', 'VerificationResult', 'VisionPrescription']

    data_dir: Path = Path(__file__).parent.joinpath('./')

    collection_entries = {}
    config_entries = []

    for resourceType in resources:
        # first see if the folder exists
        resource_folder = data_dir.joinpath(resourceType.lower())
        if os.path.exists(resource_folder):
            shutil.rmtree(resource_folder)
        if not os.path.exists(resource_folder):
            print(f"Folder: {resource_folder} does not exist so creating it")
            # 1. create folder
            os.mkdir(resource_folder)
            # 2. create service file
            resource_file_name = resource_folder.joinpath(f"{resourceType.lower()}.service.js")
            service_code = """// Autogenerated by generate_services.py. Do not edit.
"""
            new_line_char = '\n'
            back_space_char = ''
            # 3. add config.js entry
            with open(resource_file_name, "w+") as file:
                print(f"Writing file: {resource_file_name}")
                file.write(service_code)
            collection_entries[resourceType.upper()] = resourceType
            config_entries.append(f"""
    {resourceType}: {{
      service: './src/services/{resourceType.lower()}/{resourceType.lower()}.service.js',
      versions: [VERSIONS['4_0_0']],
      operation: [
        {{
          name: 'everything',
          route: '/:id/$everything',
          method: 'GET',
          reference: 'https://www.hl7.org/fhir/patient-operation-everything.html'
        }},
        {{
          name: 'everything',
          route: '/$everything',
          method: 'GET',
          reference: 'https://www.hl7.org/fhir/patient-operation-everything.html'
        }},
        {{
          name: 'everything',
          route: '/:id/$everything',
          method: 'DELETE',
          reference: 'https://www.hl7.org/fhir/patient-operation-everything.html'
        }},
        {{
          name: 'everything',
          route: '/$everything',
          method: 'DELETE',
          reference: 'https://www.hl7.org/fhir/patient-operation-everything.html'
        }},
        {{
          name: 'merge',
          route: '/:id/$merge',
          method: 'POST',
          reference: 'https://www.hl7.org/fhir/patient-operation-everything.html'
        }},
        {{
          name: 'merge',
          route: '/$merge',
          method: 'POST',
          reference: 'https://www.hl7.org/fhir/patient-operation-everything.html'
        }},
        {{
          name: 'validate',
          route: '/$validate',
          method: 'POST',
          reference: 'https://www.hl7.org/fhir/resource-operation-validate.html'
        }},
        {{
          name: 'validate',
          route: '/:id/$validate',
          method: 'GET',
          reference: 'https://www.hl7.org/fhir/resource-operation-validate.html'
        }},
        {{
          name: 'graph',
          route: '/$graph',
          method: 'POST',
          reference: 'https://www.hl7.org/fhir/resource-operation-graph.html'
        }},
        {{
          name: 'graph',
          route: '/:id/$graph',
          method: 'POST',
          reference: 'https://www.hl7.org/fhir/resource-operation-graph.html'
        }},
        {{
          name: 'graph',
          route: '/$graph',
          method: 'DELETE',
          reference: 'https://www.hl7.org/fhir/resource-operation-graph.html'
        }},
        {{
          name: 'graph',
          route: '/:id/$graph',
          method: 'DELETE',
          reference: 'https://www.hl7.org/fhir/resource-operation-graph.html'
        }},
        {{
          name: 'expand',
          route: '/:id/$expand',
          method: 'GET',
          reference: 'https://www.hl7.org/fhir/patient-operation-everything.html'
        }},
        {{
          name: 'remove_by_query',
          route: '/',
          method: 'DELETE',
          reference: 'https://www.hl7.org/fhir/patient-operation-everything.html'
        }}
      ]
    }},""")
        else:
            print(f"Folder: {resource_folder} already exists")

    print("---- COLLECTION entries -----")
    for key, value in collection_entries.items():
        # print("// Autogenerated by generate_services.py. Do not edit.")
        print(key + ":" + "'" + value + "'" + ",")
    print("---- Config entries -----")
    config_file_name = data_dir.joinpath("../profiles.js")
    with open(config_file_name, "w+") as file:
        file.write("// Autogenerated by generate_services.py. Do not edit.\n")
        file.write("const { VERSIONS } = require('./middleware/fhir/utils/constants');\n")
        file.write("// noinspection SpellCheckingInspection\n")
        file.write("const profiles = {\n")
        for config_entry in config_entries:
            # print(config_entry)
            file.write(config_entry)
        file.write("""
};

module.exports = {
    profiles
};
""")

    return 0


if __name__ == "__main__":
    exit(main())
