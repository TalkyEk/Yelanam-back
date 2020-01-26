const baseMethods = require('./base-methods.repository')

function makeUserRepository (tableName, database) {
  return {
    ...baseMethods(tableName, database)
  }
}

module.exports = makeUserRepository
