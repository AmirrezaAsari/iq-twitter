import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// TODO: add DTOs and implement when IQ-related models exist in Prisma

@Injectable()
export class IqService {
  constructor(private readonly prisma: PrismaService) {}

  async getScore(userId: string) {
    // TODO: compute/return IQ score for user
    return null;
  }
}
