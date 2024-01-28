const User = require("../models/user.model.js");

// creating a controller function to create a new user
const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const newUser = new User({ username, password, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

// exporting the controller functions
module.exports = {
  createUser
}