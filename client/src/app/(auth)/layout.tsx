import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Feane | Đặt bàn online, gọi món tiện lợi",
  description: "eane - Đặt bàn và gọi món trực tuyến nhanh chóng, tiện lợi. Trải nghiệm ẩm thực tuyệt vời ngay hôm nay tại nhà hàng Feane.",
  authors: { name: "Feane" }
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="px-4 md:px-24 lg:px-32 min-h-dvh bg-background relative z-10">
        <span className="absolute inset-0 gradient-bg -z-10" />
        {children}
      </div>
    </>
  )
}
