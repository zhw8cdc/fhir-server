// This code is generated by a code generator.  Do not edit.
/*eslint no-unused-vars: "off"*/
const {resolveType, findResourcesByReference, findResourceByReference, getResources} = require('../../common');

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        insurancePlan: async (parent, args, context, info) => {
            return await getResources(
                parent,
                args,
                context,
                info,
                'InsurancePlan'
            );
        }
    },
    InsurancePlan: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        ownedBy: async (parent, args, context, info) => {
            return await findResourceByReference(
                args,
                context,
                info,
                parent.ownedBy);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        administeredBy: async (parent, args, context, info) => {
            return await findResourceByReference(
                args,
                context,
                info,
                parent.administeredBy);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        coverageArea: async (parent, args, context, info) => {
            return await findResourcesByReference(
                args,
                context,
                info,
                parent.coverageArea);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        endpoint: async (parent, args, context, info) => {
            return await findResourcesByReference(
                args,
                context,
                info,
                parent.endpoint);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        network: async (parent, args, context, info) => {
            return await findResourcesByReference(
                args,
                context,
                info,
                parent.network);
        },
    }
};
