// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    MedicationKnowledgeIngredient: {
        // noinspection JSUnusedLocalSymbols

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
