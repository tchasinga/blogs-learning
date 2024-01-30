const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const authRoutes = require('./routes/auth.route.js');

// Initialize the app
const app = express();

// Middlewares to parse JSON
app.use(express.json());


// Middlewares to allow CORS
app.use(cors({
    origin: '*',
    credentials: true
})
);

// Adding middleware to all get, post, put, delete requests  errors handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal error server...!!!";
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });


// Connecting to MongoDB is required 
const urlmongoDB = process.env.MONGO_URL;
mongoose
  .connect(urlmongoDB, { useNewUrlParser: true, useUnifiedTopology: true })  
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(2000, () => {
      console.log(
        "Congratulations! Now you are live on MongoDB service at port:",
        2000
      );
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// APis routes 
app.use("/api/auth/", authRoutes);