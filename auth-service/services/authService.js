const UserModel = require('../models/userModel');

const AuthService = {
registerUser: async (username, password) => {
    try {
    const user = await UserModel.createUser(username, password);
      return user; // Devuelve el usuario creado
    } catch (error) {
    throw new Error(`Error registrando usuario: ${error.message}`);
    }
},

loginUser: async (username, password) => {
    try {
    const user = await UserModel.findUser(username, password);
    if (!user) {
        throw new Error('Usuario no encontrado o contraseña incorrecta');
    }
      return user; // Devuelve el usuario encontrado
    } catch (error) {
    throw new Error(`Error al iniciar sesión: ${error.message}`);
    }
}
};

module.exports = AuthService;
