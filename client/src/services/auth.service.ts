import { authApi } from "@/lib/apis/auth.api"
import { LoginRequestType, RegisterRequestType } from "@/lib/types/auth.type"

export const authService = {
  async register(data: RegisterRequestType) {
    const res = await authApi.post("/register", data, { withCredentials: true })
    return res.data
  },

  async login(data: LoginRequestType) {
    const res = await authApi.post("/login", data, { withCredentials: true })
    return res.data
  }
}