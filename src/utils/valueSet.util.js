const async = require('async');
/**
 * This file implements helpers for expanding value sets
 */

/**
 * gets the value sets
 * @param {import('mongodb').Collection} collection1
 * @param {string} valueSetUrl
 * @return {Promise<{system, code, display, version: string}[]>}
 */
const getContentsOfValueSet = async (collection1, valueSetUrl, params) => {
    const valueSet = await collection1.findOne({url: valueSetUrl.toString()});
    return await module.exports.getValueSetConcepts(collection1, valueSet, params);
};

/**
 * Creates a concept
 * @param {string} system
 * @param {string} version
 * @param {string} code
 * @param {string} display
 * @return {{system, code, display, version: string}}
 */
const createConcept = (system, version, code, display) => {
    return {
        system: system,
        version: version,
        code: code,
        display: display
    };
};

/**
 *  Gets the included concepts which can either be concepts or a nested value set
 * @param {import('mongodb').Collection} collection1
 * @param {{valueSet:string[],system:string,version:string,concept:{code:string,display:string}[] }} include
 * @return {Promise<{system, code, display, version: string}[]>}
 */
const getInclude = async (collection1, include, params) => {
    /**
     * @type {{system, code, display, version: string}[]}
     */
    let concepts = [];
    // include can either be a system, concept[] or a valueSet url
    if (include.valueSet) {
        concepts = await async.flatMap(include.valueSet,
            async valueSet => await getContentsOfValueSet(collection1, valueSet, params)
        );
    }
    if (include.system) {
        const system = include.system;
        const version = include.version;
        // get all the concepts
        concepts = await async.map(include.concept,
            async concept => createConcept(system, version, concept.code, concept.display)
        );
    }
    return concepts;
};

/**
 * Gets the concepts in this value set.  Recurses down into any nested value sets
 * @param {import('mongodb').Collection} collection1
 * @param {Resource} resource1
 * @return {Promise<{system, code, display, version: string}[]>}
 */
const getValueSetConcepts = async (collection1, resource1, params) => {
    /**
     * @type {{system, code, display, version: string}[]}
     */
    let expandedValueSets = [];
    if (resource1.compose && resource1.compose.include) {
        // noinspection UnnecessaryLocalVariableJS
        expandedValueSets = await async.flatMap(resource1.compose.include,
            async include => await getInclude(collection1, include, params)
        );
    }

    // append expanded value sets to existing value sets
    /**
     * @type {{system, code, display, version: string}[]}
     */
    const existingValueSets = (resource1.expansion && resource1.expansion.contains) ? resource1.expansion.contains : [];
    return existingValueSets.concat(expandedValueSets);
};

/**
 * Expands the value set as a new expansion field and removes the compose field
 * @param {import('mongodb').Collection} collection1
 * @param {Resource} resource1
 * @return {Resource}
 */
const getExpandedValueSet = async (collection1, resource1, params) => {
    /**
     * @type {{system, code, display, version: string}[]}
     */
    let concepts = await getValueSetConcepts(collection1, resource1, params);
    resource1['expansion'] = {
        contains: concepts,
        'offset': 0,
        'total': concepts.length
    };
    // remove compose
    delete resource1['compose'];
    return resource1;
};

module.exports = {
    getExpandedValueSet: getExpandedValueSet,
    getValueSetConcepts: getValueSetConcepts
};
