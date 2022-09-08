import mongoose from 'mongoose'; 
const { Schema } = mongoose; 

const postSchema = new Schema({
    title: { type: String },
    description: { type: String },
    photoUrl: { type: String },
    postUrl: {type:String},
    createdAt: { type: Date, default: Date.now},
    authorId: { type: String }
}); 

const Post = mongoose.model("Post", postSchema); 

export {Post};