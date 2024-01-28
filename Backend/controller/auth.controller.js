const bcrypt = require('bcryptjs');
const User = require('../models/user.model.js');

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
            return res.status(400).json({ msg: "User already exists" });
        }
        // Create salt & hash
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        // Create new user
        const newUser = new User({
            username,
            password: hash,
            email
        });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// exporting the controller functions
module.exports =  { createUserSingUp };