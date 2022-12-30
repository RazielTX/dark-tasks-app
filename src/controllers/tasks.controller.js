import { pool } from "../db.js";

export const reTasks = (req, res) => {
    const {nickname} = req.body;
    res.redirect(`/tasks/${nickname}`);
}

export const getTasks = (req, res) => {
    const {nickname} = req.body;
    res.send(`Hello ${nickname}. You were redirected`);
}

export const createTask = (req, res) => {
    res.send(req.params.nickname);
}

export const getEditPage = (req, res) => {
    const {id, nickname} = req.params;
    res.send(`Editing taks ${id} of ${nickname}`);
}

export const updateTask = (req, res) => {
    const {id, nickname} = req.params;
    res.send(`Succesfully updated the taks ${id} of ${nickname}`);
}

export const deleteTask = (req, res) => {
    const {id, nickname} = req.params;
    res.send(`Taks ${id} deleted`);
}