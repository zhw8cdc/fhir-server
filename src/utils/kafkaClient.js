const {Kafka} = require('kafkajs');
const {assertIsValid} = require('./assertType');
const {logSystemErrorAsync, logSystemEventAsync} = require('../operations/common/logging');
const env = require('var');

/**
 * @typedef KafkaClientMessage
 * @type {object}
 * @property {string} key
 * @property {string} requestId
 * @property {string} fhirVersion
 * @property {string} value
 */

/**
 * This class implements a client to Kafka
 * https://icanbwell.atlassian.net/wiki/spaces/ENTARCH/pages/3812556821/Health+Programs+Team+Event+Strategy+Proposal
 */
class KafkaClient {
    /**
     * constructor
     * @param {string|undefined} clientId
     * @param {string[]|undefined} brokers
     * @param {boolean} ssl
     */
    constructor({clientId, brokers, ssl}) {
        this.init(clientId, brokers, ssl);
    }

    /**
     * init
     * @param {string} clientId
     * @param {string[]} brokers
     * @param {boolean} ssl
     */
    init(clientId, brokers, ssl) {
        assertIsValid(clientId !== undefined);
        assertIsValid(brokers !== undefined);
        assertIsValid(Array.isArray(brokers));
        assertIsValid(brokers.length > 0);
        this.clientId = clientId;
        this.brokers = brokers;
        this.ssl = ssl;

        const config = {
            clientId: clientId,
            brokers: brokers,
            ssl: ssl
        };
        /**
         * @type {Kafka}
         */
        this.client = new Kafka(config);
    }

    /**
     * Sends a message to Kafka
     * @param {string} topic
     * @param {KafkaClientMessage[]} messages
     * @return {Promise<void>}
     */
    async sendMessagesAsync(topic, messages) {
        /**
         * @type {import('kafkajs').Producer}
         */
        const producer = this.client.producer();

        await producer.connect();
        try {
            /**
             * @type {import('kafkajs').Message[]}
             */
            const kafkaMessages = messages.map(m => {
                return {
                    key: m.key,
                    value: m.value,
                    headers: {
                        'b3': m.requestId,
                        'version': m.fhirVersion,
                    }
                };
            });
            if (env.LOGLEVEL === 'DEBUG') {
                await logSystemEventAsync({
                    event: 'kafkaClient',
                    message: 'Sending message',
                    args: {
                        clientId: this.clientId,
                        brokers: this.brokers,
                        ssl: this.ssl,
                        topic: topic,
                        messages: kafkaMessages
                    }
                });
            }
            /**
             * @type {import('kafkajs').RecordMetadata[]}
             */
            const result = await producer.send({
                topic: topic,
                messages: kafkaMessages,
            });
            if (env.LOGLEVEL === 'DEBUG') {
                await logSystemEventAsync({
                    event: 'kafkaClient',
                    message: 'Sent message',
                    args: {
                        clientId: this.clientId,
                        brokers: this.brokers,
                        ssl: this.ssl,
                        topic: topic,
                        messages: kafkaMessages,
                        result: result
                    }
                });
            }
        } catch (e) {
            await logSystemErrorAsync({
                event: 'kafkaClient',
                message: 'Error sending message',
                args: {clientId: this.clientId, brokers: this.brokers, ssl: this.ssl},
                error: e
            });
            throw e;
        } finally {
            await producer.disconnect();
        }
    }

    /**
     * Receives a message to Kafka
     * @param {string} topic
     * @return {Promise<void>}
     */
    async receiveMessagesAsync(topic) {
        /**
         * @type {import('kafkajs').Consumer}
         */
        const consumer = this.client.consumer({groupId: 'my-group'});

        await consumer.connect();
        try {
            await consumer.subscribe({topics: [topic], fromBeginning: true});
            await consumer.run({
                // eslint-disable-next-line no-unused-vars
                eachMessage: async ({topic1, partition, message, heartbeat, pause}) => {
                    console.log({
                        key: message.key.toString(),
                        value: message.value.toString(),
                        headers: message.headers,
                    });
                },
            });
        } catch (e) {
            await logSystemErrorAsync({
                event: 'kafkaClient',
                message: 'Error sending message',
                args: {clientId: this.clientId, brokers: this.brokers, ssl: this.ssl},
                error: e
            });
            throw e;
        } finally {
            await consumer.disconnect();
        }
    }

    /**
     * Receives a message to Kafka
     * @param {string} topic
     * @param {number} limit
     * @return {Promise<void>}
     */
    // async receiveLastXMessagesAsync(topic, limit) {
    //     /**
    //      * @type {import('kafkajs').Admin}
    //      */
    //     const admin = this.client.admin();
    //
    //     await admin.connect();
    //     try {
    //         /**
    //          * @type {string[]}
    //          */
    //         const topics = await admin.listTopics();
    //         /**
    //          * @type {Array<{high: string, low: string}>}
    //          */
    //         const offsets = await admin.fetchTopicOffsets(topic);
    //         /**
    //          * @type {{brokers: Array<{nodeId: number, host: string, port: number}>, controller: number | null, clusterId: string}}
    //          */
    //         const cluster = await admin.describeCluster();
    //         /**
    //          * @type {{groups: import('kafkajs').GroupOverview[]}}
    //          */
    //         const groups = await admin.listGroups();
    //
    //     } catch (e) {
    //         await logSystemErrorAsync({
    //             event: 'kafkaClient',
    //             message: 'Error sending message',
    //             args: {clientId: this.clientId, brokers: this.brokers, ssl: this.ssl},
    //             error: e
    //         });
    //         throw e;
    //     } finally {
    //         await admin.disconnect();
    //     }
    // }
}

module.exports = {
    KafkaClient
};
