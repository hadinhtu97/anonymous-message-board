'use strict';

module.exports = (app) => {

    app.use((req, res) => {
        res.status(404);
        res.send('Not Found');
    });

}