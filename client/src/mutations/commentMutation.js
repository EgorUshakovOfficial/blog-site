import { gql } from '@apollo/client'; 

const CREATE_COMMENT = gql`
    mutation createComment($postId: String!, $comment: String!){
        createComment(postId: $postId, comment: $comment){
            _id
            comment
        }
    }
`; 

const DELETE_COMMENT = gql`
    mutation deleteComment($commentId: String!){
        deleteComment(commentId: $commentId){
            _id
            comment
        }
    }
`

export { CREATE_COMMENT, DELETE_COMMENT}; 