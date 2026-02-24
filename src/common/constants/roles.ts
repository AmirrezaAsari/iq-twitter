/**
 * User roles. Must stay in sync with Prisma schema enum Role.
 */
export enum Role {
  READER = 'READER',
  MEMBER = 'MEMBER',
  ELITE = 'ELITE',
  GENIUS = 'GENIUS',
  ADMIN = 'ADMIN',
}

export const ROLES_KEY = 'roles';
