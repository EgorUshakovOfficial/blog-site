import { Link } from 'react-router-dom';
import { useContext, useMemo } from 'react'; 
import { AuthContext } from '../containers/AuthProvider'; 
export default function Navbar() {
    const {token, handleLogout} = useContext(AuthContext);

    // Styles
    const style = useMemo(() => {
        return {
            height: token ? "auto" : "56px"
        }
    }, [token])

	return (
        <nav id="navbar" style={style}>
            {token ?
                <Link className="nav-link" to="/">
                    <div className="profile-div">
                        <img
                            src="https://scontent.fyyc8-1.fna.fbcdn.net/v/t1.6435-9/115821478_3118181974896443_7757001406663804394_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5GFLHOs5in8AX-mXpbO&_nc_ht=scontent.fyyc8-1.fna&oh=00_AT85u-Bbgv12Kh_VIZwYBAINLGR6Tki3pXghD3N1f7kBWA&oe=6329F324"
                            className="profile-pic"
                        />
                    </div>
                    <span className="user-name">Egor Ushakov</span>
                </Link>
                :
                <Link className="nav-link" to="/">Home</Link>
            }
            <div className="auth-links">
                {token ?
                    <button className="nav-link" onClick={handleLogout}>Logout</button>
                    :
                    <>
                        <Link className="nav-link" to="/login" style={{marginRight:"0.4em"}}>Login</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                    </>
                }
            </div>
		</nav>
	)
}