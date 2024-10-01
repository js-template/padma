//FIXME: Should delete this file, folder, as it will be dynamics

import { Paper } from "@mui/material"
import { Metadata } from "next"
import { find } from "@/lib/strapi"
import { BookmarkTable } from "@padma/metajob-ui"
export const metadata: Metadata = {
   title: "Bookmark- MetaJob",
   description: "Bookmark  Page"
}

export default async function Bookmark() {
   const { data, error } = await find(
      "api/bookmarks",
      {
         populate: {
            job: {
               fields: ["title", "salary", "endDate", "status"]
            }
         },
         publicationState: "live",
         locale: ["en"]
      },
      "no-store"
   )

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
         <BookmarkTable data={data?.data} />
      </Paper>
   )
}
