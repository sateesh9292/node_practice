'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    email: {
        type: String,
        required: 'kindly enter name of task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    pwd: {
        type: String,
        required:'Enter password'
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);