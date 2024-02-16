/**
 * This middleware handles graphql requests
 */
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { join } = require('path');
const resolvers = require('../../graphql/v2/resolvers');
const { REQUEST_ID_TYPE } = require('../../constants');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { FhirDataSource } = require('../../graphql/v2/dataSource');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const { ApolloServerPluginLandingPageDisabled, ApolloServerPluginInlineTraceDisabled } = require('@apollo/server/plugin/disabled');
const {
    ApolloServerPluginLandingPageLocalDefault
    // ApolloServerPluginLandingPageProductionDefault
} = require('@apollo/server/plugin/landingPage/default');

const { getBundleMetaApolloServerPlugin } = require('./plugins/graphqlBundleMetaPlugin');
const { getApolloServerLoggingPlugin } = require('./plugins/graphqlLoggingPlugin');
const { FhirRequestInfo } = require('../../utils/fhirRequestInfo');
const { getAddRequestIdToResponseHeadersPlugin } = require('./plugins/graphqlAddRequestIdToResponseHeadersPlugin');
const contentType = require('content-type');
const { getValidateMissingVariableValuesPlugin } = require('./plugins/graphqlValidateMissingVariableValuesPlugin');
const httpContext = require('express-http-context');
const OperationOutcome = require('../../fhir/classes/4_0_0/resources/operationOutcome');
const OperationOutcomeIssue = require('../../fhir/classes/4_0_0/backbone_elements/operationOutcomeIssue');

/**
 * @param {function (): SimpleContainer} fnGetContainer
 * @return {Promise<e.Router>}
 */
const graphql = async (fnGetContainer) => {
    const typesArray = loadFilesSync(join(__dirname, '../../graphql/v2/schemas/'), { recursive: true });
    const typeDefs = mergeTypeDefs(typesArray);

    /**
     * @type {import('../../utils/simpleContainer')}
     */
    const container = fnGetContainer();
    /**
     * @type {import('../../utils/configManager')}
     */
    const configManagerInstance = container.configManager;

    /**
     * @type {import('apollo-server-plugin-base').PluginDefinition[]}
     */
    const plugins = [
        // request.credentials is set so we receive cookies
        // https://github.com/graphql/graphql-playground#settings
        configManagerInstance.enableGraphQLPlayground
            // eslint-disable-next-line new-cap
            ? ApolloServerPluginLandingPageLocalDefault({
                embed: {
                    runTelemetry: false
                }
            })
            // eslint-disable-next-line new-cap
            : ApolloServerPluginLandingPageDisabled(),
        getBundleMetaApolloServerPlugin(),
        getApolloServerLoggingPlugin('graphql'),
        getAddRequestIdToResponseHeadersPlugin(),
        getValidateMissingVariableValuesPlugin(),
        // eslint-disable-next-line new-cap
        ApolloServerPluginInlineTraceDisabled()
    ];

    /**
     * gets context
     * @param {import('http').IncomingMessage} req
     * @param {import('http').ServerResponse} res
     * @return {Promise<GraphQLContext>}
     */
    async function getContext ({ req, res }) {
        /**
         * @type {import('content-type').ContentType}
         */
        const contentTypeFromHeader = req.headers['content-type'] ? contentType.parse(req.headers['content-type']) : null;
        /**
         * @type {FhirRequestInfo}
         */
        const fhirRequestInfo = new FhirRequestInfo(
            {
                user: (req.authInfo && req.authInfo.context && req.authInfo.context.username) ||
                    (req.authInfo && req.authInfo.context && req.authInfo.context.subject) ||
                    ((!req.user || typeof req.user === 'string') ? req.user : req.user.name || req.user.id),
                patientIdsFromJwtToken: req.authInfo && req.authInfo.context && req.authInfo.context.patientIdsFromJwtToken,
                scope: req.authInfo && req.authInfo.scope,
                remoteIpAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
                requestId: httpContext.get(REQUEST_ID_TYPE.SYSTEM_GENERATED_REQUEST_ID),
                userRequestId: httpContext.get(REQUEST_ID_TYPE.USER_REQUEST_ID),
                protocol: req.protocol,
                originalUrl: req.originalUrl,
                path: req.path,
                host: req.hostname,
                body: req.body,
                isUser: req.authInfo && req.authInfo.context && req.authInfo.context.isUser,
                personIdFromJwtToken: req.authInfo && req.authInfo.context && req.authInfo.context.personIdFromJwtToken,
                headers: req.headers,
                method: req.method,
                contentTypeFromHeader
            });

        req.container = container;
        return {
            req,
            res,
            fhirRequestInfo,
            dataApi: new FhirDataSource(
                {
                    requestInfo: fhirRequestInfo,
                    searchBundleOperation: container.searchBundleOperation,
                    r4ArgsParser: container.r4ArgsParser,
                    queryRewriterManager: container.queryRewriterManager
                }
            ),
            container
        };
    }

    // create the Apollo graphql middleware
    const server = new ApolloServer(
        {
            // schema: schemaWithResolvers,
            schema: buildSubgraphSchema({ typeDefs, resolvers }),
            // typeDefs: typeDefs,
            // resolvers: resolvers,
            introspection: configManagerInstance.enableGraphQLPlayground,
            cache: 'bounded',
            plugins,
            formatError: (formattedError, _error) => {
                // Formatting the error message returned from GraphQL when GraphQL Playground(Currently case of production environment) is disabled.
                if (formattedError.message.startsWith('This operation has been blocked as a potential Cross-Site Request Forgery (CSRF)')) {
                    return new OperationOutcome({
                        issue: [
                            new OperationOutcomeIssue({
                                severity: 'error',
                                code: 'not-found',
                                details: { text: 'Page not found' }
                            })
                        ]
                    }).toJSON();
                }

                // Otherwise return the formatted error.
                return formattedError;
            },
            stringifyResult: (value) => {
                return JSON.stringify(value, null, 2);
            }
        });

    // apollo requires us to start the server first
    await server.start();

    return expressMiddleware(server, {
        context: async ({ req, res }) => await getContext({ req, res })
    });
};

module.exports.graphql = graphql;
