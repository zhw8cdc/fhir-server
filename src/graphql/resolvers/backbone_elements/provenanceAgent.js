// This code is generated by a code generator.  Do not edit.
/*eslint no-unused-vars: "off"*/
const {resolveType, findResourcesByReference, findResourceByReference, getResources} = require('../../common');

// noinspection JSUnusedLocalSymbols
module.exports = {
    ProvenanceAgentWho: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    ProvenanceAgentOnBehalfOf: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    ProvenanceAgent: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        who: async (parent, args, context, info) => {
            return await findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.who);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        onBehalfOf: async (parent, args, context, info) => {
            return await findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.onBehalfOf);
        },
    }
};

