import { Role } from '@prisma/client';

export class AuthResponseDto {
  accessToken: string;
  user: {
    id: string;
    email: string;
    username: string;
    role: Role;
    iqScore: number | null;
    badge: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
}
