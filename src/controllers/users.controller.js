import { pool } from "../db.js";

export const accessLanding = (req, res) => {

    try {
        
        res.render('access');

    } catch {
        
        res.status(500).send('Something went wrong');

    }
    
}

export const registerLanding = (req, res) => {
    
    try {
        
        res.render('register');

    } catch {
        
        res.status(500).send('Something went wrong');

    }
}

export const verify = async (req, res) => {

    try {
        
        const {nickname} = req.query;
        console.log(nickname);
        const [result] = await pool.query('SELECT user_id FROM users WHERE nickname = ?', [nickname]);
        if(result.length > 0) {
            const user_id = JSON.stringify(result[0].user_id);
            return res.redirect(`/tasks/${user_id}`);
        }

        res.status(404).send('User not found');

    } catch {
        
        res.status(500).send('Something went wrong');

    }

}

export const createUser = async (req, res) => {
    const {name, nickname} = req.body;
    const verifyNick = async (nickname) => {
        const [result] = await pool.query(
            'SELECT nickname FROM users WHERE nickname = ?', [nickname]
        );

        return result.length > 0;
    }

    try {
        
        const exists = await verifyNick(nickname);
        if(!exists) {
            const [result] = await pool.query(
                'INSERT INTO users (name, nickname) VALUES (?, ?)',
                [name, nickname]);
            console.log(result);
            return res.render('register_success', {
                name
            });
        }
   
        res.render('register_failed');

    } catch {
        
        res.status(500).send('Something went wrong');

    }

}

export const deleteUser = (req, res) => res.send('User deleted')