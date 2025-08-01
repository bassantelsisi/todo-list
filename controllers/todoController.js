const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
};

exports.createTodo = async (req, res) => {
  const todo = await Todo.create({ ...req.body, userId: req.user.id });
  res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};
