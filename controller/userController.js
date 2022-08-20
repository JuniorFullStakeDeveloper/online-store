"use strict";
let USERS = require("../models/user.model");

module.exports.allUsersFunc = async (req, res, next) => {
  let users = await USERS.find({});
  res.status(200).json(users);
};
module.exports.createUserFunc = async (req, res, next) => {
  const {
    username,
    surname,
    email,
    phone,
    index,
    password,
    password__confirm,
    address,
    city,
    country,
    region,
  } = req.body;
  let candidate = await USERS.findOne({ email });
  if (!candidate) {
    if (password === password__confirm) {
      let user = await new USERS({
        username,
        surname,
        email,
        phone,
        index,
        password,
        password__confirm,
        address,
        city,
        country,
        region,
      });
      user.save();
      res.status(200).json(user);
    } else {
      res.status(200).json({ MESSAGE: "Пароли не совпадают" });
    }
  } else {
    res.status(200).json({ MESSAGE: "Данный email уже зарегистрирован" });
  }
};

module.exports.oneUserFunc = async (req, res, next) => {
  const {_id} = req.params;
  let user = await USERS.find({ _id });
  res.status(200).json(user);
};

module.exports.checkUniqueEmailFunc = async (req, res, next) => {
  const {email} = req.params;
  let findUser = await USERS.find({ email });
  console.log(findUser.length);
  if (findUser.length == 1) {
    findUser = true
  }else{
    findUser = false
  }
  console.log(findUser);
  if (findUser) {
  return res.status(200).json(false);
  }else{
    return res.status(200).json(true);
  }
};
