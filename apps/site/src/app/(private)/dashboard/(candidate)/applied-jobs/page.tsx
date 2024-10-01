import { find } from "@/lib/strapi"
import { Paper } from "@mui/material"
import { Metadata } from "next"
import AppliedJobsPageBody from "./PageBody"
export const metadata: Metadata = {
   title: "Applied Jobs- MetaJob",
   description: "Applied Jobs Page"
}

export default async function AppliedJobs() {
   // fetch data
   const appliedJobsData = (await find(
      "api/contact-lists",
      {
         filters: {
            user: {
               id: {
                  $eq: 24 // TODO: get user id from session
               }
            }
         },
         populate: "deep",
         publicationState: "live"
      },
      "no-cache"
   )) as any

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
         <AppliedJobsPageBody data={appliedJobsData?.data} />
      </Paper>
   )
}
