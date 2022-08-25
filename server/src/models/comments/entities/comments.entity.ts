import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  ManyToOne,
  JoinColumn, 
} from "typeorm";

import { Base } from "helpers/base.entity";
import { Video } from "models/videos/entities";
import { Channel } from "models/channels/entities";

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