const logger = require('./../utils/logger');
const expressLoaderSync = require('./express');
const repositoriesLoaderSync = require('./repositories');

module.exports = (app) => {
    expressLoaderSync(app);
    logger.info('Express loaded');
    repositoriesLoaderSync();
    logger.info('All repositories are loaded');
};
