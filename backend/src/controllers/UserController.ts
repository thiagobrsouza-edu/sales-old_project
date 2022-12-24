import { Request, Response } from "express";
import { UserService } from "../services/UserService";

const service = new UserService();

export class UserController {

  async create(req: Request, res: Response) {
    const { name, email, password, active } = req.body;
    const user = await service.create({ name, email, password, active });
    return res.status(201).json(user);
  }

}