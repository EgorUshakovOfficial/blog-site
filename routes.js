import passport from 'passport';
import bcrypt from 'bcrypt';
import {
    COOKIE_OPTIONS,
    getToken,
    getRefreshToken
} from './utils/authenticate.js';
import jwt from 'jsonwebtoken';

const routes = (app, User) => {
    // Register 
    app.post('/register', async (req, res) => {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body; 

        // Query for user object 
        let user = await User.findOne({ email }); 

        // If user is already registered with specified email
        // respond with message "Email is already registered with another account"
        if (user !== null) {
            return res.json({
                success: false,
                message: "Email is already registered with another account"
            }); 
        }

        // Hash password 
        const saltRounds = 10; 
        const salt = bcrypt.genSaltSync(saltRounds); 
        const hash = bcrypt.hashSync(password, salt); 

        // Create new user in the database 
        user = new User({
            firstName,
            lastName,
            email,
            password: hash
        });

        // Save user in the database, handling any error.  
        try {
            await user.save();
            return res.json({
                success: true,
                message: "User is successfully registered and may now log in."
            }); 
        } catch (err) {
            return res.send(err);
        }
    })

    // Login 
    app.post("/login",
        // Attempt to authenticate user using local strategy 
        passport.authenticate('local', { session: false }),

        (req, res, next) => {
            // User couldn't successfully authenticate
            if (req.user === undefined) {
                res.statusCode = 401; 
                return res.send("Unauthorized"); 
            }
            next()
        }, 
        (req, res) => {
            // Access token 
            let token = getToken({ _id: req.user._id });
            // Refresh token
            let refreshToken = getRefreshToken({ _id: req.user._id });

            // Set refresh token as http-only cookie
            // and an additional cookie for checking the existence of the http-only cookie 
            res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS); 
            res.cookie("connect-sid", "", {
                signed: COOKIE_OPTIONS.signed,
                maxAge: COOKIE_OPTIONS.maxAge
            })

            // Add refresh token to the database 
            User.findById(req.user._id)
                .then(async user => {
                    let session = { token:refreshToken };
                    user.refreshToken.push(session);
                    await user.save();
                    return res.json({token})
                })
                .catch(err => res.send(err))

        }
    )

    // Logout 
    app.post('/logout', (req, res) => {
        const refreshToken = req?.signedCookies?.refreshToken;
  
        // Http only cookie with the value of refresh token exists 
        if (refreshToken) {
            try {
                let payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
                User.findById(payload._id)
                    .then(async user => {
                        // Delete refresh token from array 
                        if (user !== null) {
                            let index = user.refreshToken.findIndex(obj => obj.token === refreshToken);
                            if (index !== -1) {
                                user.refreshToken.splice(index, 1);
                                await user.save();
                            }
                        }

                    })
            }
            catch (err) {
                (err);
            }
        }
        // Remove HTTP only cookie and the other that checks its existence 
        res.clearCookie("refreshToken");
        res.clearCookie("connect-sid"); 

        // Access token is empty 
        res.json({token: ""})
    })

    // Refresh token route 
    app.get('/refreshToken', async (req, res) => {
        const refreshToken = req?.signedCookies?.refreshToken;

        // Http only cookie with the value of refresh token exists
        if (refreshToken) {
            try {
                let payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
                let user = await User.findById(payload._id);

                // Refresh token exists but user object does not
                if (user === null) {
                    return res.json({ token: "" });
                }

                // New access token
                let token = getToken({ _id: user._id });
                return res.json({ token })

            }
            catch (err) {
                res.statusCode = 401;
                return res.send("Unauthorized");
            }
        }
        else {
            res.statusCode = 401; 
            return res.send("Unauthorized"); 
        }

    })
}

export default routes; 