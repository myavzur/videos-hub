import * as path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getTypeormConfig } from 'config/typeorm.config';
import { AuthModule } from 'models/auth/auth.module';
import { ChannelsModule } from 'models/channels/channels.module';
import { CommentsModule } from 'models/comments/comments.module';
import { MediaModule } from 'models/media/media.module';
import { SessionsModule } from 'models/sessions/sessions.module';
import { VideosModule } from 'models/videos/videos.module';

// Current Working Direction (node process) = chat/server
const CWD = process.cwd()

@Module({
  imports: [
    // .env variables for process.env[${variable}]
    ConfigModule.forRoot({envFilePath: path.join(CWD, 'src', 'config', '.env')}),
    
    // For GET request to static files: pages, images, etc...
    ServeStaticModule.forRoot({rootPath: path.join(CWD, 'public')}),
    
    // ORM for database
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => getTypeormConfig() // Because of ConfigService injection
    }),

    SessionsModule,
    AuthModule,
    ChannelsModule,
    MediaModule,
    VideosModule, CommentsModule,
  ]
})
export class AppModule {}
