// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    TestScriptFixtureResourceV2: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    TestScriptFixture: {
        // noinspection JSUnusedLocalSymbols

        resourceV2: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.resource);
        },
        // noinspection JSUnusedLocalSymbols

        resource: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.resource);
        }
    }
};
