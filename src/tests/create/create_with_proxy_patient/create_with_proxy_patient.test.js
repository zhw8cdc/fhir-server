const env = require('var');

const groupResource1 = require('./fixtures/Group/group1.json')

const patientResource1 = require('./fixtures/Patient/patient1.json')
const patientResource2 = require('./fixtures/Patient/patient2.json')

const personResource1 = require('./fixtures/Person/person1.json')
const personResource2 = require('./fixtures/Person/person2.json')

const observationResource1 = require('./fixtures/Observation/observation1.json')

const expectedGroup1ResourceUsingBWellPerson = require('./expected/expected_group1_using_bwell_person.json')
const expectedGroup1ResourceUsingClientPerson = require('./expected/expected_group1_using_client_person.json')
const expectedGroup1ResourceUsingBWellPatient = require('./expected/expected_group1_using_bwell_patient.json')
const expectedGroup1ResourceUsingClientPatient = require('./expected/expected_group1_using_client_patient.json')

const expectedObservation1ResourceUsingBwellPatient = require('./expected/expected_observation1_using_bwell_patient.json')
const expectedObservation1ResourceUsingBwellPerson = require('./expected/expected_observation1_using_bwell_person.json')
const expectedObservation1ResourceUsingClientPatient = require('./expected/expected_observation1_using_client_patient.json')
const expectedObservation1ResourceUsingClientPerson = require('./expected/expected_observation1_using_client_person.json'
)
const expectedForbiddenObservationResponse = require('./expected/expected_forbidden_observation_response.json')
const expectedForbiddenGroupResponse = require('./expected/expected_forbidden_group_response.json')

const {
    commonBeforeEach,
    commonAfterEach,
    getHeaders,
    createTestRequest,
    getHeadersWithCustomPayload
} = require('../../common');

const { describe, beforeEach, afterEach, test, expect } = require('@jest/globals');
const { patient } = require('../../../middleware/fhir/resources/4_0_0/parameters/account.parameters')

