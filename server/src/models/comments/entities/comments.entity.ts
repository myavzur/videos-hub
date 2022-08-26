import {
  Column, Entity, JoinColumn, ManyToOne
} from "typeorm";

import { Channel } from "models/channels/entities";
import { Video } from "models/videos/entities";
import { Base } from "utils/base.entity";

@Entity({name: 'comments'})
export class Comment extends Base {
  @Column('text')
  content: string




  // Relations 🎫 
    // ? Comment's author
  @ManyToOne(() => Channel)
  @JoinColumn({name: 'channelId', referencedColumnName: 'id'})
  channel: Channel

    // ? Comment to video
  @ManyToOne(() => Video, video => video.comments)
  @JoinColumn({name: 'videoId', referencedColumnName: 'id'})
  video: Video
}