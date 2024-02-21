import express from 'express';
import taskRouter from './routes/tasks.js'
import * as mongoConnect from './utils/db.js';
import notFound from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
const app = express();

//middleware
app.use(express.static('./view'));
app.use(express.json());

//routes
app.use('/api/v1', taskRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);


const port = 3000
app.listen(port, console.log(`server is listening on port ${port}`));
