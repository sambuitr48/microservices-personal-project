const db = require('../db/dbConfig');

const UserModel = {
createUser: (username, password, callback) => {
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], callback);
},

findUser: (username, password, callback) => {
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], callback);
}
};

module.exports = UserModel;