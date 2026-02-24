import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserEntity } from './entities/user.entity';
// TODO: add DTOs and implement when User model exists in Prisma

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    // TODO: return this.prisma.user.findUnique({ where: { email } });
    return null;
  }

  async findById(id: string): Promise<UserEntity | null> {
    // TODO: return this.prisma.user.findUnique({ where: { id } });
    return null;
  }

  async create(data: {
    email: string;
    username: string;
    passwordHash: string;
  }): Promise<UserEntity> {
    // TODO: return this.prisma.user.create({ data });
    throw new Error('User model not yet defined in Prisma schema');
  }
}
