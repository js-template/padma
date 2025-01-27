import React, { Suspense } from "react"
import { Box } from "@mui/material"
import PrivateLayoutHeader from "./header"
import PrivateLayoutFooter from "./footer"
import { PrivateHeaderLoader } from "@/components/loader/private-head-loader"

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <Box sx={{ display: "flex" }}>
            {/* private header */}
            <Suspense fallback={<PrivateHeaderLoader />}>
               <PrivateLayoutHeader />
            </Suspense>
            <Box sx={{ width: "100%", mt: "60px" }}>
               <Box component='main' sx={{ flexGrow: 1, p: 3, pb: 0 }}>
                  {children}
               </Box>
               {/* private footer */}
               <PrivateLayoutFooter />
            </Box>
         </Box>
      </>
   )
}
