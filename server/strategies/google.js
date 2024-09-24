const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');
require('dotenv').config();

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_URI,
        passReqToCallback: true
    },
    async (req, accessToken, refreshToken, profile, cb) => {

        const defaultUser = {
            name: `${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.emails[0].value,
            picture: profile.photos[0].value,
            googleId: profile.id
        }

        const user = await User.findOne({ googleId: profile.id });
    
        if (!user) {
            const newUser = new User(defaultUser);
            await newUser.save();
            return cb(null, newUser);
        } else {
            return cb(null, user);
        };

    }));

    passport.serializeUser((user, cb) => {
        console.log("Serializing user: ", user);
        cb(null, user.id);
    });

    passport.deserializeUser( async (id, cb) => {
        const user = await User.findOne({ _id: id }).catch((err) => {
            console.log("Error deserializing: ", err);
            cb(err, user);
        })
        console.log("Deserializing user: ", user);
        if (user) cb(null, user);
    });

}