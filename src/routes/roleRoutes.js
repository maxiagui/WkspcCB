const express = require('express');
const roleRouter = express.Router();
const roleController = require('../controllers/roleController');

roleRouter.post('/create', roleController.createRole);
roleRouter.get('/getall', roleController.getRoles);
roleRouter.get('/findone/:name', roleController.getRole);
roleRouter.put('/update/:id', roleController.updateRole);
roleRouter.delete('/deleteRole/:id', roleController.deleteRole);

module.exports = roleRouter;