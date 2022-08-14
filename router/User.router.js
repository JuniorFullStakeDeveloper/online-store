"use strict";
let express = require("express");
let router = express.Router();
let {
  allUsersFunc,
  createUserFunc,
  oneUserFunc,
} = require("../controller/userController");

router.get("/allUsers", allUsersFunc);
router.post("/createUser", createUserFunc);
router.post("/searchUser/:_id", oneUserFunc);

module.exports = router;
