const env = require('var');
const moment = require('moment-timezone');
const {getLogger} = require('../../winstonInit');

/**
 * @type {import('winston').logger}
 */
const logger = getLogger();

const os = require('os');
const {generateUUID} = require('../../utils/uid.util');
const {getCircularReplacer} = require('../../utils/getCircularReplacer');
const fhirLogger = require('../../utils/fhirLogger').FhirLogger;

/**
 * Always logs regardless of env.IS_PRODUCTION
 * @param {string} message
 * @param {Object} args
 */
const logInfo = (message, args) => {
    logger.info(message, args);
};

/**
 * Logs as info if env.IS_PRODUCTION is not set
 * @param {string} message
 * @param {Object} args
 */
const logDebug = (message, args) => {
    if ((!env.IS_PRODUCTION && env.LOGLEVEL !== 'INFO') || (env.LOGLEVEL === 'DEBUG')) {
        logger.debug(message, args);
    }
};

/**
 * Logs as error
 * @param {string} message
 * @param {Object} args
 */
const logError = (message, args) => {
    logger.error(message, args);
};

/**
 * Logs as warning
 * @param {string} message
 * @param {Object} args
 */
const logWarn = (message, args) => {
    logger.warn(message, args);
};

/**
 * Get detail array from args
 * @param  {Object} args
 * @returns {{valueString: string|undefined, valuePositiveInt: number|undefined, type: string}[]}
 */
const getDetailFromArgs = (args) => Object.entries(args).map(([k, v]) => {
    return {
        type: k,
        valueString: (!v || typeof v === 'string') ? v : JSON.stringify(v, getCircularReplacer()),
    };
});

/**
 * Logs a system event
 * @param {string} event
 * @param {string} message
 * @param {Object} args
 */
const logSystemEventAsync = async ({event, message, args}) => {
    /**
     * @type {{valueString: string|undefined, valuePositiveInt: number|undefined, type: string}[]}
     */
    const detail = getDetailFromArgs(args);
    if (os.hostname()) {
        const hostname = os.hostname();
        detail.push({
            type: 'host',
            valueString: String(hostname)
        });
    }
    // This uses the FHIR Audit Event schema: https://hl7.org/fhir/auditevent.html
    const logEntry = {
        id: generateUUID(),
        type: {
            code: 'system'
        },
        action: event,
        recorded: new Date(moment.utc().format('YYYY-MM-DDTHH:mm:ssZ')),
        outcome: 0, // https://hl7.org/fhir/valueset-audit-event-outcome.html
        outcomeDesc: 'Success',
        message: message,
        entity: [
            {
                name: 'system',
                detail: detail
            }
        ],
    };
    const fhirSecureLogger = await fhirLogger.getSecureLoggerAsync();
    fhirSecureLogger.log('info', logEntry);
    const fhirInSecureLogger = await fhirLogger.getInSecureLoggerAsync();
    fhirInSecureLogger.log('info', logEntry);
};

/**
 * Logs a trace system event
 * @param {string} event
 * @param {string} message
 * @param {Object} args
 */
const logTraceSystemEventAsync = async ({event, message, args}) => {
    if (env.LOGLEVEL === 'TRACE' || env.LOGLEVEL === 'DEBUG') {
        await logSystemEventAsync({event, message, args});
    }
};


/**
 * Logs a system event
 * @param {string} event
 * @param {string} message
 * @param {Object} args
 * @param {Error|null} error
 */
const logSystemErrorAsync = async ({event, message, args, error}) => {
    /**
     * @type {{valueString: string|undefined, valuePositiveInt: number|undefined, type: string}[]}
     */
    const detail = getDetailFromArgs(args);
    if (os.hostname()) {
        const hostname = os.hostname();
        detail.push({
            type: 'host',
            valueString: String(hostname)
        });
    }
    // This uses the FHIR Audit Event schema: https://hl7.org/fhir/auditevent.html
    const logEntry = {
        id: generateUUID(),
        type: {
            code: 'system'
        },
        action: event,
        recorded: new Date(moment.utc().format('YYYY-MM-DDTHH:mm:ssZ')),
        outcome: error ? 8 : 0, // https://hl7.org/fhir/valueset-audit-event-outcome.html
        outcomeDesc: error ? 'Error' : 'Success',
        message: message + (error ? (' : ' + JSON.stringify(error, getCircularReplacer())) : ''),
        entity: [
            {
                name: 'system',
                detail: detail
            }
        ],
    };
    const fhirSecureLogger = await fhirLogger.getSecureLoggerAsync();
    fhirSecureLogger.log(error ? 'error' : 'info', logEntry);
    const fhirInSecureLogger = await fhirLogger.getInSecureLoggerAsync();
    fhirInSecureLogger.log(error ? 'error' : 'info', logEntry);
};

/**
 * logs a verbose message
 * @param {string} source
 * @param {Object} args
 * @return {Promise<void>}
 */
const logVerboseAsync = async ({source, args: args}) => {
    if (env.LOGLEVEL === 'DEBUG') {
        logInfo(`${source}`, {args});
    }
};

/**
 * Logs an event to slack
 * @param {string} message
 * @param {Object} args
 * @param {Error|null} error
 */
const logSlackAsync = async ({source, message, args, error}) => {
    if (error){
        logError(message, {args, source, error});
    } else {
        logInfo(message, {args, source});
    }
};

/**
 * @param req
 * @returns {string}
 */
const getUserName = (req) => {
    return (!req.user || typeof req.user === 'string') ? req.user : req.user.name || req.user.id;
};

/**
 * Gets IP address of caller
 * @param {import('http').IncomingMessage} req
 * @returns {string | undefined}
 */
const getRemoteAddress = (req) => {
    return req.header('X-Forwarded-For') || req['x-real-ip'] || req.ip || req._remoteAddress || undefined;
};

/**
 * Logs error and request to Slack
 * @param {Error} error
 * @param {import('http').IncomingMessage} req
 * @param {Object} args
 */
const logSlackErrorAndRequestAsync = async ({error, req, args}) => {
    /**
     * @type {string|null}
     */
    const user = getUserName(req);
    const request = {
        method: req.method,
        url: req.url,
        headers: req.headers,
        query: req.query,
        body: req.body || {},
        user: user
    };
    logError(error.message, {args, request, error, remoteAddress: getRemoteAddress(req)});
};

module.exports = {
    logInfo,
    logDebug,
    logError,
    logWarn,
    logTraceSystemEventAsync,
    logSystemEventAsync,
    logSystemErrorAsync,
    logVerboseAsync,
    logSlackAsync,
    logSlackErrorAndRequestAsync
};
