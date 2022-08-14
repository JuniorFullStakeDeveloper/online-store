let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let productSchema = new Schema({
    name: String,
    category: String,
    country: String,
    charter: String,
    code: Number,
    img: String,
    price: Number,
    discount: Number,
    percent: Number,
    size: Array,
    season: String,
    structure: String,
    care: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }),
  Product = mongoose.model("Product", productSchema);

module.exports = Product;
