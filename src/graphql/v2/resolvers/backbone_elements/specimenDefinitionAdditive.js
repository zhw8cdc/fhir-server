// ------ This code is generated by a code generator.  Do not edit. ------

// noinspection JSUnusedLocalSymbols
module.exports = {
    SpecimenDefinitionAdditive: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        additiveReference: async (parent, args, context, info) => {
            return await context.dataApi.findResourceByReference(
                parent,
                args,
                context,
                info,
                parent.additiveReference);
        }
    }
};
