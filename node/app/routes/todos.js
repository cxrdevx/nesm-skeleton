var express = require('express');
var router = express.Router();
var model = require('../models/index');

var todosController = require('../controllers/todos');
 
router.get('/', todosController.getTodos);
router.get('/:id', todosController.getTodo);
router.post('/', todosController.createTodo);
router.put('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);
 
module.exports = router;