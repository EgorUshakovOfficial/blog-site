import mongoose from 'mongoose';
const { Schema } = mongoose;

const likeSchema = new Schema({
    userId: { type: String },
    postId: { type: String },
    createdAt: { type: Date, default: Date.now },
})

const Like = mongoose.model("Like", likeSchema);
export { Like };