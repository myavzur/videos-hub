import { FindOptionsRelations } from "typeorm";
import { Video } from "./entities";

export const includeAllRelations: FindOptionsRelations<Video> = {
  channel: true, // Author of the video
  comments: {
    channel: true // Author of the comment
  }
}