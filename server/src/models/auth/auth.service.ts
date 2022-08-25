import * as bcrypt from 'bcrypt'
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';

import { ChannelsService } from 'models/channels/channels.service';
import { AuthDto } from './dto';
import { Channel } from 'models/channels/entities';
import { OkException } from 'helpers/exeptions';
import { SessionApp } from 'models/sessions/sessions.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly channelsService: ChannelsService
  ) {}

  async signUp(session: SessionApp, dto: AuthDto) {
    const oldChannel = await this.channelsService.findByEmail(dto.email, {shouldThrowEmptyException: false})

    if (oldChannel) {
      throw new BadRequestException('Channel with this email already exists!')
    }

    // channelsService.createChannel
    const channel = await this.channelsService.createChannel(dto)

    await this.setSession(session, channel)

    return channel
  }

  

  async signIn(session: SessionApp, dto: AuthDto) {
    const channel = await this.channelsService.findByEmailWithPassword(dto.email)
    
    const isCorrectPassword = await bcrypt.compare(dto.password, channel.password)

    if (!isCorrectPassword) {
      throw new UnauthorizedException('Incorrect password.')
    }


    await this.setSession(session, channel)

    delete channel.password // Doesn't need to return password on client of course!

    return channel
  }
  


  async signOut(session: SessionApp) {
    if (session && session?.channel?.id) {
      session.destroy(null)

      throw new OkException('Bye bye. 👋')
    }

    throw new OkException(`No session: SessionApp. Use auth/login or auth/register.`)
  }




  private async setSession(session: SessionApp, channel: Channel) {
    session.channel = {
      id: channel.id,
      email: channel.email
    }
  }
}