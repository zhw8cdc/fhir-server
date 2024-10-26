// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols

        administrableProductDefinition: async (parent, args, context, info) => {
            return await context.dataApi.getResourcesBundle(
                parent,
                args,
                context,
                info,
                'AdministrableProductDefinition'
            );
        }
    },
    AdministrableProductDefinition: {
        // noinspection JSUnusedLocalSymbols

        formOf: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.formOf);
        },
        // noinspection JSUnusedLocalSymbols

        producedFrom: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.producedFrom);
        },
        // noinspection JSUnusedLocalSymbols

        device: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.device);
        }
    }
};
