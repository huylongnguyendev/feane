import { PartialType } from "@nestjs/mapped-types"
import { CreateAuthDto } from "./create-auth.dto"
import { IsEmail, IsOptional, IsPhoneNumber, MinLength } from "class-validator"
import { Transform } from "class-transformer"
import sanitizeHtml from "sanitize-html"

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @IsOptional()
  @IsEmail({}, { message: "Email không hợp lệ" })
  email?: string

  @IsOptional()
  @Transform(({ value }) => sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {}
  }))
  @MinLength(1, { message: "Địa chỉ không hợp lệ" })
  address?: string

  @IsOptional()
  @IsPhoneNumber("VN", { message: "Số điện thoại không hợp lệ" })
  phone?: string
}
