import React from "react"
import { find } from "@/lib/strapi"
import { loadActiveTheme } from "../../../config/theme-loader"
import LayoutBody from "./body"
import { getLanguageFromCookie } from "@/utils/language"
import { Box } from "@mui/material"
import PublicLayoutFooter from "./footer"
import PublicLayoutHeader from "./header"

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
   // fetch the language from cookies or session
   const language = getLanguageFromCookie()

   // get the layout data from the server
   const { data, error } = await find(
      "api/padma-backend/layout",
      {
         populate: "*"
      },
      "no-store"
   )

   console.log("Public Layout Loaded")

   // Load the active theme and get public components
   //const { getPublicComponents } = await loadActiveTheme()

   //return <LayoutBody data={data} language={language} currentThemeComponents={getPublicComponents} {...props} />
   return (
      <>
         <PublicLayoutHeader />
         <main>{children}</main>
         <PublicLayoutFooter />
      </>
   )
}
