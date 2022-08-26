import { Body, Controller, Delete, Get, Param, Post, Put, Query, Session, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist';

import { AuthGuard } from 'models/auth/guards';
import { SessionApp } from 'models/sessions/sessions.types';
import { CreateVideoDto, UpdateVideoDto } from './dto';
import { Video } from './entities';
import { VideosService } from './videos.service';

@ApiTags('Videos')
@Controller('videos')
export class VideosController {
  constructor(
    private readonly videosService: VideosService
  ) {}

  
  @Get()
  @ApiOperation({ summary: "Получить все видео. (Публичные)" })
  async findAll() {
    return await this.videosService.findAll()
  }

  // Search video by some term (?term=34kf;]d;kfje)
  @Get('search')
  @ApiOperation({ summary: "Получить все видео по запрашиваемому названию." })
  async searchByTerm(
    @Query('term') term?: string
  ) {
    return await this.videosService.findAll(term)
  }

  // Get most popular by views
  @Get('most-popular')
  @ApiOperation({ summary: "Получить самые популярные видео. (По просмотрам)" })
  async findMostPopular() {
    return await this.videosService.findMostPopular()
  }


  @Get('liked')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Получить видео на которые вы поставили лайк. "})
  async findLikedVideos(
    @Session() session: SessionApp
  ) {
    return await this.videosService.findLiked(session.channel.id)
  }


  // Get video by id
  @Get('id/:videoId')
  @ApiOperation({ summary: "Получить определенное видео по ID." })
  async findById(
    @Session() session: SessionApp,
    @Param('videoId') videoId: Video['id']
  ) {
    // ! Don't use AuthGuard. AuthGuard won't work with SSG from Next
    if (session?.channel?.id) {
      return await this.videosService.findById(videoId, session.channel.id)
    }

    return await this.videosService.findById(videoId)
  }

  // * Create draft video
  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Создает черновое видео с указанием создателя. (Draft)" })
  async createVideo(
    @Session() session: SessionApp,
    @Body(new ValidationPipe()) dto: CreateVideoDto
  ) {
    return await this.videosService.createVideo(session.channel.id, dto)
  }

  // Update video with data
  @Put('id/:videoId')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Обновить определнное видео по ID. (Только свои)" })
  async updateVideo(
    @Session() session: SessionApp,
    @Param('videoId') videoId: Video['id'],
    @Body(new ValidationPipe()) dto: UpdateVideoDto
  ) {
    return await this.videosService.updateVideo(session.channel.id, videoId, dto)
  }

  // No need to authorize, everybody able to update views by watching 10 seconds of video
  @Put('views/:videoId')
  @ApiOperation({ summary: "Инкрементирует просмотры у видео. (Публичные)" })
  async updateViews(
    @Param('videoId') videoId: Video['id']
  ) {
    return await this.videosService.updateViews(videoId)
  }

  @Put('likes/:videoId')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Поставить или убрать лайк." })
  async updateLikes(
    @Session() session: SessionApp,
    @Param('videoId') videoId: Video['id']
  ) {
    return await this.videosService.updateLikes(session.channel.id, videoId)
  }

  @Delete('id/:videoId')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Удалить видео по ID. (Только свои)" })
  async deleteVideo(
    @Session() session: SessionApp,
    @Param('videoId') videoId: Video['id']
  ) {
    return await this.videosService.deleteVideo(session.channel.id, videoId)
  } 
}
