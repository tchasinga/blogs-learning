const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");



// adding user updating profile
const updateUserProfile = async (req, res, next) => {
  try {
    // Check if the password meets the minimum length requirement
    if (req.body.password && req.body.password.length < 6) {
      return res
        .status(401)
        .json({ msg: "Password should be at least 6 characters long" });
    }

    // Hash the password if it exists and meets the length requirement
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    // Check username constraints
    if (req.body.username) {
      const usernameLength = req.body.username.length;
      if (usernameLength < 4 || usernameLength > 20) {
        return res
          .status(401)
          .json({ msg: "Username should be between 4 and 20 characters long" });
      }
      // if (req.body.username.includes(" ")) {
      //   return res
      //     .status(401)
      //     .json({ msg: "Username should not contain spaces" });
      // }
      // if (!/^[a-zA-Z0-9]+$/.test(req.body.username)) {
      //   return res
      //     .status(401)
      //     .json({ msg: "Username should not contain special characters" });
      // }
    }

    // Check email constraints
    if (req.body.email) {
      const emailLength = req.body.email.length;
      if (emailLength < 6 || emailLength > 30) {
        return res
          .status(401)
          .json({ msg: "Email should be between 6 and 30 characters long" });
      }
    }

    // Update the user profile
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.params.userId }, // Corrected from req.params.id to req.params.userId
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

    if (!updatedUser) {
      console.error("No user found with this id");
      return res.status(404).json({ msg: "No user found with this id" });
    }

    // Omit password field from the response
    const { password, ...rest } = updatedUser._doc;

    // Send the response
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: rest,
    });
  } catch (error) {
    // Handle errors
    console.error("Error updating user profile:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// Add user delete Account now...
const getUserProfileDeleteAccount = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.clearCookie("access_token");
    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    // Handle different types of errors
    if (error.name === 'CastError') {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    // Handle other types of errors
    next(error);
  }
};

const getUserProfileSingoutNow = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({ message: "User signed out successfully!" });
  } catch (error) {
    // Handle different types of errors
    if (error.name === 'CastError') {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    // Handle other types of errors
    next(error);
  }
}


module.exports = { updateUserProfile , getUserProfileDeleteAccount , getUserProfileSingoutNow};
