const express = require("express");
const router = express.Router();
const { createUserSingUp, createUserSignInUser ,createUserSignInUserWithGoogle } = require("../controller/auth.controller.js");


// Create a new user routes
router.post("/singupuser", createUserSingUp);
router.post("/singinuser", createUserSignInUser)
router.post("/googleuser", createUserSignInUserWithGoogle)


module.exports = router;