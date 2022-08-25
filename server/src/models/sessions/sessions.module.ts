import * as session from 'express-session'
import { INestApplication, Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { CookieKeys } from 'config/server.constants';
import { Session } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Session]
  )],
})
export class SessionsModule {
  public initialize(app: INestApplication) {
    const { 
      POSTGRES_USER, 
      POSTGRES_PASSWORD, 
      POSTGRES_HOST, 
      POSTGRES_PORT, 
      POSTGRES_DATABASE
    } = process.env
    
    const pgSessionsStore = require('connect-pg-simple')(session)

    app.use(session({
      name: CookieKeys['SESSION_ID'],
      secret: process.env.SERVER_SECRET,
      resave: false, // Don't save if session wasn't changed
      saveUninitialized: false, // Dont save in db sessions without data
      rolling: true, //TODO: Refresh Session
      cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 1 day
      },
      store: new pgSessionsStore({
        conString: `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}`,
        tableName: 'sessions',
      })
    }))
  }
}