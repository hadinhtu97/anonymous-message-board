'use strict';

const path = require('path');

module.exports = (app) => {

    app.use((req, res) => {
        res.status(404);
        res.sendFile(path.join(__dirname, '../views/404.html'));
    });

}