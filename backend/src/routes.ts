import { Router } from "express";
import { UserController } from "./controllers/UserController";

export const routes = Router();

/**
 * user routes
 */
routes.post('/users', new UserController().create);