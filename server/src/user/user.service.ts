import type { CreateUserDto } from '#@/user/dto/create-user.dto';
import { User } from '#@/user/entities/user.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private count = 0;
  private db = new Map<string, User>();

  async create(dto: CreateUserDto) {
    if (this.db.has(dto.username)) {
      throw new BadRequestException('중복 아이디');
    }

    const user = new User(dto.username, dto.password);
    user.id = String(++this.count);

    this.db.set(user.username, user);

    return user;
  }

  findOne(username: string) {
    return this.db.get(username);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  test() {
    return 'test';
  }
}
