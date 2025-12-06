"use client"
import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { RegisterSchema } from "@/lib/schema/register.schema"
import { RegisterRequestType } from "@/lib/types/auth.type"
import { RegisterFormType } from "@/lib/types/form.type"
import { FormParser } from "@/middleware/auth.middleware"
import { authService } from "@/services/auth.service"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function Register() {
  const router = useRouter()

  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
    }
  })

  const onSubmit = async (data: RegisterFormType) => {
    const payload: RegisterRequestType = FormParser.register(data)

    try {
      const res = await authService.register(payload)
      toast.success(res.message)
      router.push("login")
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
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ tên</FormLabel>
                <FormControl>
                  <Input placeholder="Họ và tên của bạn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Xác nhận mật khẩu</FormLabel>
                <FormControl>
                  <Input placeholder="Xác nhận mật khẩu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-xs text-accent-foreground mt-6">
            Bằng cách nhấn Đăng ký, bạn đồng ý các Chính sách bảo mật và Điều khoản của chúng tôi
          </p>
          <div className="w-full flex items-center gap-2 mt-8">
            <Button
              variant="secondary"
              type="button"
              className="flex-1"
              onClick={() => router.push("login")}
            >
              Quay lại đăng nhập
            </Button>
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="flex-1"
            >
              {form.formState.isSubmitting && <Spinner /> || "Đăng ký"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
