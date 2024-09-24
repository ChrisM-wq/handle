const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
    req.body.user_id = req.user._id;
    try {
        const newTask = await Task.create(req.body);
        
        res.status(201).json({
            status: 'success',
            data: {
                task: newTask
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Invalid data sent!'
        });
    }
};

exports.updateStatus = async (req, res) => {
    // req.body.user_id = req.user._id;

    console.log(req.body);
    try {
        await Task.findOneAndUpdate(
            { _id: req.body._id }, // query to find the document by its ID
            { $set: { status: Number(req.body.status) } }, // update to be applied
            { new: true }
        ); // options object that returns the modified document instead of the original

        res.status(201).json({
            status: 'success',
            message: 'Task updated successfully.'
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Error occured while updating.'
        });
    }
};