import { Router } from "express";
import * as tasks from "../controller/tasks.js";

const router = Router();

router.route('/tasks').get(tasks.getAllTasks)
                      .post(tasks.addTasks);

router.route('/tasks/:id').get(tasks.getTask)
                          .patch(tasks.updateTask)
                          .delete(tasks.deleteTask);
