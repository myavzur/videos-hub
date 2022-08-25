import { IsString, MaxLength } from "class-validator";

import { ChannelLimits } from "models/channels/channels.types";

export class UpdateChannelDto {
  @IsString()
  @MaxLength(ChannelLimits.NAME_LEN, {message: `Name can"t be > ${ChannelLimits.NAME_LEN} symbols!`})
  name: string

  @IsString()
  description: string

  @IsString()
  avatarPath: string
}