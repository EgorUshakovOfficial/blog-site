import LoginForm from './LoginForm'; 
import { useLocation, useNavigate} from 'react-router-dom'; 
import { useEffect, useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons'
export default function Login() {
    // Navigate
    const navigate = useNavigate();

    // Location 
    const location  = useLocation()
    const message = location.state?.message

    // State 
    const [success, setSuccess] = useState(message)

    useEffect(() => {
        navigate(location.pathname, { replace: true})
    }, [])

    return (
        <div id="login">
            <h1 className="title">Log in and start creating blog posts. It's free</h1>
            {success && 
                <div className="alert alert-success">
                    <div className="alert-message">User is successfully registered and may now log in.</div>
                    <span className="close" onClick={() => setSuccess("")}><FontAwesomeIcon icon={faXmark}/></span>
                </div>
            }
            <LoginForm />
        </div>
    )
}