import { Body, Controller, Post, Res } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { CreateAuthDto } from "./dto/create-auth.dto"
import { LoginAuthDto } from "./dto/get-auth.dto"
import type { Response } from "express"
import { age, JwtConstant } from "../constant/jwt.constant"

@Controller("auth")
export class AuthController {
  constructor(private readonly auth: AuthService) { }

  @Post("register")
  async register(@Body() data: CreateAuthDto): Promise<any> {
    await this.auth.register(data)
    return {
      message: "Đăng ký thành công"
    }
  }

  @Post("login")
  async login(@Body() data: LoginAuthDto, @Res({ passthrough: true }) res: Response): Promise<any> {
    const { accessToken, refreshToken, user } = await this.auth.login(data)

    if (data.keepLogin)
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: JwtConstant.env,
        sameSite: "none",
        maxAge: age.refresh
      })
    else
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: JwtConstant.env,
        sameSite: "none",
      })

    return {
      message: "Đăng nhập thành công",
      accessToken,
      user
    }
  }

  @Post("logout")
  async logout(@Body() userId: string, @Res({ passthrough: true }) res: Response): Promise<any> {
    await this.auth.logout(userId)

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: JwtConstant.env,
      sameSite: "none",
      path: "/"
    })

    return {
      message: "Đăng xuất thành công"
    }
  }
}
