const User = require("../models/user.model.js");



// creating a controller function to create a new user for signup
const createUserSingUp = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ user });
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
}