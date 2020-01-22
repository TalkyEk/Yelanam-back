const logger = require('./../utils/logger');
const expressLoaderSync = require('./express');

module.exports = (app) => {
    expressLoaderSync(app);
    logger.info('Express loaded');
};
