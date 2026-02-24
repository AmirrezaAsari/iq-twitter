# IQ Twitter Backend

NestJS backend for the social media platform.

## Setup
### Use Docker, or:
1. Copy `.env.example` to `.env` and values

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
   <br>
   prod:
```bash
npm run bild
npm run start
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dev:
```bash
npm run start:dev
```

## Stack

- **NestJS** 10
- **PostgreSQL** + **Prisma ORM**
- **JWT** auth with Passport
- **bcrypt** for password hashing
- **class-validator** / **class-transformer** for DTO validation
- **ConfigModule** with env validation
