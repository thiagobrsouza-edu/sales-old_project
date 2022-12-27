import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { ProfileController } from "./controllers/ProfileController";

export const routes = Router();

/**
 * user routes
 */
routes.post('/users', new UserController().create);
routes.get('/users', new UserController().findAll);
routes.get('/users/:id', new UserController().findById);
routes.put('/users/:id', new UserController().update);

/**
 * profile routes
 */
routes.post('/profiles', new ProfileController().create);