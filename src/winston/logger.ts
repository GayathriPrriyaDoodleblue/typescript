import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'site', path: '' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'error.log',
            level: 'error',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.errors(({ level, message, timestamp }: { level: string, message: string, timestamp: string }) => {
                    return `${timestamp},${level},${message}`;
                })
            ),
        }),
        new winston.transports.File({
            filename: 'combined.log',
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.printf(({ level, message, timestamp, path }) => {
                    return `${timestamp}, ${level}, ${path}, ${message}`;
                })
            ),
        }),
    ],
});

function logInfo(message: string, meta?: any): void {
    logger.log({ level: 'info', message, meta });
}

function logWarn(message: string, meta?: any): void {
    logger.log({ level: 'warn', message, meta });
}

export { logger, logInfo, logWarn };