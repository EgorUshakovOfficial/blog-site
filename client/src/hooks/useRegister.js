import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react'; 
import axios from 'axios'; 
export default function useRegister() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // Navigate 
    const navigate = useNavigate()

    // On submit 
    const onSubmit = e => {
        // Prevent form from being submitted to the server
        e.preventDefault()

        // POST request to /register 
        axios.post("https://blog-site1234.herokuapp.com/register", {
            firstName, 
            lastName, 
            email, 
            password 
        }).then(res => {
            const { data } = res
            if (data.success === false ) {
                return setError(data.message)
            }

            // Navigate to login page
            navigate('/login', { state: {message: data.message}})
        })

    }

    return {
        firstName, 
        setFirstName, 
        lastName, 
        setLastName, 
        email, 
        setEmail, 
        password,
        setPassword, 
        onSubmit
    }
}