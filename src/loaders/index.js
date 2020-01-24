const logger = require('./../utils/logger');
const expressLoaderSync = require('./express');
const dbInitLoaderAsync = require('./db');

module.exports = async (app) => {
    expressLoaderSync(app);
    logger.info('Express loaded');
    await dbInitLoaderAsync();
    logger.info('Init Db Success')
};
