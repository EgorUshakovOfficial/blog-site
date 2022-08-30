import passport from 'passport'; 
import passportLocal from 'passport-local'; 
import bcrypt from 'bcrypt'; 
import { User } from '../../models/User.js'; 

// Local Strategy 
const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
},
    (username, password, done) => {
        User.findOne({ email: username }, async (err, user) => {
            // Error check 
            if (err) { return done(err); }

            // User is not registered with specified email  
            if (user === null) { return done(null, false); }

            // If user is registered, check if password specified is correct 
            let isCorrect = await bcrypt.compare(password, user.password);
            if (isCorrect === false) { return done(null, false); }
            return done(null, user);
        })
    }),
)

passport.serializeUser((user, done) => {
    return done(null, user._id);
})

