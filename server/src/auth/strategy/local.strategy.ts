import { AuthService } from '#@/auth/auth.service';
import { Injectable } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string) {
    return this.authService.login(username, password);
  }
}

export class LocalStrategyGuard extends AuthGuard('local') {}
