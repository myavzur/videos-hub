import { Controller, Get, Session, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'models/auth/guards';
import { SessionApp } from 'models/sessions/sessions.types';
import { ChannelsService } from './channels.service';

@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  
  @Get()
  @UseGuards(AuthGuard)
  async getAll() {
    return await this.channelsService.findAll()
  }

  @Get()
  @UseGuards(AuthGuard)
  async getChannel(
    @Session() session: SessionApp
  ) {
    return await this.channelsService.findById(session.channel.id)
  }
}
