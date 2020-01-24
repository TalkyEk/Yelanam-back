const express = require('express');
const logger = require('./utils/logger');
const config = require('./config/env');

async function startServer() {
    // singleton
    if (startServer.instance) return startServer.instance;
    const app = express();
    startServer.instance = app;
    await require('./loaders')(app);
    app.listen(config.env.PORT, err => {
        if (err) {
            logger.error(err);
            process.exit(1);
            return;
        }

        logger.info(`Server listening on port: ${config.env.PORT}`);
    });

    return app;
}

startServer().catch(e => {
    logger.error(e);
    process.exit(1);
});

process
    .on('unhandledRejection', (reason, p) => {
        logger.warn(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        logger.error(err, 'Uncaught Exception thrown');
        process.exit(1);
    });

module.exports = startServer;
