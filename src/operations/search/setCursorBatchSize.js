const env = require('var');

/**
 * sets cursor batch size based on args or environment variables
 * @param {Object} args
 * @param {Cursor<unknown> | *} cursorQuery
 * @return {{cursorBatchSize: number, cursorQuery}}
 */
function setCursorBatchSize(args, cursorQuery) {
    const cursorBatchSize = args['_cursorBatchSize']
        ? parseInt(args['_cursorBatchSize'])
        : parseInt(env.MONGO_BATCH_SIZE);
    if (cursorBatchSize > 0) {
        cursorQuery = cursorQuery.batchSize(cursorBatchSize);
    }
    return {cursorBatchSize, cursorQuery};
}


module.exports = {
    setCursorBatchSize: setCursorBatchSize
};