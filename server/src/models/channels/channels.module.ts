import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Channel, Subscription } from './entities';
import { ChannelsService } from './channels.service';
import { ChannelsController } from './channels.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Channel, Subscription])
  ],
  controllers: [ChannelsController],
  providers: [ChannelsService],
  exports: [ChannelsService]
})
export class ChannelsModule {}
