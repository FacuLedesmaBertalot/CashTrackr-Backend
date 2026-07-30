import type { Request, Response } from 'express';
import Budget from '../models/Budget.js';

export class BudgetController {

    static getAll = async (req: Request, res: Response) => {
        try {
            const budgets = await Budget.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
                // TODO: Filtrar por el usuario autenticado
            });

            res.json(budgets);
        } catch (error) {
            //console.log(error);
            res.status(500).json({ error: 'Hubo un error' });
        }
    }

    static create = async (req: Request, res: Response) => {
        try {
            const budget = new Budget(req.body);
            await budget.save();
            res.status(201).json('Presupuesto Creado Correctamente');

        } catch (error) {
            //console.log(error);
            res.status(500).json({ error: 'Hubo un error' });
        }
    }

    static getBudgetById = async (req: Request, res: Response) => {
        console.log('Desde GET /api/budgets/id');
    }

    static updateById = async (req: Request, res: Response) => {
        console.log('Desde PUT /api/budgets/id');
    }

    static deleteById = async (req: Request, res: Response) => {
        console.log('Desde DELETE /api/budgets/id');
    }
}