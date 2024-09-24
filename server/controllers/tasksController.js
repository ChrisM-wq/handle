const Task = require('../models/taskModel');

exports.getTasks = async (req, res) => {
    console.log("User entered fetch all tasks" + req.user._id);
    try {
        const tasks = await Task.find({ user_id: req.user._id });
        res.status(200).json({
            status: 'success',
            results: tasks.length,
            data: {
                tasks
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    } 
};