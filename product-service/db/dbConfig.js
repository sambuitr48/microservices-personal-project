const mysql = require('mysql2');

const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'product_db'
});

db.connect(err => {
if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
}
console.log('Conexión a la base de datos exitosa');
});

module.exports = db;