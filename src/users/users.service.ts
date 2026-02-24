import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import { SafeUser, UserWithPassword } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserWithPassword | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findByUsername(username: string): Promise<UserWithPassword | null> {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async findById(id: string): Promise<SafeUser | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: this.safeUserSelect,
    });
    return user;
  }

  async findByIdWithPassword(id: string): Promise<UserWithPassword | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(data: {
    email: string;
    username: string;
    password: string;
    role?: Role;
  }): Promise<SafeUser> {
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        username: data.username,
        password: data.password,
        role: data.role ?? Role.READER,
      },
      select: this.safeUserSelect,
    });
    return user;
  }

  /** Select for responses: all fields except password */
  private get safeUserSelect() {
    return {
      id: true,
      email: true,
      username: true,
      role: true,
      iqScore: true,
      badge: true,
      createdAt: true,
      updatedAt: true,
    } as const;
  }

  toSafeUser(user: UserWithPassword): SafeUser {
    const { password: _, ...safe } = user;
    return safe;
  }
}
