import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

import { ChannelLimits } from "models/channels/channels.types";

export class RegisterDto {
  @IsEmail({}, {message: "Email isn't valid..."})
  @MaxLength(ChannelLimits.EMAIL_LEN, {message: `Email couldn't be larger than ${ChannelLimits.EMAIL_LEN} symbols!`})
  email: string;

  @IsString({message: "Password must be a string! What a mess... 🤦"})
  @MinLength(12, {message: 'Password cant"t be less than 12 symbols.'})
  @MaxLength(ChannelLimits.PASSWORD_LEN, {message: `Password can't be larger than ${ChannelLimits.PASSWORD_LEN} symbols!`})
  password: string;

  @IsString({message: "Password confirmation must be a string! What a mess... 🤦"})
  passwordConfirmation: string;

  @IsString({message: "Name must be a string! Lmao"})
  @MinLength(2, {message: 'Name cant"t be less than 2 symbols.'})
  @MaxLength(ChannelLimits.NAME_LEN, {message: `Name can't be larger than ${ChannelLimits.NAME_LEN} symbols!`})
  name: string;
}