'use strict';

const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URI, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

const Schema = new mongoose.Schema({

});

const Model = mongoose.model('model', Schema);

module.exports = Model