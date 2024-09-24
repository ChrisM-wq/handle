const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require('../middleware/auth');
// Define the login route

router.get('/profile', auth.isLoggedIn, userController.getUser);

module.exports = router;