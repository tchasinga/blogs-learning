const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },
    // role: {
    //     type: String,
    //     enum: ["user", "admin"],
    //     default: "user"
    // }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

 module.exports = User;
