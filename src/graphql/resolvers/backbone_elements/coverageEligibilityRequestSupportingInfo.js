// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    CoverageEligibilityRequestSupportingInfoInformationV2: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    CoverageEligibilityRequestSupportingInfo: {
        // noinspection JSUnusedLocalSymbols

        informationV2: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.information);
        },
        // noinspection JSUnusedLocalSymbols

        information: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.information);
        }
    }
};
