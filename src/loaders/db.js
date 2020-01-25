const pg = require('pg')
const fs = require('fs')
const logger = require('../utils/logger')
const config = require('./../config/env')

const conString = 'postgres://lzxdfpik:bILzLD1yrycRbYZb74fckcKt2tJTiqZF@balarama.db.elephantsql.com:5432/lzxdfpik'

const init = async () => {
  // TODO: read environment variables (need to add after merge)
  const client = new pg.Client(conString)
  try {
    await client.connect()
    const sql = await fs.readFileSync(config.db.initDBfILE, { encoding: 'UTF-8' })
    await client.query(sql)
  } catch (err) {
    logger.error(err)
    throw err
  } finally {
    await client.end()
  }
}
module.exports = init
