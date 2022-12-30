import { Router } from "express";
import { createUser, createLanding, accessUser } from "../controllers/users.controller.js";

const router = Router();

router.get('/register', createLanding);

router.post('/register', createUser);

router.get('/access', accessUser);

export default router;