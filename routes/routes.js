const express = require('express');
const router = express.Router();
//Controlador de tareas
const TC = require('../controller/TaskController');
const taskController = new TC();
//Validaciones
const validationSchema = require('../utils/validationSchema');
const createSchema = require('../schemas/createSchema');
const deleteSchema = require('../schemas/deleteSchema');

//Crear el middleware especifico del router
router.use((req, res, next)=>{
    console.log("Tiempo actual:", Date.now());
    next();
});

router.get("/list", taskController.listTask);
router.post("/create", validationSchema(createSchema) ,taskController.createTask);
router.delete("/remove/:id", validationSchema(deleteSchema) ,taskController.removeTask);

module.exports = router;