import z from "zod"

export const LoginSchema = z
  .object({
    username: z.string()
      .min(5, { message: "Tên tài khoản phải có ít nhất 5 ký tự" })
      .regex(/^[A-Za-z0-9.]+$/, {
        message: "Tên tài khoản không hợp lệ"
      }),
    password: z.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message: "Mật khẩu phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt"
        }),
    keepLogin: z.boolean()
  })