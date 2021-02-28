'use strict';

module.exports = (app) => {

    app.route('/')
        .get((req, res) => {
            res.send('Read README to use api.');
        });

}