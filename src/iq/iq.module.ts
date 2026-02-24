import { Module } from '@nestjs/common';
import { IqService } from './iq.service';
import { IqController } from './iq.controller';

@Module({
  controllers: [IqController],
  providers: [IqService],
  exports: [IqService],
})
export class IqModule {}
