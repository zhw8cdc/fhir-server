// ------ This code is generated by a code generator.  Do not edit. ------


// noinspection JSUnusedLocalSymbols
module.exports = {
    ContractRule: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        contentReference: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.contentReference);
        },
    }
};

