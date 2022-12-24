class CreateUserDto {
  name!: string;
  email!: string;
  password!: string;
  active?: boolean;
  profileId!: number;
}

class UpdateUserDto {
  name!: string;
  email!: string;
  active?: boolean;
  profileId!: number;
}

export {
  CreateUserDto,
  UpdateUserDto
}