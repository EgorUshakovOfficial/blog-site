import { useContext, useMemo } from 'react'; 
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { AuthContext } from '../context/AuthProvider';

export default function UnauthorizedHeader() {
    const { handleLogout } = useContext(AuthContext);
    const { firstName, lastName, photoUrl} = useContext(UserContext);

    // Styles
    const style = useMemo(() => {
        return {
            height: "auto"
        }
    }, [])
    return (
        <div className="navbar" id="navbar" style={style}>
            <Link className="nav-link" to="/">
                <div className="profile-div">
                    <img
                        src={photoUrl}
                        className="profile-pic"
                    />
                </div>
                <span className="user-name">{firstName} {lastName}</span>
            </Link>
            <div className="auth-links">
                <button className="nav-link" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}