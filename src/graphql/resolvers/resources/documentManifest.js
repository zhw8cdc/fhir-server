// This code is generated by a code generator.  Do not edit.
/*eslint no-unused-vars: "off"*/
const {resolveType, findResourcesByReference, findResourceByReference, getResources} = require('../../common');

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        documentManifest: async (parent, args, context, info) => {
            return await getResources(
                parent,
                args,
                context,
                info,
                'DocumentManifest'
            );
        }
    },
    DocumentManifestSubject: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    DocumentManifestAuthor: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    DocumentManifestRecipient: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    DocumentManifest: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        subject: async (parent, args, context, info) => {
            return await findResourceByReference(
                args,
                context,
                info,
                parent.subject);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        author: async (parent, args, context, info) => {
            return await findResourcesByReference(
                args,
                context,
                info,
                parent.author);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        recipient: async (parent, args, context, info) => {
            return await findResourcesByReference(
                args,
                context,
                info,
                parent.recipient);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        content: async (parent, args, context, info) => {
            return await findResourcesByReference(
                args,
                context,
                info,
                parent.content);
        },
    }
};
