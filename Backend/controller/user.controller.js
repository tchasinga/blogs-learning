const User = require("../models/user.model.js");
const { errorHandler } = require("../utils/errors.js");
const jwt = require("jsonwebtoken");
const verifyUser = require("../utils/verifyuser.js");

// creating a controller function to create a new for updating user profile
const createUserUpdatingHim = async (req, res, next) => {
}

// exporting the controller functions
module.exports = {
  createUserUpdatingHim
}