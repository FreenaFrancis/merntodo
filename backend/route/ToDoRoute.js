const express = require('express');
const router = express.Router();

const {getToDo,saveTodo,updateTodo,deleteTodo} = require('../controllers/ToDoControllers')

router.get("/get-todo",getToDo);
router.post("/save-todo",saveTodo);
router.post("/update-todo",updateTodo);
router.post("/delete-todo",deleteTodo);


module.exports = router;