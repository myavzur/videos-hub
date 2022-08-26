import { 
  Entity, 
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany
} from "typeorm";

import { Video, Likes } from "models/videos/entities";

import { Subscription } from "./subscriptions.entity";
import { ChannelLimits } from "../channels.types";

@Entity({name: 'channels'})
export class Channel {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;
  
  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date




  @Column('varchar', {unique: true, length: ChannelLimits.EMAIL_LEN})
  email: string

  @Column('varchar', {select: false, length: 255})
  password: string

  @Column('varchar', {length: 255, nullable: true})
  avatarPath?: string

  @Column('varchar', {unique: true, length: ChannelLimits.NAME_LEN})
  name: string

  @Column('text', {default: ''})
  description: string

  @Column('boolean', {default: false})
  isVerified: boolean

  @Column('int', {default: 0})
  subscribersValue?: number



  // Relations 🎫 
  @OneToMany(() => Likes, likes => likes.channel)
  likes: Likes[]

  // ! When channel is deleted, his videos are also deleted
  @OneToMany(() => Video, video => video.channel)
  @JoinColumn({name: 'id', referencedColumnName: 'channelId'})
  videos: Video[]

  @OneToMany(() => Subscription, subscription => subscription.fromChannel)
  @JoinColumn({name: 'id', referencedColumnName: 'to_channel_id'})
  subscriptions: Subscription[]

  @OneToMany(() => Subscription, subscription => subscription.toChannel)
  @JoinColumn({name: 'id', referencedColumnName: 'from_channel_id'})
  subscribers: Subscription[]
}