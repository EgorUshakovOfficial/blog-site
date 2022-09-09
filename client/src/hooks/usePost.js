import { useState } from 'react'; 
import { useMutation } from '@apollo/client'; 
import { POST_MUTATION } from '../mutations/postMutation'; 
import { GET_USER } from '../queries/userQuery';
import { GET_POSTS } from '../queries/postsQuery';
export default function usePost() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState('')

    const [createPost] = useMutation(POST_MUTATION, {
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
        onSubmit
    }
}