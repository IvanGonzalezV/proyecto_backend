import fs from 'fs';

export class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
        this.initializeFile();
        this.loadProducts();
    }

    initializeFile() {
    try {
        fs.readFileSync(this.path, 'utf8');
    } catch (error) {
        if (error.code === 'ENOENT') {
            fs.writeFileSync(this.path, '[]');
        } else {
            console.error("Error al inicializar el archivo:", error.message);
        }
    }
}

    loadProducts() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            this.products = JSON.parse(data);
        } catch (error) {
            // Si hay un error al leer el archivo, se deja el arreglo de productos vacío
            console.error("Error al cargar los productos:", error.message);
            this.products = [];
        }
    }

    saveProducts() {
        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2));
        } catch (error) {
            console.error("Error al guardar los productos:", error.message);
        }
    }

    generatedId() {
        if (this.products.length === 0) {
            return 1; // para que si no hay productos, el primer id sea 1
        }
        const lastProduct = this.products[this.products.length - 1];
        return lastProduct.id + 1; // Se genera  id autoincrementable por 1
    }

    getProducts() {
        return this.products;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        const id = this.generatedId();

        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
        this.saveProducts(); // Se guarda el producto en el archivo
        return newProduct;
    }

    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);
        if (!product) {
            throw new Error("Product Not Found.");
        }
        return product;
    }

    updateProduct(productId, updatedFields) {
        let found = false;
        this.products = this.products.map(product => {
            if (product.id === productId) {
                found = true;
                return { ...product, ...updatedFields }; // para actualizar el prducto
            }
            return product;
        });

        if (!found) {
            throw new Error("Product Not Found.");
        }

        this.saveProducts(); // para guardar la actualización en el archivo
    }

    deleteProduct(productId) {
        const initialLength = this.products.length;
        this.products = this.products.filter(product => product.id !== productId);

        if (initialLength === this.products.length) {
            throw new Error("Product Not Found.");
        }

        this.saveProducts(); // para guardar los cambios en el archivo
    }
}
