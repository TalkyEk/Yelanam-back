function baseMethods (tableName, database) {
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
    let values = Object.keys(opt).reduce((acc, cur, index) => acc + `$${index + 1},` , "").slice(0,-1);
    if (Object.keys(opt).length > 0) {
      data = await database.query(`INSERT INTO ${tableName} ( ${Object.keys(opt)} ) ` +
        `VALUES( ${values} ) RETURNING *`, Object.values(opt))
    } else {
      throw new Error('You need to have keys')
    }
    return data.rows
  }
  const update = async (opt, key) => {
    let data = null
      const params = Object.keys(opt).reduce((acc, cur, index) => acc + `${cur}=$${index + 1},` , "").slice(0,-1)
    if (Object.keys(opt).length > 0) {
      data = await database.query(`UPDATE ${tableName} SET ${params} WHERE ${Object.keys(key)[0]} = $4 RETURNING *`,
        [...Object.values(opt), Object.values(key)[0]])
    } else {
      throw new Error('You need to have keys')
    }
    return data.rows
  }
  const deleteItem = async (key) => {
    let data = null
    const params = Object.keys(key).reduce((acc, cur, index) => acc + `${cur}=$${index + 1} ` , "").slice(0,-1)
    if (Object.keys(key).length > 0) {
      data = await database.query(`DELETE FROM ${tableName} WHERE ${params} RETURNING *`, Object.values(key))
    } else {
      throw new Error('You need to have keys')
    }
    return data.rows
  }
  return {
    find,
    create,
    update,
    deleteItem
  }
}

module.exports = baseMethods
