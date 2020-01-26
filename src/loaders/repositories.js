const db = require('./../db')
const makeRepository = require('./../db/repositories')
const logger = require('../utils/logger')

module.exports = () => {
  makeRepository.initial(db)
  logger.info('user repository is loaded')
}
