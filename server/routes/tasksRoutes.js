const express = require('express');
const auth = require('../middleware/auth');
const tasksController = require('../controllers/tasksController');

const router = express.Router();

router.route('/').get(auth.isLoggedIn, tasksController.getTasks);

module.exports = router;