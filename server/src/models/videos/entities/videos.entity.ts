import {
  Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany
} from "typeorm";

import { Base } from "utils/base.entity";
import { Channel } from "models/channels/entities";
import { Comment } from "models/comments/entities";

import { VideoLimits } from "../videos.types";
import { Likes } from "./likes.entity";

@Entity({name: 'videos'})
export class Video extends Base {

  @Column('boolean', {default: false})
  isPublic: boolean

  @Column('varchar', {length: VideoLimits.NAME_LEN, default: ''})
  name: string

  @Column('text', {default: ''})
  description: string
  
  @Column('varchar', {default: ''})
  videoPath: string

  @Column('varchar', {default: ''})
  thumbnailPath: string

  @Column('int', {default: 0})
  duration: number

  @Column('int', {default: 0})
  views?: number

  
  @Column('int', {default: 0})
  likesValue?: number





  // Relations 🎫 
  @OneToMany(() => Likes, likes => likes.video)
  likes: Likes[]

  // ! cascade: true. When channel deleted, his videos are also deleted
  @ManyToOne(() => Channel, channel => channel.videos)
  @JoinColumn({name: 'channelId', referencedColumnName: 'id'})
  channel: Channel

  @OneToMany(() => Comment, comment => comment.video)
  comments: Comment[]
}