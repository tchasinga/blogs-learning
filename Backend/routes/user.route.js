const express = require('express');
const router = express.Router();
const { updateUserProfile } = require("../controller/user.controller.js");

// Create a new user routes
router.put("/updatinguser/:userId", updateUserProfile);

module.exports = router;