const db = require('../db/dbConfig');

const ProductModel = {
createProduct: (name, price, callback) => {
    const query = 'INSERT INTO products (name, price) VALUES (?, ?)';
    db.query(query, [name, price], callback);
},

getAllProducts: (callback) => {
    const query = 'SELECT * FROM products';
    db.query(query, callback);
}
};

module.exports = ProductModel;