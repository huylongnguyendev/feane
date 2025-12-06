import { Role, User } from "@/lib/types/user.type"
import { useRouter } from "next/navigation"

export const RoleLoginMiddleware = (user: User, router: ReturnType<typeof useRouter>) => {

  const roleRoutes: Record<Role, string> = {
    CUSTOMER: "/",
    ADMIN: "/admin",
    STAFF: "/staff",
  }

  router.push(roleRoutes[user.role] ?? "/")

}