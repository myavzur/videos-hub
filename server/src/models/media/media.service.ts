import { Injectable } from '@nestjs/common';
import * as fse from 'fs-extra'

import { SaveFileResponse, UploadFolders } from './media.types';

// Current Working Direction (node process) = chat/server
const CWD = process.cwd()

@Injectable()
export class MediaService {

  async saveMedia(
    media: Express.Multer.File,
    folder?: UploadFolders,
    name?: string
  ): Promise<SaveFileResponse> {
    const fileFolder = folder || 'default';
    const fileName   = name || media.originalname;

    const dir = `${CWD}/public/uploads/${fileFolder}`;
    
    await fse.ensureDir(dir); // * Creates folder if not exists
    await fse.writeFile(`${dir}/${fileName}`, media.buffer);

    return {
      path: `/uploads/${fileFolder}/${fileName}`,
      name: fileName
    }
  }
  
}
