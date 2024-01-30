const User = require("../models/user.model.js");
const { errorHandler } = require("../utils/errors.js");
const jwt = require("jsonwebtoken");
const verifyUser = require("../utils/verifyuser.js");

// creating a controller function to create a new for updating user profile
const updateUserProfile = async (req, res, next) => {
  try {
    // Check if the authenticated user is authorized to update the profile
    if (req.user._id !== req.params.userId) {
      return errorHandler(res, 401, "You are not authorized to update this user");
    }

    // Check if the request body contains data to update
    if (!req.body) {
      return errorHandler(res, 400, "No data provided for update");
    }

    const updates = {}; // Object to hold the fields to be updated

    if (req.body.username) {
      const { username } = req.body;
      // Validate username
      if (username.length < 4 || username.length > 20) {
        return errorHandler(res, 400, "Username should be between 4 and 20 characters long");
      }
      if (/\s/.test(username)) {
        return errorHandler(res, 400, "Username should not contain spaces");
      }
      if (!/^[a-zA-Z0-9]+$/.test(username)) {
        return errorHandler(res, 400, "Username should contain only letters and numbers");
      }
      updates.username = username;
    }

    if (req.body.email) {
      const { email } = req.body;
      // Validate email
      if (email.length < 6 || email.length > 30) {
        return errorHandler(res, 400, "Email should be between 6 and 30 characters long");
      }
      // Additional email format validation can be added here
      updates.email = email;
    }

    if (req.body.password) {
      const { password } = req.body;
      // Validate password
      if (password.length < 6) {
        return errorHandler(res, 400, "Password should be at least 6 characters long");
      }
      // Additional password security measures can be added here (e.g., hashing)
      updates.password = password;
    }

    if (req.body.profilePhoto) {
      updates.profilePhoto = req.body.profilePhoto;
    }

    // Update user profile
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: updates },
      { new: true }
    );

    if (!updatedUser) {
      return errorHandler(res, 404, "User not found");
    }

    // Remove password field from the response
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: rest,
    });
  } catch (error) {
    // Handle any internal server errors
    errorHandler(res, 500, "Internal Server Error");
  }
};


// exporting the controller functions
module.exports = {
  updateUserProfile,
};
