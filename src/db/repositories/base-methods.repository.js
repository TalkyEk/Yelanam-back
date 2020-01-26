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
  return {
    find,
    create: () => console.log('not implemented'),
    update: () => console.log('not implemented'),
    delete: () => console.log('not implemented')
  }
}

module.exports = baseMethods
