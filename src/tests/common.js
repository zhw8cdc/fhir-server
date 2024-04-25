const env = require('var');
const { jest, expect } = require('@jest/globals');

// const {getToken} = require('../../token');
const { jwksEndpoint, jwksDiscoveryEndpoint, jwksUserInfoEndpoint } = require('./mocks/jwks');
const { publicKey, privateKey } = require('./mocks/keys');
const { createToken } = require('./mocks/tokens');
const nock = require('nock');
const { createTestContainer } = require('./createTestContainer');
const supertest = require('supertest');
const { createApp } = require('../app');
const { createServer } = require('../server');
const { TestMongoDatabaseManager } = require('./testMongoDatabaseManager');
const httpContext = require('express-http-context');
const { fhirContentTypes } = require('../utils/contentTypes');
const { TestConfigManager } = require('./testConfigManager');
const { FhirRequestInfo } = require('../utils/fhirRequestInfo');

/**
 * @type {import('http').Server}
 */
let server;
/**
 * @type {import('supertest').Test}
 */
let tester;

/**
 *  @type {import('express').Express}
 */
let app;

/**
 * @type {SimpleContainer}
 */
let testContainer;

/**
 * @return {SimpleContainer}
 */
module.exports.getTestContainer = () => {
    return testContainer;
};

/**
 * Creates a test version of the app
 * @param {(SimpleContainer) => SimpleContainer} [fnUpdateContainer]
 * @return {import('express').Express}
 */
module.exports.createTestApp = (fnUpdateContainer) => {
    /**
     * @type {SimpleContainer}
     */
    testContainer = createTestContainer(fnUpdateContainer);
    return createApp({ fnGetContainer: () => testContainer, trackMetrics: false });
};

/**
 * @return {Promise<import('http').Server>}
 */
module.exports.createTestServer = async () => {
    return createServer(() => createTestContainer());
};

/**
 * @param {(SimpleContainer) => SimpleContainer|undefined} [fnUpdateContainer]
 * @return {import('supertest').Test}
 */
module.exports.createTestRequest = async (fnUpdateContainer) => {
    if (!app) {
        app = await module.exports.createTestApp((c) => {
            if (fnUpdateContainer) {
                fnUpdateContainer(c);
            }
            return c;
        });
    }
    // noinspection JSCheckFunctionSignatures
    tester = supertest(app);
    return tester;
};

/**
 * sets up the mongo db and token endpoint
 * @return {Promise<void>}
 */
module.exports.commonBeforeEach = async () => {
    // noinspection DynamicallyGeneratedCodeJS
    jest.setTimeout(30000);
    env.VALIDATE_SCHEMA = true;
    const urlObject = new URL(env.AUTH_JWKS_URL);
    jwksEndpoint(urlObject.protocol + '//' + urlObject.host, urlObject.pathname, [
        { pub: publicKey, kid: '123' }
    ]);
    /**
     * @type {string[]}
     */
    const extJwksUrls = env.EXTERNAL_AUTH_JWKS_URLS.split(',');
    extJwksUrls.forEach((extJwksUrl) => {
        if (extJwksUrl) {
            const urlObject1 = new URL(extJwksUrl.trim());
            jwksEndpoint(urlObject1.protocol + '//' + urlObject1.host, urlObject1.pathname, [
                {
                    pub: publicKey,
                    kid: '123'
                }
            ]);
        }
    });
};

/**
 * sets up mock OpenId server
 * @param {string} token
 * @param {string} patientId
 * @param {string} personId
 */
module.exports.setupMockOpenIdServer = ({ token, patientId, personId }) => {
    expect(env.AUTH_ISSUER).toBeDefined();
    expect(env.AUTH_ISSUER.length).toBeGreaterThan(0);
    const discoveryUrlObject = new URL(env.AUTH_ISSUER);
    jwksDiscoveryEndpoint(discoveryUrlObject.protocol + '//' + discoveryUrlObject.host);
    jwksUserInfoEndpoint(
        {
            host: discoveryUrlObject.protocol + '//' + discoveryUrlObject.host,
            token,
            patientId,
            personId
        });
};

/**
 * cleans up the mongo db
 * @return {Promise<void>}
 */
module.exports.commonAfterEach = async () => {
    if (testContainer) {
        /**
         * @type {PostRequestProcessor}
         */
        const postRequestProcessor = testContainer.postRequestProcessor;
        await postRequestProcessor.waitTillAllRequestsDoneAsync({ timeoutInSeconds: 20 });
        await testContainer.mongoDatabaseManager.dropDatabasesAsync();
        /**
         * @type {RequestSpecificCache}
         */
        const requestSpecificCache = testContainer.requestSpecificCache;
        await requestSpecificCache.clearAllAsync();
        // testContainer = null;
    }
    nock.cleanAll();
    // nock.restore(); // nock.activate()

    const configManager = testContainer?.configManager ?? new TestConfigManager();

    const testMongoDatabaseManager = new TestMongoDatabaseManager({ configManager });
    await testMongoDatabaseManager.dropDatabasesAsync();
    if (server) {
        await server.close();
        server = null;
    }
    tester = null;
    // app = null;
    // global.gc();
    // globals.clear();
};

