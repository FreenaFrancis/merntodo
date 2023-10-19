const todoModel = require('../models/ToDo');

const getToDo = async (req, res) => {
  todoModel.find()
    .then((Todo) => {
      res.send(Todo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
}

const saveTodo = async (req, res) => {
  const { text } = req.body;
  todoModel.create({ text })
    .then(() => {
      res.status(201).send("Added successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
}

const deleteTodo = async (req, res) => {
  const { _id } = req.body;
  todoModel.findByIdAndDelete(_id)
    .then(() => {
      res.status(201).send('Deleted successfully');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
}

const updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  todoModel.findByIdAndUpdate(_id, { text })
    .then(() => {
      res.status(201).send('Updated successfully');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
}

module.exports = { getToDo, saveTodo, deleteTodo, updateTodo };
