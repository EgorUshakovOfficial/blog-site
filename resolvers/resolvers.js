import { User } from '../models/User.js'; 
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
        posts: async () => {
            let posts = await Post.find({});
            return posts;
        }, 
        post: async (_, { id }) => {
            let post = await Post.findById(id); 
            return post; 
        }, 

        comments: async (_, { postId }) => {
            let comments = await Comment.find({ postId }); 
            return comments; 
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
        }, 

        likePost: async (_, { postId }, { user }) => {
            const filter = { userId: user._id, postId }; 
            let newLike = await Like.findOne(filter); 

            // If like object does not exist in the database
            // create one and save it 
            if (newLike === null) {
                newLike = new Like({
                    userId: user._id,
                    postId
                });

                await newLike.save();
            }

            // Otherwise, remove like object from the database 
            else {
                await Like.findOneAndRemove(filter);
            }

            // Retrieve post from database 
            const post = await Post.findById(postId); 
            return post; 
        }, 

        createComment: async (_, { postId, comment }, { user }) => {
            // Create new comment 
            let newComment = new Comment({
                userId: user._id,
                postId,
                comment
            });

            // Save it in the database 
            await newComment.save(); 

            return newComment; 

        }, 

        deleteComment: async (_, { commentId }) => {
            let deletedComment = await Comment.findOneAndDelete({ _id: commentId }); 
            return deletedComment;
        }
    }, 

    Post: {
        likes: async ({ _id }) => {
            let likes = await Like.find({ postId: _id });
            return likes;
        },
        comments: async ({ _id }) => {
            let comments = await Comment.find({ postId: _id });
            return comments;
        }, 
        author: async ({ authorId }) => {
            console.log(authorId);
            let author = await User.findById(authorId);
            console.log(author);
            return {
                userId: author._id, 
                firstName: author.firstName, 
                lastName: author.lastName
            }
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
            let userPosts = await Post.find({ authorId: _id }); 
            return userPosts; 
        }
    }
}

export { resolvers }; 