const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
   userId: {
        type: String,
        required: true,
   },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
        default : "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    username: {
        type: String,
        required: true,
    },
    category: {
        type: Array,
        required: false,
    },
    }, {
    timestamps: true,
    });

const Post = mongoose.model("Post", postSchema);
module.exports = Post;