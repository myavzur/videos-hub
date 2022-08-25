import { Session } from "express-session";
import { Channel } from "models/channels/entities";

export interface SessionApp extends Session {
  channel?: Pick<Channel, 'id' | 'email'>
}