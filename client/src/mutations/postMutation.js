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

const EDIT_POST = gql`
    mutation editPost($postId: String!, $title: String!, $file: Upload!, $description: String!){
        editPost(postId: $postId, title: $title, file: $file, description: $description){
            _id
            title
            description
            photoUrl
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

export { CREATE_POST, EDIT_POST, DELETE_POST, LIKE_POST}; 