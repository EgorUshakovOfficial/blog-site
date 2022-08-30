import jwt from 'jsonwebtoken'; 

const COOKIE_OPTIONS = {
	httpOnly: true, 
	signed: true, 
	secure: false, 
	maxAge: eval(process.env.REFRESH_TOKEN_EXPIRY) * 1000, 
	sameSite:"none"
}

// Access token 
const getToken = user => {
	return jwt.sign(user, process.env.JWT_SECRET, {
		expiresIn: eval(process.env.SESSION_EXPIRY)
	})
}

// Refresh token 
const getRefreshToken = user => {
	return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: eval(process.env.REFRESH_TOKEN_EXPIRY)
	}); 
}

export { COOKIE_OPTIONS, getToken, getRefreshToken}