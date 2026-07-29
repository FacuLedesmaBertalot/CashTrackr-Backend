import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import Budget from '../models/Budget.js';

dotenv.config();

export const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [Budget], 
    logging: false,
    dialectOptions: {
        ssl: {
            require: false
        }
    }
});