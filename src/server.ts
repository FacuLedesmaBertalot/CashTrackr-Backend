import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import { db } from './config/db.js';

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


export default app;