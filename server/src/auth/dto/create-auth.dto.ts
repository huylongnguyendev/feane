import { $Enums } from "@prisma/client"
import { Transform } from "class-transformer"
import { IsEnum, IsNotEmpty, IsOptional, Matches, MinLength } from "class-validator"
import sanitizeHtml from "sanitize-html"

export class CreateAuthDto {
  @IsNotEmpty({message: "Tên không được để trống"})
  @MinLength(2, { message: "Tên phải có ít nhất 2 ký tự" })
  @Transform(({value}) => sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {}
  }))
  @Matches(/^[\p{L}\s]+$/u, {
    message: "Tên không hợp lệ"
  })
  fullName!: string

  @IsNotEmpty({message: "Tên tài khoản không được để trống"})
  @MinLength(5, { message: "Tên tài khoản phải có ít nhất 5 ký tự" })
  @Transform(({value}) => sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {}
  }))
  @Matches(/^[A-Za-z0-9.]+$/, {
    message: "Tên tài khoản không hợp lệ"
  })
  username!: string

  @IsNotEmpty({message: "Mật khẩu không được để trống"})
  @Transform(({value}) => sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {}
  }))
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    { message: "Mật khẩu phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt" }
  )
  password!: string

  @IsOptional()
  @IsEnum($Enums.Role, { message: 'Role không hợp lệ' })
  role?: $Enums.Role
}
