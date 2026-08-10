import type { Request, Response } from 'express';
import User from '../models/User.js';
import { hashPassword } from '../utils/auth.js';
import { generateToken } from '../utils/token.js';
import { AuthEmail } from '../emails/AuthEmail.js';

export class AuthController {

    static createAccount = async (req: Request, res: Response) => {

        const { email, password } = req.body;

        // Prevenir duplicados
        const userExists = await User.findOne({where: { email }});
        if(userExists) {
            const error = new Error('Un usuario con ese email ya está registrado');
            return res.status(409).json({ error: error.message });
        }

        try {
            const user = new User(req.body);
            user.password = await hashPassword(password);
            user.token = generateToken();

            await user.save();

            await AuthEmail.sendConfirmationEmail({
                name: user.name,
                email: user.email,
                token: user.token
            })

            res.json('Cuenta creada correctamente');

        } catch (error) {
            res.status(500).json({ error: 'Hubo un error' });
        }
    }
}