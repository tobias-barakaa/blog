import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    
    },
    title: {
        type: String,
        required: true,
        unique: true,

    
    },
    image: {
        type: String,
        default: "https://www.shutterstock.com/image-illustration/minimal-concept-cloud-connectivity-ethernet-cables-2009463374"
    },
    category: {
        type: String,
        default: 'Uncategorized'
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },

}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

export default Post;