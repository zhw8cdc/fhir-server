// provider file
const practitionerResource = require('./fixtures/practitioner/practitioner.json');
const practitionerResource2 = require('./fixtures/practitioner/practitioner2.json');

// expected
const expectedSinglePractitionerResource = require('./fixtures/expected/expected_single_practitioner.json');

const {
    commonBeforeEach,
    commonAfterEach,
    getHeaders,
    createTestRequest,
} = require('../../common');
const { describe, beforeEach, afterEach, expect, test } = require('@jest/globals');

describe('PractitionerReturnIdTests', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Practitioner Search By Id Above Tests', () => {
        test('search by single id above works', async () => {
            const request = await createTestRequest();
            let resp = await request.get('/4_0_0/Practitioner').set(getHeaders()).expect(200);
            expect(resp.body.length).toBe(0);
            console.log('------- response 1 ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response 1 ------------');
            resp = await request
                .post('/4_0_0/Practitioner/1679033641/$merge?validate=true')
                .send(practitionerResource)
                .set(getHeaders())
                .expect(200);
            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);

            resp = await request
                .post('/4_0_0/Practitioner/0/$merge')
                .send(practitionerResource2)
                .set(getHeaders())
                .expect(200);
            console.log('------- response practitionerResource ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response  ------------');
            expect(resp.body['created']).toBe(true);
            resp = await request.get('/4_0_0/Practitioner').set(getHeaders()).expect(200);
            console.log('------- response 3 ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response 3 ------------');
            resp = await request
                .get('/4_0_0/Practitioner/?id:above=0&_count=10&_getpagesoffset=0&_bundle=true')
                .set(getHeaders())
                .expect(200);
            console.log('------- response Practitioner sorted ------------');
            console.log(JSON.stringify(resp.body, null, 2));
            console.log('------- end response sort ------------');
            // clear out the lastUpdated column since that changes
            let body = resp.body;
            expect(body.entry.length).toBe(1);
            delete body.timestamp;
            body.entry.forEach((element) => {
                delete element['resource']['meta']['lastUpdated'];
            });
            let expected = expectedSinglePractitionerResource;
            expected.entry.forEach((element) => {
                delete element['resource']['meta']['lastUpdated'];
                delete element['resource']['$schema'];
            });
            expect(body).toStrictEqual(expected);
        });
    });
});
