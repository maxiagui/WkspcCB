const Role = require('../models/roleModel');

exports.createRole = async (req, res) => {
  try {
    const existingRole = await Role.find({ name: { $regex: new RegExp('.*' + req.params.name + '.*', "i") }});
    if (existingRole) {
      return res.status(400).json({ message: "Role already exists" });
    }
    const role = new Role(req.body);
    await role.save();
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    if (roles.length === 0) {
      return res.status(404).json({ message: "No roles found" });
    }
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRole = async (req, res) => {
  try {
    const role = await Role.findOne({ name: { $regex: new RegExp(req.params.name, "i")}});
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const role = await Role.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const role = await Role.findOneAndDelete({ _id: req.params.id });
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json({ message: "Role deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
}