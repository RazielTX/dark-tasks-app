import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import indexRouter from './routes/index.routes.js';
import userRouter from './routes/users.routes.js';
import tasksRouter from './routes/tasks.routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Settings

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares

app.use(morgan('dev')); // Just for dev purposes - Comment when no needed
app.use(express.static(join(__dirname, 'public')));
app.use(express.json());

// Middlewares - Routers

app.use(indexRouter);
app.use(userRouter);
app.use(tasksRouter);

export default app;