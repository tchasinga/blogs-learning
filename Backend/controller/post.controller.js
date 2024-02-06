const Post = require('../models/post.model.js');


// Create Post
const createPost = async (req, res) => {
    
    console.log(req.user)
    // if(!req.user || !req.user.isAdmin){
    //     res.status(403).send('You are not authorized to perform this action');
    // } 
    if(!req.body.title || !req.body.content){
        return res.status(400).json({message: "Title and content are required...!!!"})
    }

    const slug = req.body.title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g, '');
    const newPost = new Post({
        ...req.body,
        slug,
        userId : req.user.id
    });
   try {
    const savedPost =  newPost.save()
    res.status(201).json({
        message: "Post created successfully...!!!",
        post: savedPost,
        success: true
    })
   } catch (error) {
    res.status(500).json({
        message: "Post not created...!!!",
        error: error.message,
        success: false
    })
   }
}


// Adding export methodes
module.exports = {
    createPost
}
