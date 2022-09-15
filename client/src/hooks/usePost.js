import { useState } from 'react'; 
import { useMutation } from '@apollo/client'; 
import { CREATE_POST } from '../mutations/postMutation'; 
import { GET_USER } from '../queries/userQuery';
import { GET_POSTS } from '../queries/postsQuery';
export default function usePost() {
    const [postOptionsId, setPostOptionsId] = useState('')
    const [editPostId, setEditPostId] = useState('')
    const [deletePostId, setDeletePostId] = useState('')
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState('')

    const [createPost] = useMutation(CREATE_POST, {
        variables: {
            title, 
            description, 
            file: image
        },
        context: {
            headers: {
                "apollo-require-preflight": true
            }
        },
        refetchQueries: [GET_USER, GET_POSTS]
    })

    const onSubmit = e => {
        // Prevent form from being submitted to the server 
        e.preventDefault()

        // Create new post 
        createPost(title, description, image)

        // Clear fields 
        setTitle(''); 
        setImage(null); 
        setDescription(''); 
    }

    return {
        title, 
        setTitle, 
        setImage,
        description, 
        setDescription, 
        postOptionsId,
        setPostOptionsId,
        editPostId,
        setEditPostId, 
        onSubmit,
        deletePostId,
        setDeletePostId
    }
}