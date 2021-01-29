'use strict';

const Board = require('../controllers/board.js');

module.exports = (app) => {

    let board = new Board();

    let dbError = 'DB has error, try again later!';
    let success = 'success';
    let fail = 'incorrect password';

    app.route('/api/threads/:board')
        .get((req, res) => {
            board.findAllThreadAndLimit(req.params.board)
                .then(threads => res.json(threads))
                .catch(err => res.send(dbError))
        })
        .post((req, res) => {
            req.body.text == undefined || req.body.delete_password == undefined
                ? res.send('Required fields missing!')
                : board.createThread(req.params.board, req.body.text, req.body.delete_password)
                    .then(thread => res.send(success))
                    .catch(err => res.send(dbError));
        })
        .put((req, res) => {
            req.body.thread_id == undefined
                ? res.send('Required Thread ID!')
                : board.updateThread(req.params.board, req.body.thread_id)
                    .then(thread => thread == null ? res.send('Thread ID is invalid!') : res.send(success))
                    .catch(err => res.send(dbError));
        })
        .delete((req, res) => {
            req.body.thread_id == undefined || req.body.delete_password == undefined
                ? res.send('Required fields missing!')
                : board.deleteThread(req.params.board, req.body.thread_id, req.body.delete_password, (err, thread) => {
                    err ? res.send(fail) : res.send(success)
                })

        })

    app.route('/api/replies/:board')
        .get((req, res) => {
            req.query.thread_id == undefined
                ? res.send('Required Thread Id!')
                : board.findThreadAndLimit(req.params.board, req.query.thread_id)
                    .then(thread => thread == null ? res.send('Thread ID is invalid!') : res.json(thread))
                    .catch(err => res.send(dbError))
        })
        .post((req, res) => {
            req.body.text == undefined || req.body.delete_password == undefined || req.body.thread_id == undefined
                ? res.send('Required fields missing!')
                : board.createReply(req.params.board, req.body.thread_id, req.body.text, req.body.delete_password)
                    .then(thread => thread == null ? res.send('Thread ID is invalid!') : res.send(success))
                    .catch(err => res.send(dbError));
        })
        .put((req, res) => {
            req.body.thread_id == undefined || req.body.reply_id == undefined
                ? res.send('Required fields missing!')
                : board.updateReply(req.params.board, req.body.thread_id, req.body.reply_id)
                    .then(thread => thread == null ? res.send('ID is invalid!') : res.json(success))
                    .catch(err => res.send(dbError));
        })
        .delete((req, res) => {
            req.body.thread_id == undefined || req.body.reply_id == undefined || req.body.delete_password == undefined
                ? res.send('Required fields missing!')
                : board.deleteReply(req.params.board, req.body.thread_id, req.body.reply_id, req.body.delete_password, (err, reply) => {
                    err ? res.send(fail) : res.send(success);
                })
        })

}