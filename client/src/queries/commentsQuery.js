import { gql } from '@apollo/client'; 

const GET_COMMENTS = gql`
    query getComments($postId: String!){
        comments(postId: $postId){
            _id
            comment
            author{
                _id
                photoUrl
            }
        }
    }
`; 

export { GET_COMMENTS }; 