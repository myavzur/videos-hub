import { IsNumber, IsString } from "class-validator";
import { Video } from "models/videos/entities";

export class CreateCommentDto {
  @IsString()
  content: string

  @IsNumber()
  videoId: Video['id']
}