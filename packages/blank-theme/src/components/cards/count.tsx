"use client"
import { Box, Typography } from "@mui/material"
import CIcon from "../common/icon"

export const CountCard = ({
   item,
   style
}: {
   item: {
      title: string
      description: string
      count?: number | null
   }
   style: string
}) => {
   const { title, description, count } = item

   const displayCount = count ? count : (0 as number)

   return (
      <Box
         sx={{
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
               boxShadow: (theme) => `0 15px 40px 0 ${theme.palette.primary.main + "10"}`
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
               {Math.abs(displayCount) < 10 ? "0" + displayCount : displayCount}
            </Typography>
            <Typography
               variant='body2'
               fontWeight={500}
               lineHeight={"24px"}
               fontSize={"14px"}
               sx={{
                  color: (theme) => theme.palette.text.secondary
               }}>
               {description}
            </Typography>
         </Box>
      </Box>
   )
}
