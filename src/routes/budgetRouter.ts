import { Router } from 'express';
import { BudgetController } from '../controllers/BudgetController.js';
import { handleInputErrors } from '../middleware/validation.js';
import { hasAccess, validateBudgetExists, validateBudgetId, validateBudgetInput } from '../middleware/budget.js';
import { ExpensesController } from '../controllers/ExpenseController.js';
import { validateExpenseExists, validateExpenseId, validateExpenseInput } from '../middleware/expense.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.use(authenticate);

router.param('budgetId', validateBudgetId);
router.param('budgetId', validateBudgetExists);
router.param('budgetId', hasAccess);

router.param('expenseId', validateExpenseId);
router.param('expenseId', validateExpenseExists);

router.get('/', BudgetController.getAll);

router.post('/',
    validateBudgetInput,
    handleInputErrors,
    BudgetController.create
);

router.get('/:budgetId', BudgetController.getBudgetById);

router.put('/:budgetId',
    validateBudgetInput,
    handleInputErrors,
    BudgetController.updateById
);

router.delete('/:budgetId', BudgetController.deleteById);

/** Routes for expenses */
router.post('/:budgetId/expenses',
    validateExpenseInput,
    handleInputErrors,
    ExpensesController.create
); 
router.get('/:budgetId/expenses/:expenseId', ExpensesController.getById);
router.put('/:budgetId/expenses/:expenseId', 
    validateExpenseInput,
    handleInputErrors,
    ExpensesController.updateById
);
router.delete('/:budgetId/expenses/:expenseId', ExpensesController.deleteById);


export default router;