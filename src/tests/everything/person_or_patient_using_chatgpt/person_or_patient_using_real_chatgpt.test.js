// test file
require('dotenv').config();

const topLevelPersonResource = require('./fixtures/Person/topLevelPerson.json');
const person1Resource = require('./fixtures/Person/person1.json');
const person2Resource = require('./fixtures/Person/person2.json');

const patient1Resource = require('./fixtures/Patient/patient1.json');
const patient2Resource = require('./fixtures/Patient/patient2.json');

const observation1Resource = require('./fixtures/Observation/observation1.json');
const observation2Resource = require('./fixtures/Observation/observation2.json');

const condition1Resource = require('./fixtures/Condition/condition1.json');
const condition2Resource = require('./fixtures/Condition/condition2.json');

const expectedPatientBundle = require('./fixtures/expected/expected_Patient_bundle.json');
const expectedPatient = require('./fixtures/expected/expected_Patient.json');
const expectedPatientHeartDiseaseResources = require('./fixtures/expected/expected_Patient_heart_disease.json');

const {commonBeforeEach, commonAfterEach, getHeaders, createTestRequest, getTestContainer} = require('../../common');
const {describe, beforeEach, afterEach, test} = require('@jest/globals');
const {ConfigManager} = require('../../../utils/configManager');

// const describeIf = process.env.OPENAI_API_KEY ? describe : describe.skip;

class MockConfigManager extends ConfigManager {
    get writeFhirSummaryToVectorStore() {
        return true;
    }

    get enableMemoryVectorStore() {
        return true;
    }
}

describe('Person and Patient real chatgpt Tests', () => {
    beforeEach(async () => {
        await commonBeforeEach();
    });

    afterEach(async () => {
        await commonAfterEach();
    });

    describe('Person and Patient chatgpt Tests', () => {
        test('Patient with age question', async () => {
            console.log(`OPENAI_API_KEY=${process.env.OPENAI_API_KEY}`);
            if (!process.env.OPENAI_API_KEY) {
                return;
            }
            const request = await createTestRequest((container) => {
                container.register('configManager', () => new MockConfigManager());
                return container;
            });

            const container = getTestContainer();
            /**
             * @type {MemoryVectorStoreManager}
             */
            const memoryVectorStoreManager = container.memoryVectorStoreManager;
            await memoryVectorStoreManager.clearAsync();
            // ARRANGE
            // add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(topLevelPersonResource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(person1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});


            resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(person2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Patient/1/$merge?validate=true')
                .send(patient1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Patient/1/$merge?validate=true')
                .send(patient2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});


            resp = await request
                .post('/4_0_0/Observation/1/$merge?validate=true')
                .send(observation1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Observation/1/$merge?validate=true')
                .send(observation2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Condition/1/$merge?validate=true')
                .send(condition1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Condition/2/$merge?validate=true')
                .send(condition2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            /**
             * @type {SimpleContainer}
             */
            const testContainer = getTestContainer();

            /**
             * @type {PostRequestProcessor}
             */
            const postRequestProcessor = testContainer.postRequestProcessor;
            await postRequestProcessor.waitTillAllRequestsDoneAsync({timeoutInSeconds: 20});

            const urlEncodedQuestion = encodeURIComponent("What is this patient's date of birth?");

            resp = await request
                .get(`/4_0_0/Patient/patient1/?_question=${urlEncodedQuestion}&_debug=1`)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPatient, (resource) => {
                if (resource.text && resource.text.div && resource.text.div.indexOf('December 31, 2016') >= 0) {
                    // handle the slight variations that ChatGPT produces
                    resource.text.div = '<div class="answer"><p>Birth Date: December 31, 2016</p></div>';
                }
                const currentDate = new Date().toISOString().split('T')[0];

                if (resource.text && resource.text.extension && resource.text.extension && resource.text.extension.length > 0) {
                    const extension = resource.text.extension.find(e => e.url === 'http://www.icanbwell.com/prompt');
                    if (extension && extension.valueString) {
                        extension.valueString = extension.valueString.replace(currentDate, '2023-08-22');
                    }
                }
                return resource;
            });


            // ACT & ASSERT
            // First get patient everything
            resp = await request
                .get(`/4_0_0/Patient/patient1/$everything?_question=${urlEncodedQuestion}`)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPatientBundle, (resource) => {
                if (resource.text && resource.text.div && resource.text.div.indexOf('December 31, 2016') >= 0) {
                    // handle the slight variations that ChatGPT produces
                    resource.text.div = '<div class="answer"><p>Birth Date: December 31, 2016</p></div>';
                }
                const currentDate = new Date().toISOString().split('T')[0];
                if (resource.text && resource.text.extension && resource.text.extension && resource.text.extension.length > 0) {
                    const extension = resource.text.extension.find(e => e.url === 'http://www.icanbwell.com/prompt');
                    if (extension && extension.valueString) {
                        extension.valueString = extension.valueString.replace(currentDate, '2023-08-22');
                    }
                }
                return resource;
            });

        }, 120000);
        test('Patient with heart disease question', async () => {
            if (!process.env.OPENAI_API_KEY) {
                return;
            }
            const request = await createTestRequest((container) => {
                container.register('configManager', () => new MockConfigManager());
                return container;
            });
            const container = getTestContainer();
            /**
             * @type {MemoryVectorStoreManager}
             */
            const memoryVectorStoreManager = container.memoryVectorStoreManager;
            await memoryVectorStoreManager.clearAsync();

            // ARRANGE
            // add the resources to FHIR server
            let resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(topLevelPersonResource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(person1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Person/1/$merge?validate=true')
                .send(person2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Patient/1/$merge?validate=true')
                .send(patient1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Patient/1/$merge?validate=true')
                .send(patient2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});


            resp = await request
                .post('/4_0_0/Observation/1/$merge?validate=true')
                .send(observation1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Observation/1/$merge?validate=true')
                .send(observation2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Condition/1/$merge?validate=true')
                .send(condition1Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            resp = await request
                .post('/4_0_0/Condition/2/$merge?validate=true')
                .send(condition2Resource)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveMergeResponse({created: true});

            /**
             * @type {SimpleContainer}
             */
            const testContainer = getTestContainer();

            /**
             * @type {PostRequestProcessor}
             */
            const postRequestProcessor = testContainer.postRequestProcessor;
            await postRequestProcessor.waitTillAllRequestsDoneAsync({timeoutInSeconds: 20});

            // ACT & ASSERT
            const urlEncodedQuestion2 = encodeURIComponent('Does this patient have heart disease?');
            resp = await request
                .get(`/4_0_0/Patient/patient1/$everything?_question=${urlEncodedQuestion2}&_debug=1`)
                .set(getHeaders());
            // noinspection JSUnresolvedFunction
            expect(resp).toHaveResponse(expectedPatientHeartDiseaseResources, (resource) => {
                const currentDate = new Date().toISOString().split('T')[0];
                if (resource.text && resource.text.div && resource.text.div.indexOf('heart') >= 0) {
                    // handle the slight variations that ChatGPT produces
                    resource.text.div = 'The text suggests that the patient has a heart condition, specifically heart failure, ' +
                        'although it is unspecified.';
                }
                if (resource.text && resource.text.extension && resource.text.extension && resource.text.extension.length > 0) {
                    const extension = resource.text.extension.find(e => e.url === 'http://www.icanbwell.com/prompt');
                    if (extension && extension.valueString) {
                        extension.valueString = extension.valueString.replace(currentDate, '2023-08-21');
                    }
                }
                return resource;
            });
        });
    });
});
