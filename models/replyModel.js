'use strict';

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

const replyModel = new mongoose.Schema({

});

const ReplyModel = mongoose.model('reply', replyModel);

module.exports = ReplyModel
