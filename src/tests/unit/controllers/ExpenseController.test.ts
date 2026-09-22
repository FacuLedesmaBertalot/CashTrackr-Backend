import { createRequest, createResponse } from 'node-mocks-http';
import Expense from '../../../models/Expense.js';
import { ExpensesController } from '../../../controllers/ExpenseController.js';

jest.mock('../../../models/Expense.js', () => ({
    create: jest.fn()
}))

describe('ExpensesController.create',() => {
    it('should get a new expense', async () => {
        const expenseMock = {
            save: jest.fn()
        };

        (Expense.create as jest.Mock).mockResolvedValue(expenseMock);

        const req = createRequest({
            method: 'POST',
            url: '/api/budgets/:budgetId/expenses',
            body: { name: 'Test Expense', amount: 500 },
            budget: { id: 1 }
        });

        const res = createResponse();

        await ExpensesController.create(req, res);

        const data = res._getJSONData();
        expect(res.statusCode).toBe(201);
        expect(data).toEqual('Gasto Agregado Correctamente');
        expect(expenseMock.save).toHaveBeenCalledTimes(1);
        expect(Expense.create).toHaveBeenCalledWith(req.body);
    });


    it('should handle expense creation error', async () => {
        const expenseMock = {
            save: jest.fn()
        };

        (Expense.create as jest.Mock).mockRejectedValue(new Error);

        const req = createRequest({
            method: 'POST',
            url: '/api/budgets/:budgetId/expenses',
            body: { name: 'Test Expense', amount: 500 },
            budget: { id: 1 }
        });

        const res = createResponse();

        await ExpensesController.create(req, res);

        const data = res._getJSONData();
        expect(res.statusCode).toBe(500);
        expect(data).toEqual({ error: 'Hubo un error' });
        expect(expenseMock.save).not.toHaveBeenCalled();
        expect(Expense.create).toHaveBeenCalledWith(req.body);
    });
})