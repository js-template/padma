import { find } from "@/lib/strapi"
import Body from "./body"
import { auth } from "@/context/auth"
import { redirect } from "next/navigation"
import { loadActiveTheme } from "config/theme-loader"

export default async function DashboardPage({
   params
}: {
   params: { page: string }
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const session = await auth()
   // if (!session) {
   //    redirect("/login")
   // }

   const { data, error } = await find("api/padma-backend/private-frontpage", { populate: "*" }, "no-store")

   if (error) {
      console.error("Error fetching dashboard data:", error?.message)
      return <div>Error loading dashboard. Please try again later.</div>
   }

   //const userRoleId = session?.user?.role?.id
   // console.log("userRoleId", userRoleId)
   //const userRoleKey = `role${userRoleId}Components`
   // const roleComponents = data?.data?.[userRoleKey] || []

   //console.log("roleComponents", data)

   // if (roleComponents.length === 0) {
   //    console.warn(`No components found for role ID: ${userRoleId}`)
   // }

   const activeTheme = await loadActiveTheme()
   const getPrivateComponents = activeTheme?.getPrivateComponents || {}

   return (
      <h1>Will Depcreate soon</h1>
      // <Body
      //    blocks={roleComponents} // Pass the role-specific components
      //    session={session}
      //    currentThemeComponents={getPrivateComponents}
      // />
   )
}
