export class CreateUserDto {
  readonly username: string;

  readonly email: string;

  readonly bio: string;

  readonly blocking: boolean;
}
