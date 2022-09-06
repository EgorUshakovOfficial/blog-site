import { useContext } from 'react'; 
import { AuthContext } from '../context/AuthProvider';
import { UserProvider } from '../context/UserProvider';
import { Navigate, Outlet} from 'react-router-dom'; 
export default function Private() {
    const { token } = useContext(AuthContext); 
    return (
        token ?
            <UserProvider>
                <Outlet />
            </UserProvider>
            :
            <Navigate to="/login" />
    )
}