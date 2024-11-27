import React from "react"
import PublicLayoutFooter from "./footer"
import PublicLayoutHeader from "./header"

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <PublicLayoutHeader />
         <main>{children}</main>
         <PublicLayoutFooter />
      </>
   )
}
