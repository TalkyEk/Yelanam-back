const pg = require('pg')
const fs = require('fs')
const logger = require('../utils/logger')
const config = require('./../config/env')

const init = async () => {
  const client = new pg.Client(config.db)
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
