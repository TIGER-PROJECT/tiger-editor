import util from 'util';
import winston from 'winston';

const CustomLogger = winston.transports.CustomLogger = function (options) {
    //
    // Name this logger
    //
    this.name = 'ElectronConsole';

    //
    // Set the level from your options
    //
    this.level = options.level || 'info';

    //
    // Set the timestamp
    //
    this.timestamp = options.timestamp() || '';

    //
    // Set the timestamp
    //
    this.colorize = options.colorize || true;
};

//
// Inherit from `winston.Transport` so you can take advantage
// of the base functionality and `.handleExceptions()`.
//
util.inherits(CustomLogger, winston.Transport);

CustomLogger.prototype.log = function (level, msg, meta, callback) {
    //
    // Store this message and metadata, maybe use some custom logic
    // then callback indicating success.
    //
    let message = '';
    if (meta === null) {
        message = `${this.timestamp} - ${level}: ${msg} - ${util.inspect(meta)}`;
    } else {
        message = `${this.timestamp} - ${level}: ${msg}`;
    }

    switch (level) {
        case 'debug':
            console.log(message);
            break;
        case 'warn':
            console.warn(message);
            break;
        case 'error':
            console.error(message);
            break;
        case 'info':
            console.info(message);
            break;
    }
    callback(null, true);
};

CustomLogger.prototype.debug = function (msg, meta = null) {
    this.log('debug', msg, meta);
};

CustomLogger.prototype.warn = function (msg, meta = null) {
    this.log('warn', msg, meta);
};

CustomLogger.prototype.error = function (msg, meta = null) {
    this.log('error', msg, meta);
};

CustomLogger.prototype.info = function (msg, meta = null) {
    this.log('info', msg, meta);
};

export default CustomLogger;
