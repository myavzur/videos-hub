import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere, FindOptionsWhereProperty, ILike, MoreThan, Repository } from 'typeorm';

import { OkException } from 'utils/exeptions';
import { Channel } from 'models/channels/entities';
import { ChannelsService } from 'models/channels/channels.service';

import { CreateVideoDto, UpdateVideoDto } from './dto';
import { Video, Likes } from './entities';
import { LikeResult } from './videos.types';
import { includeAllRelations } from './videos.constants';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Video)
    private readonly videosRepository: Repository<Video>,
    @InjectRepository(Likes)
    private readonly likesRepository: Repository<Likes>
  ) {}




  // ! Generals CRUD
  async createVideo(channelId: Channel['id'], dto: CreateVideoDto) {
    const newVideo = await this.videosRepository.save({
      channel: { id: channelId }, 
      ...dto
    })

    return newVideo
  }




  async updateVideo(
    channelId: Channel['id'], 
    videoId: Video['id'], 
    dto: UpdateVideoDto
  ) {
    const video = await this.findById(videoId)

    if (video.channel.id !== channelId) {
      throw new ForbiddenException('Not permitted to update other channel\'s videos')
    }

    return await this.videosRepository.save({...video, ...dto})
  }




  async updateViews(id: Video['id']) {
    const video = await this.findById(id)

    video.views++
    await this.videosRepository.save(video)

    throw new OkException(`Views on video "${video.name}" was incremented by 1`)
  }




  async findLiked(channelId: Channel['id']) {
    const videosLiked = await this.likesRepository.find({
      where: {
        channel: { id: channelId }
      },
      relations: { 
        video: { channel: true } 
      },
      order: { createdAt: 'DESC' }
    })

    return videosLiked
  }




  async updateLikes(channelId: Channel['id'], videoId: Video['id']) {
    const params = {
      channel: { id: channelId },
      video: { id: videoId }
    }

    const videoToLike = await this.findById(videoId)
    const isLiked = await this.likesRepository.findOneBy(params)

    if (!isLiked) {
      videoToLike.likesValue++
      await this.videosRepository.save(videoToLike)
      await this.likesRepository.save(params)
      return { result: LikeResult.LIKED }
    }


    videoToLike.likesValue--    
    await this.videosRepository.save(videoToLike)
    await this.likesRepository.delete(params)
    return { result: LikeResult.UNLIKED }
  }




  async deleteVideo(channelId: Channel['id'], videoId: Video['id']) {
    const video = await this.findById(videoId)

    if (video.channel.id !== channelId) {
      throw new ForbiddenException('Not permitted to delete other channel\'s videos')
    }

    return await this.videosRepository.delete({ id: videoId })
  }


  // ! Utils
  /** Gets public videos */
  async findAll(term?: string) {
    let findOptions: FindManyOptions<Video>= {
      where: { isPublic: true },
      relations: includeAllRelations,
    }

    if (term) {
      findOptions = {
        ...findOptions,
        where: {
          ...findOptions.where,
          name: ILike(`%${term}%`)
        },
        order: { name: "ASC" }
      }
    }
    else {
      findOptions = {
        ...findOptions,
        order: { createdAt: "DESC" }
      }
    } 

    return await this.videosRepository.find(findOptions)
  }


  /** Find most popular videos by views */
  async findMostPopular() {
    return await this.videosRepository.find({
      where: {
        views: MoreThan(0)
      },
      relations: includeAllRelations,
    })
  }


  /** Throws new NotFoundException if user doesn't exist by itself 
   * * Returns {video} with {isLiked} by {channelId} if {channelId} is passed.
   * * Overwise - returns {video} without {isLiked} field
  */
  async findById(videoId: Video['id'], channelId?: Channel['id']) {
    const video = await this.videosRepository.findOne({
      where: {
        id: videoId, 
        isPublic: true
      },
      relations: includeAllRelations
    })

    if (!video) throw new NotFoundException('Video doesn\'t exist. 😓')

    let isLiked;


    // * Returns video with {isLiked} by {channelId} if {channelId} is passed.
    // * Overwise - returns {video} without {isLiked} field
    if (channelId) {
      const like = await this.likesRepository.findOne({
        where: {
          channel: {
            id: channelId
          },
          video: {
            id: videoId
          }
        }
      })

      like ? isLiked = true : isLiked = false

      return {
        ...video,
        isLiked
      }
    }
    
    return video
  }
}