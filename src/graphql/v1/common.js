/**
 * Implements helper functions for graphql
 */

const {SearchByIdOperation} = require('../../operations/searchById/searchById');
const async = require('async');
const {logWarn} = require('../../operations/common/logging');
const {getRequestInfo} = require('./requestInfoHelper');
const {SearchBundleOperation} = require('../../operations/search/searchBundle');
const {assertTypeEquals} = require('../../utils/assertType');
const {SimpleContainer} = require('../../utils/simpleContainer');
/**
 * This functions takes a FHIR Bundle and returns the resources in it
 * @param {Bundle} bundle
 * @return {Resource[]}
 */
module.exports.unBundle = (bundle) => {
    return bundle.entry ? bundle.entry.map((e) => e.resource) : [];
};

// noinspection JSUnusedLocalSymbols
/**
 * This is to handle unions in GraphQL
 * @param obj
 * @param context
 * @param info
 * @return {null|string}
 */
// eslint-disable-next-line no-unused-vars
module.exports.resolveType = (obj, context, info) => {
    if (obj) {
        return obj.resourceType;
    }
    return null; // GraphQLError is thrown
};

/**
 * Finds a single resource by reference
 * @param {Resource} parent
 * @param args
 * @param context
 * @param info
 * @param {{reference: string}} reference
 * @return {Promise<null|Resource>}
 */
module.exports.findResourceByReference = async (parent, args, context, info, reference) => {
    /**
     * @type {SimpleContainer}
     */
    const container = context.container;
    assertTypeEquals(container, SimpleContainer);
    if (!reference) {
        return null;
    }
    /**
     * @type {string}
     */
    const typeOfReference = reference.reference.split('/')[0];
    /**
     * @type {string}
     */
    const idOfReference = reference.reference.split('/')[1];
    try {
        /**
         * @type {SearchByIdOperation}
         */
        const searchByIdOperation = container.searchByIdOperation;
        assertTypeEquals(searchByIdOperation, SearchByIdOperation);
        return await searchByIdOperation.searchById(
            {
                requestInfo: getRequestInfo(context),
                args: {base_version: '4_0_0', id: idOfReference},
                resourceType: typeOfReference
            }
        );
    } catch (e) {
        if (e.name === 'NotFound') {
            logWarn(
                'findResourcesByReference: Resource not found for parent',
                {
                    user: context.user,
                    args: {
                        resourceType: typeOfReference,
                        id: idOfReference,
                        parentResourceType: parent.resourceType,
                        parentId: parent.id,
                    }
                }
            );
            return null;
        }
    }
};

/**
 * Finds one or more resources by references array
 * @param {Resource} parent
 * @param args
 * @param context
 * @param info
 * @param {{reference: string}[]} references
 * @return {Promise<null|Resource[]>}
 */
module.exports.findResourcesByReference = async (parent, args, context, info, references) => {
    /**
     * @type {SimpleContainer}
     */
    const container = context.container;
    assertTypeEquals(container, SimpleContainer);
    if (!references) {
        return null;
    }
    return async.flatMap(references, async (reference) => {
        /**
         * @type {string}
         */
        const typeOfReference = reference.reference.split('/')[0];
        /**
         * @type {string}
         */
        const idOfReference = reference.reference.split('/')[1];
        try {
            /**
             * @type {SearchBundleOperation}
             */
            const searchBundleOperation = container.searchBundleOperation;
            assertTypeEquals(searchBundleOperation, SearchBundleOperation);
            return module.exports.unBundle(
                await searchBundleOperation.searchBundle(
                    {
                        requestInfo: getRequestInfo(context),
                        args: {
                            base_version: '4_0_0',
                            id: idOfReference,
                            _bundle: '1',
                        },
                        resourceType: typeOfReference
                    }
                )
            );
        } catch (e) {
            if (e.name === 'NotFound') {
                logWarn(
                    'findResourcesByReference: Resource not found for parent',
                    {
                        user: context.user,
                        args: {
                            resourceType: typeOfReference,
                            id: idOfReference,
                            parentResourceType: parent.resourceType,
                            parentId: parent.id,
                        }
                    }
                );
                return null;
            }
        }
    });
};

/**
 * Finds resources with args
 * @param parent
 * @param args
 * @param context
 * @param info
 * @param {string} resourceType
 * @return {Promise<Resource[]>}
 */
module.exports.getResources = async (parent, args, context, info, resourceType) => {
    /**
     * @type {SimpleContainer}
     */
    const container = context.container;
    assertTypeEquals(container, SimpleContainer);
    // https://www.apollographql.com/blog/graphql/filtering/how-to-search-and-filter-results-with-graphql/
    // TODO: iterate over the keys in args.  handle all the search parameters in src/graphql/schemas/inputs
    /**
     * @type {SearchBundleOperation}
     */
    const searchBundleOperation = container.searchBundleOperation;
    assertTypeEquals(searchBundleOperation, SearchBundleOperation);
    return module.exports.unBundle(
        await searchBundleOperation.searchBundle(
            {
                requestInfo: getRequestInfo(context),
                args: {
                    base_version: '4_0_0',
                    _bundle: '1',
                    ...args,
                },
                resourceType
            }
        )
    );
};
