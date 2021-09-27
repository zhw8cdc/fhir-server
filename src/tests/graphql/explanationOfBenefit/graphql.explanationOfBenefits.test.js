/* eslint-disable no-unused-vars */
const supertest = require('supertest');

const {app} = require('../../../app');
const explanationOfBenefitBundleResource = require('./fixtures/explanation_of_benefits.json');
const expectedExplanationOfBenefitBundleResource = require('./fixtures/expected_explanation_of_benefits.json');

const patientBundleResource = require('./fixtures/patients.json');
const organizationBundleResource = require('./fixtures/organizations.json');

const fs = require('fs');
const path = require('path');

// eslint-disable-next-line security/detect-non-literal-fs-filename
const explanationOfBenefitQuery = fs.readFileSync(path.resolve(__dirname, './fixtures/query.graphql'), 'utf8');

const async = require('async');

const request = supertest(app);
const {
    commonBeforeEach,
    commonAfterEach,
    getHeaders,
    getUnAuthenticatedHeaders,
    getGraphQLHeaders
} = require('../../common');

describe('GraphQL ExplanationOfBenefit Tests', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('GraphQL ExplanationOfBenefit', () => {
        test('GraphQL ExplanationOfBenefit properly', async () => {
            // noinspection JSUnusedLocalSymbols
            // const graphqlQueryText = '{ explanationOfBenefits { id identifier { system type { coding { code display system } text } value } meta { source versionId security { system code } tag { system code } } careTeam { sequence provider { reference } } diagnosis { sequence diagnosisCodeableConcept { coding { system code version } text } packageCode { coding { system version } } type { coding { code system } } } insurance { focal coverage { reference } } insurer { reference } item { adjudication { amount { value } category { coding { code display system } } } id locationCodeableConcept { coding { code system } } modifier { coding { system code } } productOrService { coding { system code } text } quantity { system code } revenue { coding { system code } } servicedPeriod { start end } } outcome payee { type { coding { system code } } party { reference } } procedure { sequence procedureCodeableConcept { coding { system code } } } provider { reference } resourceType status supportingInfo { sequence category { coding { system code } } } type { coding { system code } } use patient { id name { family } } } }';
            const graphqlQueryText = explanationOfBenefitQuery.replace(/\\n/g, '').replace('query ', '');
            await async.waterfall([
                (cb) => // first confirm there are no records
                    request
                        .get('/4_0_0/ExplanationOfBenefit')
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
                        .post('/4_0_0/Patient/1/$merge')
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
                        .post('/4_0_0/Organization/1/$merge')
                        .send(organizationBundleResource)
                        .set(getHeaders())
                        .expect(200, (err, resp) => {
                            console.log('------- response 2 ------------');
                            console.log(JSON.stringify(resp.body, null, 2));
                            console.log('------- end response 2  ------------');
                            return cb(err, resp);
                        }),
                (results, cb) =>
                    request
                        .post('/4_0_0/ExplanationOfBenefit/1/$merge')
                        .send(explanationOfBenefitBundleResource)
                        .set(getHeaders())
                        .expect(200, (err, resp) => {
                            console.log('------- response 2 ------------');
                            console.log(JSON.stringify(resp.body, null, 2));
                            console.log('------- end response 2  ------------');
                            return cb(err, resp);
                        }),
                (results, cb) =>
                    request
                        .get('/4_0_0/Patient/')
                        .set(getHeaders())
                        .expect(200, (err, resp) => {
                            console.log('------- response patient ------------');
                            console.log(JSON.stringify(resp.body, null, 2));
                            console.log('------- end response patient  ------------');
                            return cb(err, resp);
                        }),
                (results, cb) =>
                    request
                        .get('/4_0_0/ExplanationOfBenefit/')
                        .set(getHeaders())
                        .expect(200, (err, resp) => {
                            console.log('------- response 2 ------------');
                            console.log(JSON.stringify(resp.body, null, 2));
                            console.log('------- end response 2  ------------');
                            return cb(err, resp);
                        }),
                (results, cb) => request
                    // .get('/graphql/?query=' + graphqlQueryText)
                    // .set(getHeaders())
                    .post('/graphql')
                    .send({
                        'operationName': null,
                        'variables': {},
                        'query': graphqlQueryText
                    })
                    .set(getGraphQLHeaders())
                    .expect(200, cb)
                    .expect((resp) => {
                        // clear out the lastUpdated column since that changes
                        let body = resp.body;
                        console.log('------- response graphql ------------');
                        console.log(JSON.stringify(resp.body, null, 2));
                        console.log('------- end response graphql  ------------');
                        expect(body.data.explanationOfBenefits.length).toBe(2);
                        let expected = expectedExplanationOfBenefitBundleResource;
                        expected.forEach(element => {
                            if ('meta' in element) {
                                delete element['meta']['lastUpdated'];
                            }
                            // element['meta'] = {'versionId': '1'};
                            if ('$schema' in element) {
                                delete element['$schema'];
                            }
                        });
                        expect(body.data.explanationOfBenefits).toStrictEqual(expected);
                    }, cb),
            ]);
        });
    });
});