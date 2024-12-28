import React, { Suspense } from "react"
import PublicLayoutFooter from "./footer"
import PublicLayoutHeader from "./header"
import { PublicHeaderLoader } from "@/components/loader/public-head-loader"
import { PublicFooterLoader } from "@/components/loader/public-footer-loader"

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <Suspense fallback={<PublicHeaderLoader />}>
            <PublicLayoutHeader />
         </Suspense>
         <main>{children}</main>
         <Suspense fallback={<PublicFooterLoader />}>
            <PublicLayoutFooter />
         </Suspense>
      </>
   )
}
