"use client"
import { Box, Paper } from "@mui/material"

export default function MyResumeLoading() {
   // Or a custom loading skeleton component
   return (
      <Paper
         elevation={0}
         sx={{
            width: "100%",
            backgroundColor: (theme) => theme.palette.background.default,
            p: 0,
            mb: 5
         }}>
         <Box>
            {/* <ResumePreviewBox
               handleEdit={() => {}}
               // @ts-ignore
               data={null}
               isLoading={true}
            /> */}
         </Box>
      </Paper>
   )
}