/**
 * @param {string} scope
 * @return {string}
 */
const getToken = (module.exports.getToken = (scope) => {
    const payload = {
        sub: 'john',
        username: 'imran',
        client_id: 'my_client_id',
        scope,
        clientFhirPersonId: 'clientFhirPerson',
        clientFhirPatientId: 'clientFhirPatient',
        bwellFhirPersonId: 'root-person',
        bwellFhirPatientId: 'bwellFhirPatient',
        token_use: 'access'
    };
    return createToken(privateKey, '123', payload);
});

const getFullAccessToken = (module.exports.getFullAccessToken = () => {
    return getToken('user/*.read user/*.write access/*.*');
});

const getTokenWithCustomClaims = (module.exports.getTokenWithCustomClaims = (scope) => {
    return createToken(privateKey, '123', {
        sub: 'john',
        custom_client_id: 'my_custom_client_id',
        customscope: scope,
        groups: ['access/*.*']
    });
});

const getTokenWithCustomPayload = (module.exports.getTokenWithCustomPayload = (payload) => {
    return createToken(privateKey, '123', {
        sub: 'john',
        custom_client_id: 'my_custom_client_id',
        ...payload
    });
});

const getFullAccessTokenWithCustomClaims = (module.exports.getFullAccessTokenWithCustomClaims =
    () => {
        return getTokenWithCustomClaims('user/*.read user/*.write');
    });

module.exports.getHeaders = (scope) => {
    return {
        'Content-Type': 'application/fhir+json',
        Accept: 'application/fhir+json',
        Authorization: `Bearer ${scope ? getToken(scope) : getFullAccessToken()}`,
        Host: 'localhost:3000'
    };
};

module.exports.getHeadersNdJson = (scope) => {
    return {
        'Content-Type': 'application/fhir+json', // what the data we POST is in
        Accept: 'application/fhir+ndjson', // what we want the response to be in
        Authorization: `Bearer ${scope ? getToken(scope) : getFullAccessToken()}`
    };
};

module.exports.getHeadersCsv = (scope) => {
    return {
        'Content-Type': 'application/fhir+json', // what the data we POST is in
        Accept: fhirContentTypes.csv, // what we want the response to be in
        Authorization: `Bearer ${scope ? getToken(scope) : getFullAccessToken()}`
    };
};

module.exports.getHeadersFormUrlEncoded = (scope) => {
    return {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/fhir+json',
        Authorization: `Bearer ${scope ? getToken(scope) : getFullAccessToken()}`
    };
};

module.exports.getHeadersNdJsonFormUrlEncoded = (scope) => {
    return {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/fhir+ndjson', // what we want the response to be in
        Authorization: `Bearer ${scope ? getToken(scope) : getFullAccessToken()}`
    };
};

module.exports.getHeadersCsvFormUrlEncoded = (scope) => {
    return {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: fhirContentTypes.csv, // what we want the response to be in
        Authorization: `Bearer ${scope ? getToken(scope) : getFullAccessToken()}`
    };
};

module.exports.getHeadersJsonPatch = (scope) => {
    return {
        'Content-Type': 'application/json-patch+json',
        Accept: 'application/fhir+json', // what we want the response to be in
        Authorization: `Bearer ${scope ? getToken(scope) : getFullAccessToken()}`
    };
};

module.exports.getGraphQLHeaders = (scope) => {
    return {
        'Content-Type': 'application/json; charset=utf-8',
        accept: '*/*',
        Authorization: `Bearer ${scope ? getToken(scope) : getFullAccessToken()}`
    };
};

module.exports.getGraphQLHeadersWithPerson = (personId) => {
    const payload = {
        'cognito:username': 'patient-123@example.com',
        'custom:bwell_fhir_person_id': personId,
        scope: 'patient/*.read user/*.* access/*.*',
        username: 'patient-123@example.com',
        clientFhirPersonId: 'clientFhirPerson',
        clientFhirPatientId: 'clientFhirPatient',
        bwellFhirPersonId: personId,
        bwellFhirPatientId: 'bwellFhirPatient',
        token_use: 'access'
    };
    return {
        'Content-Type': 'application/json; charset=utf-8',
        accept: '*/*',
        Authorization: `Bearer ${
            getTokenWithCustomPayload(payload)
        }`
    };
};

