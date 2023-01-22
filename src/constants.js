/**
 * @name exports
 * @summary Some constants used throughout the app
 */
module.exports = {
    CLIENT: 'client',
    CLIENT_DB: 'client_db',
    AUDIT_EVENT_CLIENT: 'auditEventClient',
    AUDIT_EVENT_CLIENT_DB: 'auditEventClient_db',
    COLLECTION: {
        ACCOUNT: 'Account',
        ACTIVITYDEFINITION: 'ActivityDefinition',
        ADVERSEEVENT: 'AdverseEvent',
        ALLERGYINTOLERANCE: 'AllergyIntolerance',
        APPOINTMENT: 'Appointment',
        APPOINTMENTRESPONSE: 'AppointmentResponse',
        AUDITEVENT: 'AuditEvent',
        BASIC: 'Basic',
        BINARY: 'Binary',
        BIOLOGICALLYDERIVEDPRODUCT: 'BiologicallyDerivedProduct',
        BODYSTRUCTURE: 'BodyStructure',
        BUNDLE: 'Bundle',
        CAPABILITYSTATEMENT: 'CapabilityStatement',
        CAREPLAN: 'CarePlan',
        CARETEAM: 'CareTeam',
        CATALOGENTRY: 'CatalogEntry',
        CHARGEITEM: 'ChargeItem',
        CHARGEITEMDEFINITION: 'ChargeItemDefinition',
        CLAIM: 'Claim',
        CLAIMRESPONSE: 'ClaimResponse',
        CLINICALIMPRESSION: 'ClinicalImpression',
        CODESYSTEM: 'CodeSystem',
        COMMUNICATION: 'Communication',
        COMMUNICATIONREQUEST: 'CommunicationRequest',
        COMPARTMENTDEFINITION: 'CompartmentDefinition',
        COMPOSITION: 'Composition',
        CONCEPTMAP: 'ConceptMap',
        CONDITION: 'Condition',
        CONSENT: 'Consent',
        CONTRACT: 'Contract',
        COVERAGE: 'Coverage',
        COVERAGEELIGIBILITYREQUEST: 'CoverageEligibilityRequest',
        COVERAGEELIGIBILITYRESPONSE: 'CoverageEligibilityResponse',
        DETECTEDISSUE: 'DetectedIssue',
        DEVICE: 'Device',
        DEVICEDEFINITION: 'DeviceDefinition',
        DEVICEMETRIC: 'DeviceMetric',
        DEVICEREQUEST: 'DeviceRequest',
        DEVICEUSESTATEMENT: 'DeviceUseStatement',
        DIAGNOSTICREPORT: 'DiagnosticReport',
        DOCUMENTMANIFEST: 'DocumentManifest',
        DOCUMENTREFERENCE: 'DocumentReference',
        EFFECTEVIDENCESYNTHESIS: 'EffectEvidenceSynthesis',
        ENCOUNTER: 'Encounter',
        ENDPOINT: 'Endpoint',
        ENROLLMENTREQUEST: 'EnrollmentRequest',
        ENROLLMENTRESPONSE: 'EnrollmentResponse',
        EPISODEOFCARE: 'EpisodeOfCare',
        EVENTDEFINITION: 'EventDefinition',
        EVIDENCE: 'Evidence',
        EVIDENCEVARIABLE: 'EvidenceVariable',
        EXAMPLESCENARIO: 'ExampleScenario',
        EXPLANATIONOFBENEFIT: 'ExplanationOfBenefit',
        FAMILYMEMBERHISTORY: 'FamilyMemberHistory',
        FLAG: 'Flag',
        GOAL: 'Goal',
        GRAPHDEFINITION: 'GraphDefinition',
        GROUP: 'Group',
        GUIDANCERESPONSE: 'GuidanceResponse',
        HEALTHCARESERVICE: 'HealthcareService',
        IMAGINGSTUDY: 'ImagingStudy',
        IMMUNIZATION: 'Immunization',
        IMMUNIZATIONEVALUATION: 'ImmunizationEvaluation',
        IMMUNIZATIONRECOMMENDATION: 'ImmunizationRecommendation',
        IMPLEMENTATIONGUIDE: 'ImplementationGuide',
        INSURANCEPLAN: 'InsurancePlan',
        INVOICE: 'Invoice',
        LIBRARY: 'Library',
        LINKAGE: 'Linkage',
        LIST: 'List',
        LOCATION: 'Location',
        MEASURE: 'Measure',
        MEASUREREPORT: 'MeasureReport',
        MEDIA: 'Media',
        MEDICATION: 'Medication',
        MEDICATIONADMINISTRATION: 'MedicationAdministration',
        MEDICATIONDISPENSE: 'MedicationDispense',
        MEDICATIONKNOWLEDGE: 'MedicationKnowledge',
        MEDICATIONREQUEST: 'MedicationRequest',
        MEDICATIONSTATEMENT: 'MedicationStatement',
        MEDICINALPRODUCT: 'MedicinalProduct',
        MEDICINALPRODUCTAUTHORIZATION: 'MedicinalProductAuthorization',
        MEDICINALPRODUCTCONTRAINDICATION: 'MedicinalProductContraindication',
        MEDICINALPRODUCTINDICATION: 'MedicinalProductIndication',
        MEDICINALPRODUCTINGREDIENT: 'MedicinalProductIngredient',
        MEDICINALPRODUCTINTERACTION: 'MedicinalProductInteraction',
        MEDICINALPRODUCTMANUFACTURED: 'MedicinalProductManufactured',
        MEDICINALPRODUCTPACKAGED: 'MedicinalProductPackaged',
        MEDICINALPRODUCTPHARMACEUTICAL: 'MedicinalProductPharmaceutical',
        MEDICINALPRODUCTUNDESIRABLEEFFECT: 'MedicinalProductUndesirableEffect',
        MESSAGEDEFINITION: 'MessageDefinition',
        MESSAGEHEADER: 'MessageHeader',
        MOLECULARSEQUENCE: 'MolecularSequence',
        NAMINGSYSTEM: 'NamingSystem',
        NUTRITIONORDER: 'NutritionOrder',
        OBSERVATION: 'Observation',
        OBSERVATIONDEFINITION: 'ObservationDefinition',
        OPERATIONDEFINITION: 'OperationDefinition',
        OPERATIONOUTCOME: 'OperationOutcome',
        ORGANIZATION: 'Organization',
        ORGANIZATIONAFFILIATION: 'OrganizationAffiliation',
        PARAMETERS: 'Parameters',
        PATIENT: 'Patient',
        PAYMENTNOTICE: 'PaymentNotice',
        PAYMENTRECONCILIATION: 'PaymentReconciliation',
        PERSON: 'Person',
        PLANDEFINITION: 'PlanDefinition',
        PRACTITIONER: 'Practitioner',
        PRACTITIONERROLE: 'PractitionerRole',
        PROCEDURE: 'Procedure',
        PROVENANCE: 'Provenance',
        QUESTIONNAIRE: 'Questionnaire',
        QUESTIONNAIRERESPONSE: 'QuestionnaireResponse',
        RELATEDPERSON: 'RelatedPerson',
        REQUESTGROUP: 'RequestGroup',
        RESEARCHDEFINITION: 'ResearchDefinition',
        RESEARCHELEMENTDEFINITION: 'ResearchElementDefinition',
        RESEARCHSTUDY: 'ResearchStudy',
        RESEARCHSUBJECT: 'ResearchSubject',
        RISKASSESSMENT: 'RiskAssessment',
        RISKEVIDENCESYNTHESIS: 'RiskEvidenceSynthesis',
        SCHEDULE: 'Schedule',
        SEARCHPARAMETER: 'SearchParameter',
        SERVICEREQUEST: 'ServiceRequest',
        SLOT: 'Slot',
        SPECIMEN: 'Specimen',
        SPECIMENDEFINITION: 'SpecimenDefinition',
        STRUCTUREDEFINITION: 'StructureDefinition',
        STRUCTUREMAP: 'StructureMap',
        SUBSCRIPTION: 'Subscription',
        SUBSTANCE: 'Substance',
        SUBSTANCENUCLEICACID: 'SubstanceNucleicAcid',
        SUBSTANCEPOLYMER: 'SubstancePolymer',
        SUBSTANCEPROTEIN: 'SubstanceProtein',
        SUBSTANCEREFERENCEINFORMATION: 'SubstanceReferenceInformation',
        SUBSTANCESOURCEMATERIAL: 'SubstanceSourceMaterial',
        SUBSTANCESPECIFICATION: 'SubstanceSpecification',
        SUPPLYDELIVERY: 'SupplyDelivery',
        SUPPLYREQUEST: 'SupplyRequest',
        TASK: 'Task',
        TERMINOLOGYCAPABILITIES: 'TerminologyCapabilities',
        TESTREPORT: 'TestReport',
        TESTSCRIPT: 'TestScript',
        VALUESET: 'ValueSet',
        VERIFICATIONRESULT: 'VerificationResult',
        VISIONPRESCRIPTION: 'VisionPrescription',
        CLIENT: 'Client',
    },
    KAFKA_CONNECTION_HEALTHCHECK_INTERVAL: 30000, // In milliseconds
};
