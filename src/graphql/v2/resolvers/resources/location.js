// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        location: async (parent, args, context, info) => {
            return await context.dataApi.getResourcesBundle(
                parent,
                args,
                context,
                info,
                'Location'
            );
        }
    },
    Location: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        managingOrganization: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.managingOrganization);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        partOf: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.partOf);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        endpoint: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.endpoint);
        }
    }
};
