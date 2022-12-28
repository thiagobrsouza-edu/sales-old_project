import { CreateProfileDto, UpdateProfileDto } from "../dto/ProfileDto";
import { prisma } from "../prisma";

export class ProfileService {

  /**
   * create method
   */
  async create({ name, permissions }: CreateProfileDto) {
    const exists = await prisma.profile.findUnique({
      where: { name }
    });
    if (exists) {
      throw new Error('Perfil já existente');
    }
    const profile = await prisma.profile.create({
      data: {
        name,
        permissions: {
          connect: permissions.map((permissionId: number) => ({
            id: permissionId
          }))
        }
      },
      select: {
        id: true, name: true,
        permissions: true
      }
    });
    return profile;
  }

  /**
   * find all methods
   */
  async findAll() {
    const profileList = await prisma.profile.findMany({
      select: {
        id: true, name: true,
        permissions: true
      }
    });
    return profileList;
  }

  /**
   * find by id method
   */
  async findById(id: number) {
    const profile = await prisma.profile.findFirst({
      where: { id },
      select: {
        id: true, name: true,
        permissions: true
      }
    });
    return profile;
  }

  /**
   * update method
   */
  async update(id: number, { name, permissionsAdd, permissionsRemove }: UpdateProfileDto) {

    return await prisma.profile.update({
      where: { id },
      data: {
        name,
        permissions: {
          connect: permissionsAdd.map((permissionId: number) => ({
            id: permissionId
          })),
          disconnect: permissionsRemove.map((permissionId: number) => ({
            id: permissionId
          }))
        }
      },
      select: {
        id: true, name: true,
        permissions: true
      }
    });

  }

  /**
   * delete method
   */
  async deleteOne(id: number) {
    try {
      await prisma.profile.delete({
        where: { id }
      });
    } catch {
      throw new Error('Perfil não pode ser removido');
    }
  }

}