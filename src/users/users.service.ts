import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UserSchema } from '@/models';

@Injectable()
export class UsersService {
  private users: UserSchema[] = [];

  async find(id: string) {
    return this.users.find((user) => user._id === id);
  }

  async findAll() {
    return this.users;
  }

  async createUser({ name, age }: CreateUserDto) {
    const newUser = {
      _id: String(Date.now()),
      name,
      age,
    };
    this.users.push(newUser);
    return newUser;
  }
}
