import { gql } from '@apollo/client'; 

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
export { LIKE_POST }; 