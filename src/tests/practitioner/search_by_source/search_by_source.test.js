/* eslint-disable no-unused-vars */
const supertest = require('supertest');

const {app} = require('../../../app');
// provider file
const practitionerResource = require('./fixtures/practitioner/practitioner.json');
const practitionerResource2 = require('./fixtures/practitioner/practitioner2.json');
const practitionerResource3 = require('./fixtures/practitioner/practitioner3.json');

// expected
const expectedPractitionerResource = require('./fixtures/expected/expected_practitioner.json');

const request = supertest(app);
const {commonBeforeEach, commonAfterEach, getHeaders} = require('../../common');

describe('search_by_source', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Practitioner Search By Source Tests', () => {
        test('search by source works', async () => {

                let resp = await request
                    .get('/4_0_0/Practitioner')
                    .set(getHeaders())
                    .expect(200);
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

                resp = await request
                    .post('/4_0_0/Practitioner/0/$merge')
                    .send(practitionerResource3)
                    .set(getHeaders())
                    .expect(200);
                console.log('------- response practitionerResource3 ------------');
                console.log(JSON.stringify(resp.body, null, 2));
                console.log('------- end response  ------------');
                expect(resp.body['created']).toBe(true);

                resp = await request
                    .get('/4_0_0/Practitioner')
                    .set(getHeaders())
                    .expect(200);
                console.log('------- response 3 ------------');
                console.log(JSON.stringify(resp.body, null, 2));
                console.log('------- end response 3 ------------');
                expect(resp.body.length).toBe(3);

                resp = await request
                    .get('/4_0_0/Practitioner?_count=500&_getpagesoffset=0&_source=https://thedacare.org&_security=https://www.icanbwell.com/access|medstar')
                    .set(getHeaders())
                    .expect(200);

                console.log('------- response Practitioner sorted ------------');
                console.log(JSON.stringify(resp.body, null, 2));
                console.log('------- end response sort ------------');
                // clear out the lastUpdated column since that changes
                let body = resp.body;
                expect(body.length).toBe(2);
                body.forEach(element => {
                    delete element['meta']['lastUpdated'];
                });
                let expected = expectedPractitionerResource;
                expected.forEach(element => {
                    delete element['meta']['lastUpdated'];
                    delete element['$schema'];
                });
                // expected[0]['meta'] = { 'versionId': '2' };
                expect(body).toStrictEqual(expected);
            },
            30000);
    });
});
