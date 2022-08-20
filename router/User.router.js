"use strict";
let express = require("express");
let router = express.Router();
let {
  allUsersFunc,
  createUserFunc,
  oneUserFunc,
  checkUniqueEmailFunc,
} = require("../controller/userController");

router.get("/allUsers", allUsersFunc);
router.post("/createUser", createUserFunc);
router.post("/searchUser/:_id", oneUserFunc);
router.post("/checkUniqueEmail/:email", checkUniqueEmailFunc);

module.exports = router;
