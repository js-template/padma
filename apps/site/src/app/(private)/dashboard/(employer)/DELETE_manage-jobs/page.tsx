import { Paper } from "@mui/material"
import { Metadata } from "next"
import ManageJobPageBody from "./PageBody"
import { find } from "@/lib/strapi"

// TODO: All Pages SEO Need to Fetch
export const metadata: Metadata = {
   title: "Manage Jobs | MetaJob",
   description: "Manage Jobs Page of MetaJob"
}
const ManageJobs = async () => {
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
         <ManageJobPageBody />
      </Paper>
   )
}

export default ManageJobs
