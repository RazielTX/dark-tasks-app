import { pool } from "../db.js";

export const getTasks = async (req, res) => {
    const {user_id} = req.params;
    const [result] = await pool.query('SELECT title, description FROM tasks WHERE user_id = ?', [user_id]);
    console.log(result);
    res.send(`Welcome. Your current tasks are ${JSON.stringify(result)}`);
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