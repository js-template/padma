import NextAuthSessionProvider from "@/context/SessionProvider"
import { NextThemeConfigProvider } from "@/next-theme"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import CssBaseline from "@mui/material/CssBaseline"
import { auth } from "auth"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import * as React from "react"
import { Toaster } from "react-hot-toast"
import "/public/icon/icon.css"
// React Perfect Scrollbar CSS
import "react-perfect-scrollbar/dist/css/styles.css"
import { GlobalProvider } from "@/context/store"
import { cookies } from "next/headers"

import { find } from "@/lib/strapi"
import { StyledEngineProvider } from "@mui/material/styles"

export default async function RootLayout(props: { children: React.ReactNode }) {
   const session = await auth()
   const cookieStore = cookies()
   const Lang = cookieStore.get("lang")

   const language = Lang ? Lang.value : "en"

   const dir = cookieStore.get("direction")
   const direction = dir ? dir.value : "ltr"

   // get the layout data from the server
   const { data, error } = await find(
      "api/padma-backend/layout",
      {
         populate: "*"
         // publicationState: "live",
         // locale: [language]
      },
      "no-store"
   )

   //console.log("Public Layout Loaded", data, error)

   return (
      <html lang={language} dir={direction}>
         <body dir={direction}>
            <StyledEngineProvider injectFirst>
               <GlobalProvider layout={data?.data || null}>
                  <NextAuthSessionProvider session={session}>
                     <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                        <NextThemesProvider>
                           <NextThemeConfigProvider direction={direction}>
                              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                              <CssBaseline />

                              {props.children}
                              <Toaster />
                           </NextThemeConfigProvider>
                        </NextThemesProvider>
                     </AppRouterCacheProvider>
                  </NextAuthSessionProvider>
               </GlobalProvider>
            </StyledEngineProvider>
         </body>
      </html>
   )
}
