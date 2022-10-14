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

  // Get most populars by views
  @Get('most-populars')
  @ApiOperation({ summary: "Получить популярные видео. (По просмотрам)" })
  async getMostPopulars() {
    return await this.videosService.findMostPopulars()
  }


  // Get video by id
  @Get('id/:videoId')
  @ApiOperation({ summary: "Получить определенное видео по ID." })
  async getById(
    @Param('videoId') videoId: Video['id']
  ) {
    return await this.videosService.findById(videoId, {isPulic: true})
  }

  // Create draft video
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
    @Param('videoId') videoId: Video['id'],
    @Body(new ValidationPipe()) dto: UpdateVideoDto
  ) {
    return await this.videosService.updateVideo(videoId, dto)
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
    @Param('videoId') videoId: Video['id']
  ) {
    return await this.videosService.updateLikes(videoId)
  }

  @Delete('id/:videoId')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Удалить видео по ID. (Только свои)" })
  async deleteVideo(
    @Param('videoId') videoId: Video['id']
  ) {
    return await this.videosService.deleteVideo(videoId)
  } 
}
