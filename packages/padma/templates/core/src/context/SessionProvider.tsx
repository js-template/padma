"use client"

import { SessionProvider } from "next-auth/react"
import React from "react"

type sessionProps = {
   children: React.ReactNode
   session: any
}
function NextAuthSessionProvider({ children, session }: sessionProps) {
   return <SessionProvider session={session}>{children}</SessionProvider>
}

export default NextAuthSessionProvider
