import { useContext } from 'react'; 
import { AuthContext } from '../context/AuthProvider'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
export default function Layout({ children }) {
	const { token } = useContext(AuthContext); 
	return (
		<>
			<Header token={token} />
			{children}
			<Footer />
		</>
	)
}