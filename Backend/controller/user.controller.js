const User = require("../models/user.model.js");

// creating a controller function to create a new user
const createUser = async (req, res) => {
 res.json("Hello World");
}

// exporting the controller functions
module.exports = {
  createUser
}