const BASE_PATH = process.cwd();
require('dotenv').config();
module.exports = {
    env: {
        PORT: process.env.PORT || 3000,
    },
    
  db: {
        user: process.env.DATABASE_USER,
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE,
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DATABASE_PORT
    }
  // TODO move it to db 
  INIT_DB_FILE: BASE_PATH + '/init_db.sql',

};
