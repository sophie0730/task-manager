export const getAllTasks = (req, res) => {
  res.send('get all tasks');
}

export const addTasks = (req, res) => {
  res.json(req.body);
}

export const getTask = (req, res) => {
  res.send('get one tasks');
}

export const updateTask = (req, res) => {
  res.send('update task');
}

export const deleteTask = (req, res) => {
  res.send('delete task');
}