// test file
const observation1Resource = require('./fixtures/Observation/observation1.json');
const observation2Resource = require('./fixtures/Observation/observation2.json');

// expected
const expectedObservationResources = require('./fixtures/expected/expected_observation.json');
const expectedObservationAllResources = require('./fixtures/expected/expected_observation_all.json');

const expectedObservationsInDatabase = require('./fixtures/expected/expected_observation_in_database.json');

const {
    commonBeforeEach,
    commonAfterEach,
    getHeaders,
    createTestRequest,
    getTestContainer,
    getRequestId
} = require('../../common');
const {describe, beforeEach, afterEach, test} = require('@jest/globals');
const {ConfigManager} = require('../../../utils/configManager');
const {IdentifierSystem} = require('../../../utils/identifierSystem');

class MockConfigManager extends ConfigManager {
    get enableGlobalIdSupport() {
        return true;
    }
}

describe('Observation Tests', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Observation merge_with_duplicate_id Tests', () => {
        test('merge_with_duplicate_id adds only one resource with same sourceAssigningAuthority', async () => {
            const request = await createTestRequest((c) => {
                c.register('configManager', () => new MockConfigManager());
                return c;
            });

            const container = getTestContainer();
            // ARRANGE
            // add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Observation/1/$merge?validate=true')
                .send(observation1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            /**
             * @type {PostRequestProcessor}
             */
            const postRequestProcessor = container.postRequestProcessor;
            await postRequestProcessor.waitTillDoneAsync({requestId: getRequestId(resp)});

            resp = await request
                .post('/4_0_0/Observation/1/$merge?validate=true')
                .send(observation2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({updated: true});
            await postRequestProcessor.waitTillDoneAsync({requestId: getRequestId(resp)});

            // check that two entries were stored in the database
            /**
             * @type {MongoDatabaseManager}
             */
            const mongoDatabaseManager = container.mongoDatabaseManager;

            const fhirDb = await mongoDatabaseManager.getClientDbAsync();

            const collection = fhirDb.collection('Observation_4_0_0');
            /**
             * @type {Object[]}
             */
            const results = await collection.find({}).sort({id: 1}).toArray();
            // const resultsJson = JSON.stringify(results);

            expect(results.length).toStrictEqual(1);
            for (const resource of results) {
                delete resource._id;
                delete resource.meta.lastUpdated;
                resource._uuid = '11111111-1111-1111-1111-111111111111';
                resource.identifier
                    .filter(i => i.system === IdentifierSystem.uuid)
                    .forEach(i => {
                            i.value = '11111111-1111-1111-1111-111111111111';
                            return i;
                        }
                    );
            }
            for (const resource of expectedObservationsInDatabase) {
                delete resource._id;
                delete resource.meta.lastUpdated;
                resource._uuid = '11111111-1111-1111-1111-111111111111';
                if (resource.identifier) {
                    resource.identifier
                        .filter(i => i.system === IdentifierSystem.uuid)
                        .forEach(i => {
                                i.value = '11111111-1111-1111-1111-111111111111';
                                return i;
                            }
                        );
                }
            }
            expect(results).toStrictEqual(expectedObservationsInDatabase);

            // ACT & ASSERT
            resp = await request
                .get('/4_0_0/Observation/?_bundle=1&_debug=1')
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedObservationAllResources);

            resp = await request
                .get('/4_0_0/Observation/?_bundle=1&id=1&_security=https://www.icanbwell.com/owner|A')
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedObservationResources);
        });
    });
});
