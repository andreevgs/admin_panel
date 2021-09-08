import { Injectable } from '@nestjs/common';
import { LoginUserDto } from '@app/user/dto/loginUser.dto';
import { UpdateUserDto } from '@app/user/dto/updateUser.dto';

@Injectable()
export class UserService {
  findById(id: number): any {
    return 'find by ' + 1;
  }

  getAllUsers(): any {
    return 'users';
  }

  login(loginUserDto: LoginUserDto): any {
    return loginUserDto;
  }

  updateUser(updateUserDto: UpdateUserDto): any {
    return updateUserDto;
  }
}
