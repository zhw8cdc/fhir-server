// This test case contains bwell master person & patient along with client person linked with master person.
// Client person is further linked with 2 patients: 1 client patients & 1 proa patient.
// All patients further have observations resources linked with.
// This file covers all possible scenarios of this data set, including where consent is included & not included.

const masterPersonResource = require('./fixtures/person/master_person.json');
const clientPersonResource = require('./fixtures/person/client_person.json');
const masterPatientResource = require('./fixtures/patient/master_patient.json');
const clientPatientResource = require('./fixtures/patient/client_patient.json');
const proaPatientResource = require('./fixtures/patient/proa_patient.json');
const clientObservationResource = require('./fixtures/observation/client_observation.json');
const proaObservationResource = require('./fixtures/observation/proa_observation.json');

const consentGivenResource = require('./fixtures/consent/consent_given.json');
const consentDeniedResource = require('./fixtures/consent/consent_denied.json');

const {
    commonBeforeEach,
    commonAfterEach,
    getHeaders,
    createTestRequest,
} = require('../../common');
const {describe, beforeEach, afterEach, test} = require('@jest/globals');
const { DatabasePartitionedCursor } = require('../../../dataLayer/databasePartitionedCursor');


const headers = getHeaders('user/*.read access/client.*');
const client1Headers = getHeaders('user/*.read access/client-1.*');

describe('Data sharing test cases for different scenarios', () => {
    const cursorSpy = jest.spyOn(DatabasePartitionedCursor.prototype, 'hint');

    beforeEach(async () => {
        cursorSpy.mockReturnThis();
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Data sharing scenario - 3', () => {
        test('Ref of master person: Get Client patient data only, no proa data as no consent provided', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, masterPatientResource, clientPersonResource, clientPatientResource, proaPatientResource,
                    clientObservationResource, proaObservationResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .get('/4_0_0/Observation?patient=Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57')
                .set(headers);
            const respIds = resp.body.map(item => item.id);

            expect(respIds.length).toEqual(1);
            expect(respIds).toEqual(expect.arrayContaining([clientObservationResource.id]));
        });

        test('Ref of master person: Get Client patient data only, no proa data as consent denied provided', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, masterPatientResource, clientPersonResource, clientPatientResource, proaPatientResource,
                    clientObservationResource, proaObservationResource, consentDeniedResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .get('/4_0_0/Observation?patient=Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57')
                .set(headers);
            const respIds = resp.body.map(item => item.id);

            expect(respIds.length).toEqual(1);
            expect(respIds).toEqual(expect.arrayContaining([clientObservationResource.id]));
        });

        test('Ref of master person: Get Client patient & proa patient data, consent provided', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, masterPatientResource, clientPersonResource, clientPatientResource, proaPatientResource,
                    clientObservationResource, proaObservationResource, consentGivenResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .get('/4_0_0/Observation?patient=Patient/person.08f1b73a-e27c-456d-8a61-277f164a9a57')
                .set(headers);
            const respIds = resp.body.map(item => item.id);

            expect(respIds.length).toEqual(2);
            expect(respIds).toEqual(expect.arrayContaining([
                clientObservationResource.id, proaObservationResource.id
            ]));
        });

        test('Ref of client person: Get client only, when consent not provided', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, masterPatientResource, clientPersonResource, clientPatientResource, proaPatientResource,
                    clientObservationResource, proaObservationResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .get('/4_0_0/Observation?patient=Patient/person.c12345')
                .set(headers);
            const respIds = resp.body.map(item => item.id);

            expect(respIds.length).toEqual(1);
            expect(respIds).toEqual(expect.arrayContaining([clientObservationResource.id]));
        });

        test('Ref of client person: Get client only, when consent denied provided', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, masterPatientResource, clientPersonResource, clientPatientResource, proaPatientResource,
                    clientObservationResource, proaObservationResource, consentDeniedResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .get('/4_0_0/Observation?patient=Patient/person.c12345')
                .set(headers);
            const respIds = resp.body.map(item => item.id);

            expect(respIds.length).toEqual(1);
            expect(respIds).toEqual(expect.arrayContaining([clientObservationResource.id]));
        });

        test('Ref of client person: Get client & proa data both, when consent provided', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, masterPatientResource, clientPersonResource, clientPatientResource, proaPatientResource,
                    clientObservationResource, proaObservationResource, consentGivenResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .get('/4_0_0/Observation?patient=Patient/person.c12345')
                .set(headers);
            const respIds = resp.body.map(item => item.id);

            expect(respIds.length).toEqual(2);
            expect(respIds).toEqual(expect.arrayContaining(
                [clientObservationResource.id, proaObservationResource.id]
            ));
        });

        test('Ref of client person: Different access token: No data should be there', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, masterPatientResource, clientPersonResource, clientPatientResource, proaPatientResource,
                    clientObservationResource, proaObservationResource, consentGivenResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .get('/4_0_0/Observation?patient=Patient/person.c12345')
                .set(client1Headers);
            const respIds = resp.body.map(item => item.id);

            expect(respIds.length).toEqual(0);
        });

        test('Ref of client patient: Only data of client patient must be returned, regardless of consent', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, masterPatientResource, clientPersonResource, clientPatientResource, proaPatientResource,
                    clientObservationResource, proaObservationResource, consentGivenResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .get('/4_0_0/Observation?patient=Patient/bb7862e6-b7ac-470e-bde3-e85cee9d1ce6')
                .set(headers);
            const respIds = resp.body.map(item => item.id);

            expect(respIds.length).toEqual(1);
            expect(respIds).toEqual(expect.arrayContaining([clientObservationResource.id]));
        });

        test('Ref of proa patient: Get no data when no consent provided', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, masterPatientResource, clientPersonResource, clientPatientResource, proaPatientResource,
                    clientObservationResource, proaObservationResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .get('/4_0_0/Observation?patient=Patient/fde7f82b-b1e4-4a25-9a58-83b6921414cc')
                .set(headers);
            const respIds = resp.body.map(item => item.id);

            expect(respIds.length).toEqual(0);
        });

        test('Ref of proa patient: Get no data when consent denied provided', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, masterPatientResource, clientPersonResource, clientPatientResource, proaPatientResource,
                    clientObservationResource, proaObservationResource, consentDeniedResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .get('/4_0_0/Observation?patient=Patient/fde7f82b-b1e4-4a25-9a58-83b6921414cc')
                .set(headers);
            const respIds = resp.body.map(item => item.id);

            expect(respIds.length).toEqual(0);
        });

        test('Ref of proa patient: Get proa data only, when consent provided', async () => {
            const request = await createTestRequest((c) => {
                return c;
            });

            // Add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge')
                .send([masterPersonResource, masterPatientResource, clientPersonResource, clientPatientResource, proaPatientResource,
                    clientObservationResource, proaObservationResource, consentGivenResource])
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .get('/4_0_0/Observation?patient=Patient/fde7f82b-b1e4-4a25-9a58-83b6921414cc')
                .set(headers);
            const respIds = resp.body.map(item => item.id);

            expect(respIds.length).toEqual(1);
            expect(respIds).toEqual(expect.arrayContaining([proaObservationResource.id]));
        });
    });
});
