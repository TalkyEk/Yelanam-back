const db = require('./../db')
const { makeUserRepository } = require('./../db/repositories')
const logger = require('../utils/logger')

module.exports = () => {
  makeUserRepository.initial(db)
  logger.info('user repository is loaded')
}
