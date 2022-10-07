import { 
  Entity, 
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn, 
} from "typeorm";

import { Base } from "utils/base.entity";
import { ChannelLimits } from "../channels.types";
import { Video } from "models/videos/entities";
import { Subscription } from "./subscriptions.entity";

@Entity({name: 'channels'})
export class Channel {
  @PrimaryGeneratedColumn('uuid')
  readonly id: number;
  
  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date




  @Column('varchar', {unique: true, length: ChannelLimits.EMAIL_LEN})
  email: string

  @Column('varchar', {select: false, length: 255})
  password: string

  @Column('varchar', {default: '', length: 255, nullable: false})
  avatarPath: string

  @Column('varchar', {default: '', length: ChannelLimits.NAME_LEN})
  name: string

  @Column('text', {default: ''})
  description: string

  @Column('boolean', {default: false})
  isVerified: boolean

  @Column('int', {default: 0})
  subscribersCount?: number



  // Relations 🎫 
  @OneToMany(() => Video, video => video.channel) // One Channel has many videos
  @JoinColumn({name: 'id', referencedColumnName: 'userId'})
  videos: Video[]

  @OneToMany(() => Subscription, subscription => subscription.fromChannel)
  @JoinColumn({name: 'id', referencedColumnName: 'to_channel_id'})
  subscriptions: Subscription[]

  @OneToMany(() => Subscription, subscription => subscription.toChannel)
  @JoinColumn({name: 'id', referencedColumnName: 'from_channel_id'})
  subscribers: Subscription[]
}