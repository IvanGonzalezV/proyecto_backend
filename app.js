import express from 'express';
import { ProductManager } from './ProductManager.js';

const app = express();
const port = 8080;

// Ruta raíz, redirige al listdo de producto
app.get('/', (req, res) => {
    res.redirect('/products');
});

// Ruta para obtner todos los products
app.get('/products', (req, res) => {
    const productManager = new ProductManager('./Productos.json');
    const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
    const products = productManager.getProducts();

    if (limit !== undefined) {
        res.json(products.slice(0, limit));
    } else {
        res.json(products);
    }
});

// Ruta para obtener productos por ID
app.get('/products/:pid', (req, res) => {
    const productManager = new ProductManager('./Productos.json');
    const productId = parseInt(req.params.pid);

    try {
        const product = productManager.getProductById(productId);
        res.json(product);
    } catch (error) {
        res.status(404).send('Producto no encontrado');
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
