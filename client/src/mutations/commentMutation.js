import { gql } from '@apollo/client'; 

const CREATE_COMMENT = gql`
    mutation createComment($postId: String!, $comment: String!){
        createComment(postId: $postId, comment: $comment){
            _id
            comment
        }
    }
`; 

export { CREATE_COMMENT }; 