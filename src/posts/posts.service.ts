import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// TODO: add DTOs and implement when Post model exists in Prisma

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    // TODO: return this.prisma.post.findMany({ ... });
    return [];
  }

  async findOne(id: string) {
    // TODO: return this.prisma.post.findUnique({ where: { id } });
    return null;
  }

  async create(userId: string, data: { content: string; title?: string }) {
    // TODO: return this.prisma.post.create({ data: { ...data, userId } });
    throw new Error('Post model not yet defined in Prisma schema');
  }
}
