const userSeed = require('./user.seed')
const logger = require('./../../utils/logger')
async function startSeed () {
  await userSeed()
}

if (!module.parent) {
  startSeed()
    .catch(e => logger.error(e))
}
module.exports = startSeed
