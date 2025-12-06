const env = process.env.NODE_ENV

export const baseApi = env === "production" ? process.env.NEXT_PUBLIC_API_URL : "http://localhost:8000/api/v1"