import {
  Body,
  Controller, Get,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './decorators/user.decorator';
import { UserService } from '@app/user/user.service';
import { LoginUserDto } from './dto/loginUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): any {
    return this.userService.getAllUsers();
  }

  @Post('login')
  login(@Body() loginDto: LoginUserDto): any {
    console.log('loginDto', loginDto);
    return this.userService.login(loginDto);
  }

  @Put(':id')
  updateCurrentUser(
    @User('id') currentUserId: number,
    @Body() updateUserDto: UpdateUserDto,
  ): any {
    return this.userService.updateUser(updateUserDto);
  }
}
