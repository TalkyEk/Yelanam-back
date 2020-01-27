const makeUserRepository = require('./user.repository')
function makeRepository () {
  if (!makeRepository.db) throw new Error('first you need to call initial method')

  return {
    usersRepo: makeUserRepository('users', makeRepository.db)
  }
}

makeRepository.initial = function (db) {
  makeRepository.db = db
}

module.exports = makeRepository
