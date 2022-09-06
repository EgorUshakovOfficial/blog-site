import { useContext, useMemo } from 'react'; 
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { AuthContext } from '../context/AuthProvider';

export default function UnauthorizedHeader() {
    const { handleLogout } = useContext(AuthContext);
    const { firstName, lastName } = useContext(UserContext);

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
                        src="https://scontent.fyyc8-1.fna.fbcdn.net/v/t1.6435-9/115821478_3118181974896443_7757001406663804394_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5GFLHOs5in8AX-mXpbO&_nc_ht=scontent.fyyc8-1.fna&oh=00_AT85u-Bbgv12Kh_VIZwYBAINLGR6Tki3pXghD3N1f7kBWA&oe=6329F324"
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