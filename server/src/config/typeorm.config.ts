import { TypeOrmModuleOptions } from "@nestjs/typeorm";

import { Session } from "models/sessions/entities";
import { Channel, Subscription } from "models/channels/entities";
import { Video } from "models/videos/entities";
import { Comment } from "models/comments/entities";

export const getTypeormConfig = (): TypeOrmModuleOptions => ({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [
    Session,
    Channel, Subscription,
    Video, 
    Comment
  ],
  synchronize: true,
})