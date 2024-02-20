import express from 'express';
import taskRouter from './routes/tasks.js'
import * as mongoConnect from './utils/db.js';

const app = express();

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
})

app.use('/api/v1', taskRouter);

const port = 3000
app.listen(port, console.log(`server is listening on port ${port}`));
