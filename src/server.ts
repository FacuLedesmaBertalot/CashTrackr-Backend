import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import { db } from './config/db.js';
import budgetRouter from './routes/budgetRouter.js';
import authRouter from './routes/authRouter.js';

async function conectDB() {
    try {
        await db.authenticate();
        db.sync();
        console.log(colors.bgGreen.bold('Conexión exitosa a la DB'));
    } catch (error) {
        console.log(colors.red.bold('Falló la Conexión a la DB'));
    }
}

conectDB();

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/budgets', budgetRouter);
app.use('/api/auth', authRouter);

export default app;