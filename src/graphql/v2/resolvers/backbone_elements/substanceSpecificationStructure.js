// ------ This code is generated by a code generator.  Do not edit. ------


// noinspection JSUnusedLocalSymbols
module.exports = {
    SubstanceSpecificationStructure: {
        // noinspection JSUnusedLocalSymbols
        // eslint-disable-next-line no-unused-vars
        source: async (parent, args, context, info) => {
            return await context.dataApi.findResourcesByReference(
                parent,
                args,
                context,
                info,
                parent.source);
        },
    }
};

