const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');

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


// Connecting to MongoDB is required 
const urlmongoDB = process.env.MONGO_URL;
mongoose
  .connect(urlmongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log(
        "Congratulations! Now you are live on MongoDB service at port:",
        5000
      );
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });