const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/user.controller.js");

// Create a new user routes
router.post("/singupuser", createUser);