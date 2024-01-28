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
        res.status(200).json({ msg: "User created successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
        res.status(500).json({ msg: "Error creating user" });
    }
}

// exporting the controller functions
module.exports =  { createUserSingUp };