module.exports.getCustomGraphQLHeaders = (payload) => {
    return {
        'Content-Type': 'application/json; charset=utf-8',
        accept: '*/*',
        Authorization: `Bearer ${
            payload ? getTokenWithCustomPayload(payload) : getFullAccessToken()
        }`
    };
};

module.exports.getUnAuthenticatedGraphQLHeaders = () => {
    return {
        'Content-Type': 'application/json; charset=utf-8',
        accept: '*/*'
    };
};

module.exports.getUnAuthenticatedHeaders = () => {
    return {
        'Content-Type': 'application/fhir+json',
        Accept: 'application/fhir+json'
    };
};

module.exports.getHeadersWithCustomToken = (scope) => {
    return {
        'Content-Type': 'application/fhir+json',
        Accept: 'application/fhir+json',
        Authorization: `Bearer ${
            scope ? getTokenWithCustomClaims(scope) : getFullAccessTokenWithCustomClaims()
        }`
    };
};

module.exports.getHeadersWithCustomPayload = (payload) => {
    return {
        'Content-Type': 'application/fhir+json',
        Accept: 'application/fhir+json',
        Authorization: `Bearer ${getTokenWithCustomPayload(payload)}`
    };
};

module.exports.getUnAuthenticatedHtmlHeaders = () => {
    return {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36'
    };
};

module.exports.getHtmlHeaders = (scope) => {
    return {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
        Authorization: `Bearer ${scope ? getToken(scope) : getFullAccessToken()}`
    };
};

module.exports.getHtmlHeadersWithForm = (scope) => {
    return {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
        Authorization: `Bearer ${scope ? getToken(scope) : getFullAccessToken()}`
    };
};

module.exports.getHeadersPreferOperationOutcome = (scope) => {
    return {
        'Content-Type': 'application/fhir+json',
        Accept: 'application/fhir+json',
        Authorization: `Bearer ${scope ? getToken(scope) : getFullAccessToken()}`,
        Host: 'localhost:3000',
        Prefer: 'return=OperationOutcome'
    };
};

const getTokenWithAdminClaims = (module.exports.getTokenWithAdminClaims = () => {
    return createToken(privateKey, '123', {
        sub: 'john',
        custom_client_id: 'my_custom_client_id',
        groups: ['admin/*.*']
    });
});

module.exports.getJsonHeadersWithAdminToken = () => {
    return {
        'Content-Type': 'application/fhir+json',
        Accept: 'application/fhir+json',
        Authorization: `Bearer ${getTokenWithAdminClaims()}`
    };
};

module.exports.getHtmlHeadersWithAdminToken = () => {
    return {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        Authorization: `Bearer ${getTokenWithAdminClaims()}`,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
    };
};

/**
 * wraps a single resource into a bundle
 * @param {Object} resource
 * @return {{entry: [{resource: Object}], resourceType: string}}
 */
module.exports.wrapResourceInBundle = (resource) => {
    if (resource.resourceType === 'Bundle') {
        return resource; // already a bundle
    }
    return {
        resourceType: 'Bundle',
        total: 0,
        type: 'searchset',
        entry: [
            {
                resource
            }
        ]
    };
};

/**
 * @param resp
 * @return {string|undefined}
 */
module.exports.getRequestId = (resp) => {
    return resp.headers['x-request-id'];
};

/**
 * @description Mocks the get method of express-http-context to override requestId and userRequestId
 * @param {{systemGeneratedRequestId: string|undefined; userRequestId: string|undefined}} opts
 * @returns {string}
 */
module.exports.mockHttpContext = ({
                                      systemGeneratedRequestId,
                                      userRequestId
                                  } = {}) => {
    // eslint-disable-next-line no-undef
    jest.spyOn(httpContext, 'get');
    const values = {
        systemGeneratedRequestId: systemGeneratedRequestId || '12345678',
        userRequestId: userRequestId || '1234'
    };
    httpContext.get.mockImplementation((key) => {
        return values[key];
    });
    return values.systemGeneratedRequestId;
};

/**
 * @param {string} requestId
 * @param {string|undefined} [scope]
 * @param {string|undefined} [userRequestId]
 * @returns {FhirRequestInfo}
 */
module.exports.getTestRequestInfo = ({
                                         requestId,
                                         scope = 'user/*.read user/*.write access/*.*',
                                         userRequestId
                                     }) => {
    if (!userRequestId) {
        userRequestId = requestId
    }

    const requestInfo = new FhirRequestInfo(
        {
            user: '',
            scope,
            protocol: 'https',
            originalUrl: '',
            requestId,
            userRequestId,
            host: 'host',
            headers: {},
            method: 'POST',
            contentTypeFromHeader: null
        });
    return requestInfo;
};
