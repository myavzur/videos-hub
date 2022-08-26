import { BadRequestException, Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { FindOptionsWhere, Repository } from 'typeorm';

import { RegisterDto } from 'models/auth/dto';
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



  async createChannel(dto: RegisterDto) {
    const $password = await bcrypt.hash(dto.password, 5)

    const newChannel = await this.channelsRepository.create()

    newChannel.email = dto.email
    newChannel.name  = dto.name
    newChannel.password = $password

    return await this.channelsRepository.save(newChannel)
  }




  /** ONLY AUTHORIZED USER could update ONLY HIS channel. */
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

    const channelToSubscribe = await this.findById(toChannelId)
    const isSubscribed = await this.subscriptionsRepository.findOneBy(params)

    if (!isSubscribed) {
      channelToSubscribe.subscribersValue++
      await this.channelsRepository.save(channelToSubscribe)
      await this.subscriptionsRepository.save(params)
      return { result: SubscriptionResults.SUBSCRIBED }
    }

    channelToSubscribe.subscribersValue--    
    await this.channelsRepository.save(channelToSubscribe)
    await this.subscriptionsRepository.delete(params)
    return { result: SubscriptionResults.UNSUBSCRIBED }    
  }




  // ! FindBy, DeleteBy, little helpers...  
  /** Throws new NotFoundException if USER doesn't exist by itself!!! */
  async findById(id: Channel['id']) {
    const channel = await this.channelsRepository.findOne({
      where: {id},
      relations: {
        videos: { channel: true },
        subscriptions: { toChannel: true }, 
        subscribers:   { fromChannel: true }
      },
      order: { createdAt: 'DESC' }
    })

    if (!channel) throw new NotFoundException('Channel doesn\'t exist. 😓')
    return channel
  }




  /** 
   * Throws new NotFoundException if configurated in options 
   * * options.shouldThrowEmptyException нужно для регистрации
   * * поскольку в регистрации как раз нужно, чтобы такого юзера не было
   * */
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

  /** 
   * * Юзается для регистрации (Name и Email уникальны для каждого)
   */
  async findByEmailAndName(
    email: Channel['email'],
    name: Channel['name']
  ) {
    const channel = await this.channelsRepository.findOneBy({email, name})
    return channel
  }



  /** Throws new NotFoundException if USER doesn't exist by itself!!! */
  async findByEmailWithPassword(email: Channel['email']) {
    const channel = await this.channelsRepository.findOne({
      where: {email},
      relations: {
        videos: true,
        subscriptions: { toChannel: true }, 
        subscribers:   { fromChannel: true }
      },
      select: {
        id: true, 
        email: true, password: true,
        createdAt: true, updatedAt: true,
        name: true, description: true, avatarPath: true,
        isVerified: true, subscribersValue: true
      }
    })

    if (!channel) throw new NotFoundException('Channel doesn\'t exist. 😓')
    return channel
  }
  


  async findAll() {
    return await this.channelsRepository.find({
      relations: {
        subscriptions: {toChannel: true}, 
        subscribers: {fromChannel: true}}
      }
    )
  }

}

interface FindByEmailOptions {
  /** By default throws not found exception if USER wansn't found! */
  shouldThrowEmptyException?: boolean 
}