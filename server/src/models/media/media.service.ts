import { Injectable } from '@nestjs/common';
import * as fse from 'fs-extra'

import { SaveFileResponse, UploadFolders } from './media.types';

// Current Working Direction (node process) = chat/server
const CWD = process.cwd()

@Injectable()
export class MediaService {

  async saveMedia(
    media: Express.Multer.File,
    folder?: UploadFolders
  ): Promise<SaveFileResponse> {

    const dir = `${CWD}/public/uploads/${folder || 'default'}`
    
    await fse.ensureDir(dir) // ? Creates folder if not exists
    await fse.writeFile(`${dir}/${media.originalname}`, media.buffer)

    return {
      path: `uploads/${folder || 'default'}/${media.originalname}`,
      name: media.originalname
    }

  }

}
