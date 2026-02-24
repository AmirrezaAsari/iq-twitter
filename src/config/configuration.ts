import { registerAs } from '@nestjs/config';
import { Environment } from './env.enum';

export default registerAs('app', () => ({
  env: process.env.NODE_ENV || Environment.Development,
  port: parseInt(process.env.PORT || '3000', 10),
  bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || '10', 10),
}));
