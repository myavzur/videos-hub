import { Body, Controller, Get, Post, Session, ValidationPipe } from '@nestjs/common';

import { SessionApp } from 'models/sessions/sessions.types';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('sign-up')
  async signUp(
    @Session() session: SessionApp,
    @Body(new ValidationPipe()) dto: AuthDto
  ) {
    return this.authService.signUp(session, dto)
  }

  @Post('sign-in')
  async signIn(
    @Session() session: SessionApp,
    @Body(new ValidationPipe()) dto: AuthDto
  ) {
    return this.authService.signIn(session, dto)
  }


  @Get('sign-out')
  async signOut(
    @Session() session: SessionApp
  ) {
    return this.authService.signOut(session)
  }

  @Get('check')
  async a(
    @Session() session: SessionApp
  ) {
    return {isAuth: !!session?.channel?.id}
  }
}
