import React from "react"
import { cookies } from "next/headers"
import { Box } from "@mui/material"
import { find } from "@/lib/strapi"
import Header from "@/components/header"
// import Footer from "@/components/footer"
import { Footer } from "@padma/metajob-ui/block"

export default async function PublicLayout(props: { children: React.ReactNode }) {
   const cookieStore = cookies()
   // FIXME: Shoudl all cookie, its preventing faster switching page
   const Lang = cookieStore.get("lang")
   const language = Lang ? Lang.value : "en"

   // get the layout data from the server
   const { data } = await find(
      "api/layout",
      {
         populate: "deep",
         publicationState: "live",
         locale: [language]
      },
      "no-store"
   )

   return (
      <main>
         <Header />
         <Box
            sx={
               {
                  // display: "flex",
                  // flexDirection: "column",
                  // justifyContent: "center",
                  // alignItems: "center"
               }
            }>
            {props.children}
         </Box>
         <Footer data={data?.data?.attributes} />
      </main>
   )
}
