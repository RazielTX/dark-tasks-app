import { Router } from "express";
import { createUser, registerLanding, accessLanding, verify, deleteUser } from "../controllers/users.controller.js";

const router = Router();

router.get('/verify', verify);

router.get('/register', registerLanding);

router.post('/register', createUser);

router.get('/access', accessLanding);

router.delete('/user/delete/:user_id', deleteUser);

export default router;