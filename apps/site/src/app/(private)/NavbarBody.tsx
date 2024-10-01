"use client"
import { useGlobalContext } from "@/context/store"
import { SignOut } from "@/lib/user"
import useThemeToggle from "@/next-theme/useThemeToggle"
import { getLanguageValue } from "@/utils/common"
import { signOut, useSession } from "next-auth/react"
import { NavBar } from "@padma/metajob-ui"

export default function NavbarBody() {
   // NOTE: This is the NavbarBody component and session need to pass as propos
   const { layoutData } = useGlobalContext()
   return (
      <NavBar
         SignOut={SignOut}
         candidateSidebarMenu={layoutData?.candidateSidebar ?? []}
         employerSidebarMenu={layoutData?.employerSidebar ?? []}
         getLanguageValue={getLanguageValue}
         useThemeToggle={useThemeToggle}
         userMenu={layoutData?.userMenu ?? []}
         langMenu={layoutData?.langMenu ?? []}
         useSession={useSession}
         useGlobalContext={useGlobalContext}
         signOut={signOut}
      />
   )
}
