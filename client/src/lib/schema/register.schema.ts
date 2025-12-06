import z from "zod"

export const RegisterSchema = z
  .object({
    fullName: z.string()
      .min(2, { message: "Tên phải có ít nhất 2 ký tự" })
      .regex(/^[\p{L}\s]+$/u, { message: "Tên không hợp lệ" }),

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
    confirmPassword: z.string()
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Xác nhận mật khẩu không khớp",
    path: ["confirmPassword"]
  })