const makeUserRepository = db => {
    let database = null;
    if(makeUserRepository.db)
        database = makeUserRepository.db;
    else {
        if(!db) throw new Error('db param is required');
        makeUserRepository.db = db;
        database = makeUserRepository.db
    }

    // TODO: implement queries
    return {
        getAllUsers: () => {

        },
        getUserById: async () => {

        },
        getUserByEmail: async email => {
            const user = await database.query('SELECT * FROM users WHERE email = $1', [email]);
            return user.rows[0];
        },
    }
};

module.exports = makeUserRepository;
