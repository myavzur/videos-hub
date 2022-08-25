import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn, 
} from "typeorm";

import { Base } from "helpers/base.entity";
import { Channel } from ".";

@Entity({name: 'channels_has_subscriptions'})
export class Subscription extends Base {

  // Relations 🎫 
  @ManyToOne(() => Channel, channel => channel.subscriptions)
  @JoinColumn({name: 'from_channel_id'})
  fromChannel: Channel

  @ManyToOne(() => Channel, channel => channel.subscribers)
  @JoinColumn({name: 'to_channel_id'})
  toChannel: Channel
}