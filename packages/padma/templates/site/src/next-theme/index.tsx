"use client"
import { ThemeProvider } from "@mui/material"
import { useTheme } from "next-themes"
import React, { useEffect, useMemo, useState } from "react"
import { darkTheme, lightTheme } from "../theme"

export const NextThemeConfigProvider = ({ children, direction }: { children: React.ReactNode; direction: string }) => {
   const { resolvedTheme } = useTheme()
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   const newLightTheme = useMemo(() => {
      return { ...lightTheme, direction }
   }, [direction])

   const newDarkTheme = useMemo(() => {
      return { ...darkTheme, direction }
   }, [direction])

   const theme = useMemo(
      () => (resolvedTheme === "light" ? newLightTheme : newDarkTheme),
      [newDarkTheme, newLightTheme, resolvedTheme]
   )

   if (!mounted) return <div style={{ visibility: "hidden" }} />

   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
