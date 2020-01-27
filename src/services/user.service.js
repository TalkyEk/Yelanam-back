const { userRepo } = require('./../db/repositories')()

const getUserByEmail = email => {
  return userRepo.getUserByEmail(email)
}

module.exports = {
  getUserByEmail
}
