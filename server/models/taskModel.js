const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A task must have a title'],
        unique: true,
        trim: true
    },
    summary: {
        type: String,
        required: [true, 'A task must have a summary'],
    },
    published: {
        type: Date,
        default: Date.now(),
    },
    hasDeadline: {
        type: Number,
        default: 0,
    },
    deadline: {
        type: Date,
    },
    priority: {
        type: Number,
        required: [true, 'A task must have a priority']
      },
    status: {
        type: Number,
        required: [true, 'A task must have a status']
    },
    user_id: {
        type: String,
        required: [true, 'User id needs to be linked']
    }
  });
  const Task = mongoose.model('Task', taskSchema, 'tasks');
  
  module.exports = Task;