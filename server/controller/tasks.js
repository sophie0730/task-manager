import Task from "../model/tasks.js";
import asyncWrapper from "../middleware/async.js";

export const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks, amount: tasks.length });
})

export const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });   
})

export const getTask = asyncWrapper(async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findById({ _id: taskId });

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}`});
  }

  res.status(200).json({ task });
})

export const updateTask = asyncWrapper(async(req, res) => {
  const {id:taskId} = req.params;
  const task = await Task.findOneAndUpdate({ _id:taskId}, req.body, {
    new: true,
    runValidators: true
  });

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}`});
  }
  
  res.status(200).json({ task });
})

export const deleteTask = asyncWrapper(async (req, res) => {
  const {id:taskId} = req.params;
  const task = await Task.findOneAndDelete({_id:taskId});

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}`});
  }
  res.status(200).json({ task: null, status: 'success'});
})