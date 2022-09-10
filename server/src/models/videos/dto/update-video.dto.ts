import { IsBoolean, IsString, MaxLength } from "class-validator";

import { VideoLimits } from "../videos.types";

export class UpdateVideoDto {
  @IsString({always: false})
  @MaxLength(VideoLimits.NAME_LEN, {message: `Name can"t be > ${VideoLimits.NAME_LEN} symbols!`})
  name?: string

  @IsBoolean()
  isPublic: boolean

  @IsString({always: false})
  description?: string

  @IsString({always: false})
  thumbnailPath?: string
}