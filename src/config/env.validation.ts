import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  Max,
  validateSync,
} from 'class-validator';
import { Environment } from './env.enum';

export class EnvValidationSchema {
  @IsEnum(Environment)
  @IsOptional()
  NODE_ENV: Environment = Environment.Development;

  @IsNumber()
  @Min(1)
  @Max(65535)
  @IsOptional()
  PORT: number = 3000;

  @IsString()
  DATABASE_URL: string;

  @IsString()
  JWT_SECRET: string;

  @IsString()
  @IsOptional()
  JWT_EXPIRES_IN: string = '7d';

  @IsNumber()
  @Min(4)
  @Max(31)
  @IsOptional()
  BCRYPT_ROUNDS: number = 10;
}

export function validate(config: Record<string, unknown>): EnvValidationSchema {
  const validated = plainToInstance(EnvValidationSchema, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validated, {
    skipMissingProperties: false,
    whitelist: true,
  });

  if (errors.length > 0) {
    const message = errors.map((e) => Object.values(e.constraints || {})).flat().join(', ');
    throw new Error(`Config validation error: ${message}`);
  }

  return validated;
}
