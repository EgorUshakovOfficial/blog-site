import { useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT} from '../mutations/commentMutation';
import { GET_COMMENTS } from '../queries/commentsQuery'; 
import { GET_USER } from '../queries/userQuery'; 


export default function useComment(postId) {
    const [comment, setComment] = useState(''); 
    const [editedComment, setEditedComment] = useState('')
    const [editCommentId, setEditCommentId] = useState('')
    const [deleteCommentId, setDeleteCommentId] = useState('')

    // Apollo client 
    const client = useApolloClient(); 

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
        }, 

        onCompleted: () => {
            client.refetchQueries({
                include: [GET_USER]
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
                variables: {postId}
            }); 

            // Update cache for comments 
            cache.writeQuery({
                query: GET_COMMENTS,
                variables: { postId },
                data: { comments: [...comments, data.createComment] }
            })

        }, 

        onCompleted: () => {
            client.refetchQueries({
                include: [GET_USER]
            })
        }

    }); 

    // Edit comment 
    const [editComment] = useMutation(EDIT_COMMENT, {
        variables: {
            commentId: editCommentId, 
            comment: editedComment
        }, 
        update(cache, { data }) {
            // Previous cache of comments for specified post 
            let { comments } =cache.readQuery({
                query: GET_COMMENTS,
                variables: { postId }
            }); 

            comments = [...comments]
            let index = comments.findIndex(comment => comment._id === data.editComment._id)
            comments[index] = data.editComment

            // Update cache of comments 
            cache.writeQuery({
                query: GET_COMMENTS, 
                variables: { postId }, 
                data: {comments: [...comments]}
            })

        }, 

        onCompleted: () => {
            client.refetchQueries({
                include: [GET_USER]
            })
        }
    })


    // Handle comment 
    const handleComment = e => {
        e.preventDefault(); 

        // Create new comment 
        createComment(postId, comment);

        // Reset comment 
        setComment('');

    }

    // Handle edit comment 
    const handleEditComment = e => {
        // Prevents modal click event from firing 
        e.stopPropagation(); 

        // Edit comment
        editComment(editCommentId, editedComment); 

        // Reset textarea input in modal and edited comment id 
        setEditCommentId('')
        setEditedComment('')
    }

    // Handle delete comment
    const handleDeleteComment = () => {
        deleteComment(deleteCommentId)
        setDeleteCommentId('')
    }



    return {
        comment,
        setComment, 
        editedComment,
        setEditedComment,
        handleComment,
        editCommentId, 
        setEditCommentId, 
        deleteCommentId, 
        deleteComment,
        handleDeleteComment,
        setDeleteCommentId, 
        handleEditComment
    }


}