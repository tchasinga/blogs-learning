const User = require("../models/user.model.js");
// const { errorHandler } = require("../utils/errors.js");
// const jwt = require("jsonwebtoken");
// const verifyUser = require("../utils/verifyuser.js");


// creating a controller function to create a new for updating user profile
const updateUserProfile = async (req, res, next) => {
  if (req.user._id !== req.params.userId) {
    return  res.status(401).json({msg : "You are not authorized to update this user"});
  }

  if (req.body.password) {
    if (req.body.password.length < 6) {
      return  res.status(401).json({msg : "Password should be at least 6 characters long"});
    }
  }

  if (req.body.username) {
    if (req.body.username.length < 4 || req.body.username.length > 20) {
      return  res.status(401).json({msg : "Username should be between 4 and 20 characters long"});
    }
    if (req.body.username.includes(" ")) {
      return res.status(401).json({msg : "Username should not contain spaces"});
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return res.status(401).json({msg : "Username should not contain special characters"});
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            profilePhoto: req.body.profilePhoto,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        user: rest,
      });
    } catch (error) {}
  }

  if (req.body.email) {
    if (req.body.email.length < 6 || req.body.email.length > 30) {
      return res.status(401).json({msg : "Email should be between 6 and 30 characters long"});
    }
  }
};

// exporting the controller functions
module.exports = {
  updateUserProfile,
};
