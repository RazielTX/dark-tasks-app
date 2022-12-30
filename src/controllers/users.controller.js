import { pool } from "../db.js";

export const createLanding = (req, res) => {
    console.log('Ready to create user');
    res.send('Page to create user');
}

export const createUser = (req, res) => {
    console.log(req.body);
    res.send('Created user');
}

export const accessUser = (req, res) => {
    console.log('Ready to sign in');
    res.send('Access page');
}