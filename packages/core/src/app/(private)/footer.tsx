import { useGlobalContext } from "@/context/store"
import { find } from "@/lib/strapi"
import { loadActiveTheme } from "config/theme-loader"

export default async function PrivateLayoutFooter() {
   const { data, error } = await find(
      // : API call need to Fix. It will be private Header
      "api/padma-backend/public-frontpage",
      {
         populate: "*"
      },
      "no-store"
   )
   const { getPublicComponents } = await loadActiveTheme()
   // if (error) {
   //    throw error;
   // }
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
