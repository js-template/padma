import React from "react"
import { find } from "@/lib/strapi"
import { loadActiveTheme } from "../../../config/theme-loader"
import LayoutBody from "./body"
import { getLanguageFromCookie } from "@/utils/language"
import { Box } from "@mui/material"

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
   // fetch the language from cookies or session
   const language = getLanguageFromCookie()

   // get the layout data from the server
   const { data } = await find(
      "api/padma-backend/layout",
      {
         populate: "*"
      },
      "no-store"
   )

   // Load the active theme and get public components
   const { getPublicComponents } = await loadActiveTheme()

   //return <LayoutBody data={data} language={language} currentThemeComponents={getPublicComponents} {...props} />
   return <Box>{children}</Box>
}
