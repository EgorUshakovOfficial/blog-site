import { useState } from 'react'; 
export default function useLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = e => {
        // Prevent form from being submitted to the server 
        e.preventDefault()

        // Handle authentication...
    }

    return {
        email,
        setEmail, 
        password, 
        setPassword, 
        onSubmit
    }
}