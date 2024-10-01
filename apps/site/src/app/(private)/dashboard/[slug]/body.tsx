"use client"
import React from "react"
import { Grid } from "@mui/material"
import { dashboardBlocksMapping } from "@/lib/component.map"
import { Session } from "next-auth"
import useSWR from "swr"
import { privetPageFetcher } from "./utils"
import { useGlobalContext } from "@/context/store"

interface BodyProps {
   blocks: any[]
   styleData?: {
      columnSpacing: number | null
      rowSpacing: number | null
      spacing: number | null
      wrap: "nowrap" | "wrap" | "wrap-reverse" | null
      zeroMinWidth: boolean | null
      columns: number | null
   }
   pageSlug: string
   session: Session | null
}

const Body: React.FC<BodyProps> = ({ blocks, styleData, pageSlug, session }) => {
   const { direction } = useGlobalContext()

   const queryParams = {
      populate: "deep",
      filters: {
         slug: {
            $eq: pageSlug
         }
      },
      //  FIXME: must need filter by role
      publicationState: "live"
      //locale: ["en"]
   }

   // Convert queryParams to a string for the URL
   const queryString = encodeURIComponent(JSON.stringify(queryParams))

   // Construct the API URL
   const apiUrl = `/api/find?model=api/private-pages&query=${queryString}&cache=no-store`

   const { data, isLoading } = useSWR(apiUrl, privetPageFetcher, {
      fallbackData: {
         blocks: blocks,
         styles: styleData
      },
      revalidateIfStale: false,
      keepPreviousData: true
   })

   console.log("Updated Blocks", data)

   return (
      <Grid
         container
         {...(data?.styles?.columnSpacing && { columnSpacing: data?.styles.columnSpacing })}
         {...(data?.styles?.rowSpacing && { rowSpacing: data?.styles.rowSpacing })}
         {...(data?.styles?.spacing && { spacing: data?.styles.spacing })}
         {...(data?.styles?.zeroMinWidth && { zeroMinWidth: data?.styles.zeroMinWidth })}
         {...(data?.styles?.columns && { columns: data?.styles.columns })}
         {...(data?.styles?.wrap && { wrap: data?.styles.wrap })}
         sx={{ mb: 4 }}>
         {data?.blocks?.map((block: any, index: number) => {
            const BlockConfig = dashboardBlocksMapping[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig

               return (
                  <ComponentToRender
                     key={index}
                     userId={Number(session?.user?.id)}
                     role={session?.user?.role?.type}
                     direction={direction}
                     data={block}
                     {...block}
                  />
               )
            }
            return null // Handle the case where the component mapping is missing
         })}
      </Grid>
   )
}

export default Body
