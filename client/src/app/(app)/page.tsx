import { ModeToggle } from "@/components/toggle/ModeToggle"
import Link from "next/link"


export default function Home() {
  return (
    <>
      <div>
      <ModeToggle />
        <Link href="register">
          Đăng ký
        </Link>
      </div>
    </>
  )
}
