"use client"
import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { LoginSchema } from "@/lib/schema/login.schema"
import { LoginRequestType } from "@/lib/types/auth.type"
import { LoginFormType } from "@/lib/types/form.type"
import { FormParser } from "@/middleware/auth.middleware"
import { RoleLoginMiddleware } from "@/middleware/role.middleware"
import { authService } from "@/services/auth.service"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function Login() {
  const router = useRouter()

  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
      keepLogin: false,
    }
  })

  const onSubmit = async (data: LoginFormType) => {
    const payload: LoginRequestType = FormParser.login(data)

    try {
      const res = await authService.login(payload)
      toast.success(res.message)
      RoleLoginMiddleware(res.user, router)
    } catch (error: any) {
      if (error.response)
        toast.error(error.response.data.message)
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          className="p-4 rounded-md bg-background shadow-md shadow-primary/30 w-full md:w-md space-y-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-2 text-center">
            <Logo className="md:hidden" />
            <p className="text-balance font-semibold max-md:text-sm">Chào mừng bạn, hãy đăng ký tài khoản</p>
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Tên tài khoản" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input placeholder="Mật khẩu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="keepLogin"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>Ghi nhớ đăng nhập</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex items-center gap-2 mt-8">
            <Button
              variant="secondary"
              type="button"
              className="flex-1"
              onClick={() => router.push("login")}
            >
              Đi đến Đăng ký
            </Button>
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="flex-1"
            >
              {form.formState.isSubmitting && <Spinner /> || "Đăng nhập"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