describe('Create with Proxy Patient', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Resource Observation USE_CLIENT_FHIR_PERSON_ID disabled', () => {

        test('Read/Write Observation using Client person as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            observationResource1.subject.reference = `Patient/person.${person2.body.uuid}`;

            await request
                .post('/4_0_0/Observation/')
                .set(headers1)
                .send(observationResource1)
                .expect(201);

            const observationResponse = await request
                .get(`/4_0_0/Observation?patient=person.4f77a49a-d8a8-4153-a2e9-13d6d0b4b301`)
                .set(headers1)
                .expect(200)

            expectedObservation1ResourceUsingClientPerson[0].id = observationResponse.body[0].id
            expectedObservation1ResourceUsingClientPerson[0].identifier[1].value = observationResponse.body[0].identifier[1].value
            expectedObservation1ResourceUsingClientPerson[0].identifier[2].value = observationResponse.body[0].identifier[2].value

            expect(observationResponse).toHaveResponse(expectedObservation1ResourceUsingClientPerson)

        });

        test('Read/Write Observation using Bwell person as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            observationResource1.subject.reference = `Patient/person.${person1.body.uuid}`;

            await request
                .post('/4_0_0/Observation/')
                .set(headers1)
                .send(observationResource1)
                .expect(201);

            const observationResponse = await request
                .get(`/4_0_0/Observation?patient=person.${person1.body.uuid}`)
                .set(headers1)
                .expect(200)

            expectedObservation1ResourceUsingBwellPerson[0].id = observationResponse.body[0].id
            expectedObservation1ResourceUsingBwellPerson[0].identifier[1].value = observationResponse.body[0].identifier[1].value
            expectedObservation1ResourceUsingBwellPerson[0].identifier[2].value = observationResponse.body[0].identifier[2].value

            expect(observationResponse).toHaveResponse(expectedObservation1ResourceUsingBwellPerson)

        });

        test('Read/Write Observation using Bwell patient as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const patient1 = await request
                .post('/4_0_0/Patient/$merge')
                .set(getHeaders())
                .send(patientResource1)
                .expect(200);

            expect(patient1).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            observationResource1.subject.reference = `Patient/${patient1.body.uuid}`;

            await request
                .post('/4_0_0/Observation/')
                .set(headers1)
                .send(observationResource1)
                .expect(201);

            const observationResponse = await request
                .get(`/4_0_0/Observation?patient=${patient1.body.uuid}`)
                .set(headers1)
                .expect(200)

            expectedObservation1ResourceUsingBwellPatient[0].id = observationResponse.body[0].id
            expectedObservation1ResourceUsingBwellPatient[0].identifier[1].value = observationResponse.body[0].identifier[1].value
            expectedObservation1ResourceUsingBwellPatient[0].identifier[2].value = observationResponse.body[0].identifier[2].value

            expect(observationResponse).toHaveResponse(expectedObservation1ResourceUsingBwellPatient)

        });

        test('Read/Write Observation using Client patient as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const patient2 = await request
                .post('/4_0_0/Patient/$merge')
                .set(getHeaders())
                .send(patientResource2)
                .expect(200);

            expect(patient2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: 'clientFhirPerson',
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            observationResource1.subject.reference = `Patient/${patient2.body.uuid}`;

            await request
                .post('/4_0_0/Observation/')
                .set(headers1)
                .send(observationResource1)
                .expect(201);

            const observationResponse = await request
                .get(`/4_0_0/Observation?patient=${patient2.body.uuid}`)
                .set(headers1)
                .expect(200)

            expectedObservation1ResourceUsingClientPatient[0].id = observationResponse.body[0].id
            expectedObservation1ResourceUsingClientPatient[0].identifier[1].value = observationResponse.body[0].identifier[1].value
            expectedObservation1ResourceUsingClientPatient[0].identifier[2].value = observationResponse.body[0].identifier[2].value

            expect(observationResponse).toHaveResponse(expectedObservation1ResourceUsingClientPatient)
        });
    });

    describe('USE_CLIENT_FHIR_PERSON_ID enabled', () => {


        test('Read/Write Observation using Client person as proxy patient', async () => {

            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            let oldValue = env.USE_CLIENT_FHIR_PERSON_ID;
            env.USE_CLIENT_FHIR_PERSON_ID = '1';

            observationResource1.subject.reference = `Patient/person.${person2.body.uuid}`;

            await request
                .post('/4_0_0/Observation/')
                .set(headers1)
                .send(observationResource1)
                .expect(201);

            const observationResponse = await request
                .get(`/4_0_0/Observation?patient=person.4f77a49a-d8a8-4153-a2e9-13d6d0b4b301`)
                .set(headers1)
                .expect(200)

            expectedObservation1ResourceUsingClientPerson[0].id = observationResponse.body[0].id
            expectedObservation1ResourceUsingClientPerson[0].identifier[1].value = observationResponse.body[0].identifier[1].value
            expectedObservation1ResourceUsingClientPerson[0].identifier[2].value = observationResponse.body[0].identifier[2].value

            expect(observationResponse).toHaveResponse(expectedObservation1ResourceUsingClientPerson)

            env.USE_CLIENT_FHIR_PERSON_ID = oldValue
        });

        test('Read/Write Observation using Bwell person as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);
            const patient1 = await request
                .post('/4_0_0/Patient/$merge')
                .set(getHeaders())
                .send(patientResource1)
                .expect(200);

            expect(patient1).toHaveMergeResponse({ created: true });

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            let oldValue = env.USE_CLIENT_FHIR_PERSON_ID;
            env.USE_CLIENT_FHIR_PERSON_ID = '1';

            observationResource1.subject.reference = `Patient/person.${person1.body.uuid}`;

            const observation1 = await request
                .post('/4_0_0/Observation/')
                .set(headers1)
                .send(observationResource1)
                .expect(403);

            expect(observation1).toHaveResponse(expectedForbiddenObservationResponse)

            env.USE_CLIENT_FHIR_PERSON_ID = oldValue
        });

        test('Read/Write Observation using Bwell patient as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const patient1 = await request
                .post('/4_0_0/Patient/$merge')
                .set(getHeaders())
                .send(patientResource1)
                .expect(200);

            expect(patient1).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            let oldValue = env.USE_CLIENT_FHIR_PERSON_ID;
            env.USE_CLIENT_FHIR_PERSON_ID = '1';

            observationResource1.subject.reference = `Patient/person.${patient1.body.uuid}`;

            const observation1 = await request
                .post('/4_0_0/Observation/')
                .set(headers1)
                .send(observationResource1)
                .expect(403);

            expect(observation1).toHaveResponse(expectedForbiddenObservationResponse)

            env.USE_CLIENT_FHIR_PERSON_ID = oldValue
        });
        test('Read/Write Observation using Client patient as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const patient2 = await request
                .post('/4_0_0/Patient/$merge')
                .set(getHeaders())
                .send(patientResource2)
                .expect(200);

            expect(patient2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            observationResource1.subject.reference = `Patient/${patient2.body.uuid}`;

            let oldValue = env.USE_CLIENT_FHIR_PERSON_ID;
            env.USE_CLIENT_FHIR_PERSON_ID = '1';

            await request
                .post('/4_0_0/Observation/')
                .set(headers1)
                .send(observationResource1)
                .expect(201);

            const observationResponse = await request
                .get(`/4_0_0/Observation?patient=${patient2.body.uuid}`)
                .set(headers1)
                .expect(200)

            expectedObservation1ResourceUsingClientPatient[0].id = observationResponse.body[0].id
            expectedObservation1ResourceUsingClientPatient[0].identifier[1].value = observationResponse.body[0].identifier[1].value
            expectedObservation1ResourceUsingClientPatient[0].identifier[2].value = observationResponse.body[0].identifier[2].value

            expect(observationResponse).toHaveResponse(expectedObservation1ResourceUsingClientPatient)

            env.USE_CLIENT_FHIR_PERSON_ID = oldValue;
        });
    });

    describe('Resource Group USE_CLIENT_FHIR_PERSON_ID disabled', () => {

        test('Read/Write Group using Client person as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Group/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            groupResource1.member[0].entity.reference = `Patient/person.${person2.body.uuid}`;

            await request
                .post('/4_0_0/Group/')
                .set(headers1)
                .send(groupResource1)
                .expect(201);

            const groupResource = await request
                .get(`/4_0_0/Group?patient=person.${person2.body.uuid}`)
                .set(headers1)
                .expect(200)

            expectedGroup1ResourceUsingClientPerson[0].id = groupResource.body[0].id
            expectedGroup1ResourceUsingClientPerson[0].identifier[0].value = groupResource.body[0].identifier[0].value
            expectedGroup1ResourceUsingClientPerson[0].identifier[1].value = groupResource.body[0].identifier[1].value

            expect(groupResource).toHaveResponse(expectedGroup1ResourceUsingClientPerson)
        });

        test('Read/Write Group using Bwell person as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            groupResource1.member[0].entity.reference = `Patient/person.${person1.body.uuid}`;

            await request
                .post('/4_0_0/Group/')
                .set(headers1)
                .send(groupResource1)
                .expect(201);

            const groupResponse = await request
                .get(`/4_0_0/Group?patient=person.${person1.body.uuid}`)
                .set(headers1)
                .expect(200)

            expectedGroup1ResourceUsingBWellPerson[0].id = groupResponse.body[0].id
            expectedGroup1ResourceUsingBWellPerson[0].identifier[0].value = groupResponse.body[0].identifier[0].value
            expectedGroup1ResourceUsingBWellPerson[0].identifier[1].value = groupResponse.body[0].identifier[1].value

            expect(groupResponse).toHaveResponse(expectedGroup1ResourceUsingBWellPerson)

        });

        test('Read/Write Group using Bwell patient as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const patient1 = await request
                .post('/4_0_0/Patient/$merge')
                .set(getHeaders())
                .send(patientResource1)
                .expect(200);

            expect(patient1).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            groupResource1.member[0].entity.reference = `Patient/${patient1.body.uuid}`;

            await request
                .post('/4_0_0/Group/')
                .set(headers1)
                .send(groupResource1)
                .expect(201);

            const groupResponse = await request
                .get(`/4_0_0/Group?patient=${patient1.body.uuid}`)
                .set(headers1)
                .expect(200)

            expectedGroup1ResourceUsingBWellPatient[0].id = groupResponse.body[0].id
            expectedGroup1ResourceUsingBWellPatient[0].identifier[0].value = groupResponse.body[0].identifier[0].value
            expectedGroup1ResourceUsingBWellPatient[0].identifier[1].value = groupResponse.body[0].identifier[1].value

            expect(groupResponse).toHaveResponse(expectedGroup1ResourceUsingBWellPatient)

        });

        test('Read/Write Group using Client patient as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const patient2 = await request
                .post('/4_0_0/Patient/$merge')
                .set(getHeaders())
                .send(patientResource2)
                .expect(200);

            expect(patient2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: 'clientFhirPerson',
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            groupResource1.member[0].entity.reference = `Patient/${patient2.body.uuid}`;

            await request
                .post('/4_0_0/Group/')
                .set(headers1)
                .send(groupResource1)
                .expect(201);

            const groupResponse = await request
                .get(`/4_0_0/Group?patient=${patient2.body.uuid}`)
                .set(headers1)
                .expect(200)

            expectedGroup1ResourceUsingClientPatient[0].id = groupResponse.body[0].id
            expectedGroup1ResourceUsingClientPatient[0].identifier[0].value = groupResponse.body[0].identifier[0].value
            expectedGroup1ResourceUsingClientPatient[0].identifier[1].value = groupResponse.body[0].identifier[1].value

            expect(groupResponse).toHaveResponse(expectedGroup1ResourceUsingClientPatient)

        });
    });

    describe('Resource Group USE_CLIENT_FHIR_PERSON_ID enabled', () => {

        test('Read/Write Group using Client person as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Group/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            groupResource1.member[0].entity.reference = `Patient/person.${person2.body.uuid}`;

            let oldValue = env.USE_CLIENT_FHIR_PERSON_ID;
            env.USE_CLIENT_FHIR_PERSON_ID = '1';

            await request
                .post('/4_0_0/Group/')
                .set(headers1)
                .send(groupResource1)
                .expect(201);

            const groupResponse = await request
                .get(`/4_0_0/Group?patient=person.${person2.body.uuid}`)
                .set(headers1)
                .expect(200)

            expectedGroup1ResourceUsingClientPerson[0].id = groupResponse.body[0].id
            expectedGroup1ResourceUsingClientPerson[0].identifier[0].value = groupResponse.body[0].identifier[0].value
            expectedGroup1ResourceUsingClientPerson[0].identifier[1].value = groupResponse.body[0].identifier[1].value

            expect(groupResponse).toHaveResponse(expectedGroup1ResourceUsingClientPerson)

            env.USE_CLIENT_FHIR_PERSON_ID = oldValue;
        });

        test('Read/Write Group using Bwell person as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            groupResource1.member[0].entity.reference = `Patient/person.${person1.body.uuid}`;

            let oldValue = env.USE_CLIENT_FHIR_PERSON_ID;
            env.USE_CLIENT_FHIR_PERSON_ID = '1';

            const group1 = await request
                .post('/4_0_0/Group/')
                .set(headers1)
                .send(groupResource1)
                .expect(403);

            expect(group1).toHaveResponse(expectedForbiddenGroupResponse);

            env.USE_CLIENT_FHIR_PERSON_ID = oldValue

        });

        test('Read/Write Group using Bwell patient as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const patient1 = await request
                .post('/4_0_0/Patient/$merge')
                .set(getHeaders())
                .send(patientResource1)
                .expect(200);

            expect(patient1).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            groupResource1.member[0].entity.reference = `Patient/${patient1.body.uuid}`;

            let oldValue = env.USE_CLIENT_FHIR_PERSON_ID;
            env.USE_CLIENT_FHIR_PERSON_ID = '1';

            const group1 = await request
                .post('/4_0_0/Group/')
                .set(headers1)
                .send(groupResource1)
                .expect(403);

            expect(group1).toHaveResponse(expectedForbiddenGroupResponse);

            env.USE_CLIENT_FHIR_PERSON_ID = oldValue;
        });

        test('Read/Write Group using Client patient as proxy patient', async () => {
            const request = await createTestRequest();

            const person1 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource1)
                .expect(200);

            expect(person1).toHaveMergeResponse({ created: true });

            const person2 = await request
                .post('/4_0_0/Person/$merge')
                .set(getHeaders())
                .send(personResource2)
                .expect(200);

            expect(person2).toHaveMergeResponse({ created: true });

            const patient2 = await request
                .post('/4_0_0/Patient/$merge')
                .set(getHeaders())
                .send(patientResource2)
                .expect(200);

            expect(patient2).toHaveMergeResponse({ created: true });

            const person_payload = {
                scope: 'patient/*.* user/*.* access/*.*',
                username: 'patient-123@example.com',
                clientFhirPersonId: person2.body.uuid,
                clientFhirPatientId: 'clientFhirPatient',
                bwellFhirPersonId: person1.body.uuid,
                bwellFhirPatientId: 'bwellFhirPatient',
                token_use: 'access'
            };

            const headers1 = getHeadersWithCustomPayload(person_payload);

            groupResource1.member[0].entity.reference = `Patient/${patient2.body.uuid}`;

            let oldValue = env.USE_CLIENT_FHIR_PERSON_ID;
            env.USE_CLIENT_FHIR_PERSON_ID = '1';

            await request
                .post('/4_0_0/Group/')
                .set(headers1)
                .send(groupResource1)
                .expect(201);

            const groupResponse = await request
                .get(`/4_0_0/Group?patient=${patient2.body.uuid}`)
                .set(headers1)
                .expect(200)

            expectedGroup1ResourceUsingClientPatient[0].id = groupResponse.body[0].id
            expectedGroup1ResourceUsingClientPatient[0].identifier[0].value = groupResponse.body[0].identifier[0].value
            expectedGroup1ResourceUsingClientPatient[0].identifier[1].value = groupResponse.body[0].identifier[1].value

            expect(groupResponse).toHaveResponse(expectedGroup1ResourceUsingClientPatient)

            env.USE_CLIENT_FHIR_PERSON_ID = oldValue;
        });
    });
});