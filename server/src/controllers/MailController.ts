import { mailServer } from "src/services/mailServer";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const sendMail = {
    async send(req: Request, res: Response) {
        try {
            const { destination, subject } = req.body;
        
            await mailServer({
                destination,
                subject: "Teste",
                html: `<h1>Teste: Ola ${destination}, ${subject} /h1>`,	
            });
            return res.status(200).json({ message: "Email sent" });
            
        } catch (error) {
            return res.status(500).json({ message: "Error sending email"});
        }
    },
    };

export default { sendMail };