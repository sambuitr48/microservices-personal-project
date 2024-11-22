const AuthService = require('../services/authService');

const AuthController = {
register: (req, res) => {
    const { username, password } = req.body;
    AuthService.registerUser(username, password, (err, results) => {
    if (err) {
        res.status(500).send('Error registrando usuario');
    } else {
        res.status(201).send('Usuario registrado');
    }
    });
},

login: (req, res) => {
    const { username, password } = req.body;
    AuthService.loginUser(username, password, (err, results) => {
    if (err) {
        res.status(500).send('Error iniciando sesión');
    } else if (results.length > 0) {
        res.status(200).send('Inicio de sesión exitoso');
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
    });
}
};

module.exports = AuthController;