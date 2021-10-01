// This code is generated by a code generator.  Do not edit.
/*eslint no-unused-vars: "off"*/
const {resolveType, findResourcesByReference, findResourceByReference, getResources} = require('../../common');

// noinspection JSUnusedLocalSymbols
module.exports = {
    Query: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        communication: async (parent, args, context, info) => {
            return await getResources(
                parent,
                args,
                context,
                info,
                'Communication'
            );
        }
    },
    CommunicationSubject: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    CommunicationRecipient: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    CommunicationSender: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    CommunicationReasonReference: {
        __resolveType(obj, context, info) {
            return resolveType(obj, context, info);
        },
    },
    Communication: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        basedOn: async (parent, args, context, info) => {
            return await findResourcesByReference(
                args,
                context,
                info,
                parent.basedOn);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        partOf: async (parent, args, context, info) => {
            return await findResourcesByReference(
                args,
                context,
                info,
                parent.partOf);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        inResponseTo: async (parent, args, context, info) => {
            return await findResourcesByReference(
                args,
                context,
                info,
                parent.inResponseTo);
        },
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
        about: async (parent, args, context, info) => {
            return await findResourcesByReference(
                args,
                context,
                info,
                parent.about);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        encounter: async (parent, args, context, info) => {
            return await findResourceByReference(
                args,
                context,
                info,
                parent.encounter);
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
        sender: async (parent, args, context, info) => {
            return await findResourceByReference(
                args,
                context,
                info,
                parent.sender);
        },
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        reasonReference: async (parent, args, context, info) => {
            return await findResourcesByReference(
                args,
                context,
                info,
                parent.reasonReference);
        },
    }
};
