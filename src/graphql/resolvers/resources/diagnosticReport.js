// This code is generated by a code generator.  Do not edit.
/*eslint no-unused-vars: "off"*/
const {resolveType, findResourcesByReference, findResourceByReference, getResources} = require('../../common');

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        diagnosticReport: async (parent, args, context, info) => {
            return await getResources(
                parent,
                args,
                context,
                info,
                'DiagnosticReport'
            );
        }
    },
    DiagnosticReportBasedOn: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    DiagnosticReportSubject: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    DiagnosticReportPerformer: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    DiagnosticReportResultsInterpreter: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    DiagnosticReport: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        basedOn: async (parent, args, context, info) => {
            return await findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.basedOn);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        subject: async (parent, args, context, info) => {
            return await findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.subject);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        encounter: async (parent, args, context, info) => {
            return await findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.encounter);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        performer: async (parent, args, context, info) => {
            return await findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.performer);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        resultsInterpreter: async (parent, args, context, info) => {
            return await findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.resultsInterpreter);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        specimen: async (parent, args, context, info) => {
            return await findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.specimen);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        result: async (parent, args, context, info) => {
            return await findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.result);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        imagingStudy: async (parent, args, context, info) => {
            return await findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.imagingStudy);
        },
    }
};

