// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        biologicallyDerivedProduct: async (parent, args, context, info) => {
            return await context.dataApi.getResourcesBundle(
                parent,
                args,
                context,
                info,
                'BiologicallyDerivedProduct'
            );
        }
    },
    BiologicallyDerivedProduct: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        request: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.request);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        parent: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.parent);
        }
    }
};
