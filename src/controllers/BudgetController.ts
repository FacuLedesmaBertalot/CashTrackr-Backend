import type { Request, Response } from 'express';

export class BudgetController {
    static getAll = async (req: Request, res: Response) => {
        console.log('Desde GET /api/budgets');
    }

    static create = async (req: Request, res: Response) => {
        console.log('Desde POST /api/budgets');
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