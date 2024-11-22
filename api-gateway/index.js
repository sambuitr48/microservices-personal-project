const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Configurar Proxy
app.use('/auth', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

app.listen(PORT, () => {
console.log(`API Gateway corriendo en el puerto ${PORT}`);
});