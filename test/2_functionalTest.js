'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const assert = chai.assert;
const server = 'http://localhost:3000';
chai.use(chaiHttp);

describe('functional tests', () => {

    // it('test1', (done) => {
    //     chai.request(server)
    //         .get('/api')
    //         .query({ sample: 'sample1' })
    //         .end((err, res) => {
    //             assert.equal(res.status, 200);
    //             done();
    //         })
    // })

    // it('test2', (done) => {
    //     chai.request(server)
    //         .post('/api')
    //         .send({ sample: 'sample1' })
    //         .end((err, res) => {
    //             assert.equal(res.status, 200);
    //             done();
    //         })
    // })

    // it('test1', (done) => {
    //     chai.request(server)
    //         .post('/api')
    //         .send({ sample: 'sample1' })
    //         .then(data => {
    //             chai.request(server)
    //                 .put('/api')
    //                 .send({ id: data.id })
    //                 .end((err, res) => {
    //                     assert.equal(res.status, 200);
    //                     done();
    //                 })
    //         })
    //         .catch(err => done(err));
    // })

})