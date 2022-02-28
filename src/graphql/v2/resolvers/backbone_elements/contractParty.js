// ------ This code is generated by a code generator.  Do not edit. ------


// noinspection JSUnusedLocalSymbols
module.exports = {
    ContractPartyReference: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    ContractParty: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        reference: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.reference);
        },
    }
};
