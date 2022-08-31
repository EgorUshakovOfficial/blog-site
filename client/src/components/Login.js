import LoginForm from './LoginForm'; 
import { useLocation, useNavigate} from 'react-router-dom'; 
import { useEffect, useState, useContext} from 'react'; 
import {AuthContext} from '../containers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons'
export default function Login() {
    // Navigate
    const navigate = useNavigate();

    // Location 
    const location = useLocation();
    const message = location.state?.message;

    // State 
    const [success, setSuccess] = useState(message);
    const { error, setError } = useContext(AuthContext);

    useEffect(() => {
        navigate(location.pathname, { replace: true})
    }, [])

    return (
        <div id="login">
            <h1 className="title">Log in and start creating blog posts. It's free</h1>
            {success && 
                <div className="alert alert-success">
                    <div className="alert-message">{success}</div>
                    <span className="close" onClick={() => setSuccess("")}><FontAwesomeIcon icon={faXmark}/></span>
                </div>
            }
            {error &&
                <div className="alert alert-danger">
                    <div className="alert-message">{error}</div>
                    <span className="close" onClick={() => setError("")}><FontAwesomeIcon icon={faXmark} /></span>
                </div>
            }
            <LoginForm />
        </div>
    )
}