const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.post('/create', categoryController.createCategory);
categoryRouter.get('/getall', categoryController.getCategories);
categoryRouter.get('/findone/:name', categoryController.getCategory);
categoryRouter.put('/update/:id', categoryController.updateCategory);
categoryRouter.delete('/deletecategory/:id', categoryController.deleteCategory);

module.exports = categoryRouter;