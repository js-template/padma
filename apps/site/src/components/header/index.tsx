"use client"
import MenuIcon from "@mui/icons-material/Menu"
import { LoadingButton } from "@mui/lab"
import { Avatar, Collapse, List, ListItem, Popover, Stack, Tooltip, useTheme } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import _ from "lodash"
import { signOut, useSession } from "next-auth/react"
import NextLink from "next/link"

import { hexToRGBA } from "@/lib/hex-to-rgba"
import { SignOut } from "@/lib/user"
import useThemeToggle from "@/next-theme/useThemeToggle"
import Image from "next/image"
import { usePathname } from "next/navigation"
import * as React from "react"
import toast from "react-hot-toast"
import { CIcon } from "@padma/metajob-ui"
import { useGlobalContext } from "@/context/store"
import { getLanguageValue } from "@/utils/common"
import useSWR from "swr"
import { fetcher } from "@/lib/swr-fetcher"

type Props = {
   language?: string
}
const Header = ({ language }: Props) => {
   const theme = useTheme()

   const [loading, setLoading] = React.useState(false)
   const { toggleTheme, mode } = useThemeToggle()
   const { lang, changeLang, changeDirection, layoutData } = useGlobalContext()
   const currentPath = usePathname()
   const { data, status } = useSession()

   const logo =
      mode === "light"
         ? layoutData?.light_logo?.logo?.data?.attributes?.url
         : layoutData?.dark_logo?.logo?.data?.attributes?.url
   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
   // *** Language Menu ***
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
   const openLang = Boolean(anchorEl)

   // submenu -stated
   const [anchorElSub, setAnchorElSub] = React.useState<null | HTMLElement>(null)
   const [activeMenu, setActiveMenu] = React.useState<number | null>(null)
   const [activeMobileMenu, setActiveMobileMenu] = React.useState<number | null>(null)

   //===start submenu functions
   // Handle opening the menu on hover
   const handleSubMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
      setAnchorElSub(event.currentTarget)
      setActiveMenu(index)
   }
   // Close the menu when mouse leaves both parent and child
   const handleSubMenuClose = () => {
      setAnchorElSub(null)
      setActiveMenu(null)
   }
   // Only keep the menu open when the user hovers over the popover
   const handleSubPopoverEnter = () => {
      // Keep the menu open by resetting state
      setActiveMenu(activeMenu)
   }
   // Close when the mouse leaves the Popover
   const handleSubPopoverLeave = () => {
      setAnchorElSub(null)
      setActiveMenu(null)
   }
   // Toggle submenu for mobile view
   const handleMenuMobileClick = (index: number) => {
      setActiveMobileMenu((prev) => (prev === index ? null : index)) // Toggle submenu
   }
   // Close submenu for mobile view
   const handleMenuMobileClose = () => {
      setActiveMobileMenu(null)
   }
   //===close submenu functions

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }
   const langMenu = layoutData?.langMenu ?? []

   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget)
   }
   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget)
   }

   const handleCloseNavMenu = () => {
      setAnchorElNav(null)
   }

   const handleCloseUserMenu = () => {
      setAnchorElUser(null)
   }

   const LogOutHandler = async () => {
      setLoading(true)
      await signOut().then(() => {
         SignOut().then(() => {
            toast.success("Logout successfully", {
               duration: 5000
            })
            setLoading(false)
         })
      })
   }

   const queryParams = {
      populate: {
         avatar: {
            fields: ["url"]
         }
      },
      fields: ["id"],
      publicationState: "live",
      locale: language ? [language] : ["en"]
   }

   // fetch user avatar data
   const userId = data?.user?.id
   const queryString = encodeURIComponent(JSON.stringify(queryParams))
   const apiUrl = userId ? `/api/find?model=api/users/${userId}&query=${queryString}&cache=no-store` : null

   const { data: userData } = useSWR(apiUrl, fetcher)
   const userAvatar = userData?.avatar?.url || ""
   const userName = data?.user?.name || ""

   return (
      <AppBar
         position='static'
         sx={{
            backgroundColor: "background.paper",
            shadow: "0px 4px 8px 0px rgba(19, 22, 28, 0.12)",
            py: "6px",
            backgroundImage: "none"
         }}
         //elevation={4}
      >
         <Container maxWidth='lg' sx={{ width: "100%" }}>
            <Toolbar disableGutters>
               {logo && (
                  <Box
                     sx={{
                        display: { xs: "none", md: "flex" }
                     }}
                     component={NextLink}
                     href='/'>
                     <Image src={logo} alt='logo' width={140} height={38} />
                  </Box>
               )}
               {/* mobile menu  */}
               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                     size='large'
                     aria-label='account of current user'
                     aria-controls='menu-appbar'
                     aria-haspopup='true'
                     onClick={handleOpenNavMenu}
                     sx={{ color: (theme) => theme.palette.primary.main }}>
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id='menu-appbar'
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "left"
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={() => {
                        handleCloseNavMenu()
                        handleMenuMobileClose()
                     }}
                     sx={{
                        display: { xs: "block", md: "none" }
                     }}>
                     {_.map(layoutData?.MainMenu, (menuItem, index) => (
                        <Box key={index}>
                           <MenuItem
                              onClick={() => {
                                 if (menuItem?.child && menuItem?.child?.length) {
                                    handleMenuMobileClick(index)
                                 } else {
                                    handleCloseNavMenu()
                                 }
                              }}>
                              <Typography
                                 display={"block"}
                                 component={menuItem?.child && menuItem?.child?.length > 0 ? "div" : NextLink} // Use "div" if child items are present
                                 href={
                                    menuItem?.child && menuItem?.child?.length > 0 ? undefined : (menuItem?.link ?? "/")
                                 }
                                 target={
                                    menuItem?.child && menuItem?.child?.length > 0
                                       ? undefined
                                       : (menuItem?.target ?? "_self")
                                 }
                                 sx={{
                                    textDecoration: "none",
                                    fontSize: 16,
                                    fontWeight: 500,
                                    "&:hover": {
                                       color: "primary.main"
                                    },
                                    color:
                                       currentPath === menuItem?.link
                                          ? (theme) => theme.palette.primary.main
                                          : (theme) => hexToRGBA(theme.palette.text.primary, 0.9),
                                    display: "flex",
                                    alignItems: "center"
                                 }}>
                                 {menuItem?.label ?? "No title"}
                                 {menuItem?.child && menuItem?.child?.length > 0 && (
                                    <CIcon
                                       icon='ri:arrow-down-s-line'
                                       sx={{
                                          color: theme.palette.text.secondary,
                                          transform: activeMobileMenu === index ? "rotate(180deg)" : "rotate(0deg)",
                                          transition: theme.transitions.create("transform", {
                                             duration: theme.transitions.duration.shortest
                                          })
                                       }}
                                    />
                                 )}
                              </Typography>
                           </MenuItem>
                           {/* Submenu: Only display if there are child items */}
                           {menuItem?.child && menuItem?.child?.length > 0 && (
                              <Collapse in={activeMobileMenu === index} timeout='auto' unmountOnExit>
                                 <List component='div' disablePadding>
                                    {menuItem?.child?.map((childItem, childIndex) => (
                                       <ListItem
                                          key={childIndex}
                                          onClick={() => {
                                             handleCloseNavMenu()
                                             handleMenuMobileClose()
                                          }}
                                          component={NextLink}
                                          href={childItem?.link}
                                          target={childItem?.target ?? "_self"}
                                          sx={{
                                             display: "flex",
                                             justifyContent: "center",
                                             color: theme.palette.text.secondary,
                                             ":hover": {
                                                background: theme.palette.background.default,
                                                color: theme.palette.primary.main
                                             }
                                          }}>
                                          <Typography
                                             sx={{
                                                fontSize: "16px",
                                                fontWeight: 400
                                             }}>
                                             {childItem?.label ?? "No title"}
                                          </Typography>
                                       </ListItem>
                                    ))}
                                 </List>
                              </Collapse>
                           )}
                        </Box>
                     ))}
                  </Menu>
               </Box>
               {logo && (
                  <Box
                     sx={{
                        display: { xs: "none", sm: "flex", md: "none" },
                        flexGrow: 1
                     }}
                     component={NextLink}
                     href='/'>
                     <Image src={logo} alt='logo' width={140} height={38} />
                  </Box>
               )}
               {/* desktop menu  */}
               <Box
                  sx={{
                     flexGrow: 1,
                     display: { xs: "none", md: "flex" },
                     justifyContent: "center"
                  }}>
                  <Stack direction={"row"} gap={3}>
                     {layoutData?.MainMenu?.map((item, index) => (
                        <Box key={index} sx={{ position: "relative" }} onMouseLeave={handleSubMenuClose}>
                           {/* Main Menu Item */}
                           <Typography
                              // onMouseEnter={(event) => item?.child?.length && handleSubMenuOpen(event, index)}
                              onClick={(event: any) => item?.child?.length && handleSubMenuOpen(event, index)}
                              component={item?.child && item?.child?.length > 0 ? "div" : NextLink}
                              href={item?.child && item?.child?.length > 0 ? undefined : (item?.link ?? "/")}
                              target={item?.child && item?.child?.length > 0 ? undefined : (item?.target ?? "_self")}
                              sx={{
                                 textDecoration: "none",
                                 fontSize: 16,
                                 fontWeight: 500,
                                 "&:hover": { color: "primary.main" },
                                 color: (theme) => theme.palette.text.primary,
                                 display: "flex",
                                 alignItems: "center",
                                 cursor: "pointer"
                              }}>
                              {item?.label ?? "No title"}
                              {item?.child && item?.child?.length > 0 && (
                                 <CIcon
                                    icon='ri:arrow-down-s-line'
                                    sx={{
                                       color: theme.palette.text.secondary,
                                       transform:
                                          anchorElSub && activeMenu === index ? "rotate(180deg)" : "rotate(0deg)",
                                       transition: theme.transitions.create("transform", {
                                          duration: theme.transitions.duration.shortest
                                       })
                                    }}
                                 />
                              )}
                           </Typography>

                           {/* Submenu - Only show if there are child items */}
                           {item?.child && item?.child?.length > 0 && (
                              <Popover
                                 open={activeMenu === index}
                                 anchorEl={anchorElSub}
                                 onClose={handleSubMenuClose}
                                 anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                 transformOrigin={{ vertical: "top", horizontal: "left" }}
                                 onMouseEnter={handleSubPopoverEnter} // Keep the popover open when hovering
                                 onMouseLeave={handleSubPopoverLeave} // Close when mouse leaves popover
                                 sx={{
                                    mt: 1,
                                    p: 1,
                                    boxShadow: 3
                                 }}>
                                 <List sx={{ minWidth: "180px" }}>
                                    {item.child.map((child, childIndex) => (
                                       <ListItem
                                          onClick={handleSubMenuClose}
                                          key={childIndex}
                                          component={NextLink}
                                          href={child?.link}
                                          target={child?.target ?? "_self"}
                                          sx={{
                                             fontSize: "16px",
                                             fontWeight: 400,
                                             color: theme.palette.text.primary,
                                             ":hover": {
                                                background: theme.palette.background.default,
                                                color: theme.palette.primary.main
                                             }
                                          }}>
                                          {child.label ?? "No title"}
                                       </ListItem>
                                    ))}
                                 </List>
                              </Popover>
                           )}
                        </Box>
                     ))}
                  </Stack>
               </Box>
               <Box sx={{ flexGrow: 0 }}>
                  {status === "loading" && <LoadingButton loading variant='text'></LoadingButton>}
                  {status === "unauthenticated" && (
                     // <Stack direction={"row"} gap={2}>
                     <Stack direction={"row"} gap={1.5}>
                        {/* language-button  */}
                        <Box>
                           <Button
                              id='basic-button'
                              aria-controls={openLang ? "basic-menu" : undefined}
                              aria-haspopup='true'
                              aria-expanded={openLang ? "true" : undefined}
                              color='inherit'
                              variant='text'
                              onClick={handleClick}
                              sx={{
                                 textTransform: "capitalize",
                                 px: 0,
                                 display: "flex",
                                 fontSize: "1rem",
                                 gap: 1,
                                 color: theme.palette.text.primary
                              }}>
                              <CIcon
                                 icon='tabler:language'
                                 sx={{
                                    fontSize: "1.25rem"
                                 }}
                              />
                              <CIcon
                                 icon='ri:arrow-down-s-line'
                                 sx={{
                                    color: theme.palette.text.primary,
                                    transform: openLang ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: theme.transitions.create("transform", {
                                       duration: theme.transitions.duration.shortest
                                    })
                                 }}
                              />
                           </Button>
                           <Menu
                              id='basic-menu'
                              anchorEl={anchorEl}
                              open={openLang}
                              onClose={handleClose}
                              MenuListProps={{
                                 "aria-labelledby": "basic-button"
                              }}>
                              {_.map(langMenu, (lang, index) => (
                                 <MenuItem
                                    onClick={() => {
                                       if (lang?.link === "ar") {
                                          if (changeDirection) {
                                             changeDirection("rtl")
                                          }
                                          changeLang(lang?.link)
                                          window.location.reload()
                                       } else if (lang?.link === "en" || lang?.link === "es") {
                                          if (changeDirection) {
                                             changeDirection("ltr")
                                          }
                                          changeLang(lang?.link)
                                          window.location.reload()
                                       }
                                       handleClose()
                                    }}
                                    sx={{
                                       color: theme.palette.text.primary,
                                       px: 2,
                                       gap: 1.5,
                                       textAlign: "left",
                                       ":hover": {
                                          background: theme.palette.background.default,
                                          color: theme.palette.primary.main
                                       }
                                    }}
                                    key={index}>
                                    {lang?.link && (
                                       <CIcon
                                          icon={lang?.link}
                                          size={22}
                                          sx={{ color: theme.palette.text.primary + "60" }}
                                       />
                                    )}
                                    {lang?.label ?? "English"}
                                 </MenuItem>
                              ))}
                           </Menu>
                        </Box>

                        <IconButton sx={{ ml: 1, color: (theme) => theme.palette.text.primary }} onClick={toggleTheme}>
                           <CIcon icon={mode === "light" ? "ri:moon-fill" : "ri:sun-fill"} />
                        </IconButton>
                        <Button
                           size='small'
                           sx={{
                              py: 1
                           }}
                           variant='contained'
                           component={NextLink}
                           href='/login'>
                           Sign In
                        </Button>
                        <Button
                           size='small'
                           sx={{
                              py: 1,
                              backgroundColor: (theme) => theme.palette.secondary.main,
                              "&:hover": {
                                 backgroundColor: "primary.main"
                              }
                           }}
                           color={mode === "dark" ? "primary" : "secondary"}
                           variant='contained'
                           component={NextLink}
                           href='/register'>
                           Sign Up{" "}
                        </Button>
                     </Stack>
                  )}
                  {status === "authenticated" && data.user && (
                     <React.Fragment>
                        <Stack direction='row' gap={1.5} alignItems={"center"}>
                           {/* <CIcon icon='iconamoon:search-light' color='text.disabled' />
                           <CIcon icon='carbon:notification-new' color='text.disabled' /> */}

                           {/* language-button  */}
                           <Box>
                              <Button
                                 id='basic-button'
                                 aria-controls={openLang ? "basic-menu" : undefined}
                                 aria-haspopup='true'
                                 aria-expanded={openLang ? "true" : undefined}
                                 color='inherit'
                                 variant='text'
                                 onClick={handleClick}
                                 sx={{
                                    textTransform: "capitalize",
                                    display: "flex",
                                    fontSize: "1rem",
                                    gap: 1,
                                    color: theme.palette.text.primary
                                 }}>
                                 <CIcon
                                    icon='tabler:language'
                                    sx={{
                                       fontSize: "1.25rem"
                                    }}
                                 />
                                 {getLanguageValue(lang) || "English"}
                                 <CIcon
                                    icon='ri:arrow-down-s-line'
                                    sx={{
                                       color: theme.palette.text.primary,
                                       transform: openLang ? "rotate(180deg)" : "rotate(0deg)",
                                       transition: theme.transitions.create("transform", {
                                          duration: theme.transitions.duration.shortest
                                       })
                                    }}
                                 />
                              </Button>
                              <Menu
                                 id='basic-menu'
                                 anchorEl={anchorEl}
                                 open={openLang}
                                 onClose={handleClose}
                                 MenuListProps={{
                                    "aria-labelledby": "basic-button"
                                 }}>
                                 {_.map(langMenu, (lang, index) => (
                                    <MenuItem
                                       onClick={() => {
                                          if (lang?.link === "ar") {
                                             if (changeDirection) {
                                                changeDirection("rtl")
                                             }
                                             changeLang(lang?.link)
                                             window.location.reload()
                                          } else if (lang?.link === "en" || lang?.link === "es") {
                                             if (changeDirection) {
                                                changeDirection("ltr")
                                             }
                                             changeLang(lang?.link)
                                             window.location.reload()
                                          }
                                          handleClose()
                                       }}
                                       sx={{
                                          color: theme.palette.text.primary,
                                          px: 2,
                                          gap: 1.5,
                                          textAlign: "left",
                                          ":hover": {
                                             background: theme.palette.background.default,
                                             color: theme.palette.primary.main
                                          }
                                       }}
                                       key={index}>
                                       {lang?.link && (
                                          <CIcon
                                             icon={lang?.link}
                                             size={22}
                                             sx={{ color: theme.palette.text.primary + "60" }}
                                          />
                                       )}
                                       {lang?.label ?? "English"}
                                    </MenuItem>
                                 ))}
                              </Menu>
                           </Box>

                           <IconButton
                              sx={{ ml: 1, color: (theme) => theme.palette.text.primary }}
                              onClick={toggleTheme}>
                              <CIcon icon={mode === "light" ? "ri:moon-fill" : "ri:sun-fill"} />
                           </IconButton>
                           <IconButton size='large' color='inherit'>
                              <CIcon icon='tabler:bell' />
                           </IconButton>
                           <Stack direction='row' gap={1} alignItems={"center"}>
                              <Tooltip title='Open settings'>
                                 <Box
                                    onClick={handleOpenUserMenu}
                                    sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}>
                                    <IconButton sx={{ p: 0 }}>
                                       <Avatar
                                          src={userAvatar ?? "https://placehold.co/40"}
                                          alt={userName ?? "user-avatar"}
                                          sx={{
                                             width: 40,
                                             height: 40
                                          }}>
                                          {userName?.charAt(0) || ""}
                                       </Avatar>
                                    </IconButton>
                                    {/* drop-menu-indicator icon  */}
                                    <Box
                                       sx={{
                                          display: "flex",
                                          alignItems: "flex-start",
                                          flexDirection: "column",
                                          maxWidth: "164px"
                                       }}>
                                       <Box
                                          sx={{
                                             display: "flex",
                                             alignItems: "center",
                                             gap: 1,
                                             width: "100%",
                                             justifyContent: "space-between"
                                          }}>
                                          {anchorElUser ? (
                                             <CIcon
                                                icon={"solar:round-alt-arrow-up-outline"}
                                                sx={{
                                                   color: theme.palette.text.primary
                                                }}
                                                fontSize={"24px"}
                                             />
                                          ) : (
                                             <CIcon
                                                icon={"solar:round-alt-arrow-down-outline"}
                                                sx={{
                                                   color: theme.palette.text.primary
                                                }}
                                                fontSize={"24px"}
                                             />
                                          )}
                                       </Box>
                                    </Box>
                                 </Box>
                              </Tooltip>
                           </Stack>
                        </Stack>
                        {/* dropdown-menu  */}
                        <Menu
                           sx={{
                              mt: "58px",
                              "& .MuiPaper-root": {
                                 minWidth: "180px",
                                 border: "1px solid",
                                 borderColor: theme.palette.divider,
                                 borderRadius: "12px",
                                 background: theme.palette.background.default,
                                 boxShadow: "0px 8px 28px -4px rgba(20, 28, 46, 0.08)"
                              }
                           }}
                           id='menu-appbar'
                           anchorEl={anchorElUser}
                           anchorOrigin={{
                              vertical: "top",
                              horizontal: "right"
                           }}
                           keepMounted
                           transformOrigin={{
                              vertical: "top",
                              horizontal: "right"
                           }}
                           open={Boolean(anchorElUser)}
                           onClose={handleCloseUserMenu}>
                           {_.map(layoutData?.userMenu, (setting, index) => (
                              <MenuItem
                                 key={index}
                                 onClick={() => {
                                    if (setting?.label === "Logout") {
                                       LogOutHandler()
                                    } else {
                                       handleCloseUserMenu()
                                    }
                                 }}
                                 component={setting?.label === "Logout" ? "div" : NextLink}
                                 href={setting?.label === "Logout" ? undefined : setting?.link}
                                 target={setting?.label === "Logout" ? undefined : (setting?.target ?? "_self")}
                                 sx={{
                                    gap: 1,
                                    color: theme.palette.text.primary,
                                    ":hover": {
                                       background:
                                          setting?.label === "Logout"
                                             ? theme.palette.error.light
                                             : theme.palette.background.default,
                                       color:
                                          setting?.label === "Logout"
                                             ? theme.palette.error.dark
                                             : theme.palette.primary.main
                                    }
                                 }}>
                                 {setting?.icon && (
                                    <CIcon icon={setting?.icon} sx={{ color: theme.palette.text.primary + "60" }} />
                                 )}
                                 <Typography variant='body1'>{setting?.label}</Typography>
                              </MenuItem>
                           ))}
                        </Menu>
                     </React.Fragment>
                  )}
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   )
}
export default Header
