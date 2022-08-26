import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Channel } from 'models/channels/entities';
import { FindOptionsWhereProperty, ILike, MoreThan, Repository } from 'typeorm';
import { UpdateVideoDto } from './dto';
import { Video } from './entities';



const includeAll = {
  channel: true, // Author of the video
  comments: {
    channel: true // Author of the comment
  }
}

const selectChannelPreview = {
  channel: { 
    id: true, 
    name: true, 
    avatarPath: true, 
    isVerified: true 
  }
}



@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Video)
    private readonly videosRepository: Repository<Video>,
  ) {}





  // ! Generals CRUD
  async createVideo(channelId: Channel['id']) {
    const newVideo = await this.videosRepository.save({
      channel: { id: channelId }
    })
    console.log("🚀 ~ file: videos.service.ts ~ line 44 ~ VideosService ~ createVideo ~ newVideo", newVideo)

    return newVideo
  }


  async updateVideo(id: Video['id'], dto: UpdateVideoDto) {
    const video = await this.findById(id, {isPulic: false})

    return await this.videosRepository.save({...video, ...dto})
  }

  async updateViews(id: Video['id']) {
    const video = await this.findById(id, {isPulic: true})
    video.views++
    return await this.videosRepository.save(video)
  }

  async updateLikes(id: Video['id']) {
    const video = await this.findById(id, {isPulic: true})
    video.likes++
    return await this.videosRepository.save(video)
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
      relations: includeAll,
      select:    selectChannelPreview,
      order: { createdAt: 'DESC' }
    })
  }


  // ? Find most popular videos by view
  async findMostPopulars() {
    return await this.videosRepository.find({
      where: {
        views: MoreThan(0)
      },
      relations: includeAll,
      select:    selectChannelPreview,

    })
  }


  //** Throws new NotFoundException if user doesn't exist by itself!!! */
  async findById(id: any, options: FindByIdOptions) {
    const video = await this.videosRepository.findOne({
      where: {
        id, 
        isPublic: options.isPulic
      },
      relations: includeAll
    })

    if (!video) throw new NotFoundException('Video doesn\'t exist. 😓')
    return video
  }
}

interface FindByIdOptions {
  isPulic: boolean
}