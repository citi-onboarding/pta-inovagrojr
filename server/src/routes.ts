import express from "express";
import userController from "./controllers/UserController";
import CarrosselController from "./controllers/CarrosselController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

//////////////////

routes.post("/carrossel", CarrosselController.create);
routes.get("/carrossel", CarrosselController.get);
routes.delete("/carrossel/:id", CarrosselController.delete);
routes.patch("/carrossel/:id", CarrosselController.update);


export default routes;
