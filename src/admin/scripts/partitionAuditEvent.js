// load config from .env.  Should be first thing so env vars are available to rest of the code
const path = require('path');
const dotenv = require('dotenv');
const pathToEnv = path.resolve(__dirname, '.env');
dotenv.config({
    path: pathToEnv
});
console.log(`Reading config from ${pathToEnv}`);
console.log(`AUDIT_EVENT_MONGO_URL=${process.env.AUDIT_EVENT_MONGO_URL}`);
const {BaseBulkOperationRunner} = require('./baseBulkOperationRunner');
const globals = require('../../globals');
const {AUDIT_EVENT_CLIENT_DB} = require('../../constants');
const {createContainer} = require('../../createContainer');
const {assertTypeEquals} = require('../../utils/assertType');
const {CommandLineParser} = require('./commandLineParser');
const {YearMonthPartitioner} = require('../../partitioners/yearMonthPartitioner');


/**
 * @classdesc Copies documents from source collection into the appropriate partitioned collection
 */
class PartitionAuditEventRunner extends BaseBulkOperationRunner {
    /**
     * constructor
     * @param {MongoCollectionManager} mongoCollectionManager
     * @param {Date} recordedAfter
     * @param {Date} recordedBefore
     * @param {number} batchSize
     */
    constructor({
                    mongoCollectionManager, recordedAfter, recordedBefore,
                    batchSize
                }) {
        super({mongoCollectionManager, batchSize});
        /**
         * @type {Date}
         */
        this.recordedAfter = recordedAfter;
        assertTypeEquals(recordedAfter, Date);
        /**
         * @type {Date}
         */
        this.recordedBefore = recordedBefore;
        assertTypeEquals(recordedBefore, Date);
    }

    /**
     * gets first day of next month
     * @param {Date} date
     * @returns {Date}
     */
    getFirstDayOfNextMonth(date) {
        return new Date(date.getUTCFullYear(), date.getUTCMonth() + 1, 1);
    }

    /**
     * gets first day of previous month
     * @param {Date} date
     * @returns {Date}
     */
    getFirstDateOfPreviousMonth(date) {
        return new Date(date.getFullYear(), date.getMonth() - 1, 1);
    }

    /**
     * returns the bulk operation for this doc
     * @param {import('mongodb').DefaultSchema} doc
     * @returns {Promise<(import('mongodb').BulkWriteOperation<import('mongodb').DefaultSchema>)[]>}
     */
    async processRecordAsync(doc) {
        const accessCodes = doc.meta.security.filter(s => s.system === 'https://www.icanbwell.com/access').map(s => s.code);
        if (accessCodes.length > 0 && !doc['_access']) {
            const _access = {};
            for (const accessCode of accessCodes) {
                _access[`${accessCode}`] = 1;
            }
            doc['_access'] = _access;
        }
        // delete _id so it does not cause a conflict in replace
        // e.g., 'Got error MongoBulkWriteError: After applying the update, the (immutable) field '_id' was found to have been altered to _id'
        delete doc._id;
        /**
         * @type {import('mongodb').BulkWriteOperation<import('mongodb').DefaultSchema>}
         */
        const result = {
            replaceOne: {
                filter: {id: doc.id},
                replacement: doc,
                upsert: true
            }
        };
        return [
            result
        ];
    }

    /**
     * Runs a loop to process all the documents
     * @returns {Promise<void>}
     */
    async processAsync() {
        const sourceCollectionName = 'AuditEvent_4_0_0';
        try {
            await this.init();
            /**
             * @type {import('mongodb').Db}
             */
            const auditEventDb = globals.get(AUDIT_EVENT_CLIENT_DB);

            console.log(`Starting loop from ${this.recordedAfter.toUTCString()} till ${this.recordedBefore.toUTCString()}`);
            /**
             * @type {Date}
             */
            let recordedBeforeForLoop = this.getFirstDayOfNextMonth(this.recordedBefore);

            // if there is an exception, continue processing from the last id
            while (recordedBeforeForLoop > this.recordedAfter) {
                this.startFromIdContainer.startFromId = '';
                /**
                 * @type {Date}
                 */
                const recordedAfterForLoop = this.getFirstDateOfPreviousMonth(recordedBeforeForLoop);
                console.log(`From=${recordedAfterForLoop.toUTCString()} to=${recordedBeforeForLoop.toUTCString()}`);
                const destinationCollectionName = YearMonthPartitioner.getPartitionNameFromYearMonth({
                    fieldValue: recordedAfterForLoop.toString(),
                    resourceWithBaseVersion: sourceCollectionName
                });
                /**
                 * @type {import('mongodb').Filter<import('mongodb').Document>}
                 */
                const query = {
                    $and: [
                        {'recorded': {$gt: recordedAfterForLoop}},
                        {'recorded': {$lt: recordedBeforeForLoop}}
                    ]
                };
                try {
                    await this.runForQueryBatchesAsync(
                        {
                            db: auditEventDb,
                            sourceCollectionName,
                            destinationCollectionName,
                            query,
                            startFromIdContainer: this.startFromIdContainer,
                            fnCreateBulkOperationAsync: async (doc) => await this.processRecordAsync(doc),
                            ordered: false
                        }
                    );
                } catch (e) {
                    console.log(`Got error ${e}.  At ${this.startFromIdContainer.startFromId}`);
                }
                recordedBeforeForLoop = recordedAfterForLoop;
            }
        } catch (e) {
            console.log(`ERROR: ${e}`);
        } finally {
            await this.shutdown();
        }
    }
}

/**
 * main function
 * @returns {Promise<void>}
 */
async function main() {
    /**
     * @type {Object}
     */
    const parameters = CommandLineParser.parseCommandLine();
    let currentDateTime = new Date();
    const recordedAfter = parameters.from ? new Date(`${parameters.from}T00:00:00Z`) : new Date(2021, 6 - 1, 1);
    const recordedBefore = parameters.to ? new Date(`${parameters.to}T00:00:00Z`) : new Date(2022, 10 - 1, 1);
    const batchSize = parameters.batchSize || process.env.BULK_BUFFER_SIZE || 10000;
    console.log(`[${currentDateTime}] ` +
        `Running script from ${recordedAfter.toUTCString()} to ${recordedBefore.toUTCString()}`);

    // set up all the standard services in the container
    const container = createContainer();

    // now add our class
    container.register('processAuditEventRunner', (c) => new PartitionAuditEventRunner({
        mongoCollectionManager: c.mongoCollectionManager,
        recordedAfter,
        recordedBefore,
        batchSize
    }));

    /**
     * @type {PartitionAuditEventRunner}
     */
    const processAuditEventRunner = container.processAuditEventRunner;
    await processAuditEventRunner.processAsync();

    process.exit(0);
}

/**
 * To run this:
 * nvm use 16.17.0
 * node src/admin/scripts/partitionAuditEvent.js --from=2022-08-01 --to=2022-09-01 --batchSize=10000
 */
main().catch(reason => {
    console.error(reason);
});
