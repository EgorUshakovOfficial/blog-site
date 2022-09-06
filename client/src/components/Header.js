import AuthorizedNavbar from './AuthorizedNavbar'; 
import UnauthorizedNavbar from './UnauthorizedNavbar'; 
export default function Header({token}) {
    return (
        <header id="header">
            {!token && <UnauthorizedNavbar />}
            {token && <AuthorizedNavbar />}
        </header>
    )
}