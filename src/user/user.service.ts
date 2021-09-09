import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '@app/user/dto/updateUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@app/user/schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '@app/user/dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUser(userId: number): Promise<User> {
    return this.userModel.findById(userId).exec();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(userId, updateUserDto, { new: true }).exec();
  }
}
