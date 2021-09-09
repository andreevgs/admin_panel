import {
  Body,
  Controller, Get, Param,
  Post,
  Put, UsePipes,
} from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from '@app/user/user.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from '@app/user/dto/createUser.dto';
import { BackendValidationPipe } from '@app/shared/pipes/backendValidation.pipe';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') currentUserId: number): Promise<User> {
    return this.userService.getUser(currentUserId);
  }

  @Post()
  @UsePipes(new BackendValidationPipe())
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto)
  }

  @Put(':id')
  async updateCurrentUser(
    @Param('id') currentUserId: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(currentUserId, updateUserDto);
  }
}
