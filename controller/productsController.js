"use strict";
let PRODUCTS = require("../models/product.model");

module.exports.allProductsFunc = async (req, res, next) => {
  let products = await PRODUCTS.find({});
  res.status(200).json(products)
};

module.exports.createProductsFunc = async (req, res, next) => {
  let { name, category, charter, code, img, price, discount, percent, size, season, structure, country, care } = req.body;
  let product = await new PRODUCTS({ name, category, country, charter, code, img, price, discount, percent, size, season, structure, country, care });
  product.save();
  res.status(200).json(product)
};

module.exports.searchProdCharter = async (req, res, next) => {
  let products = await PRODUCTS.find({ charter: req.params.charter });
  res.status(200).json(products)
};

module.exports.charterCategory = async (req, res, next) => {
  let product = await PRODUCTS.find({
    charter: req.params.charter,
    category: req.params.category,
  });
  res.status(200).json(product)
};

module.exports.searchProductCode = async (req, res, next) => {
  let product = await PRODUCTS.findOne({ code: req.params.code });
  res.status(200).json(product)
};
