// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    VerificationResultPrimarySourceWho: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    VerificationResultPrimarySource: {
        // noinspection JSUnusedLocalSymbols

        who: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.who);
        }
    }
};
