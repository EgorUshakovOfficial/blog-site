import { gql } from '@apollo/client'; 

const GET_COMMENTS = gql`
    query getComments($postId: String!){
        comments(postId: $postId){
            _id
            comment
        }
    }
`; 

export { GET_COMMENTS }; 