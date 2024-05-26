const express = require('express');
const userController = require('../controllers/userAllController');
const userAllRouter = express.Router();

userAllRouter.post('/create_alluser', userController.createUser);
userAllRouter.get('/getall_alluser', userController.getAllUsers);
<<<<<<< HEAD
userAllRouter.get('/findone_alluser/:query', userController.getUser);
userAllRouter.put('/update_alluser/:id', userController.updateUser);
userAllRouter.delete('/delete_alluser/:id', userController.deleteUser);
=======
userAllRouter.get('/findone_alluser/:id', userController.getUser);
userAllRouter.put('update_alluser/:id', userController.updateUser);
userAllRouter.delete('delete_alluser/:id', userController.deleteUser);
>>>>>>> 1344ccddc9b96200a505edc0bfba5a2da2685733

module.exports = userAllRouter;