// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    MedicinalProductInteractionInteractantItemReference: {
        __resolveType (obj, context, info) {
            return context.dataApi.resolveType(obj, context, info);
        }
    },
    MedicinalProductInteractionInteractant: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        itemReference: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.itemReference);
        }
    }
};
