# IQ Twitter Backend

NestJS backend for the social media platform.

## Stack

- **NestJS** 10
- **PostgreSQL** + **Prisma ORM**
- **JWT** auth with Passport
- **bcrypt** for password hashing
- **class-validator** / **class-transformer** for DTO validation
- **ConfigModule** with env validation

## Setup

1. Copy `.env.example` to `.env` and set:
   - `DATABASE_URL` – PostgreSQL connection string
   - `JWT_SECRET` – secret for signing JWTs

2. Install and generate Prisma client:

```bash
npm install
npm run prisma:generate
```

3. When Prisma models are added, run migrations:

```bash
npm run prisma:migrate
```

4. Start the app:

```bash
npm run start:dev
```

## Project structure

```
src/
├── config/           # ConfigModule, env validation, app config
├── prisma/           # PrismaModule, PrismaService
├── auth/             # JWT auth, login/register, guards, strategies
├── users/            # Users module (stub until User model exists)
├── posts/            # Posts module (stub until Post model exists)
├── iq/               # IQ module (stub until IQ models exist)
├── app.module.ts
└── main.ts           # Global ValidationPipe
```

## API (after models are added)

- `POST /auth/register` – register (public)
- `POST /auth/login` – login (public)
- `GET /users/me` – current user (protected)
- `GET /posts`, `GET /posts/:id` – list / get post
- `POST /posts` – create post (protected)
- `GET /iq/score` – IQ score (protected)

Routes except `/auth/register` and `/auth/login` require `Authorization: Bearer <token>`.

## Prisma

Schema is in `prisma/schema.prisma`. Models are left empty; add your models there and run `prisma migrate dev`.
