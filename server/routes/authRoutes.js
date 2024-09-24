const express = require("express");
const router = express.Router();
const passport = require('passport');
const userController = require("../controllers/userController");

router.post('/login', passport.authenticate('local'), userController.login);

router.post('/register', userController.register);

router.get('/google', passport.authenticate('google', { scope: ['email', 'profile']}));

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/app',
    failureRedirect: 'http://localhost:3000/'
}));

router.post('/logout', userController.logout);

module.exports = router;