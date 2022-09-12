import { useState } from 'react'; 
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '../mutations/commentMutation';
import { GET_COMMENTS } from '../queries/commentsQuery'; 

export default function useComment(postId) {
    // State 
    const [comment, setComment] = useState(''); 

    // Comment mutation 
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

            console.log(comments);

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

    return {
        comment,
        setComment, 
        handleComment
    }


}