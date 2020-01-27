function baseMethods (tableName, database) {
  const madeValuesString = (number) => {
    let values = ''
    for (let i = 1; i <= number; i++) {
      if (i < number) {
        values = values.concat(` $${i},`)
      } else values = values.concat(` $${i}`)
    }
    return values
  }
  const find = async (opt) => {
    let data = null
    if (!opt || Object.keys(opt).length === 0) {
      data = await database.query(`SELECT * FROM ${tableName}`)
    } else if (Object.keys(opt).length >= 2) {
      throw new Error('One key in param is required!')
    } else {
      const [key, value] = Object.entries(opt)[0]
      data = await database.query(`SELECT * FROM ${tableName} WHERE ${key} = $1`, [value])
    }
    return data.rows
  }
  const create = async (opt) => {
    let data = null
    const num = madeValuesString(Object.values(opt).length)
    if (Object.keys(opt).length > 0) {
      data = await database.query(`INSERT INTO ${tableName} ( ${Object.keys(opt)} ) ` +
        `VALUES( ${num} ) RETURNING *`, Object.values(opt))
    } else {
      throw new Error('You need to have keys')
    }
    return data.rows
  }
  const update = async (opt) => {
    let data = null
    const values = 0
    if (Object.keys(opt) > 0) {
      data = await database.query(`UPDATE ${tableName} SET email = $1, password = $2, nickname = $3 WHERE nickname = '@user1'`, [values])
    } else {
      throw new Error('You need to have keys')
    }
    return data.rows
  }
  return {
    find,
    create,
    update,
    delete: () => console.log('not implemented')
  }
}

module.exports = baseMethods
