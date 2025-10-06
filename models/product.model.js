const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  createdBy: String,
});

module.exports = mongoose.model("Product", productSchema);
