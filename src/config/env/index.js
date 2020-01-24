const BASE_PATH = process.cwd();
module.exports = {
    env: {
        PORT: process.env.PORT || 3000,
    },
    INIT_DB_FILE: BASE_PATH + '/init_db.sql'
};
