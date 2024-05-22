const express = require('express');
const userController = require('../controllers/userAllController');
const userAllRouter = express.Router();

userAllRouter.post('/create_alluser', userController.createUser);
userAllRouter.get('/getall_alluser', userController.getAllUsers);
userAllRouter.get('/findone_alluser/:query', userController.getUser);
userAllRouter.put('/update_alluser/:id', userController.updateUser);
userAllRouter.delete('/delete_alluser/:id', userController.deleteUser);

module.exports = userAllRouter;