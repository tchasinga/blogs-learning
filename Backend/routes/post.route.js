const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPost, updatePost, deletePost } = require("../controller/post.controller.js");