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
  user.save()
  res.status(200).json(user);
};

module.exports.oneUserFunc = async (req, res, next) => {
  const [_id] = req.params;
  let user = await USERS.find({ _id });
  res.status(200).json(user);
};
