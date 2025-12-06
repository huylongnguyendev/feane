import AppSidebar from "@/components/sidebar/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Feane | Quản lý",
  description: "eane - Đặt bàn và gọi món trực tuyến nhanh chóng, tiện lợi. Trải nghiệm ẩm thực tuyệt vời ngay hôm nay tại nhà hàng Feane.",
  authors: { name: "Feane" }
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <div className="p-4">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </>
  )
}
