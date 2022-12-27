import { CreateProfileDto } from "../dto/ProfileDto";
import { prisma } from "../prisma";

export class ProfileService {

  async create({ name, permissions }: CreateProfileDto) {
    const profile = await prisma.profile.create({
      data: {
        name,
        profilePermissions: {
          create: permissions.map((permissionId) => ({
            permission: {
              connect: { id: permissionId }
            }
          })),
        }
      },
      select: { id: true, name: true, profilePermissions: true }
    });
    return profile;
  }

}