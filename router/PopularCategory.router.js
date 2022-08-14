let express = require("express");
let mongoose = require("mongoose");
let ALLPOPULARCATEGORY = require("../models/popularCategory.model");
let router = express.Router();
router.get("/allPopularCategory", async (req, res) => {
  let allcategory = await ALLPOPULARCATEGORY.find({})
  res.send(allcategory);
});
router.post("/createCategory", async (req, res) => {
  let {nameCategory, img, http} = req.body
  let category = await new ALLPOPULARCATEGORY({nameCategory, img, http})
  category.save()
  res.status(200).json({message: "success", category})
});
router.post("/searchprod/:charter", async (req, res, next) => {
  let product = await PRODUCTS.find({charter: req.params.charter})
  res.send(product);
  // res.status(200).json({message: "success"})
  return next();
});
router.post("/searchProducts/:charter/:category", async (req, res, next) => {
  let product = await PRODUCTS.find({charter: req.params.charter, category: req.params.category})
  console.log(req.params.charter, req.params.category);
  res.send(product);
  // res.status(200).json({message: "success"})
  return next();
});
router.post("/searchProduct/:code", async (req, res, next) => {
  let product = await PRODUCTS.findOne({code: req.params.code})
  res.send(product);
  // res.status(200).json({message: "success"})
  return next();
});

module.exports = router;
