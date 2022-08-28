import { Body, Controller, Get, Post, Session, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { SessionApp } from 'models/sessions/sessions.types';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('register')
  @ApiOperation({ summary: "Регистрация." })
  async register(
    @Session() session: SessionApp,
    @Body(new ValidationPipe()) dto: AuthDto
  ) {
    return this.authService.register(session, dto)
  }

  @Post('login')
  @ApiOperation({ summary: "Логин." })
  async login(
    @Session() session: SessionApp,
    @Body(new ValidationPipe()) dto: AuthDto
  ) {
    return this.authService.login(session, dto)
  }


  @Get('logout')
  @ApiOperation({ summary: "Выйти с аккаунта." })
  async logout(
    @Session() session: SessionApp
  ) {
    return this.authService.logout(session)
  }

  @Get('check')
  @ApiOperation({ summary: "Проверить авторизован ли Я." })
  async check(
    @Session() session: SessionApp
  ) {
    return {isAuth: !!session?.channel?.id}
  }
}
