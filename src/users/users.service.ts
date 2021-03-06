import { Injectable } from '@nestjs/common';
import { User } from './users.models';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  async createUser(dto: CreateUserDto) {
    const HashPassword = await bcrypt.hash(dto.password, 10);
    if (HashPassword) {
      const data = {
        name: dto.name,
        email: dto.email,
        password: HashPassword,
      };
      const user = await this.userRepository.create(data);
      if (user) {
        return user;
      }
    }
  }
  async getUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
