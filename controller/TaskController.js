const uuid = require('uuid');
const Task = require('../models/TaskModel');


class TaskController{

    async listTask(req, res){
        try{
            const data = await Task.findAll();
            res.statusCode = 200;
            res.json({ success: true,  data:data });
        }catch(err){
            res.statusCode = 409;
            res.json({ success: false, error: err.name });
        }
    }
    async createTask(req, res){
        const title = req.body.title;
        const description = req.body.description;
        try{
            const taskToken = uuid.v4();
            const newTask = await Task.create({ title: title, description: description, taskToken: taskToken });
            res.statusCode = 201;
            return res.json({ success: true, data: `Registro creado exitosamente con el id ${newTask.id}` });
        }catch(err){
            res.statusCode = 409;
            return res.json({ success: false, error: err.name });
        }
    }
    removeTask(req, res){
        res.send('Eliminar Tareas');
    }
}

module.exports = TaskController;