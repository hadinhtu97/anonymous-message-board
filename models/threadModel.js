'use strict';

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

const threadSchema = new mongoose.Schema({
    board: String,
    text: String,
    created_on: String,
    bumped_on: String,
    reported: Boolean,
    delete_password: String,
    replies: [
        {
            text: String,
            created_on: String,
            reported: Boolean,
            delete_password: String
        }
    ]
});

const ThreadModel = mongoose.model('thread', threadSchema);

module.exports = ThreadModel