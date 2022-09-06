import mongoose from 'mongoose'; 
const { Schema } = mongoose; 

const commentSchema = new Schema({
    userId: { type: String }, 
    postId: { type: String }, 
    createdAt: { type: Date, default: Date.now }, 
    description: {type: String}
})

const Comment = mongoose.model("Comment", commentSchema); 
export { Comment };