const UserModel = require('../models/userModel');

const AuthService = {
registerUser: (username, password, callback) => {
    UserModel.createUser(username, password, callback);
},

loginUser: (username, password, callback) => {
    UserModel.findUser(username, password, callback);
}
};

module.exports = AuthService;