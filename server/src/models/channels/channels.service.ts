import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { AuthenticationDto } from 'models/auth/dto/authentication.dto';
import { SubscriptionResults } from './channels.types';
import { UpdateChannelDto } from './dto';
import { Channel, Subscription } from './entities';

@Injectable()
export class ChannelsService {
  constructor(
    @InjectRepository(Channel)
    private readonly channelsRepository: Repository<Channel>,
    @InjectRepository(Subscription)
    private readonly subscriptionsRepository: Repository<Subscription>
  ) {}



  async createChannel(dto: AuthenticationDto) {
    const $password = await bcrypt.hash(dto.password, 5)

    const newChannel = await this.channelsRepository.save({
      email: dto.email,
      password: $password
    })

    return newChannel
  }




  /** ONLY AUTHORIZED user could update ONLY HIS channel. */
  async updateChannel( id: Channel['id'], dto: UpdateChannelDto ) {
    const channel = await this.findById(id)

    channel.name = dto.name
    channel.description = dto.description
    channel.avatarPath  = dto.avatarPath

    return await this.channelsRepository.save(channel)
  }




  /** Subscribe or unsubscribe to channel */
  async subscribe( fromChannelId: Channel['id'], toChannelId: Channel['id'] ) {
    if (fromChannelId === toChannelId) {
      throw new BadRequestException('Are you fucking coward? Don\'t subscribe to yourself.')
    }
    const params = {
      fromChannel: {id: fromChannelId},
      toChannel: {id: toChannelId}
    }

    const isSubscribed = await this.subscriptionsRepository.findOneBy(params)

    if (!isSubscribed) {
      await this.subscriptionsRepository.save(params)
      return { result: SubscriptionResults.SUBSCRIBED }
    }

    await this.subscriptionsRepository.delete(params)
    return { result: SubscriptionResults.UNSUBSCRIBED }    
  }




  // ! FindBy, DeleteBy, little helpers...
  
  //** Throws new NotFoundException if user doesn't exist by itself!!! */
  async findById(id: Channel['id']) {
    const channel = await this.channelsRepository.findOne({
      where: {id},
      relations: {
        videos: true,
        subscriptions: { toChannel: true }
      },
      order: { createdAt: 'DESC' }
    })

    if (!channel) throw new NotFoundException('Channel doesn\'t exist. 😓')
    return channel
  }

  //** Throws new NotFoundException if configurated in options */
  async findByEmail(
    email: Channel['email'], 
    options: FindByEmailOptions
  ) {
    const channel = await this.channelsRepository.findOneBy({email})
    
    if ( !channel && options.shouldThrowEmptyException ) {
      throw new NotFoundException('Channel doesn\'t exist. 😓')
    }
    return channel
  }


  //** Throws new NotFoundException if user doesn't exist by itself!!! */
  async findByEmailWithPassword(email: Channel['email']) {
    const channel = await this.channelsRepository.findOne({
      where: {email},
      select: {
        id: true, 
        email: true, password: true,
        createdAt: true, updatedAt: true,
        name: true, description: true, avatarPath: true,
        isVerified: true, subscribersCount: true
      }
    })

    if (!channel) throw new NotFoundException('Channel doesn\'t exist. 😓')
    return channel
  }
  

  async findAll() {
    return await this.channelsRepository.find()
  }

}

interface FindByEmailOptions {
  /** By default throws not found exception if user wansn't found! */
  shouldThrowEmptyException?: boolean 
}