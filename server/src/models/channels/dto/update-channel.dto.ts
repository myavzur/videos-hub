import { IsOptional, IsString, MaxLength } from "class-validator";

import { ChannelLimits } from "models/channels/channels.types";

export class UpdateChannelDto {
  @IsString()
  @IsOptional()
  @MaxLength(ChannelLimits.NAME_LEN, {
    message: `Name can"t be > ${ChannelLimits.NAME_LEN} symbols!`
  })
  name?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsOptional()
  avatarPath?: string
}