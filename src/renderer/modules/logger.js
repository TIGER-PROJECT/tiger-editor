import ElectronConsole from './winston-electron';
import winston from 'winston';
import fs from 'fs';

const tsFormat = () => (new Date()).toLocaleTimeString();
const logDir   = 'logs';
const env      = process.env.NODE_ENV || 'development';

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = new (winston.Logger)({
    transports : [
        // colorize the output to the console
        new ElectronConsole({
            timestamp       : tsFormat,
            level           : 'debug',
            handleExceptions: true,
        }),
        new (winston.transports.File)({
            filename        : `${logDir}/debug.log`,
            timestamp       : tsFormat,
            level           : env === 'development' ? 'debug' : 'info',
            handleExceptions: true,
            json            : false
        })
    ],
    exitOnError: false
});

export default logger;
