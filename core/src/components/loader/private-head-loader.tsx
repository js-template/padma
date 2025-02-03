"use client"
import React from "react"
import { Toolbar, Container, Box, Stack, useTheme, useMediaQuery, Skeleton, styled } from "@mui/material"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"

interface AppBarProps extends MuiAppBarProps {
   open?: boolean
}

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
   }),
   width: `calc(100%)`,
   minHeight: "73px",
   display: "grid",
   alignItems: "center"
}))

export const PrivateHeaderLoader = () => {
   const theme = useTheme()
   const isTablet = useMediaQuery(theme.breakpoints.down("sm"))

   return (
      <Box sx={{ display: "flex" }}>
         <AppBar
            position='fixed'
            open={true}
            sx={{
               background: theme.palette.background.paper,
               boxShadow: "none",
               borderBottom: `1px solid ${theme.palette.divider}`,
               color: theme.palette.text.primary
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
         </AppBar>
      </Box>
   )
}
