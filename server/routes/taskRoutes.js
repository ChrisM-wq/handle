const express = require('express');
const taskController = require('./../controllers/taskController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/create', auth.isLoggedIn, taskController.createTask);
router.patch('/updateStatus', auth.isLoggedIn, taskController.updateStatus);

// route
//   .route('/:id')
//   .get(authController.isLoggedIn, taskController.getTask)
//   .patch(authController.isLoggedIn, taskController.updateTask)
//   .delete(authController.isLoggedIn, taskController.deleteTask);


module.exports = router;