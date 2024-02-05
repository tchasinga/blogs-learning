const express = require('express');
const router = express.Router();
const { updateUserProfile , getUserProfileDeleteAccount , getUserProfileSingoutNow} = require("../controller/user.controller.js");

// Create a new user routes
router.put("/updatinguser/:userId", updateUserProfile);
router.delete("/deletinguser/:id", getUserProfileDeleteAccount);
router.post("/signout", getUserProfileSingoutNow);

module.exports = router;