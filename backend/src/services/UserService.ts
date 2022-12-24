import { hash } from "bcryptjs";
import { CreateUserDto } from "../dto/UserDto";
import { getCurrentTime } from "../middlewares/currentTime";
import { prisma } from "../prisma";

export class UserService {

  /**
   * create method
   */
  async create({ name, email, password }: CreateUserDto) {
    
    if (!name || !email || !password) {
      throw new Error('Há ítens obrigatórios a ser preenchidos');
    }

    const exists = await prisma.user.findFirst({
      where: { email }
    });

    if (exists) {
      throw new Error('E-mail já cadastrado');
    }

    const hashPassword = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name, email, password: hashPassword,
        createdAt: getCurrentTime(), updatedAt: getCurrentTime()
      },
      select: {
        id: true, name: true, email: true, active: true
      }
    });

    return user;

  }

  /**
   * find all method
   */
  async findAll() {
    const userList = await prisma.user.findMany({
      select: { id: true, name: true, email: true, active: true }
    });
    return userList;
  }

  /**
   * find by id method
   */
  async findById(id: number) {
    const user = await prisma.user.findFirst({
      where: { id },
      select: { id: true, name: true, email: true, active: true, createdAt: true, updatedAt: true }
    });
    if (!user) {
      throw new Error('Nenhum objeto encontrado')
    }
    return user;
  }

}