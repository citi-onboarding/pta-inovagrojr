import express from "express";
import userController from "./controllers/UserController";
import sendMail from "./controllers/MailController";
import { Request, Response } from "express";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

routes.post("/email", (req: Request, res: Response) => {
    sendMail.sendMail.send(req, res);
});


export default routes;
