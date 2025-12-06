import { LoginFormType, RegisterFormType } from "@/lib/types/form.type"

export const FormParser = {
  register(data: RegisterFormType) {
    const { confirmPassword, ...rest } = data
    const username = rest.username.trim().toLowerCase()
    const fullName = rest.fullName.trim()
    const password = rest.password.trim()

    return { username, fullName, password }
  },
  login(data: LoginFormType) {

    const username = data.username.trim().toLowerCase()
    const password = data.password.trim()

    return { ...data, username, password }
  }
}