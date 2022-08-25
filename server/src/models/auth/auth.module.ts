import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ChannelsModule } from 'models/channels/channels.module';

@Module({
  imports: [
    ChannelsModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
