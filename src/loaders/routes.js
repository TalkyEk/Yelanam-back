const {
  userRouter
} = require('./../api')
const logger = require('./../utils/logger')

function routes (app) {
  app.use('/api/user', userRouter)
  logger.info('routes set')
}

module.exports = routes
