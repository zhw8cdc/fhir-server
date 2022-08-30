const {MockKafkaClient} = require('./mocks/mockKafkaClient');
const {createContainer} = require('../createContainer');


/**
 * Creates a container and sets up all the services
 * @param {(SimpleContainer) => SimpleContainer} [fnUpdateContainer]
 * @return {SimpleContainer}
 */
const createTestContainer = function (fnUpdateContainer) {
    /**
     * @type {SimpleContainer}
     */
    let container = createContainer();
    // update any values here
    container.register('kafkaClient', () => new MockKafkaClient());
    if (fnUpdateContainer !== undefined) {
        container = fnUpdateContainer(container);
    }
    return container;
};
module.exports = {
    createTestContainer
};
