"use client"
import CIcon from "../../components/common/icon"
import { Box, Typography } from "@mui/material"
import NextLink from "next/link"
import { countCardProps } from "./type"

export const CountCard = ({ item }: { item: countCardProps }) => {
   const { title, subTitle, count, isLink, link, target } = item

   return (
      <Box
         sx={{
            position: "relative",
            p: 3,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "12px",
            backgroundColor: (theme) => theme.palette.background.paper,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 4,
            height: "100%",
            transition: "all 0.3s ease",
            ":hover": {
               borderColor: (theme) => theme.palette.primary.main,
               boxShadow: (theme) => `0 15px 40px 0 ${theme.palette.primary.main + "10"}`,
               "& .external-link": {
                  opacity: 1,
                  transform: "translate(-10px, 10px)"
               }
            }
         }}>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               gap: 2
            }}>
            <Box
               sx={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: (theme) => theme.palette.primary.main + "10",
                  color: (theme) => theme.palette.primary.main
               }}>
               <CIcon icon='tabler:currency-dollar' size={24} />
            </Box>
            <Typography variant='body1' fontWeight={500} lineHeight={"28px"} fontSize={"18px"}>
               {title}
            </Typography>
         </Box>
         <Box>
            <Typography variant='h4' fontWeight={500} lineHeight={"40px"} fontSize={"36px"}>
               {Math.abs(count) < 10 ? "0" + count : count}
            </Typography>
            <Typography
               variant='body2'
               fontWeight={500}
               lineHeight={"24px"}
               fontSize={"14px"}
               sx={{
                  color: (theme) => theme.palette.text.secondary
               }}>
               {subTitle}
            </Typography>
         </Box>

         {isLink && (
            <Box
               component={NextLink}
               href={link ?? ""}
               target={target ?? "_self"}
               className='external-link'
               sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border: "1px solid",
                  cursor: "pointer",
                  borderColor: (theme) => theme.palette.divider,
                  color: (theme) => theme.palette.primary.main + " !important",
                  backgroundColor: (theme) => theme.palette.background.paper,
                  opacity: 0,
                  transform: "translate(20px, 0px)",
                  transition: "all 0.3s ease"
               }}>
               <CIcon icon={"tabler:external-link"} />
            </Box>
         )}
      </Box>
   )
}
