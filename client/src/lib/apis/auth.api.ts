import axios from "axios"
import { baseApi } from "./base.api"

export const authApi = axios.create({
  baseURL: `${baseApi}/auth`,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
})