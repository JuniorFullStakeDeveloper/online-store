let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: String,
    surname: String,
    email: String,
    phone: Number,
    index : Number,
    password: String,
    password__confirm: String,
    address: String,
    city: String,
    country: String,
    region: String,

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }),
  User = mongoose.model("User", userSchema);

module.exports = User;
