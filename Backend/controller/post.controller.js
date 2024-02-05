
// Create Post
const createPost = async (req, res) => {
    if(!req.body.isAdmin){
        return res.status(403).json({message: "You are not authorized to create a post...!!!"})
    }
    if(!req.body.title || !req.body.content){
        return res.status(400).json({message: "Title and content are required...!!!"})
    }

    const slug = req.body.title.split(' ').join('-').tolowerCase().replace(/[^a-zA-Z0-9-]/g, '');
    
    const newPost = new Post({
        ...req.body,
        slug,
        userId : req.user.id
    });
    newPost.save()
}