import type { CreateUserDto } from '#@/user/dto/create-user.dto';
import type { User } from '#@/user/entities/user.entity';
import { UserService } from '#@/user/user.service';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  login(username: string, password: string) {
    const user = this.userService.findOne(username);

    if (!user) {
      throw new NotFoundException('유저 없음');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('비밀번호 불일치');
    }

    return user;
  }

  generateJwt({ id, username, role }: User) {
    return this.jwtService.signAsync({ id, username, role });
  }
}
