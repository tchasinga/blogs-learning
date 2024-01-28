const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');

// Initialize the app
const app = express();

// Middlewares to parse JSON
app.use(express.json());

// Setup server port
app.listen(3000, () => {
    console.log('Server started at port 3000');
});

// Middlewares to allow CORS
app.use(cors({
    origin: '*'
}));