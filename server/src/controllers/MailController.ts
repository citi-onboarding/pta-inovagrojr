import { mailServer } from "src/services/mailServer";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const sendMail = {
    async send(req: Request, res: Response) {
        try {
            const { name, phone, service, demand } = req.body;
        
            await mailServer({
                destination: 'inovagrojr.ufrpe@gmail.com',
                subject: "Novo contato do site",
                html: `
                <p>Nome: ${name}</p>
                <p>Telefone: ${phone}</p>
                <p>Serviço: ${service}</p>
                <p>Demanda: ${demand}</p>
                `,	
            });
            return res.status(200).json({ message: "Email sent" });
            
        } catch (error) {
            return res.status(500).json({ message: "Error sending email"});
        }
    },
    };

export default { sendMail };