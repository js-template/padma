"use client"
import { hexToRGBA } from "../../../lib/hex-to-rgba"
import { ListItem, ListItemButton, ListItemText, useTheme } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"
import CIcon from "../../../components/common/icon"
import { MenuItemProps } from "./type"
import { LoadingButton } from "@mui/lab"
import { useState } from "react"
import toast from "react-hot-toast"
import { SignOut } from "../../../utils/user"

const NavLink = ({
   item,
   open,
   isChild,
   direction,
   signOut
}: {
   item: MenuItemProps
   open: boolean
   isChild?: boolean
   direction: "ltr" | "rtl"
   signOut: () => Promise<void>
}) => {
   const theme = useTheme()
   const pathname = usePathname()
   const [loading, setLoading] = useState(false)

   const isNavLinkActive = () => {
      if (pathname === item.link) {
         return true
      }
      return false
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

   return item.link !== "/logout" ? (
      <ListItem sx={{ display: "block", py: 0, mb: 1, px: 0 }}>
         <ListItemButton
            disabled={item?.disabled}
            component={Link}
            href={item.link}
            sx={{
               justifyContent: open ? "initial" : "center",
               pl: 2,
               pr: 1,
               height: "38px",
               fontWeight: 400,
               borderRadius: "6px",
               color: isChild ? theme.palette.text.secondary : theme.palette.text.primary + " !important",
               gap: 1,
               "&:hover": {
                  backgroundColor: isChild ? hexToRGBA(theme.palette.text.disabled, 0.2) : theme.palette.primary.main,
                  color: isChild ? theme.palette.text.secondary : theme.palette.primary.contrastText + " !important",

                  "& svg": {
                     color: isChild ? theme.palette.text.secondary : theme.palette.primary.contrastText + " !important"
                  },

                  "& .MuiChip-root": {
                     backgroundColor: theme.palette.primary.contrastText + " !important",
                     color: theme.palette.primary.main + " !important"
                  }
               },
               ...(isNavLinkActive() && {
                  backgroundColor: isChild ? hexToRGBA(theme.palette.text.disabled, 0.2) : theme.palette.primary.main,
                  color: isChild ? theme.palette.text.secondary : theme.palette.primary.contrastText + " !important",

                  "& svg": {
                     color: isChild ? theme.palette.text.secondary : theme.palette.primary.contrastText + " !important"
                  }
               })
            }}>
            {isChild ? (
               <CIcon
                  icon={item?.icon ?? "icon-park-outline:dot"}
                  size={18}
                  sx={{
                     color: theme.palette.text.disabled + "50",
                     flex: "none"
                  }}
               />
            ) : item?.icon ? (
               <CIcon
                  icon={item.icon}
                  size={22}
                  sx={{
                     color: theme.palette.text.primary + "60",
                     flex: "none"
                  }}
               />
            ) : null}
            <ListItemText
               primary={item.label}
               dir={direction}
               sx={{
                  opacity: open ? 1 : 0,
                  color: isChild ? theme.palette.text.primary + "80" : "inherit",
                  flex: direction === "rtl" ? "0 0 auto" : "1 1 auto",
                  // line clamps 1
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  "& .MuiTypography-root": {
                     fontSize: "16px",
                     fontWeight: 500
                  }
               }}
            />
            {/* badge */}
            {/* {item?.badge && (
               <Chip
                  label={item.badge}
                  size='small'
                  color='primary'
                  sx={{
                     fontSize: "13px",
                     lineHeight: "14px",
                     height: "22px",
                     fontWeight: 500,
                     px: 0.4
                  }}
               />
            )} */}
         </ListItemButton>
      </ListItem>
   ) : (
      <ListItem sx={{ display: "block", py: 0, mb: 1, px: 0 }}>
         <LoadingButton
            onClick={() => {
               LogOutHandler()
            }}
            fullWidth
            loading={loading}
            loadingPosition='end'
            sx={{
               justifyContent: open ? "initial" : "center",
               pl: 2,
               pr: 1,
               height: "38px",
               fontSize: "14px",
               fontWeight: 500,
               borderRadius: "6px",
               color: theme.palette.text.primary + " !important",
               gap: 1,
               "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText + " !important",

                  "& svg": {
                     color: theme.palette.primary.contrastText + " !important"
                  },

                  "& .MuiChip-root": {
                     backgroundColor: theme.palette.primary.contrastText + " !important",
                     color: theme.palette.primary.main + " !important"
                  }
               },
               // disabled
               "& .MuiButton-root.Mui-disabled": {
                  backgroundColor: theme.palette.divider,
                  color: theme.palette.text.disabled + " !important",

                  "& svg": {
                     color: theme.palette.text.disabled + " !important"
                  }
               }
            }}>
            <CIcon
               icon={"solar:logout-linear"}
               size={22}
               sx={{
                  color: theme.palette.text.primary + "60",
                  flex: "none"
               }}
            />
            Logout
         </LoadingButton>
      </ListItem>
   )
}

export default NavLink
