import { Post } from '../models/Post.js'; 
import { Comment } from '../models/Comment.js'; 
import { Like } from '../models/Like.js';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs'; 
import { generateLink } from '../utils/generateLink.js'; 
import fs from 'fs'; 
import path from 'path';

const resolvers = {
    Upload: GraphQLUpload, 
    Query: {
        user: (_, __, { user }) => {
            return user;
        }, 
        posts: async (_, {first, offset}) => {
            let posts = await Post.find({});
            return posts.slice(first, offset);
        }
    },

    Mutation: {
        createPost: async (_, { title, description, file }, { user }) => {
            let { createReadStream, filename} = await file; 

            const { ext } = path.parse(filename); 

            // Readable stream and generate random name for image 
            const stream = createReadStream();
            let currDirPath = process.cwd(); 
            const {link, randomName} = generateLink(ext);
            const pathName = path.join(currDirPath.replace('/resolvers', ''), `/public/images/${randomName}`); 
            await stream.pipe(fs.createWriteStream(pathName)); 

            // Create new post in the database
            let newPost = new Post({
                title,
                description,
                authorId: user._id,
                photoUrl: link
            }); 

            await newPost.save(); 
            return newPost; 
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