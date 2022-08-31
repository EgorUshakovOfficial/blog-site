import { useContext } from 'react'; 
import { AuthContext } from '../containers/AuthProvider';
import { Navigate, Outlet} from 'react-router-dom'; 
export default function Private() {
    const { token } = useContext(AuthContext); 
    return (
        token ? <Outlet /> : <Navigate to="/login" />
    )
}