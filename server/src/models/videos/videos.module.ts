import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Video, Likes } from './entities';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([Video, Likes])
  ],
  controllers: [VideosController],
  providers: [VideosService]
})
export class VideosModule {}
