import { createContext, useState } from 'react'; 
import useAuth from '../hooks/useAuth'; 

// Auth context 
const AuthContext = createContext({}); 

const AuthProvider = ({ children }) => {
	// Authentication
	const props = useAuth(); 
	
	return (
		<AuthContext.Provider value={{...props}}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthContext, AuthProvider };