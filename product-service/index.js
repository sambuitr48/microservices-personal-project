const express = require('express');
const ProductController = require('./controllers/productController');

const app = express();
const PORT = 3002;

app.use(express.json());

// Rutas
app.post('/add', ProductController.add);
app.get('/', ProductController.getAll);

app.listen(PORT, () => {
console.log(`Product Service corriendo en el puerto ${PORT}`);
});