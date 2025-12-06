import { BookUser, Calendar, Hamburger, LayoutDashboard, Notebook, Table, Users } from "lucide-react"

export type SideBarItemType = {
  title: string
  value: string
  url: string
  icon: React.ElementType
}

export const dashboardItem: SideBarItemType[] = [
  {
    title: "Dasboard",
    value: "dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Thực đơn",
    value: "menu",
    url: "/admin/menu",
    icon: Hamburger,
  },
  {
    title: "Khách hàng",
    value: "customers",
    url: "/admin/customers",
    icon: BookUser,
  },
  {
    title: "Nhân viên",
    value: "staff",
    url: "/admin/staff",
    icon: Users,
  },
  {
    title: "Bàn ăn",
    value: "table",
    url: "/admin/tables",
    icon: Table,
  },
  {
    title: "Ghi chú",
    value: "note-book",
    url: "/admin/note-book",
    icon: Notebook,
  },
]