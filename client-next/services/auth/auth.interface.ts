import { IChannel } from "@/types/channel.interface";

export interface IAuthData {
  channel: Pick<IChannel, 'id' | 'email'> | null;
}