// ------ This code is generated by a code generator.  Do not edit. ------


// noinspection JSUnusedLocalSymbols
module.exports = {
    ContractAssetTypeReferenceV2: {
        __resolveType(obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        },
    },
    ContractAsset: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        typeReferenceV2: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.typeReference);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        typeReference: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.typeReference);
        },
    }
};

