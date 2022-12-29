import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import indexRouter from './routes/index.routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(morgan('dev'));
app.use(express.static(join(__dirname, 'public')));

app.use(indexRouter);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'));
})

export default app;