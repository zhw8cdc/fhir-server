// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        imagingStudy: async (parent, args, context, info) => {
            return await context.dataApi.getResourcesBundle(
                parent,
                args,
                context,
                info,
                'ImagingStudy'
            );
        }
    },
    ImagingStudySubject: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    ImagingStudyBasedOn: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    ImagingStudyReferrer: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    ImagingStudyInterpreter: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    ImagingStudyReasonReference: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    ImagingStudySubjectReference: {
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
    ImagingStudyEncounterReference: {
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
    ImagingStudyBasedOnReference: {
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
    ImagingStudyReferrerReference: {
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
    ImagingStudyInterpreterReference: {
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
    ImagingStudyEndpointReference: {
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
    ImagingStudyProcedureReferenceReference: {
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
    ImagingStudyLocationReference: {
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
    ImagingStudyReasonReferenceReference: {
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
