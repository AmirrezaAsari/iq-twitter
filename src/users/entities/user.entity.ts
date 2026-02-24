// TODO: align with Prisma User model when schema is defined
export interface UserEntity {
  id: string;
  email: string;
  username: string;
  passwordHash?: string;
}
