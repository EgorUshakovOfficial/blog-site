import { gql } from '@apollo/client'; 

const CREATE_POST = gql`
    mutation createPost($title: String!, $description: String!, $file: Upload!){
        createPost(title: $title, description: $description, file: $file){
            title
            description
            author{
                _id
            }
        }
    }
`

const DELETE_POST = gql`
    mutation deletePost($postId: String!){
        deletePost(postId: $postId){
            _id
        }
    }
`; 

const LIKE_POST = gql`
    mutation likePost($postId: String!){
        likePost(postId: $postId){
            _id
            likes{
                _id
                userId
                postId
            }
        } 
    }
`

export { CREATE_POST, DELETE_POST, LIKE_POST}; 