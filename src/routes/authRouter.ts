import { Router } from "express";
import { body } from "express-validator";
import { AuthController } from "../controllers/AuthController.js";
import { handleInputErrors } from "../middleware/validation.js";
import { limiter } from "../config/limiter.js";

const router = Router();

router.post('/create-account', 
    body('name')
        .notEmpty().withMessage('El nombre no puede ir vacío'),
    body('password')
        .isLength({min: 8}).withMessage('La contraseña es muy corta. Mínimo 8 caracteres'),
    body('email')
        .isEmail().withMessage('Email no válido'),
    handleInputErrors,
    AuthController.createAccount
);

router.post('/confirm-account',
    limiter,
    body('token')
        .notEmpty()
        .isLength({ min: 6, max: 6 })
        .withMessage('Token no válido'),
    handleInputErrors,
    AuthController.confirmAccount
)


export default router;