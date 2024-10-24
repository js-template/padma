"use client"
import React from "react"
import { Grid } from "@mui/material"
import { Session } from "next-auth"

interface BodyProps {
   blocks: any[]
   styles?: {
      columnSpacing: number | null
      rowSpacing: number | null
      spacing: number | null
      wrap: "nowrap" | "wrap" | "wrap-reverse" | null
      zeroMinWidth: boolean | null
      columns: number | null
   }
   session: Session | null
   language?: string
   currentThemeComponents: any
}

const Body: React.FC<BodyProps> = ({ blocks, styles, session, language, currentThemeComponents }) => {
   //console.log("Blocks", blocks)
   return (
      <Grid
         container
         {...(styles?.columnSpacing && { columnSpacing: styles.columnSpacing })}
         {...(styles?.rowSpacing && { rowSpacing: styles.rowSpacing })}
         {...(styles?.spacing && { spacing: styles.spacing })}
         {...(styles?.zeroMinWidth && { zeroMinWidth: styles.zeroMinWidth })}
         {...(styles?.columns && { columns: styles.columns })}
         {...(styles?.wrap && { wrap: styles.wrap })}
         sx={{ mb: 4 }}>
         {blocks?.map((block: { __component: keyof typeof currentThemeComponents }, index: number) => {
            const BlockConfig = currentThemeComponents[block.__component]
            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig

               return (
                  <ComponentToRender
                     key={index}
                     userId={Number(session?.user?.id)}
                     role={session?.user?.role?.type}
                     language={language}
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
