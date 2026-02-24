import { Controller, Get, UseGuards } from '@nestjs/common';
import { IqService } from './iq.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('iq')
@UseGuards(JwtAuthGuard)
export class IqController {
  constructor(private readonly iqService: IqService) {}

  @Get('score')
  getScore(@CurrentUser('id') userId: string) {
    return this.iqService.getScore(userId);
  }
}
