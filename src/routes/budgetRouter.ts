import { Router } from 'express';
import { body, param } from 'express-validator';
import { BudgetController } from '../controllers/BudgetController.js';
import { handleInputErrors } from '../middleware/validation.js';

const router = Router();

router.get('/', BudgetController.getAll);

router.post('/',
    body('name')
        .notEmpty().withMessage('El nombre del presupuesto no puede ir vacío'),
    body('amount')
        .notEmpty().withMessage('La cantidad del presupuesto no puede ir vacía')    
        .isNumeric().withMessage('Cantidad no válida')    
        .custom(value => value > 0 ).withMessage('El presupuesto debe ser mayor a 0'),    
    handleInputErrors,
    BudgetController.create
);

router.get('/:id',
    param('id').isInt().withMessage('ID no válido')
        .custom(value => value > 0 ).withMessage('ID no válido'),
    handleInputErrors,
    BudgetController.getBudgetById
);

router.put('/:id',
    param('id').isInt().withMessage('ID no válido')
        .custom(value => value > 0 ).withMessage('ID no válido'),
    handleInputErrors,
    body('name')
        .notEmpty().withMessage('El nombre del presupuesto no puede ir vacío'),
    body('amount')
        .notEmpty().withMessage('La cantidad del presupuesto no puede ir vacía')    
        .isNumeric().withMessage('Cantidad no válida')    
        .custom(value => value > 0 ).withMessage('El presupuesto debe ser mayor a 0'),    
    handleInputErrors,
    BudgetController.updateById
);

router.delete('/:id', 
    param('id').isInt().withMessage('ID no válido')
        .custom(value => value > 0 ).withMessage('ID no válido'),
    handleInputErrors,
    BudgetController.deleteById
);

export default router;