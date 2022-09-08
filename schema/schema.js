import { gql } from 'apollo-server'; 

const typeDefs = gql`
    scalar Upload

    type Query{
        user: User!
        posts: [Post!]!
        post(id: String!): Post
    }

    type Mutation{
        createPost(title: String!, description: String!, file: Upload!): Post
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
        userId: ID! 
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
        userId: String!
        "Comment associated with post Id"
        postId: String!
        "Time of when comment is created"
        createdAt: String! 
        "Comment"
        description: String!
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