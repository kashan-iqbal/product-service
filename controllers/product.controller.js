const Product = require("../models/product.model");

exports.getProducts = async (req, res) => {
  const products = await Product.find({ createdBy: req.user.userId });
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const { name, price } = req.body;
  const product = await Product.create({
    name,
    price,
    createdBy: req.user.userId,
  });
  res.status(201).json(product);
};
