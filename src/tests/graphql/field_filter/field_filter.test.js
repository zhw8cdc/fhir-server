const expectedGraphQlWithoutFilterResponse = require('./fixtures/expected_graphql_response_without_filter.json');
const expectedGraphQlWithFilterResponse = require('./fixtures/expected_graphql_response_with_filter.json');

const codeSystem1Resource = require('./fixtures/codeSystem1.json');

const fs = require('fs');
const path = require('path');

// eslint-disable-next-line security/detect-non-literal-fs-filename
const codeSystemQueryWithoutFilter = fs.readFileSync(
    path.resolve(__dirname, './fixtures/query_codesystem_without_filter.graphql'),
    'utf8'
);

// eslint-disable-next-line security/detect-non-literal-fs-filename
const codeSystemQueryWithFilter = fs.readFileSync(
    path.resolve(__dirname, './fixtures/query_codesystem_with_filter.graphql'),
    'utf8'
);

const {
    commonBeforeEach,
    commonAfterEach,
    getHeaders,
    getGraphQLHeaders,
    createTestRequest, getTestContainer,
} = require('../../common');
const {describe, beforeEach, afterEach, test} = require('@jest/globals');
const {cleanMeta} = require('../../customMatchers');

describe('GraphQL CodeSystem Tests', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('GraphQL CodeSystem', () => {
        test('GraphQL Codeset without filter works properly', async () => {
            const request = await createTestRequest();
            const graphqlQueryText = codeSystemQueryWithoutFilter.replace(/\\n/g, '');

            let resp = await request
                .post('/4_0_0/CodeSystem/1/$merge')
                .send(codeSystem1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse([{created: true}, {created: true}]);

            /**
             * @type {SimpleContainer}
             */
            const testContainer = getTestContainer();

            /**
             * @type {PostRequestProcessor}
             */
            const postRequestProcessor = testContainer.postRequestProcessor;
            await postRequestProcessor.waitTillAllRequestsDoneAsync({timeoutInSeconds: 20});
            /**
             * @type {RequestSpecificCache}
             */
            const requestSpecificCache = testContainer.requestSpecificCache;
            await requestSpecificCache.clearAllAsync();

            resp = await request
                .post('/graphqlv2')
                .send({
                    operationName: null,
                    variables: {},
                    query: graphqlQueryText,
                })
                .set(getGraphQLHeaders());

            console.log(resp.body);

            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedGraphQlWithoutFilterResponse, r => {
                if (r.codeSystem) {
                    r.codeSystem.forEach(resource => {
                        cleanMeta(resource);
                    });
                }
                return r;
            });
            expect(resp.headers['x-request-id']).toBeDefined();

            // uncomment this to test out timing of events
            // await new Promise(resolve => setTimeout(resolve, 30 * 1000));
        });
        test('GraphQL Codeset with filter works properly', async () => {
            const request = await createTestRequest();
            const graphqlQueryText = codeSystemQueryWithFilter.replace(/\\n/g, '');

            let resp = await request
                .post('/4_0_0/CodeSystem/1/$merge')
                .send(codeSystem1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse([{created: true}, {created: true}]);

            /**
             * @type {SimpleContainer}
             */
            const testContainer = getTestContainer();

            /**
             * @type {PostRequestProcessor}
             */
            const postRequestProcessor = testContainer.postRequestProcessor;
            await postRequestProcessor.waitTillAllRequestsDoneAsync({timeoutInSeconds: 20});
            /**
             * @type {RequestSpecificCache}
             */
            const requestSpecificCache = testContainer.requestSpecificCache;
            await requestSpecificCache.clearAllAsync();

            resp = await request
                .post('/graphqlv2')
                .send({
                    operationName: null,
                    variables: {},
                    query: graphqlQueryText,
                })
                .set(getGraphQLHeaders());

            console.log(resp.body);

            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedGraphQlWithFilterResponse, r => {
                if (r.codeSystem) {
                    r.codeSystem.forEach(resource => {
                        cleanMeta(resource);
                    });
                }
                return r;
            });
            expect(resp.headers['x-request-id']).toBeDefined();

            // uncomment this to test out timing of events
            // await new Promise(resolve => setTimeout(resolve, 30 * 1000));
        });
    });
});