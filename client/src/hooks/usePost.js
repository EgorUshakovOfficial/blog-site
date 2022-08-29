import { useState } from 'react'; 
export default function usePost() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    const [postDescription, setPostDescription] = useState('')

    const onSubmit = e => {
        // Prevent form from being submitted to the server 
        e.preventDefault()
    }

    return {
        title, 
        setTitle, 
        setImage,
        postDescription, 
        setPostDescription, 
        onSubmit
    }
}