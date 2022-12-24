import { Request, Response } from "express";
import { UserService } from "../services/UserService";

const service = new UserService();

export class UserController {

  async create(req: Request, res: Response) {
    const { name, email, password, active } = req.body;
    const result = await service.create({ name, email, password, active });
    return res.status(201).json(result);
  }

  async findAll(req: Request, res: Response) {
    const result = await service.findAll();
    return res.json(result);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const result = await service.findById(+id);
    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, active } = req.body;
    const result = await service.update(+id, { name, email, active });
    return res.json(result);
  }

}