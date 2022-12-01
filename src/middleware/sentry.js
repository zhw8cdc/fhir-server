/**
 * 3rd party Error Tracking Middleware
 */
const process = require('node:process');
const Sentry = require('@sentry/node');
const {ErrorReporter} = require('../utils/slack.logger');
const {getImageVersion} = require('../utils/getImageVersion');
const {getCircularReplacer} = require('../utils/getCircularReplacer');

Sentry.init({dsn: process.env.SENTRY_DSN});


process.on('uncaughtException', async (err) => {
    console.log(
        JSON.stringify(
            {
                method: 'sentryMiddleware.uncaughtException',
                message: JSON.stringify(err, getCircularReplacer())
            }
        )
    );
    Sentry.captureException(err);
    const errorReporter = new ErrorReporter(getImageVersion());
    await errorReporter.reportErrorAsync({
            source: 'uncaughtException',
            message: 'uncaughtException',
            error: err
        }
    );
    process.exit(1);
});

process.on('unhandledRejection', async (reason, promise) => {
    console.log(
        JSON.stringify(
            {
                method: 'sentryMiddleware.unhandledRejection',
                promise: promise,
                reason: reason,
                stack: reason.stack
            },
            getCircularReplacer()
        )
    );
    Sentry.captureException(reason);
    const errorReporter1 = new ErrorReporter(getImageVersion());
    await errorReporter1.reportErrorAsync({
        source: 'unhandledRejection',
        message: 'unhandledRejection',
        error: reason
    });
    process.exit(1);
});

process.on('warning', (warning) => {
    console.log(JSON.stringify(
            {
                method: 'sentryMiddleware.warning',
                name: warning.name,
                message: warning.message,
                stack: warning.stack
            },
            getCircularReplacer()
        )
    );
});

process.on('exit', function (code) {
    if (code !== 0) {
        const stack = new Error().stack;
        console.log(JSON.stringify({method: 'sentryMiddleware.exit', message: `PROCESS EXIT: exit code: ${code}`}));
        console.log(JSON.stringify({message: JSON.stringify(stack)}, getCircularReplacer()));
    }
});

module.exports = Sentry;
