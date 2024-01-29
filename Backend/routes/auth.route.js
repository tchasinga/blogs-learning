const express = require("express");
const router = express.Router();
const { createUserSingUp, createUserSignInUser } = require("../controller/auth.controller.js");


// Create a new user routes
router.post("/singupuser", createUserSingUp);
router.post("/singinuser", createUserSignInUser)


module.exports = router;