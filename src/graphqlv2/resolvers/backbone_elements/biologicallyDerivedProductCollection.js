// ------ This code is generated by a code generator.  Do not edit. ------


// noinspection JSUnusedLocalSymbols
module.exports = {
    BiologicallyDerivedProductCollectionCollector: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    BiologicallyDerivedProductCollectionSource: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    BiologicallyDerivedProductCollectionCollectorReference: {
        // noinspection JSUnusedLocalSymbols
        reference: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent
            );
        }
    },
    BiologicallyDerivedProductCollectionSourceReference: {
        // noinspection JSUnusedLocalSymbols
        reference: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent
            );
        }
    }
};