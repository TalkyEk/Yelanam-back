// TODO : base class makeRepository(repositoryObject || repositoryFactory)

const makeUserRepository = () => {
  let database = null
  if (makeUserRepository.db) {
    database = makeUserRepository.db
  }

  if (!makeUserRepository.db) throw new Error('first you need to call initial method')

  const getUserBy = async (param, value) => {
    const user = await database.query(`SELECT * FROM users WHERE ${param} = $1`, [value])
    return user.rows[0]
  }
  const createUser = async (params) => {
    const { email, password, nickname } = params
    const values = [email, password, nickname]
    const user = await database.query('INSERT INTO users(email, password, nickname) VALUES ($1, $2, $3) RETURNING *', values)
    return user.rows[0]
  }
  const updateUser = async (params) => {
    const { param, value, email } = params
    const values = [value, email]
    const user = await database.query(`UPDATE users SET ${param} = $1 WHERE email = $2 RETURNING *`, values)
    return user.rows[0]
  }

  return {
    getUserBy,
    createUser,
    updateUser
  }
}

makeUserRepository.initial = function (db) {
  makeUserRepository.db = db
}
module.exports = makeUserRepository
