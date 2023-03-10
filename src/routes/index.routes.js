import { Router } from "express";
import { ping } from "../controllers/index.controller.js";

const router = Router();

router.get('/ping', ping);

router.get('/', (req, res) => {
    res.render('index', {
        edit: true
    });
});

export default router;