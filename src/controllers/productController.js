const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
  try {
    const productData = new Product(req.body);
    const { name } = productData;
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate({ path: 'category', select: 'name' });
    if (products.length === 0) {
      return res.status(404).json({ message: "No Products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProduct = async (req, res) => {
    try {
      if (req.params.name.length < 4) {
        return res.status(400).json({ message: "Search term must be at least 4 characters" });
      }
      const product = await Product.find({ name: { $regex: new RegExp('.*' + req.params.name + '.*', "i") }});
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.id });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
}