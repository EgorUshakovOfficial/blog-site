import { gql } from 'apollo-server'; 

const typeDefs = gql`
    scalar Upload

    type Query{
        "User who is authenticated"
        user: User!
        "All posts"
        posts: [Post!]!
        "Specific post"
        post(id: String!): Post
        "Comments for specific post"
        comments(postId: String!): [Comment!]!
    }

    type Mutation{
        uploadProfilePic(file: Upload!): User
        createPost(title: String!, description: String!, file: Upload!): Post
        editPost(postId: String!, title: String!, file: Upload!, description: String!): Post
        deletePost(postId: String!): Post
        likePost(postId: String!): Post
        createComment(postId: String!, comment: String!): Comment
        deleteComment(commentId: String!): Comment
        editComment(commentId: String!, comment: String!): Comment
    }

    type User{
        _id: ID!
        " First name of the user"
        firstName: String! 
        "Last name of the user"
        lastName: String!
        "Total number of posts the user liked"
        likes: [Like!]!
        "Url of profile picture"
        photoUrl: String!
        "Total number of posts the user commented on"
        comments: [Comment]!
        "Total number of posts created by user"
        posts: [Post!]!
    }

    type Author{
        _id: ID! 
        photoUrl: String!
        firstName: String!
        lastName: String!
    }

    type Post{
        _id: ID!
        "Title of the post"
        title: String!
        "Description of the post"
        description: String!
        "Photo url of blog picture"
        photoUrl: String! 
        "Date of when post is created"
        createdAt: String!
        "Users who liked the post"
        likes: [Like!]!
        "Comments of the post"
        comments: [Comment!]!
        "Author of post" 
        author: Author!
    }
    
    type Comment{
        _id: ID!
        "User ID of who commented on post with specific post id"
        author: Author!
        "Comment associated with post Id"
        postId: String!
        "Time of when comment is created"
        createdAt: String! 
        "Comment"
        comment: String!
    }
    
    type Like{
        _id: ID!
        "User ID of who liked post with specific post id"
        userId: String!
        "Like associated with post Id"
        postId: String!
    } 
`; 

export { typeDefs };