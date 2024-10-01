import { redirect } from "next/navigation"
import ProfilePageBody from "./PageBody"
import { auth } from "@/context/auth"

export default async function ProfilePage() {
   const session = await auth()

   // *** If the user role is not an candidate or employer, redirect to the dashboard
   if (session?.user?.role?.type !== "candidate" && session?.user?.role?.type !== "employer") {
      redirect("/dashboard")
   }

   return <ProfilePageBody />
}
