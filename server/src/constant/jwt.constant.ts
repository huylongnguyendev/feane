import "dotenv/config"

export const ENV = process.env.NODE_ENV

export const JwtConstant = {
  secret: {
    access: process.env.ACCESS_TOKEN,
    refresh: process.env.REFRESH_TOKEN,
  },
  age: {
    access: 5 * 60 * 1000,
    refresh: 5 * 60 * 1000,
  },
  env: ENV === "production"
}

export const secret = JwtConstant.secret
export const age = JwtConstant.age