// ------ This code is generated by a code generator.  Do not edit. ------


// noinspection JSUnusedLocalSymbols
module.exports = {
    ContractOffer: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        topic: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.topic);
        },
    }
};
