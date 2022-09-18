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
        uploadProfilePic: async (_, { file }, { user }) => {
            let { createReadStream, filename } = await file;  
            const { ext } = path.parse(filename);

            // Readable stream and generate random name for image 
            const stream = createReadStream(); 
            let currDirPath = process.cwd(); 
            const { link, randomName } = generateLink(ext);
            const pathName = path.join(currDirPath.replace('/resolvers', ''), `/public/images/${randomName}`); 
            await stream.pipe(fs.createWriteStream(pathName)); 

            // Update link for specified user in database 
            let updatedUser = await User.findOneAndUpdate({ _id: user._id }, { photoUrl: link }, {new: true}) 
            return updatedUser; 

        }, 

        // Create post 
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

        editPost: async (_, { postId, title, file, description }) => {
            const prevPost = await Post.findById(postId); 
            const { createReadStream, filename } = await file; 
            const { ext } = path.parse(filename)

            // Save image in storage, generate a link for it, and save it in the database 
            const stream = createReadStream(); 
            let currDirPath = process.cwd(); 
            const { link, randomName } = generateLink(ext); 
            let pathName = path.join(currDirPath.replace('/resolvers', ''), `/public/images/${randomName}`); 
            await stream.pipe(fs.createWriteStream(pathName)); 


            // Delete previous image of specified post 
            let prevPhotoName = prevPost.photoUrl.replace('http://localhost:4000/images/', ''); 
            pathName = path.join(currDirPath.replace('/resolvers', ''), `/public/images/${prevPhotoName}`); 
            fs.unlink(pathName, err => {
                if (err) { return console.log(err); }
                console.log(`Image with ${prevPhotoName} was successfully deleted`);
            }); 

            // Update photo url in the database 
            let updatedPost = await Post.findOneAndUpdate({ _id: postId }, { title, description, photoUrl: link }, { new: true });
            return updatedPost; 


        }, 

        deletePost: async (_, { postId }) => {
            // Remove all likes and comments associated 
            // with specified post id  from database
            await Like.remove({ postId }); 
            await Comment.remove({ postId }); 

            // Then remove post from it 
            let deletedPost = await Post.findOneAndRemove({ _id: postId });

            // Delete photo from storage 
            let photoName = deletedPost.photoUrl.replace("http://localhost:4000/images/", "");
            let currDirPath = process.cwd();
            let pathName = path.join(currDirPath.replace('/resolvers', ''), `/public/images/${photoName}`);
            fs.unlink(pathName, err => {
                if (err) { console.log("File was not deleted from database") }
                else {
                    console.log(`${photoName} was successfully deleted from images directory`)
                }
            }); 

            return deletedPost; 
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
        }, 

        editComment: async (_, { commentId, comment}) => {
            let editedComment = await Comment.findOneAndUpdate({ _id: commentId }, { comment }, {new:true}); 
            return editedComment; 
        }
    },

    User: {
        likes: async ({ _id }) => {
            let likes = await Like.find({ userId: _id });
            return likes;
        },
        comments: async ({ _id }) => {
            let comments = await Comment.find({ userId: _id });
            return comments;
        },
        posts: async ({ _id }) => {
            let userPosts = await Post.find({ authorId: _id });
            return userPosts;
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
            let author = await User.findById(authorId);
            return author; 
        }
    },

    Comment: {
        author: async ({ userId }) => {
            let author = await User.findById(userId); 
            return author; 
        }
    }

}

export { resolvers }; 