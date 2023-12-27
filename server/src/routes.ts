import express from "express";
import userController from "./controllers/UserController";
import areaController from "./controllers/AreaController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

routes.post("/area", areaController.create);
routes.get("/area", areaController.get);
routes.delete("/area/:id", areaController.delete);
routes.patch("/area/:id", areaController.update);

export default routes;
