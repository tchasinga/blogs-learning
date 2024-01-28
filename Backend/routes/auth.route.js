const express = require("express");
const router = express.Router();
const { createUserSingUp } = require("../controller/auth.controller.js");


// Create a new user routes
router.post("/singupuser", createUserSingUp);


module.exports = router;