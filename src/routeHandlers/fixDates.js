/**
 * This route handler implements the /fixDates route which is used to convert types in db
 */

// eslint-disable-next-line security/detect-child-process
const childProcess = require('child_process');

module.exports.handleFixDates = async (req, res) => {
    const tableNamesCsv = req.params['op'];
    console.log('fixDates: ' + JSON.stringify(req.params));
    console.log('fixDates: ' + tableNamesCsv);

    let message;
    // await deleteIndexesInAllCollections();
    //create new instance of node for running separate task in another thread
    const taskProcessor = childProcess.fork('./src/tasks/dateFixer.js');
    //send some params to our separate task
    const params = {
        message: 'Fix Dates',
        tableNamesCsv: tableNamesCsv
    };
    taskProcessor.send(params);
    message = 'Started fixing dates in separate process.  Check logs or Slack for output.';
    console.log(message);

    res.status(200).json({
        success: true,
        message: message
    });
};
