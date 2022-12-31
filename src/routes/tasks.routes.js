import { Router } from "express";
import { getTasks, getUpdatePage, createTask, updateTask, deleteTask, getCreatePage } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/tasks/:user_id', getTasks);

router.get('/createTask/:user_id', getCreatePage)

router.post('/createTask/:user_id', createTask);

router.get('/editTask/:task_id', getUpdatePage);

router.post('/editTask/:task_id', updateTask);

router.get('/delete/:task_id', deleteTask);

export default router;