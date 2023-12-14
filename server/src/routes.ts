import express from "express";
import userController from "./controllers/UserController";
import culturaOrganizacionalController from "./controllers/CulturaOrganizacionalController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

// Rotas Cultura Organizacional
routes.post("/cult-org", culturaOrganizacionalController.create);
routes.get("/cult-org-list", culturaOrganizacionalController.get);
routes.delete("/cult-org/:id", culturaOrganizacionalController.delete);
routes.patch("//cult-org/:id", culturaOrganizacionalController.update);

export default routes;
