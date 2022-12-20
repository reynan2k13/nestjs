import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  
  async create(createUserDto: CreateUserDto): Promise<User> {

    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(createUserDto.password, salt);

    return new this.userModel({...createUserDto , password}).save();
  }

  async findAll() : Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(username: string) : Promise<User[]> {
    return this.userModel.findOne({username});
  }

  async update(username: string, updateUserDto: UpdateUserDto) : Promise<any> {
    return this.userModel.updateOne({username} , {$set : {...updateUserDto}});
  }

  async remove(username: string) : Promise<any>  {
    return this.userModel.deleteOne({username});
  }

  async getUser(username:string) : Promise<User | undefined> {
    return this.userModel.findOne({username});
  }

  async updatePassword(username:string, password:string) : Promise<any> {
    return this.userModel.update({username} , {$set : {password}});
  }

}
