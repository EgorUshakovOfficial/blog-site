import { Post } from '../models/Post.js'; 
import { Comment } from '../models/Comment.js'; 
import { Like } from '../models/Like.js'; 

const resolvers = {
    Query: {
        user: (_, __, { user }) => {
            return user;
        }, 
        allPosts: async () => {
            let posts = await Post.find({}); 
            return posts;
        }
    },

    Post: {
        likes: async ({ _id }) => {
            let likes = await Like.find({ userId: _id });
            return likes;
        },
        comments: async ({ _id }) => {
            let comments = await Comment.find({ userId: _id });
            return comments;
        }
    }, 

    User: {
        likes: async ({ _id }) => {
            let likes = await Like.find({ userId:_id }); 
            return likes; 
        }, 
        comments: async ({_id}) => {
            let comments = await Comment.find({ userId: _id }); 
            return comments; 
        },
        posts: async ({ _id }) => {
            let userPosts = await Post.find({ userId: _id }); 
            return userPosts; 
        }
    }
}

export { resolvers }; 