const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController.js');

productRouter.post('/create', productController.createProduct);
productRouter.get('/getall', productController.getProducts);
productRouter.get('/findone/:name', productController.getProduct);
productRouter.put('/update/:id', productController.updateProduct);
productRouter.delete('/deleteproduct/:id', productController.deleteProduct);

module.exports = productRouter;