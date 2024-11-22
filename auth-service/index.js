const express = require('express');
const AuthController = require('./controllers/authController');

const app = express();
const PORT = 3001;

app.use(express.json());

// Rutas
app.post('/register', AuthController.register);
app.post('/login', AuthController.login);

app.listen(PORT, () => {
console.log(`Auth Service corriendo en el puerto ${PORT}`);
});