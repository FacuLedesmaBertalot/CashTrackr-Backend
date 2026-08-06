import { Router } from "express";
import { body } from "express-validator";
import { AuthController } from "../controllers/AuthController.js";
import { handleInputErrors } from "../middleware/validation.js";

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


export default router;