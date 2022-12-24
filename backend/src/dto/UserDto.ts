class CreateUserDto {
  name!: string;
  email!: string;
  password!: string;
  active?: boolean;
}

class UpdateUserDto {
  name!: string;
  email!: string;
  active?: boolean;
}

export {
  CreateUserDto,
  UpdateUserDto
}