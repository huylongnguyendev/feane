import { Module } from "@nestjs/common"
import { PrismaModule } from "./prisma/prisma.module"
import { AuthModule } from "./auth/auth.module"
import { JwtModule } from "@nestjs/jwt"
import { secret } from "./constant/jwt.constant"

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: secret.access,
    signOptions: { expiresIn: "5m" }
  })
    , PrismaModule, AuthModule],
})
export class AppModule { }
