import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhereProperty, ILike, MoreThan, Repository } from 'typeorm';

import { Channel } from 'models/channels/entities';
import { OkException } from 'utils/exeptions';
import { CreateVideoDto, UpdateVideoDto } from './dto';
import { Video } from './entities';
import { includeAllRelations, selectChannelPreview } from './videos.selectors';




@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Video)
    private readonly videosRepository: Repository<Video>,
  ) {}





  // ! Generals CRUD
  async createVideo(channelId: Channel['id'], dto: CreateVideoDto) {
    const newVideo = await this.videosRepository.save({
      channel: { id: channelId }, 
      ...dto
    })
    

    return newVideo
  }


  async updateVideo(id: Video['id'], dto: UpdateVideoDto) {
    const video = await this.findById(id, {isPulic: false})

    return await this.videosRepository.save({...video, ...dto})
  }


  async updateViews(id: Video['id']) {
    const video = await this.findById(id, {isPulic: true})

    video.views++
    await this.videosRepository.save(video)

    throw new OkException(`Views on video "${video.name}" was incremented by 1`)
  }


  async updateLikes(id: Video['id']) {
    const video = await this.findById(id, {isPulic: true})

    video.likes++
    await this.videosRepository.save(video)

    throw new OkException(`Likes on video "${video.name}" was incremented by 1`)
  }


  async deleteVideo(id: Video['id']) {
    return await this.videosRepository.delete({id})
  }



  // ! FindBy, DeleteBy, little helpers...

  // ? Get Only public videos by default
  async findAll(term?: string) {
    let options: FindOptionsWhereProperty<Video> = {}

    if (term) {
      options = {
        name: ILike(`%${term}%`)
      }
    }

    return await this.videosRepository.find({
      where: {
        ...options, isPublic: true  
      },
      relations: includeAllRelations,
      order: { createdAt: 'DESC' }
    })
  }


  // ? Find most popular videos by view
  async findMostPopulars() {
    return await this.videosRepository.find({
      where: {
        views: MoreThan(0)
      },
      relations: includeAllRelations,

    })
  }


  //** Throws new NotFoundException if user doesn't exist by itself!!! */
  async findById(id: Video['id'], options: FindByIdOptions) {
    const video = await this.videosRepository.findOne({
      where: {
        id, 
        isPublic: options.isPulic
      },
      relations: includeAllRelations
    })

    if (!video) throw new NotFoundException('Video doesn\'t exist. 😓')
    return video
  }
}

interface FindByIdOptions {
  isPulic: boolean
}