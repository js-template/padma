import { Box } from "@mui/material"
import React from "react"
import { DrawerHeader } from "ui"
import NavbarBody from "./NavbarBody"

export default function PrivateLayout(props: { children: React.ReactNode }) {
   return (
      <Box sx={{ display: "flex" }}>
         <NavbarBody />
         <Box sx={{ width: "100%" }}>
            <DrawerHeader />
            <Box component='main' sx={{ flexGrow: 1, p: 3, pb: 0 }}>
               {props.children}
            </Box>
         </Box>
      </Box>
   )
}
