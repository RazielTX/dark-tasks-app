import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(morgan('dev'));
app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'));
})

export default app;