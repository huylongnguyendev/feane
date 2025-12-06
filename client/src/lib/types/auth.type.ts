import { User } from "./user.type"

export type RegisterRequestType = {
  username: string
  fullName: string
  password: string
}

export type LoginRequestType = {
  username: string
  password: string
  keepLogin: boolean
}

export type LoginResponseType = {
  accessToken: string
  message: string
  user: User
}