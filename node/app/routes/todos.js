var express = require('express');
var router = express.Router();
var model = require('../models/index');

var todosController = require('../controllers/todos')
 
/* GET todo listing. */
router.get('/', todosController.getTodos);
router.get('/:id', todosController.getTodo);
/* POST todo. */
router.post('/', function(req, res, next) {
    const {
        title,
        description
    } = req.body;
    model.Todo.create({
            title: title,
            description: description
        })
        .then(todo => res.status(201).json({
            error: false,
            data: todo,
            message: 'New todo has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
 
/* update todo. */
router.put('/:id', function(req, res, next) {
 
});
 
 
/* GET todo listing. */
router.delete('/:id', function(req, res, next) {
 
});
 
module.exports = router;