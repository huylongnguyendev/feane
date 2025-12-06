import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Logo({ className }: { className?: string }) {
  return (
    <>
      <div className={cn("logo", className)}>
        <Link href="/">
          <span className="text-3xl md:text-4xl font-script capitalize">
            feane
          </span>
        </Link>
      </div>
    </>
  )
}
