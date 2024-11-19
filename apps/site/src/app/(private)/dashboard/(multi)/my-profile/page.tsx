import { Fragment } from "react"
import { auth } from "@/context/auth"
import { getLanguageFromCookie } from "@/utils/language"
import { loadActiveTheme } from "config/theme-loader"
import { find } from "@/lib/strapi"

export default async function ProfilePage() {
   const session = await auth()
   // fetch the language from cookies or session
   const language = getLanguageFromCookie()

   // Load the active theme and get public components
   const { getPrivateComponents } = await loadActiveTheme()

   // fetch my profile page data
   const { data, error } = await find(
      "api/padma-backend/my-profile",
      {
         populate: "*"
      },
      "no-store"
   )

   const blocks = data?.data?.blocks || []

   return (
      <Fragment>
         {/* Render the components dynamically using blockComponentMapping */}
         {blocks?.map((block: { __component: keyof typeof getPrivateComponents }, index: number) => {
            // @ts-ignore
            const BlockConfig = getPrivateComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig

               return <ComponentToRender key={index} block={block} session={session} language={language} />
            }
            return null // Handle missing component mapping case
         })}
      </Fragment>
   )
}
