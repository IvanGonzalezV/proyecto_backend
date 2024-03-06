import { ProductManager } from "./ProductManager.js";
import express from "express";

//Product Manager
const path = './Productos.json';
const productManagerInstance = new ProductManager(path);

// Array vacio para los products
console.log("productos:", productManagerInstance.getProducts());

// add nuevo producto
try {
    productManagerInstance.addProduct({
        title: "Example Product",
        description: "This is an Example Product",
        price: 200,
        thumbnail: "Pending Link",
        code: "sell_0122",
        stock: 16
    });
    console.log("Producto Agregado Correctamente.");
} catch (error) {
    console.error("Error al Agregar el Producto.", error.message);
}

//obtener producto nuevamente con el nuevo producto agregado
console.log("Productos:", productManagerInstance.getProducts());

//agregar producto con un mismo codigo (Error)
try {
    productManagerInstance.addProduct({
        title: "Otro Producto",
        description: "Este es un Nuevo Producto",
        price: 120,
        thumbnail: "Otra Imagen",
        code: "sell_0122",
        stock: 10
    });
    console.log("Producto Agregado correctamente.");
} catch (error) {
    console.error("Error al Agregar el Producto.", error.message);
}

//obtener producto por ID (solo con id valido)
try {
    const productId = productManagerInstance.getProducts()[0].id;
    const getProductById = productManagerInstance.getProductById(productId);
    console.log("Producto Encontrado por ID.", getProductById);
} catch (error) {
    console.error("Error al Obtener el Producto por ID.", error.message);
}
