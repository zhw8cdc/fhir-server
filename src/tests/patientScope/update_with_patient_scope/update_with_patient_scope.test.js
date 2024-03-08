// test file
const person1Resource = require('./fixtures/Person/person1.json');
const condition1Resource = require('./fixtures/Condition/condition1.json');

const {
 commonBeforeEach, commonAfterEach, createTestRequest, getHeadersWithCustomPayload, getHeaders, getTestContainer,
    mockHttpContext
} = require('../../common');
const { describe, beforeEach, afterEach, test, expect } = require('@jest/globals');
const { ConfigManager } = require('../../../utils/configManager');
const deepcopy = require('deepcopy');

const person_payload = {
    'cognito:username': 'patient-123@example.com',
    'custom:bwell_fhir_person_id': 'person1',
    scope: 'patient/Condition.write',
    username: 'patient-123@example.com',
    'custom:clientFhirPersonId': 'clientFhirPerson',
    'custom:clientFhirPatientId': 'clientFhirPatient',
    'custom:bwellFhirPersonId': 'person1',
    'custom:bwellFhirPatientId': 'bwellFhirPatient'
};
const headers = getHeadersWithCustomPayload(person_payload);

class MockConfigManager extends ConfigManager {
    get enableReturnBundle () {
        return true;
    }
}

describe('Condition Tests', () => {
    /**
     * @type {string|undefined}
     */
    let requestId;
    beforeEach(async () => {
        await commonBeforeEach();
        requestId = mockHttpContext();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Condition merge_with_patient_scope Tests', () => {
        test('update_with_patient_scope works', async () => {
            const request = await createTestRequest((c) => {
                c.register('configManager', () => new MockConfigManager());
                return c;
            });

            // ARRANGE
            /** @type {SimpleContainer} */
            const container = getTestContainer();
            // add the resources to FHIR server
            /**
             * @type {PostRequestProcessor}
             */
            const postRequestProcessor = container.postRequestProcessor;
            // insert Person record
            let resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(person1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({ created: true });
            await postRequestProcessor.waitTillDoneAsync({ requestId });

            // first insert with non-patient scope headers
            resp = await request
                .post('/4_0_0/Condition/1/$merge?validate=true')
                .send(condition1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({ created: true });
            await postRequestProcessor.waitTillDoneAsync({ requestId });

            // create a change so we can test the update
            const condition1ResourceWithChange = deepcopy(condition1Resource);
            condition1ResourceWithChange.onsetDateTime = '2022-01-01T00:00:00Z';
            // now try to update with patient scope headers
            resp = await request
                .put('/4_0_0/Condition/14736deef3663a7946a8fde33e67c50d03d903cdd1a46c36a426c47a24fb71f')
                .send(condition1ResourceWithChange)
                .set(headers);
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveStatusCode(200);
            expect(resp.body.meta.versionId).toStrictEqual('2');
        });
        test('update_with_invalid_patient_scope doesn\'t work', async () => {
            const request = await createTestRequest((c) => {
                c.register('configManager', () => new MockConfigManager());
                return c;
            });

            // ARRANGE
            /** @type {SimpleContainer} */
            const container = getTestContainer();
            // add the resources to FHIR server
            /**
             * @type {PostRequestProcessor}
             */
            const postRequestProcessor = container.postRequestProcessor;
            // insert Person record
            let resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(person1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({ created: true });
            await postRequestProcessor.waitTillDoneAsync({ requestId });

            // first insert with non-patient scope headers
            resp = await request
                .post('/4_0_0/Condition/1/$merge?validate=true')
                .send(condition1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({ created: true });
            await postRequestProcessor.waitTillDoneAsync({ requestId });

            const person1_payload = {
                'cognito:username': 'patient-123@example.com',
                'custom:bwell_fhir_person_id': 'person1',
                scope: 'patient/Observation.* user/Condition.write access/*.*',
                username: 'patient-123@example.com',
                'custom:clientFhirPersonId': 'clientFhirPerson',
                'custom:clientFhirPatientId': 'clientFhirPatient',
                'custom:bwellFhirPersonId': 'person1',
                'custom:bwellFhirPatientId': 'bwellFhirPatient'
            };
            const headers1 = getHeadersWithCustomPayload(person1_payload);

            // create a change so we can test the update
            const condition1ResourceWithChange = deepcopy(condition1Resource);
            condition1ResourceWithChange.onsetDateTime = '2022-01-01T00:00:00Z';
            // now try to update with patient scope headers
            resp = await request
                .put('/4_0_0/Condition/14736deef3663a7946a8fde33e67c50d03d903cdd1a46c36a426c47a24fb71f')
                .send(condition1ResourceWithChange)
                .set(headers1);
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveStatusCode(403);
            const body = resp.body;
            expect(body.resourceType).toStrictEqual('OperationOutcome');
            expect(body.issue[0].details.text).toStrictEqual('None of the provided scopes matched an allowed scope.: user patient-123@example.com with scopes [patient/Observation.*] failed access check to [Condition.write]');

            // check version id
            resp = await request
                .get('/4_0_0/Condition/14736deef3663a7946a8fde33e67c50d03d903cdd1a46c36a426c47a24fb71f')
                .set(getHeaders());

            // noinspection JSUnresolvedFunction
            expect(resp).toHaveStatusCode(200);
            expect(resp.body.meta.versionId).toStrictEqual('1');
        });
        test('update_with_patient_scope fails if patient id does not match', async () => {
            const request = await createTestRequest((c) => {
                c.register('configManager', () => new MockConfigManager());
                return c;
            });
            /** @type {SimpleContainer} */
            const container = getTestContainer();
            // add the resources to FHIR server
            /**
             * @type {PostRequestProcessor}
             */
            const postRequestProcessor = container.postRequestProcessor;
            // insert Person record
            let resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(person1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({ created: true });
            await postRequestProcessor.waitTillDoneAsync({ requestId });

            const condition1WithDifferentPatientId = deepcopy(condition1Resource);
            condition1WithDifferentPatientId.subject.reference = 'Patient/2';

            // first insert with non-patient scope headers
            resp = await request
                .post('/4_0_0/Condition/1/$merge?validate=true')
                .send(condition1WithDifferentPatientId)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({ created: true });
            await postRequestProcessor.waitTillDoneAsync({ requestId });

            // create a change so we can test the update
            condition1WithDifferentPatientId.onsetDateTime = '2022-01-01T00:00:00Z';
            // now try to update with patient scope headers
            resp = await request
                .put('/4_0_0/Condition/14736deef3663a7946a8fde33e67c50d03d903cdd1a46c36a426c47a24fb71f')
                .send(condition1WithDifferentPatientId)
                .set(headers);
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveStatusCode(403);
            const body = resp.body;
            expect(body.resourceType).toStrictEqual('OperationOutcome');
            expect(body.issue[0].details.text).toStrictEqual('The current patient scope and person id in the JWT token do not allow writing this resource.')
        });
    });
});
