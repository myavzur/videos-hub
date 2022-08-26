import { IsBoolean, IsString, MaxLength } from "class-validator";

import { VideoLimits } from "../videos.types";

export class CreateVideoDto {
  @IsString()
  @MaxLength(VideoLimits.NAME_LEN, {message: `Name can"t be > ${VideoLimits.NAME_LEN} symbols!`})
  name: string

  @IsBoolean()
  isPublic: string

  @IsString()
  description: string

  @IsString()
  videoPath: string

  @IsString()
  thumbnailPath: string
}