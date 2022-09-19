import { useState, useEffect, useMemo } from 'react';
import axios from 'axios'; 
export default function useAuth() {	
	// State 
	const [token, setToken] = useState(null);
	const [email, setEmail] = useState(''); 
	const [password, setPassword] = useState(''); 
	const [error, setError] = useState('');

	// Axios instance 
	const api = useMemo(() => {
		return axios.create({
			baseURL: "https://blog-site1234.herokuapp.com",
			withCredentials: true,
			headers: {
				"Content-type": "application/json"
			}
		})

	}, [])

	// GET request to /refreshToken
	useEffect(() => {
		const { cookie } = document;
		let refreshTokenExist = /connect\-sid/.test(cookie);
		if (refreshTokenExist && token === null) {
			api.get("/refreshToken")
				.then(res => {
					if (res.status === 200) {
						setToken(res.data.token)
					}
				})
				.catch(err => console.error("There was an error!", err.message))
		}
		else {
			setToken("")
        }
	}, [])

	const handleLogin = async e => {
		// Prevent form from being submitted to the server 
		e.preventDefault();

		// POST request to login 
		api.post("/login", { email, password })
			.then(res => {
				setToken(res.data.token); 
				window.location.replace("https://blog-site1234.herokuapp.com");
			})
			.catch(err => {
				if (err.response.status === 401) {
					setError("Please provide a valid email address and password.");
				} else {
					setError("Error! Something went wrong!")
                }
            });
	}

	const handleLogout = e => {
		// Prevent form from being submitted to the server 
		e.preventDefault();

		// POST request to logout 
		api.post("/logout")
			.then(res => {
				if (res.status === "") {
					return setToken(res.data.token)
				}
				window.location.reload();
			})
	}

	return {
		token, 
		setToken, 
		email, 
		setEmail, 
		password,
		setPassword, 
		handleLogin, 
		handleLogout, 
		error, 
		setError
	}
}