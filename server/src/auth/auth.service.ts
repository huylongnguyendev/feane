import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"
import { CreateAuthDto } from "./dto/create-auth.dto"
import { hash, compare } from "bcrypt"
import { LoginAuthDto } from "./dto/get-auth.dto"
import { JwtService } from "@nestjs/jwt"
import { secret } from "../constant/jwt.constant"

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService
  ) { }

  async register(dataUser: CreateAuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { username: dataUser.username }
    })

    if (user)
      throw new HttpException({ message: "Tên tài khoản này không thể sử dụng" }, HttpStatus.CONFLICT)

    const hashPassword = await hash(dataUser.password, 12)

    await this.prisma.user.create({
      data: { ...dataUser, password: hashPassword }
    })
  }

  async login(dataUser: LoginAuthDto): Promise<any> {
    const existUser = await this.prisma.user.findUnique({
      where: { username: dataUser.username }
    })

    if (!existUser)
      throw new UnauthorizedException({ message: "Tên tài khoản hoặc mật khẩu không đúng" })

    const isCorrectPassword = await compare(dataUser.password, existUser.password)

    if (!isCorrectPassword)
      throw new UnauthorizedException({ message: "Tên tài khoản hoặc mật khẩu không đúng" })

    const payload = {
      sub: existUser.id,
      username: existUser.username,
      role: existUser.role
    }

    const accessToken = await this.jwt.signAsync(payload, {
      secret: secret.access,
    })

    const refreshToken = await this.jwt.signAsync(payload, {
      secret: secret.refresh,
      expiresIn: "5m"
    })

    const session = await this.prisma.session.findUnique({
      where: { userId: existUser.id }
    })

    if (!session)
      await this.prisma.session.create({
        data: {
          userId: existUser.id,
          refreshToken
        }
      })
    else
      await this.prisma.session.update({
        where: { id: session.id },
        data: { refreshToken }
      })

    const { password, ...user } = existUser

    return { accessToken, refreshToken, user }
  }

  async logout(userId: string) {
    await this.prisma.session.delete({
      where: { userId }
    })
  }
}
