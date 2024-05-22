const Category = require('../models/categoryModel');

exports.createCategory = async (req, res) => {
  try {
    console.log({Category});
    const existingCategory = await Category.findOne({ name: { $regex: new RegExp(req.params.name, "i")}});
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate({path:'createdBy', select:'lastname'});
    if (categories.length === 0) {
      return res.status(404).json({ message: "No Categorys found" });
    }
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategory = async (req, res) => {
    try {
      if (req.params.name.length < 4) {
        return res.status(400).json({ message: "Search term must be at least 4 characters" });
      }
      const category = await Category.find({ name: { $regex: new RegExp('.*' + req.params.name + '.*', "i") }});
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await category.findOneAndDelete({ _id: req.params.id });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
}