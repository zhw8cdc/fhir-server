// practice
const locationResource = require('./fixtures/practitioner/location.json');
const organizationResource = require('./fixtures/practitioner/organization.json');
const scheduleResource = require('./fixtures/practitioner/schedule.json');
const healthcareServiceResource = require('./fixtures/practitioner/healthcareService.json');

// graph
const graphDefinitionResource = require('./fixtures/graph/my_graph.json');

// expected
const expectedResource = require('./fixtures/expected/expected.json');
const expectedHashReferencesResource = require('./fixtures/expected/expected_hash_references.json');

const {commonBeforeEach, commonAfterEach, getHeaders, createTestRequest} = require('../../common');
const {describe, beforeEach, afterEach, expect} = require('@jest/globals');
const {assertCompareBundles} = require('../../fhirAsserts');

describe('Practitioner Graph PSS Contained Tests', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Graph Contained PSS Tests', () => {
        test('Graph contained PSS works properly', async () => {
            const request = await createTestRequest();
            let resp = await request
                .get('/4_0_0/Practitioner')
                .set(getHeaders())
                .expect(200);
            expect(resp.body.length).toBe(0);
            console.log('------- response 1 ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response 1 ------------');

            resp = await request
                .post('/4_0_0/Location/1/$merge')
                .send(locationResource)
                .set(getHeaders())
                .expect(200);
            console.log('------- response locationResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Schedule/1/$merge')
                .send(scheduleResource)
                .set(getHeaders())
                .expect(200);
            console.log('------- response scheduleResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Organization/123456/$merge')
                .send(organizationResource)
                .set(getHeaders())
                .expect(200);
            console.log('------- response organizationResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/HealthcareService/123456/$merge')
                .send(healthcareServiceResource)
                .set(getHeaders())
                .expect(200);
            console.log('------- response healthcareServiceResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Organization/$graph?contained=true&id=Medstar-Alias-MPF-MPCR')
                .send(graphDefinitionResource)
                .set(getHeaders());
            console.log('------- response Practitioner 1003059437 $graph ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.statusCode).toStrictEqual(200);
            let body = resp.body;
            assertCompareBundles({
                body: body, expected: expectedResource
            });

            resp = await request
                .post('/4_0_0/Organization/$graph?contained=true&id=Medstar-Alias-MPF-MPCR&_hash_references=true')
                .send(graphDefinitionResource)
                .set(getHeaders())
                .expect(200);

            console.log('------- response Practitioner 1003059437 $graph hashed_references ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            body = resp.body;
            assertCompareBundles({
                body,
                expected: expectedHashReferencesResource
            });
        });
    });
});
