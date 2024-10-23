import { redirect } from "next/navigation"
import { auth } from "@/context/auth"
import { MyProfile } from "@padma/metajob-ui"

export default async function ProfilePage() {
   const session = await auth()

   // *** If the user role is not an candidate or employer, redirect to the dashboard
   if (session?.user?.role?.type !== "candidate" && session?.user?.role?.type !== "employer") {
      redirect("/dashboard")
   }
   const userId = session?.user?.id as unknown as string

   return <MyProfile userId={userId} />
}
