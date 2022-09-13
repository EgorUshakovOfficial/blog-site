import { useState } from 'react'; 
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT, DELETE_COMMENT } from '../mutations/commentMutation';
import { GET_COMMENTS } from '../queries/commentsQuery'; 


export default function useComment(postId) {
    const [comment, setComment] = useState(''); 
    const [editCommentId, setEditCommentId] = useState('')
    const [deleteCommentId, setDeleteCommentId] = useState('')

    // Delete comment mutation 
    const [deleteComment] = useMutation(DELETE_COMMENT, {
        variables: {
            commentId: deleteCommentId
        }, 
        update(cache, { data }) {
            // Previous cache of comments for specified post 
            const { comments } = cache.readQuery({
                query: GET_COMMENTS,
                variables: {
                    postId
                }
            })

            // Updated cache for comments 
            cache.writeQuery({
                query: GET_COMMENTS,
                variables: {
                    postId
                }, 
                data: { comments: comments.filter(comment => comment._id !== data.deleteComment._id ) }
            })



        }
    })
    // Create comment mutation 
    const [createComment] = useMutation(CREATE_COMMENT, {
        variables: {
            postId,
            comment
        }, 

        update(cache, { data }) {
            // Previous cache of comments for specified post 
            const { comments } = cache.readQuery({
                query: GET_COMMENTS,
                variables: {
                    postId
                }
            }); 


            // Update cache for comments 
            cache.writeQuery({
                query: GET_COMMENTS,
                variables: { postId },
                data: { comments: [...comments, data.createComment] }
            })

        }

    }); 

    // Handle comment 
    const handleComment = e => {
        e.preventDefault(); 

        // Create new comment 
        createComment(postId, comment);

        // Reset comment 
        setComment('');

    }

    const handleDeleteComment = () => {
        deleteComment(deleteCommentId)
        setDeleteCommentId('')
    }

    return {
        comment,
        setComment, 
        handleComment,
        editCommentId, 
        setEditCommentId, 
        deleteCommentId, 
        deleteComment,
        handleDeleteComment,
        setDeleteCommentId
    }


}