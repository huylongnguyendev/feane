import type { Metadata } from "next"
import { Dancing_Script, Open_Sans } from "next/font/google"
import "./globals.css"
import AppPovider from "@/lib/providers/AppPovider"
import { Toaster } from "sonner"

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
})

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Feane | Đặt bàn online, gọi món tiện lợi",
  description: "Feane - Đặt bàn và gọi món trực tuyến nhanh chóng, tiện lợi. Trải nghiệm ẩm thực tuyệt vời ngay hôm nay tại nhà hàng Feane.",
  authors: { name: "Feane" }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${dancingScript.variable} antialiased`}
      >
        <AppPovider>
          {children}
          <Toaster richColors />
        </AppPovider>
      </body>
    </html>
  )
}
