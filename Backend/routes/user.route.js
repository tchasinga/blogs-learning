const express = require("express");
const router = express.Router();
const { createUserUpdatingHim } = require("../controller/user.controller.js");

// Create a new user routes
router.put("/updatinguser/:userId", createUserUpdatingHim);

module.exports = router;