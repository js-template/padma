import type { Metadata } from "next"
import LoginBody from "./body"

export const metadata: Metadata = {
   title: "Login | MUI Next.js Boilerplate",
   description: "Login page for MUI Next.js Boilerplate"
}

type Props = {
   searchParams?: Record<"callbackUrl" | "error", string>
}

const LoginPage = async ({ searchParams }: Props) => {
   return <LoginBody error={searchParams?.error} callbackUrl={searchParams?.callbackUrl} />
}

export default LoginPage
