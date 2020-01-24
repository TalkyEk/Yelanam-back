const db = require('./../index');

module.exports = async function () {
    const users = [
      ['user@gmail.com', 'password', '@user'],
      ['user1@gmail.com', 'password', '@user1'],
      ['user2@gmail.com', 'password', '@user2'],
      ['user3@gmail.com', 'password', '@user3'],
    ];
    await db.query('DELETE FROM users');
    for (const user of users) {
        await db.query('INSERT INTO users (email, password, nickname) VALUES($1, $2, $3) RETURNING *', user);
    }
};
