// TODO : base class makeRepository(repositoryObject || repositoryFactory)

const makeUserRepository = () => {
  let database = null
  if (makeUserRepository.db) {
    database = makeUserRepository.db
  }

  if (!makeUserRepository.db) throw new Error('first you need to call initial method')

  // TODO: implement queries
  return {
    getAllUsers: () => {

    },
    getUserById: async () => {

    },
    getUserByEmail: async email => {
      const user = await database.query('SELECT * FROM users WHERE email = $1', [email])
      return user.rows[0]
    }
  }
}

makeUserRepository.initial = function (db) {
  makeUserRepository.db = db
}
module.exports = makeUserRepository
