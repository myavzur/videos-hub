import {
  Column, Entity, JoinColumn, ManyToOne, OneToMany
} from "typeorm";

import { Channel } from "models/channels/entities";
import { Comment } from "models/comments/entities";
import { Base } from "utils/base.entity";
import { VideoLimits } from "../videos.types";

@Entity({name: 'videos'})
export class Video extends Base {

  @Column('boolean')
  isPublic: boolean

  @Column('varchar', {length: VideoLimits.NAME_LEN, default: ''})
  name: string
  
  @Column('varchar', {default: ''})
  videoPath: string

  @Column('varchar', {default: ''})
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