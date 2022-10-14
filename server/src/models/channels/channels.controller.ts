import { Body, Controller, Get, Param, Patch, Put, Session, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthGuard } from 'models/auth/guards';
import { SessionApp } from 'models/sessions/sessions.types';
import { ChannelsService } from './channels.service';
import { UpdateChannelDto } from './dto';
import { Channel } from './entities';

@ApiTags('Channels')
@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  
  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Получить всех пользоватлей. (По сути для админки)" })
  async getAll() {
    return await this.channelsService.findAll()
  }

  // Get someone channel 🍈
  @Get('id/:channelId')
  @ApiOperation({ summary: "Получить публичную информацию о чьем-либо канале." })
  async getById(
    @Param('channelId') id: Channel['id']
  ) {
    return this.channelsService.findById(id)
  }

  // Get MY channel 🐈
  @Get('me')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Получить информацию о МОЕМ канале." })
  async getMyChannel(
    @Session() session: SessionApp
  ) {
    return await this.channelsService.findById(session.channel.id)
  }


  @Put('me')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Обновить информацию о МОЕМ канале." })
  async updateChannel(
    @Session() session: SessionApp,
    @Body(new ValidationPipe()) dto: UpdateChannelDto
  ) {
    return this.channelsService.updateChannel(session.channel.id, dto)
  }


  @Patch('subscribe/:channelId')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Подписаться на пользователя по ID." })
  async subscribe(
    @Session() session: SessionApp,
    @Param('channelId') channelId: Channel['id']
  ) {
    return this.channelsService.subscribe(session.channel.id, channelId)
  }

}
