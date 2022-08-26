import { Body, Controller, Post, Session, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto';
import { AuthGuard } from 'models/auth/guards';
import { SessionApp } from 'models/sessions/sessions.types';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Добавить комментарий к видео! 🍓" })
  async signUp(
    @Session() session: SessionApp,
    @Body(new ValidationPipe()) dto: CreateCommentDto
  ) {
    return await this.commentsService.createComment(session.channel.id, dto)
  }
}
