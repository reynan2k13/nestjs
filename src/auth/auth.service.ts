import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/user.model';
import { UserService } from '../management/users/users.service';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from 'src/management/users/dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserCredentials(
    username: string,
    password: string,
  ): Promise<any> {
    console.log(username, password);

    const user = await this.usersService.getUser(username);

    if(user){
      const isMatch = await bcrypt.compare(password, user.password);
      if(isMatch){
        return user;
      }else{
        return null
      }

    }else{
      return null;
    }

  }

  async loginWithCredentials(user: User) {
    const payload = { username: user.username };

    return {
      username: user.username,
      access_token: this.jwtService.sign(payload),
      expiredAt: Date.now() + 60000,
    };
  }


  async changePassword(user: any) {
    console.log("user=============", user);

    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(user.new_password, salt);

    return await this.usersService.updatePassword(user.username, password);
  }
}
