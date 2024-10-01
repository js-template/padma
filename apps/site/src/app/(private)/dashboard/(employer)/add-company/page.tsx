import type { Metadata } from "next"
import AddCompanyPageBody from "./PageBody"
import { Box, Paper, Typography } from "@mui/material"

export const metadata: Metadata = {
   title: "Add Company | MetaJobs",
   description: "Add new company page seo description"
}

const AddCompanyPage = async () => {
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
               Add Company
            </Typography>
         </Box>
         <AddCompanyPageBody />
      </Paper>
   )
}

export default AddCompanyPage
