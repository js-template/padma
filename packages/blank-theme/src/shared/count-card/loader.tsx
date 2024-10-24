"use client"
import { Box, Skeleton } from "@mui/material"

export default function CountCardLoader() {
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
            transition: "all 0.3s ease"
         }}>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               gap: 2
            }}>
            <Skeleton
               variant='circular'
               width={32}
               height={32}
               sx={{
                  backgroundColor: (theme) => theme.palette.primary.main + "10"
               }}
            />
            <Skeleton variant='text' width={200} height={28} />
         </Box>
         <Box>
            <Skeleton variant='text' width={100} height={40} />
            <Skeleton variant='text' width={"80%"} height={24} />
         </Box>
      </Box>
   )
}
