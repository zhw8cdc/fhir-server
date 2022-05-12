const {tokenQueryBuilder} = require('../../../utils/querybuilder.util');

/**
 * Filters by token
 * https://www.hl7.org/fhir/search.html#token
 * @param {string | string[]} queryParameterValue
 * @param {import('../common/types').SearchParameterDefinition} propertyObj
 * @param {Object[]} and_segments
 * @param {Set} columns
 * @returns {*[]}
 */
function filterByToken(queryParameterValue, propertyObj, and_segments, columns) {
    if (!Array.isArray(queryParameterValue)) {
        queryParameterValue = [queryParameterValue];
    }
    for (const tokenQueryItem of queryParameterValue) {
        if (propertyObj.fieldFilter === "[system/@value='email']") {
            and_segments.push(
                tokenQueryBuilder(
                    tokenQueryItem,
                    'value',
                    `${propertyObj.field}`,
                    'email'
                )
            );
            columns.add(`${propertyObj.field}.system`);
            columns.add(`${propertyObj.field}.value`);
        } else if (propertyObj.fieldFilter === "[system/@value='phone']") {
            and_segments.push(
                tokenQueryBuilder(
                    tokenQueryItem,
                    'value',
                    `${propertyObj.field}`,
                    'phone'
                )
            );
            columns.add(`${propertyObj.field}.system`);
            columns.add(`${propertyObj.field}.value`);
        } else if (propertyObj.field === 'identifier') {
            // http://www.hl7.org/fhir/search.html#token
            and_segments.push(
                tokenQueryBuilder(
                    tokenQueryItem,
                    'value',
                    `${propertyObj.field}`,
                    ''
                )
            );
            columns.add(`${propertyObj.field}.system`);
            columns.add(`${propertyObj.field}.value`);
        } else if (
            propertyObj.field === 'meta.security' ||
            propertyObj.field === 'meta.tag'
        ) {
            // http://www.hl7.org/fhir/search.html#token
            and_segments.push(
                tokenQueryBuilder(
                    tokenQueryItem,
                    'code',
                    `${propertyObj.field}`,
                    ''
                )
            );
            columns.add(`${propertyObj.field}.system`);
            columns.add(`${propertyObj.field}.code`);
        } else {
            and_segments.push({
                $or: [
                    tokenQueryBuilder(
                        tokenQueryItem,
                        'code',
                        `${propertyObj.field}`,
                        ''
                    ),
                    tokenQueryBuilder(
                        tokenQueryItem,
                        'code',
                        `${propertyObj.field}.coding`,
                        ''
                    ),
                ],
            });
            columns.add(`${propertyObj.field}.coding.system`);
            columns.add(`${propertyObj.field}.coding.code`);
        }
    }
    return queryParameterValue;
}

module.exports = {
    filterByToken: filterByToken
};
