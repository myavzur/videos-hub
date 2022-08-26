import { Controller, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { MediaService } from './media.service';
import { AuthGuard } from 'models/auth/guards';
import { UploadFolders } from './media.types';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Media Files')
@Controller('media')
export class MediaController {
  constructor(
    private readonly mediaService: MediaService
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors( FileInterceptor('media') )
  @ApiOperation({ summary: 'Загружает {файл} на сервер.' })
  async uploadMedia(
    @UploadedFile()  media:   Express.Multer.File,
    @Query('folder') folder?: UploadFolders 
  ) {
    return await this.mediaService.saveMedia(media, folder)
  }
}
