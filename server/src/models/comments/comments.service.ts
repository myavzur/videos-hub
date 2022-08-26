import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Channel } from 'models/channels/entities';
import { Repository } from 'typeorm';

import { CreateCommentDto } from './dto';
import { Comment } from './entities';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>,
  ) {}


  /** ? Creates comment to dto.videoId from channelId */
  async createComment(channelId: Channel['id'], dto: CreateCommentDto) {
    const newComment = await this.commentsRepository.save({
      content: dto.content,
      channel: { id: channelId },
      video: { id: dto.videoId },
    })
    
    return newComment
  }
}
