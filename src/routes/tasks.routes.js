import { Router } from "express";
import { reTasks, getTasks, getEditPage, createTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/tasks', reTasks);

router.get('/tasks/:nickname', getTasks);

router.post('/tasks/:nickname', createTask);

router.get('/tasks/:nickname/edit/:id', getEditPage);

router.patch('/tasks/:nickname/edit/:id', updateTask);

router.delete('/tasks/:nickname/:id', deleteTask);

export default router;