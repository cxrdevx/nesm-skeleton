'use strict';

var model = require('../models/index');

class TodosController {
    async getTodos(req,res) {
        try{
            var todosResponse = []
            const todos = await model.Todo.findAll({});
            if (todos.length > 0) {
                todos.forEach(function(todo){
                    todosResponse.push(todo)
                  });
                res.status(200).json(todosResponse);
            } else {
                res.status(204).send("No Content");
            }
        } catch(ex) {
            res.status(500).send({ message: ex.toString() })
        }
    }

    async getTodo(req,res) {
        try{
            var todo = await model.Todo.find({ where: { id: req.params.id } });
            if (todo) {
                res.status(200).json(todo);
            } else {
                res.status(204).send("No Content");
            }
        } catch(ex) {
            res.status(500).send({ message: ex.toString() });
        }
    }

    async createTodo(req, res){
        try{
            var todo = await model.Todo.create({
                title: req.body.title,
                description: req.body.description
            });
            res.status(200).send(todo);
        } catch(ex){
            res.status(500).send({ message: ex.toString() });
        }
    }

    async updateTodo(req, res){
        try{
            var todo = await model.Todo.find({where : {id : req.params.id}});
            if (!todo) {
                throw new Error("Todo buscado no existe")
            }
            var updateTodo = await model.Todo.update(
                { title: req.body.title,
                    description: req.body.description}
                ,{returning: true, where: {id: req.params.id}
            });
            res.status(200).send(updateTodo);
        } catch(ex){
            res.status(500).send({ message: ex.toString() });
        }
    }

    async deleteTodo(req, res){
        try{
            await model.Todo.destroy({ where: { id: req.params.id } });
            res.status(200).send("deleted");
        } catch(ex){
            res.status(500).send({ message: ex.toString() });
        }
    }
}

const todosController = new TodosController()
module.exports = todosController