const userRepository = require('./../db/repositories');

const getUserByEmail = email => {
    return userRepository.getUserByEmail(email)
};

module.exports = {
    getUserByEmail
};
