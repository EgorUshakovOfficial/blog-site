import { Link } from 'react-router-dom';
import { useMemo } from 'react'; 
export default function UnauthorizdNavbar() {
    // Styles
    const style = useMemo(() => {
        return {
            height: "56px"
        }
    }, [])

	return (
        <nav id="navbar" style={style}>
            <Link className="nav-link" to="/">Home</Link>
            <div className="auth-links">
                <Link className="nav-link" to="/login" style={{ marginRight: "0.4em" }}>Login</Link>
                <Link className="nav-link" to="/register">Register</Link>
            </div>
		</nav>
	)
}