import React, { Fragment } from "react"
import type { Metadata } from "next"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { getLanguageFromCookie } from "@/utils/language"
import { loadActiveTheme } from "config/theme-loader"

export default async function Home() {
   const language = getLanguageFromCookie()

   const { data, error } = await find(
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
      console.error("Active theme could not be loaded!", error)
   }

   const blocks = data?.data?.blocks || []

   console.log("Home Page Blocks Loaded", blocks)

   return (
      <Fragment>
         {/* Render the components dynamically using blockComponentMapping */}
         {blocks?.map((block: { __component: keyof typeof getPublicComponents }, index: number) => {
            const BlockConfig = getPublicComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig
               //@ts-ignore
               return <ComponentToRender key={index} language={language} block={block} />
            }
            return null // Handle case where component mapping is missing
         })}
      </Fragment>
   )
}

// *** generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
   // const language = getLanguageFromCookie()
   // *** fetch seo data

   const product = await find(
      "api/padma-backend/public-frontpage",
      {
         populate: "*"
      },
      "force-cache"
   )

   return StrapiSeoFormate(product?.data?.data?.seo)
}
