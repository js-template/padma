"use client"
import React from "react"
import { Toolbar, Container, Box, Stack, useTheme, useMediaQuery, Skeleton } from "@mui/material"

export const PublicHeaderLoader = () => {
   const theme = useTheme()
   const isTablet = useMediaQuery(theme.breakpoints.down("sm"))

   return (
      <Box
         sx={{
            position: "static",
            backgroundColor: "background.paper",
            shadow: "0px 4px 8px 0px rgba(19, 22, 28, 0.12)",
            py: "6px",
            backgroundImage: "none"
         }}>
         <Container maxWidth='lg' sx={{ width: "100%" }}>
            <Toolbar
               disableGutters
               sx={{
                  justifyContent: "space-between"
               }}>
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     gap: 1
                  }}>
                  {/* desktop-logo */}
                  <Box
                     sx={{
                        display: { xs: "none", md: "flex" }
                     }}>
                     <Skeleton variant='rounded' width={140} height={33} />
                  </Box>
                  {/* mobile menu  */}
                  <Box sx={{ flex: "none", display: { xs: "flex", md: "none" } }}>
                     <Skeleton variant='rounded' width={36} height={36} />
                  </Box>
                  {/* mobile-logo */}
                  <Box
                     sx={{
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        justifyContent: "center"
                     }}>
                     <Skeleton variant='rounded' width={120} height={33} />
                  </Box>
               </Box>
               {/* desktop main-menu  */}
               <Box
                  sx={{
                     flexGrow: 1,
                     display: { xs: "none", md: "flex" },
                     justifyContent: "center"
                  }}>
                  <Stack direction={"row"} gap={3}>
                     {/* Main Menu Item */}
                     <Box sx={{ position: "relative" }}>
                        <Skeleton variant='text' width={42} height={25} />
                     </Box>
                     <Box sx={{ position: "relative" }}>
                        <Skeleton variant='text' width={42} height={25} />
                     </Box>
                     <Box sx={{ position: "relative" }}>
                        <Skeleton variant='text' width={42} height={25} />
                     </Box>
                  </Stack>
               </Box>
               <Box sx={{ flexGrow: 0 }}>
                  {/* before login  */}
                  <Stack direction={"row"} gap={1.5}>
                     {/* language-theme buttons  */}
                     {!isTablet && (
                        <>
                           {/* language-button  */}
                           <Skeleton variant='rounded' width={65} height={24} />
                           {/* theme-button  */}
                           <Skeleton variant='rounded' width={24} height={24} />
                        </>
                     )}
                     {/* button (Ex: login/register) */}
                     <Skeleton variant='rounded' width={75} height={45} />
                     <Skeleton variant='rounded' width={75} height={45} />
                  </Stack>
               </Box>
            </Toolbar>
         </Container>
      </Box>
   )
}
