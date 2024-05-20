// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    ProvenanceEntityWhatV2: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    ProvenanceEntity: {
        // noinspection JSUnusedLocalSymbols

        whatV2: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.what);
        },
        // noinspection JSUnusedLocalSymbols

        what: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.what);
        }
    }
};
