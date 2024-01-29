const express = require("express");
const router = express.Router();
const { createUserSingUp, createUserSingInUser } = require("../controller/auth.controller.js");


// Create a new user routes
router.post("/singupuser", createUserSingUp);
router.post("/singinuser", createUserSingInUser)


module.exports = router;