// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    SpecimenProcessing: {
        // noinspection JSUnusedLocalSymbols

        additive: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.additive);
        }
    }
};
