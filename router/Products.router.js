"use strict";
let express = require("express");
let router = express.Router();
let {
  allProductsFunc,
  createProductsFunc,
  searchProdCharter,
  charterCategory,
  searchProductCode,
} = require("../controller/productsController");

router.get("/allProducts", allProductsFunc);
router.post("/create", createProductsFunc);
router.post("/searchprod/:charter", searchProdCharter);
router.post("/searchProducts/:charter/:category", charterCategory);
router.post("/searchProduct/:code", searchProductCode);

module.exports = router;
