import express from 'express';
import * as tasksRouter from '../router/tasks.js'
const app = express();

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
})

app.use('/api/v1', tasksRouter);

const port = 3000
app.listen(port, console.log(`server is listening on port ${port}`));
