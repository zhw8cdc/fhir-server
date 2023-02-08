/**
 * @typedef StartFromIdContainer
 * @property {string | null} startFromId
 * @property {number} skippedIdsForHavingAccessField
 * @property {number} skippedIdsForMissingSecurityTags
 * @property {number} convertedIds
 * @property {number} nModified
 * @property {number} nUpserted
 */

/**
 * @classdesc base class that implements connecting to the database
 */
class BaseScriptRunner {
    async init() {
        /**
         * For reporting progress
         * @type {StartFromIdContainer}
         */
        this.startFromIdContainer = this.createStartFromIdContainer();
    }

    createStartFromIdContainer() {
        return {
            startFromId: '',
            skippedIdsForHavingAccessField: 0,
            skippedIdsForMissingSecurityTags: 0,
            skippedIdsForMissingAccessTags: 0,
            convertedIds: 0,
            nModified: 0,
            nUpserted: 0
        };
    }

    async shutdown() {
        // do nothing
    }
}

module.exports = {
    BaseScriptRunner
};
