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

    const getPosts = async (req, res, next) => {
      try {
        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.order === 'asc' ? 1 : -1;
        const posts = await Post.find({
          ...(req.query.userId && { userId: req.query.userId }),
          ...(req.query.category && { category: req.query.category }),
          ...(req.query.slug && { slug: req.query.slug }),
          ...(req.query.postId && { _id: req.query.postId }),
          ...(req.query.searchTerm && {
            $or: [
              { title: { $regex: req.query.searchTerm, $options: 'i' } },
              { content: { $regex: req.query.searchTerm, $options: 'i' } },
            ],
          }),
        })
          .sort({ updatedAt: sortDirection })
          .skip(startIndex)
          .limit(limit);
    
        const totalPosts = await Post.countDocuments();
    
        const now = new Date();
    
        const oneMonthAgo = new Date(
          now.getFullYear(),
          now.getMonth() - 1,
          now.getDate()
        );
    
        const lastMonthPosts = await Post.countDocuments({
          createdAt: { $gte: oneMonthAgo },
        });
    
        res.status(200).json({
          posts,
          totalPosts,
          lastMonthPosts,
        });
      } catch (error) {
        next(error);
      }
    };

// Adding export methods
module.exports = {
    createPost , getPosts
}
