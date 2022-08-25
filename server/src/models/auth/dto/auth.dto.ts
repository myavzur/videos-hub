import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

import { ChannelLimits } from "models/channels/channels.types";

export class AuthDto {
  @IsEmail({}, {message: "Email isn't correct..."})
  @MaxLength(ChannelLimits.EMAIL_LEN, {message: `Email couldn\"t be larger than ${ChannelLimits.EMAIL_LEN} symbols!`})
  email: string

  @IsString({message: "Password must be a string! What a mess... 🤦"})
  @MinLength(12, {message: "Password shouldn\"t be less than 12 symbols."})
  @MaxLength(ChannelLimits.PASSWORD_LEN, {message: `Password can"t be larger than ${ChannelLimits.PASSWORD_LEN} symbols!`})
  password: string
}