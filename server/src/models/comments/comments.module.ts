import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Comment } from './entities';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment])
  ],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
