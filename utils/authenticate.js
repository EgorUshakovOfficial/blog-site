import jwt from 'jsonwebtoken'; 
import { User } from '../models/User.js';

const COOKIE_OPTIONS = {
	httpOnly: true, 
	signed: true, 
	secure: true, 
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

// Retrieve user object 
const getUser = async token => {
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		let user = await User.findById(payload._id);
		if (user === null) { return null; }
		delete user.refreshToken; 
		return user; 
	}
	catch (err) {
		return null 
    }
}

export { COOKIE_OPTIONS, getToken, getRefreshToken, getUser };