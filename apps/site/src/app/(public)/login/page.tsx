import { auth } from "auth"
import type { Metadata } from "next"
import { redirect } from "next/navigation"
import AuthLogin from "@/components/auth-login"

export const metadata: Metadata = {
   title: "Login | MUI Next.js Boilerplate",
   description: "Login page for MUI Next.js Boilerplate"
}

type Props = {
   searchParams?: Record<"callbackUrl" | "error", string>
}

const LoginPage = async ({ searchParams }: Props) => {
   const session = await auth()

   if (session) {
      redirect("/dashboard")
   }

   return <AuthLogin error={searchParams?.error} callbackUrl={searchParams?.callbackUrl} />
}

export default LoginPage
