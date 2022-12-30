import { Router } from "express";
import { getTasks, getEditPage, createTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/tasks/:user_id', getTasks);

router.post('/tasks/:user_id', createTask);

router.get('/tasks/:user_id/edit/:id', getEditPage);

router.patch('/tasks/:user_id/edit/:id', updateTask);

router.delete('/tasks/:user_id/:id', deleteTask);

export default router;