"use client"

import { Stack } from "@mui/material"
import { useSession } from "next-auth/react"
import { MyProfile } from "@padma/metajob-ui"

export default function ProfilePageBody() {
   const { data: session } = useSession()
   const userId = session?.user?.id as unknown as string

   return (
      <Stack spacing={4} mb={5}>
         <MyProfile userId={userId} />
      </Stack>
   )
}
