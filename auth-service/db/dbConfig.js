const mysql = require('mysql2');

const db = mysql.createConnection({
host: process.env.DB_HOST || 'localhost',
user: process.env.DB_USER || 'root',
password: process.env.DB_PASSWORD || '',
database: process.env.DB_NAME || 'auth_db'
});

db.connect(err => {
if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
}
console.log('Conexión a la base de datos exitosa');
});

module.exports = db;
