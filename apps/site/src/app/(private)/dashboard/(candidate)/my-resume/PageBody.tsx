"use client"

import { Paper } from "@mui/material"
import React from "react"
import { AddResumeForm } from "@padma/metajob-ui"

type Props = {
   session: () => { data: any; status: string }
}
const PageBody = ({ session }: Props) => {
   return (
      <Paper
         elevation={0}
         sx={{
            width: "100%",
            backgroundColor: (theme) => theme.palette.background.default,
            p: 0,
            mb: 5
         }}>
         <AddResumeForm useSession={session} />
      </Paper>
   )
}

export default PageBody
