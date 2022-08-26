import { 
  Entity, 
  ManyToOne,
  JoinColumn, 
} from "typeorm";

import { Base } from "utils/base.entity";
import { Channel } from "./channels.entity";

@Entity({name: 'channels_has_subscriptions'})
export class Subscription extends Base {

  // Relations 🎫 
  @ManyToOne(() => Channel, channel => channel.subscribers)
  @JoinColumn({name: 'from_channel_id'})
  fromChannel: Channel

  @ManyToOne(() => Channel, channel => channel.subscriptions)
  @JoinColumn({name: 'to_channel_id'})
  toChannel: Channel
  
}