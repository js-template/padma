import { auth } from "@/context/auth"
import { redirect } from "next/navigation"
import { Fragment } from "react"

export default async function CandidateLayout({
   children // will be a page or nested layout
}: {
   children: React.ReactNode
}) {
   const session = await auth()

   // *** If the user role is not an candidate, redirect to the dashboard
   if (session?.user?.role?.type !== "candidate") {
      redirect("/dashboard")
   }

   return <Fragment>{children}</Fragment>
}
