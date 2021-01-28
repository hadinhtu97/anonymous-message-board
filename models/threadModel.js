'use strict';

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

const threadSchema = new mongoose.Schema({

});

const ThreadModel = mongoose.model('thread', threadSchema);

module.exports = ThreadModel