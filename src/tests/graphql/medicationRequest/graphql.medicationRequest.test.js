/* eslint-disable no-unused-vars */
const supertest = require('supertest');

const { app } = require('../../../app');

const expectedGraphQlResponse = require('./fixtures/expected_graphql_response.json');
const patientBundleResource = require('./fixtures/patients.json');
const medicationRequestBundleResource = require('./fixtures/medication_requests.json');
const medicationDispenseBundleResource = require('./fixtures/medication_dispenses.json');

const async = require('async');
const fs = require('fs');
const path = require('path');

// eslint-disable-next-line security/detect-non-literal-fs-filename
const query = fs.readFileSync(path.resolve(__dirname, './fixtures/query.graphql'), 'utf8');

const request = supertest(app);
const {
    commonBeforeEach,
    commonAfterEach,
    getHeaders,
    getGraphQLHeaders,
} = require('../../common');

describe('GraphQL MedicationRequest Tests', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('GraphQL MedicationRequest', () => {
        test('GraphQL get MedicationRequest with dispenses', async () => {
            // noinspection JSUnusedLocalSymbols
            const graphqlQueryText = query.replace(/\\n/g, '');

            await async.waterfall([
                (cb) => // first confirm there are no records
                    request
                        .get('/4_0_0/MedicationRequest')
                        .set(getHeaders())
                        .expect(200, (err, resp) => {
                            expect(resp.body.length).toBe(0);
                            console.log('------- response 1 ------------');
                            console.log(JSON.stringify(resp.body, null, 2));
                            console.log('------- end response 1 ------------');
                            return cb(err, resp);
                        }),
                (results, cb) =>
                    request
                        .post('/4_0_0/Patient/$merge')
                        .send(patientBundleResource)
                        .set(getHeaders())
                        .expect(200, (err, resp) => {
                            console.log('------- response 2 ------------');
                            console.log(JSON.stringify(resp.body, null, 2));
                            console.log('------- end response 2  ------------');
                            return cb(err, resp);
                        }),
                (results, cb) =>
                    request
                        .post('/4_0_0/MedicationRequest/$merge')
                        .send(medicationRequestBundleResource)
                        .set(getHeaders())
                        .expect(200, (err, resp) => {
                            console.log('------- response 3 ------------');
                            console.log(JSON.stringify(resp.body, null, 2));
                            console.log('------- end response 3 ------------');
                            return cb(err, resp);
                        }),
                (results, cb) =>
                    request
                        .post('/4_0_0/MedicationDispense/$merge')
                        .send(medicationDispenseBundleResource)
                        .set(getHeaders())
                        .expect(200, (err, resp) => {
                            console.log('------- response 4 ------------');
                            console.log(JSON.stringify(resp.body, null, 2));
                            console.log('------- end response 4 ------------');
                            return cb(err, resp);
                        }),
                (results, cb) =>
                    request
                        .post('/graphqlv2')
                        .send({
                            'operationName': null,
                            'variables': {},
                            'query': graphqlQueryText
                        })
                        .set(getGraphQLHeaders())
                        .expect(200, cb)
                        .expect((resp) => {
                            let body = resp.body;
                            console.log('------- response graphql ------------');
                            console.log(JSON.stringify(resp.body, null, 2));
                            console.log('------- end response graphql  ------------');
                            if (body.errors) {
                                console.log(body.errors);
                                expect(body.errors).toBeUndefined();
                            }
                            expect(body.data.medicationRequest.entry).toStrictEqual(expectedGraphQlResponse);
                        }, cb),
            ]);
        });
    });
});