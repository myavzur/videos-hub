import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CommentsService } from './comments.service';

@ApiTags('Channels')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
}
