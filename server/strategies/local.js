const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.use(new LocalStrategy(async(username, password, done) => {
        try {
            const user = await User.findOne({ email: username });
            if (!user) {
              return done(null, false, { message: 'Incorrect email or password.' });
            }
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
              return done(null, false, { message: 'Incorrect email or password.' });
            }
            return done(null, user);
          } catch (err) {
            return done(err);
          }
        })
    );


    passport.serializeUser((user, cb) => {
        console.log("Serializing user: " + user);
        cb(null, user.id);
    });

    passport.deserializeUser(async(id, cb) => {
        console.log("Deserializing user: " + id);
        const user = await User.findById(id);
        if(user) {
            cb(null, user);
        }
    });


};