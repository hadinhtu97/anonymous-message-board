'use strict';

const path = require('path');

module.exports = (app) => {

    app.route('/')
        .get((req, res) => {
            res.sendFile(path.join(__dirname, '../views/index.html'));
        });

}