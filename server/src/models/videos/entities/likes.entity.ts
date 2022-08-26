import { Channel } from "models/channels/entities";
import { 
  Entity, 
  JoinColumn, 
  ManyToOne
} from "typeorm";

import { Base } from "utils/base.entity";
import { Video } from "./videos.entity";

@Entity({name: 'videos_has_likes'})
export class Likes extends Base {

  @ManyToOne(() => Video, video => video.likes) 
  @JoinColumn({name: 'videoId', referencedColumnName: 'id'})
  video: Video

  @ManyToOne(() => Channel, channel => channel.likes)
  @JoinColumn({name: 'channelId', referencedColumnName: 'id'})
  channel: Channel

}