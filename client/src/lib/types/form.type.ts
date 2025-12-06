import z from "zod"
import { RegisterSchema } from "../schema/register.schema"
import { LoginSchema } from "../schema/login.schema"

export type RegisterFormType = z.infer<typeof RegisterSchema>
export type LoginFormType = z.infer<typeof LoginSchema>