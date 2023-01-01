import { pool } from "../db.js";

export const accessLanding = (req, res) => {

    try {
        
        res.render('access', {verification: true});

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
        console.log('Ya hice el request');
        if(result.length > 0) {
            const user_id = (result[0].user_id);
            return res.redirect(`/tasks/${user_id}`);
        }

        console.log('No estoy entrando al if');

        res.status(404).render('access' , {verification: false});

    } catch {
        
        // res.status(500).send('Something went wrong');

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

export const deleteUser = async (req, res) => {
    const {user_id} = req.params;

    await pool.query(
        `DELETE
        FROM tasks
        WHERE user_id = ?`,
        [user_id]
    );

    await pool.query(
        `DELETE
        FROM users
        WHERE user_id = ?`,
        [user_id]
    );

    res.redirect(`/`);

};