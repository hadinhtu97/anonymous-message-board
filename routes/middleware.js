'use strict'

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

module.exports = (app) => {

    app.use(cors({ origin: '*' }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(helmet.frameguard({ action: 'sameorigin' }));
    app.use(helmet.dnsPrefetchControl());
    app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

}