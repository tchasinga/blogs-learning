const Post = require('../models/post.model.js');

// Create Post
const createPost = async (req, res) => { 
    // if (!req.user.isAdmin || !req.user.id) {
    //     return res.status(401).json({ message: "User is not authenticated or user id is missing." });
    //    }
       if (!req.body.title || !req.body.content) {
        return res.status(401).json({ message: "All content are required " });
       }
       const slug = req.body.title
         .split(' ')
         .join('-')
         .toLowerCase()
         .replace(/[^a-zA-Z0-9-]/g, '');
       const newPost = new Post({
         ...req.body,
         slug,
        //  userId: req.user.id,
       });
         const savedPost = await newPost.save();
         res.status(201).json(savedPost);
    
     };

// Adding export methods
module.exports = {
    createPost
}
