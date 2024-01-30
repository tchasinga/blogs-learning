const User = require("../models/user.model.js");
const { errorHandler } = require("../utils/errors.js");
const jwt = require("jsonwebtoken");
const verifyUser = require("../utils/verifyuser.js");

// creating a controller function to create a new for updating user profile
const createUserUpdatingHim = async (req, res, next) => {
  const { userId } = req.params;
  const { username, email, password } = req.body;
  const token = req.cookies.access_token;
  if (!token) {
    return errorHandler(res, 401, "You need to Login...!!!");
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return errorHandler(res, 401, "You need to Login...!!!");
    }
    req.user = user;
    const userUpdating = await User.findById(userId);
    if (!userUpdating) {
      return errorHandler(res, 404, "User not found...!!!");
    }
    if (req.user._id.toString() !== userUpdating._id.toString()) {
      return errorHandler(res, 401, "You are not authorized...!!!");
    }
    userUpdating.username = username;
    userUpdating.email = email;
    userUpdating.password = password;
    userUpdating.save();
    return res.status(200).json({
      success: true,
      message: "User updated successfully...!!!",
      userUpdating,
    });
  });
}

// exporting the controller functions
module.exports = {
  createUserUpdatingHim
}