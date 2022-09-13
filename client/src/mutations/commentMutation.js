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
`; 

const EDIT_COMMENT = gql`
    mutation editComment($commentId: String!, $comment: String!){
        editComment(commentId: $commentId, comment: $comment){
            _id
            comment
        }
    }
`; 

export { CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT}; 