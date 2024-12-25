import PublicFooter from "@/components/layouts/public-footer"
import { find } from "@/lib/strapi"
import { loadActiveTheme } from "config/theme-loader"

export default async function PublicLayoutFooter() {
   // fetch footer data
   const { data, error } = await find(
      "api/padma-backend/layout",
      {
         populate: {
            footer: { populate: "*" }
         }
      },
      "no-store"
   )

   const activeTheme = await loadActiveTheme()

   // Define as an empty object by default
   let getPublicComponents: Record<string, any> = {}

   if (activeTheme) {
      getPublicComponents = activeTheme.getPublicComponents
   } else {
      console.error("Active theme could not be loaded!")
   }
   const blocks = data?.data?.footer || []

   return (
      <>
         <PublicFooter blocks={blocks} getPublicComponents={getPublicComponents} />
      </>
   )
}
