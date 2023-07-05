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
    LENIENT_SEARCH_HANDLING: 'lenient',
    STRICT_SEARCH_HANDLING: 'strict',
    SPECIFIED_QUERY_PARAMS: [
        '_explain', '_debug', '_validate', 'contained', '_hash_references', 'base_version', '_elements',
        '_useAccessIndex', 'active', '_source', '_id', 'onset-date', '_lastUpdated',
        'source', 'id', 'onset_date', '_bundle', '_sort', '_count', '_useTwoStepOptimization',
        '_cursorBatchSize', '_setIndexHint', '_total', '_getpagesoffset', 'resource', '_streamResponse', 'remove',
        'streamResponse', 'team', '_text', '_content', '_list', '_has', '_type', '_include', '_revinclude',
        '_summary', '_contained', '_containedType', '_query', '_filter', '_format', '_pretty', 'role', 'member',
        'onBehalfOf', 'period', 'practitionerId', 'patientId', '_prefer'
    ],
    REQUEST_ID_HEADER: 'x-request-id',
    KAFKA_CONNECTION_HEALTHCHECK_INTERVAL: 30000, // In milliseconds,
    REFERENCE_EXTENSION_DATA_MAP: {
        'display': {
            id: 'referenceDisplay',
            url: 'https://www.icanbwell.com/referenceDisplay',
            valueKey: 'valueString',
        },
        'type': {
            id: 'referenceType',
            url: 'https://www.icanbwell.com/referenceType',
            valueKey: 'valueUri',
        },
    },
    GRIDFS: {
        INSERT: 'INSERT',
        RETRIEVE: 'RETRIEVE',
        DELETE: 'DELETE',
    },
    PATIENT_INITIATED_CONNECTION: [
        'proa'
    ],
    REQUEST_ID_TYPE: {
        USER_REQUEST_ID: 'userRequestId',
        SYSTEM_GENERATED_REQUEST_ID: 'systemGeneratedRequestId',
    }
};
