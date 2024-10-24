"use client"
import { Box, Grid } from "@mui/material"
import { SpacingProps } from "./type"

const Spacing = ({ data }: { data: SpacingProps; language?: string }) => {
   return (
      <Grid item xs={12} sm={12} md={12} lg={12}>
         <Box
            sx={{
               width: "100%",
               ...(data?.gap && { height: data.gap + "px" }),
               display: "flex",
               flexDirection: "column"
            }}
         />
      </Grid>
   )
}

export default Spacing
