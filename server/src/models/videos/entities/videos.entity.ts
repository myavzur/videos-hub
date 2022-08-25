import { 
  Entity, 
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany, 
} from "typeorm";

import { Base } from "helpers/base.entity";
import { Channel } from "models/channels/entities";
import { Comment } from "models/comments/entities";

@Entity({name: 'videos'})
export class Video extends Base {

  @Column('boolean')
  isPublic: boolean

  @Column('varchar')
  name: string
  
  @Column('varchar')
  videoPath: string

  @Column('varchar')
  thumbnailPath: string

  @Column('int', {default: 0})
  duration: number

  @Column('int', {default: 0})
  views?: number

  @Column('int', {default: 0})
  likes?: number





  // Relations 🎫 
  @ManyToOne(() => Channel, channel => channel.videos)
  @JoinColumn({name: 'userId', referencedColumnName: 'id'})
  channel: Channel

  @OneToMany(() => Comment, comment => comment.video)
  comments: Comment[]
}