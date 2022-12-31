import { pool } from "../db.js";

export const getTasks = async (req, res) => {
    const {user_id} = req.params;

    const [tasks] = await pool.query(
        'SELECT title, description, id FROM tasks WHERE user_id = ?',
        [user_id]
        );
    const [user] = await pool.query(
        'SELECT name, nickname FROM users WHERE user_id =?',
        [user_id]
    );

    const {name, nickname} = user[0];
    res.render('tasks', {
        name,
        nickname,
        tasks,
        user_id
    });
}

export const getCreatePage = (req, res) => {
    const {user_id} = req.params;
    res.render(`create`, {user_id});
}

export const createTask = async (req, res) => {
    const {user_id} = req.params;
    const {title, description} = req.body

    await pool.query(`
    INSERT INTO tasks (title, description, user_id)
    VALUES (?, ?, ?);`,
    [title, description, user_id]);
    
    res.redirect(`/tasks/${user_id}`);
}

export const getUpdatePage = async (req, res) => {
    const {task_id} = req.params;
    const [result] = await pool.query(
        `SELECT u.name, t.title, t.description
        FROM tasks AS t
        INNER JOIN users AS u
        ON t.user_id = u.user_id
        WHERE t.id = ?`,
        [task_id]
    );
    const {name, title, description} = result[0];
    res.render(`edit`, {
        name,
        title,
        description,
        task_id
    });
}

export const updateTask = async (req, res) => {
    const {task_id} = req.params;
    const {title, description} = req.body;

    await pool.query(`
    UPDATE tasks
    SET title = ?, description = ?
    WHERE id = ? ;`,
    [title, description, task_id]);
    const [result] = await pool.query('SELECT user_id FROM tasks WHERE id = ? ;', [task_id]);
    const {user_id} = result[0]; 

    res.redirect(`/tasks/${user_id}`);
}

export const deleteTask = async(req, res) => {
    const {task_id} = req.params;
    const [result] = await pool.query('SELECT user_id FROM tasks WHERE id = ? ;', [task_id]);
    const {user_id} = result[0];

    await pool.query(`DELETE FROM tasks WHERE id = ?`, [task_id]);

    console.log(user_id)

    res.redirect(`/tasks/${user_id}`);
}