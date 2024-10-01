import RegistrationPage from "@/components/auth-register"
import { auth } from "@/context/auth"
import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
   title: "Register - MetaJobs",
   description: "MetaJobs is a job board for developers, designers, and other tech professionals."
}

const Register = async () => {
   const session = await auth()

   // if jwt is present, redirect to dashboard/ads
   if (session) {
      redirect("/dashboard/")
   }

   return <RegistrationPage />
}
export default Register
