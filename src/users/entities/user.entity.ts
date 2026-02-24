import { User } from '@prisma/client';

/**
 * User without sensitive fields for responses.
 */
export type SafeUser = Omit<User, 'password'>;

export type UserWithPassword = User;
