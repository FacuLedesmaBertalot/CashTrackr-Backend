import { Router } from 'express';
import { BudgetController } from '../controllers/BudgetController.js';

const router = Router();

router.get('/', BudgetController.getAll);
router.post('/', BudgetController.create);
router.get('/:id', BudgetController.getBudgetById);
router.put('/:id', BudgetController.updateById);
router.delete('/:id', BudgetController.deleteById);

export default router;