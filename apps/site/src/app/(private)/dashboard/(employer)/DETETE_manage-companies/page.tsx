import { Paper } from "@mui/material"
import { Metadata } from "next"
import CompanyPageBody from "./PageBody"
export const metadata: Metadata = {
   title: "Manage Companies | MetaJob",
   description: "Manage Companies Page of MetaJob"
}
export default function ManageCompany() {
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
         <CompanyPageBody />
      </Paper>
   )
}
