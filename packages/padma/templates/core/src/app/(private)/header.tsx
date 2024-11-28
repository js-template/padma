import { useGlobalContext } from "@/context/store"
import { find } from "@/lib/strapi"
import { loadActiveTheme } from "config/theme-loader"

export default async function PrivateLayoutHeader() {
   const { data, error } = await find(
      // : API call need to Fix. It will be private Header
      "api/padma-backend/public-frontpage",
      {
         populate: "*"
      },
      "no-store"
   )
   const activeTheme = await loadActiveTheme()

   // Define as an empty object by default
   let getPublicComponents: Record<string, any> = {}

   if (activeTheme) {
      getPublicComponents = activeTheme.getPublicComponents
      // console.log(getPublicComponents)
   } else {
      console.error("Active theme could not be loaded!")
   }
   const blocks = data?.data?.blocks || []

   return (
      <>
         {blocks?.map((block: { __component: keyof typeof getPublicComponents }, index: number) => {
            const BlockConfig = getPublicComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig
               //@ts-ignore
               return <ComponentToRender key={index} block={block} />
            }
            return null // Handle case where component mapping is missing
         })}
      </>
   )
}
