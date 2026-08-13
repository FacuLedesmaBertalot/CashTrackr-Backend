import { transport } from "../config/nodemailer.js"


type EmailType = {
    name: string,
    email: string,
    token: string
}

export class AuthEmail {
    static sendConfirmationEmail = async (user: EmailType) => {
        const email = await transport.sendMail({
            from: 'CashTrackr <admin@cashtrackr.com>',
            to: user.email,
            subject: 'CashTrackr - Confirma tu cuenta',
            html: `
                <p> Hola ${user.name}, has creado tu cuenta en CashTrackr, ya está casi lista </p>
                <p>Visita el siguiente enlace:</p>
                <a href="#">Confirmar Cuenta </a>
                <p>e ingresa el código: <b>${user.token}</b></p>
            `
        })

        console.log(email);
    }

        static sendPasswordResetToken = async (user: EmailType) => {
        const email = await transport.sendMail({
            from: 'CashTrackr <admin@cashtrackr.com>',
            to: user.email,
            subject: 'CashTrackr - Reestablece tu Contraseña',
            html: `
                <p> Hola ${user.name}, has solicitado reestablecer tu contraseña </p>
                <p>Visita el siguiente enlace:</p>
                <a href="#">Reestablecer Contraseña </a>
                <p>e ingresa el código: <b>${user.token}</b></p>
            `
        })

        console.log(email);
    }
}