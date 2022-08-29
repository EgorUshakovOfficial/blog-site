import { useState } from 'react'; 
export default function useRegister() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // On submit 
    const onSubmit = e => {
        // Prevent form from being submitted to the server
        e.preventDefault()
    }

    return {
        firstName, 
        setFirstName, 
        lastName, 
        setLastName, 
        email, 
        setEmail, 
        password,
        setPassword
    }
}