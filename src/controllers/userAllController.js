const UserAll = require('../models/userAllModel');

exports.createUser = async (req, res) => {
  try {
    const user = new UserAll(req.body);
    const { email } = user;
        const userExist = await UserAll.findOne({ email });
        if (userExist) {
          return res
            .status(400)
            .json({ message: `User with email: ${email} already exist` });
        }
        const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

exports.getAllUsers = async (req, res) => {
    try {
      const users = await UserAll.find();
      //se valida que haya usuarios
        if (users.length === 0) {
            return res.status(404).json({ message: "There are no users" });
        }
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "internal server error" });
    }
  };
  
  exports.getUser = async (req, res) => {
    try {
      const user = await UserAll.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  
  exports.updateUser = async (req, res) => {
    try {
      const user = await UserAll.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const updatedUser = await UserAll.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      await UserAll.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'User deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };