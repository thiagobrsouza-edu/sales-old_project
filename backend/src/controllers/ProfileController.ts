import { Request, Response } from "express";
import { ProfileService } from "../services/ProfileService";

const service = new ProfileService();

export class ProfileController {

  async create(req: Request, res: Response) {
    const { name, permissions } = req.body;
    const result = await service.create({ name, permissions });
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
    const { name, permissionsAdd, permissionsRemove } = req.body;
    const result = await service.update(+id, { name, permissionsAdd, permissionsRemove });
    return res.json(result);
  }

  async deleteOne(req: Request, res: Response) {
    const { id } = req.params;
    await service.deleteOne(+id);
    return res.json(null);
  }

}