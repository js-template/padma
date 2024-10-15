"use client"
import React from "react"
import { signOut, useSession } from "next-auth/react"
import useThemeToggle from "@/next-theme/useThemeToggle"
import { useGlobalContext } from "@/context/store"
import { SignOut } from "@/lib/user"
import { getLanguageValue } from "@/utils/common"
import { Header } from "@padma/metajob-ui"

const HeaderBody = () => {
   return (
      <Header
         useThemeToggle={useThemeToggle}
         useGlobalContext={useGlobalContext}
         signOut={signOut}
         SignOut={SignOut}
         useSession={useSession}
         getLanguageValue={getLanguageValue}
      />
   )
}

export default HeaderBody
