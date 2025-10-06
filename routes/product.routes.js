const express = require("express");
const {
  getProducts,
  createProduct,
} = require("../controllers/product.controller");
const auth = require("../middleware/auth.middleware");
const router = express.Router();

router.get("/", auth, getProducts);
router.post("/", auth, createProduct);

module.exports = router;
