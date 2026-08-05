import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import Budget from '../models/Budget.js';
import Expense from '../models/Expense.js';

dotenv.config();

export const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [Budget, Expense], 
    logging: false,
    dialectOptions: {
        ssl: {
            require: false
        }
    }
});