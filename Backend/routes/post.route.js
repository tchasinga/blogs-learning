const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPost, updatePost, deletePost } = require("../controller/post.controller.js");

// Create a new user post routes
router.post("/createpost", createPost);

// Retrieve all posts


// Retrieve a single post with id


// Update a post with id


// Delete a post with id


module.exports = router;