const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");
const errorHandler = require("../utils/errors.js");
const jwt = require("jsonwebtoken");


// Adding user sing up
const createUserSingUp = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    // Validations
    if (!username || !password || !email) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    // Check for existing user
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User already exists please change your email..." });
    }
    // Create salt & hash
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    // Create new user
    const newUser = new User({
      username,
      password: hash,
      email,
    });
    const savedUser = await newUser.save();
    // Send response to the client
    res.status(200).json({ msg: "User created successfully", savedUser });
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: err.message });
    res.status(500).json({ msg: "Error creating user" });
  }
};

// Adding a sign-in for user
const createUserSignInUser = async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill all the text field" });
    }
  
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return next(errorHandler(404, "User not found"));
      }
      const validPassword = bcrypt.compareSync(password, validUser.password);
      if (!validPassword) {
        return next(errorHandler(400, "Please check your information, something is wrong"));
      }
      const token = jwt.sign({ id: validUser._id, isAdmin : validUser.isAdmin}, process.env.JWT_SECRET, { expiresIn: "1d" });
      const {password : pass, ...user } = validUser._doc;
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json({ msg: "The user is signed in successfully", user });
    } catch (error) {
      next(error);
    }
  };


// Function to handle user sign-in with Google
const createUserSignInUserWithGoogle = async (req, res, next) => {
  const { name, email, googlePhotoUrl } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });

    if (user) {
      // If user exists, sign them in
      const token = jwt.sign({ id: user._id, isAdmin : user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "1d" });
      const { password, ...userData } = user._doc;

      // Set the JWT token as a cookie and send response
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json({ msg: "User signed in successfully", user: userData });
    } else {
      // If user doesn't exist, create a new user
      const generatedPassword = Math.random().toString(36).slice(-8);
      const hashPassword = await bcrypt.hash(generatedPassword, 10);
      
      const newUser = new User({
        username: name,
        password: hashPassword,
        email,
        profilePhoto: googlePhotoUrl, // Use camelCase for consistency
      });

      await newUser.save();
      const token = jwt.sign({ id: newUser._id , isAdmin : newUser.isAdmin}, process.env.JWT_SECRET, { expiresIn: "1d" });
      const { password, ...userData } = newUser._doc;

      // Set the JWT token as a cookie and send response
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json({ msg: "User signed in successfully", user: userData });
    }
  } catch (error) {
    // Pass the error to the error handling middleware
    next(error);
  }
};

// exporting the controller functions
module.exports = { createUserSingUp, createUserSignInUser , createUserSignInUserWithGoogle};
