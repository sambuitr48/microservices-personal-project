const ProductModel = require('../models/productModel');

const ProductService = {
addProduct: (name, price, callback) => {
    ProductModel.createProduct(name, price, callback);
},

listProducts: (callback) => {
    ProductModel.getAllProducts(callback);
}
};

module.exports = ProductService;