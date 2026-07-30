import { Router } from 'express';
import { BudgetController } from '../controllers/BudgetController.js';
import { handleInputErrors } from '../middleware/validation.js';
import { validateBudgetExist, validateBudgetId, validateBudgetInput } from '../middleware/budget.js';

const router = Router();

router.param('budgetId', validateBudgetId);
router.param('budgetId', validateBudgetExist);

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

export default router;