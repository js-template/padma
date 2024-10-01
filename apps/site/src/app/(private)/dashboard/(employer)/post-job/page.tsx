import { Box, Paper, Typography } from "@mui/material"
import type { Metadata } from "next"
import { PostJobForm } from "ui"

export const metadata: Metadata = {
   title: "Post New Job | MetaJobs",
   description: "Post a new job page seo description"
}

const PostJobPage = async () => {
   return (
      <Paper
         elevation={0}
         sx={{
            width: "100%",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "12px",
            p: 0,
            mb: 5
         }}>
         <Box
            sx={{
               p: 3,
               borderBottom: "1px solid",
               borderColor: "divider"
            }}>
            <Typography
               variant='body1'
               fontWeight={700}
               fontSize={{
                  xs: "1.25rem",
                  sm: "1.5rem"
               }}
               lineHeight={"24px"}>
               Post New Job
            </Typography>
         </Box>
         <PostJobForm />
      </Paper>
   )
}

export default PostJobPage
