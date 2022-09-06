import { createContext } from 'react'; 
import { useQuery } from '@apollo/client'; 
import { GET_USER } from '../queries/userQuery'; 
import Spinner from '../components/Spinner'; 
// User context 
const UserContext = createContext({});

// User provider 
const UserProvider = ({ children }) => {
    const { data, loading, error } = useQuery(GET_USER); 
 
    if (loading) { return <Spinner />; }

    if (error) { <p>Error! Something has gone wrong!</p> }

    const { user } = data;

    return (
        <UserContext.Provider value={{...user}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }; 