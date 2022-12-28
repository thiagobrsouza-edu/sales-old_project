class CreateProfileDto {
  name!: string;
  permissions!: number[];
}

class UpdateProfileDto {
  name!: string;
  permissionsAdd!: number[];
  permissionsRemove!: number[];
}

export {
  CreateProfileDto,
  UpdateProfileDto
}