import { auth } from "@/context/auth"
import { Fragment } from "react"
// FIXME: Should delete
export default async function EmployerLayout({
   children // will be a page or nested layout
}: {
   children: React.ReactNode
}) {
   const session = await auth()

   // *** If the user role is not an employer, redirect to the dashboard
   // if (session?.user?.role?.type !== "employer") {
   //    redirect("/dashboard");
   // }

   return <Fragment>{children}</Fragment>
}
