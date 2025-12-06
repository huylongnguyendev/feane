import Logo from "@/components/Logo"
import Login from "./Login"

export default function page() {
  return (
    <>
      <div className="grid place-items-center min-h-dvh">
        <div className="flex justify-between items-center w-full">
          <div className="space-y-4 max-md:hidden max-w-xl">
            <Logo />
            <h1
              className="font-semibold text-balance text-2xl"
            >
              Nơi chia sẻ niềm vui và hạnh phúc sau mỗi <span className="uppercase text-primary">bữa ăn ngon</span> cùng với người thân và bạn bè
            </h1>
          </div>
          <Login />
        </div>
      </div>
    </>
  )
}
