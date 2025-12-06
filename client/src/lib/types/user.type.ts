
export enum Role {
  CUSTOMER = "CUSTOMER",
  ADMIN = "ADMIN",
  STAFF = "STAFF"
}

export type User = {
  id: string
  fullName: string
  username: string
  email: string | null
  phone: string | null
  address: string | null
  role: Role
  status: boolean
}