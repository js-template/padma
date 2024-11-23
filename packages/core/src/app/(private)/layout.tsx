// TODO: Private layout api is available yet
import React from "react"
import PrivateLayoutHeader from "./header"
import { find } from "@/lib/strapi"
import { loadActiveTheme } from "config/theme-loader"
import { getLanguageFromCookie } from "@/utils/language"
import { Box } from "@mui/material"
import PrivateLayoutFooter from "./footer"

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
   // fetch the language from cookies or session
   const language = getLanguageFromCookie()

   // get the layout data from the server
   const { data } = await find(
      "api/padma-backend/public-layout",
      {
         populate: "*"
      },
      "no-store"
   )

   console.log("data", data)

   const blocka = data?.data[0]?.blocks || []

   // Load the active theme and get public components
   const { getPrivateComponents } = await loadActiveTheme()

   return (
      <>
         <PrivateLayoutHeader />
         <main>{children}</main>
         <PrivateLayoutFooter />
      </>
   )
}
