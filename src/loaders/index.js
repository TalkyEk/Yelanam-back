const logger = require('./../utils/logger');
const expressLoaderSync = require('./express');
const dbInitLoaderAsync = require('./db');
const repositoriesLoaderSync = require('./repositories');

module.exports = async (app) => {
    expressLoaderSync(app);
    logger.info('Express loaded');
    await dbInitLoaderAsync();
    logger.info('Init Db Success')
    repositoriesLoaderSync();
    logger.info('All repositories are loaded');
};
