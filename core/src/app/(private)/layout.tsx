// TODO: Private layout api is available yet
import React from "react"
import PrivateLayoutHeader from "./header"
import { find } from "@/lib/strapi"
import { loadActiveTheme } from "config/theme-loader"
import { getLanguageFromCookie } from "@/utils/language"
import { Box } from "@mui/material"
import PrivateLayoutFooter from "./footer"

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
   const activeTheme = await loadActiveTheme()

   // Define as an empty object by default
   // let getPublicComponents: Record<string, any> = {}

   // if (activeTheme) {
   //    getPublicComponents = activeTheme.getPublicComponents
   //    // console.log(getPublicComponents)
   // } else {
   //    console.error("Active theme could not be loaded!")
   // }

   return (
      <>
         <PrivateLayoutHeader />
         <main>{children}</main>
         <PrivateLayoutFooter />
      </>
   )
}
