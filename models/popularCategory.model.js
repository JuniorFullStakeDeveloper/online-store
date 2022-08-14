let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let popularcategorySchema = new Schema({
  nameCategory: String,
  img: String,
  http: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
  let popularCategory = mongoose.model("popularcategory", popularcategorySchema)

module.exports = popularCategory;
