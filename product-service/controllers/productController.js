const ProductService = require('../services/productService');

const ProductController = {
add: (req, res) => {
    const { name, price } = req.body;
    ProductService.addProduct(name, price, (err, results) => {
    if (err) {
        res.status(500).send('Error añadiendo producto');
    } else {
        res.status(201).send('Producto añadido');
    }
    });
},

getAll: (req, res) => {
    ProductService.listProducts((err, results) => {
    if (err) {
        res.status(500).send('Error obteniendo productos');
    } else {
        res.status(200).json(results);
    }
    });
}
};

module.exports = ProductController;