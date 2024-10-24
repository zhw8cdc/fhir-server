// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        familyMemberHistory: async (parent, args, context, info) => {
            return await context.dataApi.getResourcesBundle(
                parent,
                args,
                context,
                info,
                'FamilyMemberHistory'
            );
        }
    },
    FamilyMemberHistoryReasonReference: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    FamilyMemberHistoryPatientReference: {
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
    FamilyMemberHistoryReasonReferenceReference: {
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
