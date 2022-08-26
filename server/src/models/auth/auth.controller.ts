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

  @Post('sign-up')
  @ApiOperation({ summary: "Регистрация." })
  async signUp(
    @Session() session: SessionApp,
    @Body(new ValidationPipe()) dto: AuthDto
  ) {
    return this.authService.signUp(session, dto)
  }

  @Post('sign-in')
  @ApiOperation({ summary: "Логин." })
  async signIn(
    @Session() session: SessionApp,
    @Body(new ValidationPipe()) dto: AuthDto
  ) {
    return this.authService.signIn(session, dto)
  }


  @Get('sign-out')
  @ApiOperation({ summary: "Выйти с аккаунта." })
  async signOut(
    @Session() session: SessionApp
  ) {
    return this.authService.signOut(session)
  }

  @Get('check')
  @ApiOperation({ summary: "Проверить авторизован ли Я." })
  async check(
    @Session() session: SessionApp
  ) {
    return {isAuth: !!session?.channel?.id}
  }
}
