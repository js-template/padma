"use client"

import { Paper } from "@mui/material"
import React from "react"
import { AddResumeForm } from "@padma/metajob-ui"

type Props = {
   useSession: () => { data: any; status: string }
}
const PageBody = ({ useSession }: Props) => {
   const { data: session, status } = useSession()
   return (
      <Paper
         elevation={0}
         sx={{
            width: "100%",
            backgroundColor: (theme) => theme.palette.background.default,
            p: 0,
            mb: 5
         }}>
         <AddResumeForm userId={session?.user?.id} />
      </Paper>
   )
}

export default PageBody
